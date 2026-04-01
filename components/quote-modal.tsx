"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload, X, FileText, Loader2 } from "lucide-react"
import { ReCaptcha } from "./recaptcha"

interface QuoteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    propertyType: "",
    urgency: "",
    location: "",
    details: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState("")
  const [recaptchaToken, setRecaptchaToken] = useState("")
  const [recaptchaError, setRecaptchaError] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const recaptchaRef = useRef<{ reset: () => void } | null>(null)

  // Reset form when modal opens
  useEffect(() => {
    if (open) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        propertyType: "",
        urgency: "",
        location: "",
        details: "",
      })
      setFiles([])
      setRecaptchaToken("")
      setRecaptchaError(false)
      setHoneypot("")
      recaptchaRef.current?.reset()
    }
  }, [open])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).filter((file) => {
        if (file.size > 10 * 1024 * 1024) {
          alert(`${file.name} is too large. Maximum file size is 10MB.`)
          return false
        }
        return true
      })

      if (files.length + newFiles.length > 5) {
        alert("Maximum 5 files allowed")
        return
      }

      setFiles([...files, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files).filter((file) => {
        if (file.size > 10 * 1024 * 1024) {
          alert(`${file.name} is too large. Maximum file size is 10MB.`)
          return false
        }
        return true
      })

      if (files.length + newFiles.length > 5) {
        alert("Maximum 5 files allowed")
        return
      }

      setFiles([...files, ...newFiles])
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i)) + " " + sizes[i]
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check - silently reject bots
    if (honeypot) {
      onOpenChange(false)
      return
    }

    // Validate reCAPTCHA
    if (!recaptchaToken) {
      setRecaptchaError(true)
      return
    }

    // Handle emergency urgency
    if (formData.urgency === "emergency") {
      const shouldCall = window.confirm(
        "For immediate emergency service, please call 951-330-6963 directly!\n\nClick OK to call now, or Cancel to submit your form instead.",
      )
      if (shouldCall) {
        window.location.href = "tel:951-330-6963"
        return
      }
    }

    setIsSubmitting(true)

    try {
      console.log("[v0] Submitting quote form with data:", {
        type: "contact",
        ...formData,
        fileCount: files.length,
      })

      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          ...formData,
          fileCount: files.length,
          recaptchaToken,
        }),
      })

      console.log("[v0] API response status:", response.status)

      const data = await response.json()
      console.log("[v0] API response data:", data)

      if (data.success) {
        // Success - close modal
        onOpenChange(false)

        // Show success message
        alert("Thank you! We've received your request and will contact you within 24 hours.")
      } else {
        const errorMsg = data.error || data.message || "Failed to submit"
        console.error("[v0] Quote submission failed:", errorMsg)
        alert(`Unable to send your request: ${errorMsg}\n\nPlease call us directly at 951-330-6963.`)
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      const errorMsg = error instanceof Error ? error.message : "Network error"
      alert(`Something went wrong: ${errorMsg}\n\nPlease try again or call us directly at 951-330-6963.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get a Free Quote</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you within 24 hours.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="absolute -left-[9999px] opacity-0 h-0 w-0"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Project Details</h3>

            <div className="space-y-2">
              <Label htmlFor="service">Service Needed *</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="construction">Construction & Remodeling</SelectItem>
                  <SelectItem value="painting">Painting</SelectItem>
                  <SelectItem value="welding">Welding & Fabrication</SelectItem>
                  <SelectItem value="parking">Parking Lot Services</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Property Type *</Label>
              <RadioGroup
                value={formData.propertyType}
                onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="residential" id="modal-residential" />
                  <Label htmlFor="modal-residential" className="font-normal cursor-pointer">
                    Residential
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="commercial" id="modal-commercial" />
                  <Label htmlFor="modal-commercial" className="font-normal cursor-pointer">
                    Commercial (Priority)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency *</Label>
              <Select
                value={formData.urgency}
                onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="emergency">Emergency (ASAP - Call Directly!)</SelectItem>
                  <SelectItem value="few-days">Next Few Days</SelectItem>
                  <SelectItem value="planning">Planning Phase</SelectItem>
                </SelectContent>
              </Select>
              {formData.urgency === "emergency" && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700 font-semibold">
                    For immediate emergency service, call{" "}
                    <a href="tel:951-330-6963" className="underline">
                      951-330-6963
                    </a>{" "}
                    directly!
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location (City/Zip Code) *</Label>
              <Input
                id="location"
                required
                placeholder="e.g., San Bernardino, CA 92408"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">Project Details *</Label>
              <Textarea
                id="details"
                required
                placeholder="Describe your project or service needs..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                rows={4}
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label>Photos & Documents (Optional)</Label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                isDragging ? "border-primary bg-primary/5" : "border-gray-300 hover:border-primary/50"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,.pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Upload className={`h-8 w-8 mx-auto mb-2 ${isDragging ? "text-primary" : "text-gray-400"}`} />
              <p className="text-sm font-medium">
                {isDragging ? "Drop files here" : "Drag & drop files or click to browse"}
              </p>
              <p className="text-xs text-gray-500 mt-1">JPG, PNG, PDF, DOC up to 10MB each (max 5 files)</p>
            </div>

            {files.length > 0 && (
              <div className="space-y-2 mt-3">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border">
                    <div className="flex items-center gap-2 min-w-0">
                      <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm truncate">{file.name}</span>
                      <span className="text-xs text-gray-500 flex-shrink-0">({formatFileSize(file.size)})</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeFile(index)
                      }}
                      className="p-1 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0"
                    >
                      <X className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* reCAPTCHA */}
          <div className="space-y-2">
            <Label>Human Verification</Label>
            <div className={`${recaptchaError ? "border-2 border-red-500 p-2 rounded" : ""}`}>
              <ReCaptcha
                ref={recaptchaRef}
                onVerify={(token) => {
                  setRecaptchaToken(token)
                  setRecaptchaError(false)
                }}
                onExpire={() => setRecaptchaToken("")}
                theme="light"
              />
              {recaptchaError && <p className="text-sm text-red-500 mt-2">Please complete the verification.</p>}
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Submit Request
                {files.length > 0 && ` (${files.length} file${files.length > 1 ? "s" : ""} attached)`}
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
