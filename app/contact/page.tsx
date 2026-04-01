"use client"

import type React from "react"
import { Phone, Mail, Clock, Shield, Loader2, Upload, X, FileText, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useRef } from "react"
import { Label } from "@/components/ui/label"
import { SimpleToast } from "@/components/simple-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ReCaptcha, type ReCaptchaRef } from "@/components/recaptcha"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState({ isVisible: false, message: "", type: "success" as "success" | "error" })
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [honeypot, setHoneypot] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    propertyType: "",
    urgency: "",
    location: "",
    message: "",
  })

  const recaptchaRef = useRef<ReCaptchaRef>(null)
  const [recaptchaToken, setRecaptchaToken] = useState("")
  const [recaptchaError, setRecaptchaError] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5))
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5))
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
    return (bytes / (1024 * 1024)).toFixed(1) + " MB"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check - bots fill this hidden field
    if (honeypot) {
      setToast({
        isVisible: true,
        message: "Thank you! We'll contact you within 24 hours.",
        type: "success",
      })
      return
    }

    if (!recaptchaToken) {
      setRecaptchaError(true)
      setToast({
        isVisible: true,
        message: "Please complete the reCAPTCHA verification.",
        type: "error",
      })
      return
    }

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
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          ...formData,
          fileCount: files.length,
          recaptchaToken, // Include reCAPTCHA token
        }),
      })

      const data = await response.json()

      if (data.success) {
        setToast({
          isVisible: true,
          message: "Thank you! We'll contact you within 24 hours.",
          type: "success",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          propertyType: "",
          urgency: "",
          location: "",
          message: "",
        })
        setFiles([])
        setRecaptchaToken("")
        recaptchaRef.current?.reset()
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setToast({
        isVisible: true,
        message: "Something went wrong. Please call us directly at 951-330-6963.",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Toast Notification */}
      <SimpleToast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />

      {/* Emergency Mobile Callout - Only visible on mobile */}
      <div className="lg:hidden bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 text-center animate-pulse">
        <p className="text-2xl font-bold mb-2">Having an Emergency?</p>
        <a
          href="tel:951-330-6963"
          className="block w-full py-4 bg-red-600 hover:bg-red-700 text-white text-center font-bold rounded-lg transition-all duration-200"
        >
          Call (951) 330-6963 Now
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 py-16 md:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/construction-worker-power-tools.jpg"
            alt="Professional maintenance"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance tracking-tight">
              Get Your <span className="text-[#C29828]">Free Quote</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Requests reviewed immediately. For emergencies, call us 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-8 max-w-7xl mx-auto">
            {/* Left Side - Form */}
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot field - hidden from users */}
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
                  <h3 className="font-semibold text-xl text-white">Contact Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-slate-900 border-2 border-slate-700 text-white focus:border-[#C29828] h-12"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-300">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-slate-900 border-2 border-slate-700 text-white focus:border-[#C29828] h-12"
                        placeholder="(951) 555-0123"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-900 border-2 border-slate-700 text-white focus:border-[#C29828] h-12"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl text-white">Project Details</h3>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-slate-300">
                      Service Needed *
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      required
                    >
                      <SelectTrigger className="bg-slate-900 border-2 border-slate-700 text-white focus:border-[#C29828] h-12">
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
                    <Label className="text-slate-300">Property Type *</Label>
                    <RadioGroup
                      value={formData.propertyType}
                      onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                      className="flex gap-6"
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="residential"
                          id="residential"
                          className="border-slate-600 text-[#C29828]"
                        />
                        <Label htmlFor="residential" className="text-slate-300 font-normal cursor-pointer">
                          Residential
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="commercial"
                          id="commercial"
                          className="border-slate-600 text-[#C29828]"
                        />
                        <Label htmlFor="commercial" className="text-slate-300 font-normal cursor-pointer">
                          Commercial (Priority)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency" className="text-slate-300">
                      Urgency *
                    </Label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                      required
                    >
                      <SelectTrigger className="bg-slate-900 border-2 border-slate-700 text-white focus:border-[#C29828] h-12">
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency (ASAP - Call Directly!)</SelectItem>
                        <SelectItem value="few-days">Next Few Days</SelectItem>
                        <SelectItem value="planning">Planning Phase</SelectItem>
                      </SelectContent>
                    </Select>
                    {formData.urgency === "emergency" && (
                      <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg mt-2">
                        <p className="text-sm text-red-400 font-semibold">
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
                    <Label htmlFor="location" className="text-slate-300">
                      Location (City/Zip Code) *
                    </Label>
                    <Input
                      id="location"
                      required
                      placeholder="e.g., Murrieta, CA 92563"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="bg-slate-900 border-2 border-slate-700 text-white focus:border-[#C29828] h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300">
                      Project Description
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us more about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-900 border-2 border-slate-700 text-white focus:border-[#C29828] resize-none"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label className="text-slate-300">Photos & Documents (Optional)</Label>
                    <p className="text-sm text-slate-500 mb-2">
                      Upload photos of the project area to help us provide a more accurate quote.
                    </p>
                    <div
                      className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer ${
                        isDragging
                          ? "border-[#C29828] bg-[#C29828]/10"
                          : "border-slate-600 bg-slate-900/50 hover:border-[#C29828]/50 hover:bg-slate-900"
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*,.pdf,.doc,.docx"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                      <Upload className={`h-8 w-8 mx-auto mb-2 ${isDragging ? "text-[#C29828]" : "text-slate-500"}`} />
                      <p className="text-sm font-medium text-slate-300">
                        {isDragging ? "Drop files here" : "Drag & drop files or click to browse"}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">JPG, PNG, PDF, DOC up to 10MB each (max 5 files)</p>
                    </div>

                    {/* File list */}
                    {files.length > 0 && (
                      <div className="space-y-2 mt-3">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 bg-slate-900 rounded-lg border border-slate-700"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <FileText className="h-4 w-4 text-[#C29828] flex-shrink-0" />
                              <span className="text-sm text-slate-300 truncate">{file.name}</span>
                              <span className="text-xs text-slate-500 flex-shrink-0">
                                ({formatFileSize(file.size)})
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                removeFile(index)
                              }}
                              className="p-1 hover:bg-slate-700 rounded-full transition-colors flex-shrink-0"
                            >
                              <X className="h-4 w-4 text-slate-400" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#C29828]" />
                    Human Verification
                  </h3>
                  <div
                    className={`p-6 bg-slate-900/70 border rounded-xl ${recaptchaError ? "border-red-500" : "border-slate-700"}`}
                  >
                    <ReCaptcha
                      ref={recaptchaRef}
                      onVerify={(token) => {
                        setRecaptchaToken(token)
                        setRecaptchaError(false)
                      }}
                      onExpire={() => setRecaptchaToken("")}
                      theme="dark"
                    />
                    {recaptchaError && <p className="text-sm text-red-400 mt-2">Please complete the verification.</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="space-y-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-[#C29828] to-[#A67F20] hover:from-[#A67F20] hover:to-[#8B6A1A] text-white"
                  >
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
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                    <Lock className="h-4 w-4" />
                    <span>
                      Your information is secure. Licensed{" "}
                      <a
                        href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1075924"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#C29828] transition-colors"
                      >
                        #1075924
                      </a>
                    </span>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-6">
              {/* Contact Information Card */}
              <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden">
                <CardContent className="p-6 space-y-6">
                  <h3 className="font-bold text-xl text-white">Contact Information</h3>

                  <div className="space-y-4">
                    <a
                      href="tel:951-330-6963"
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 hover:bg-[#C29828]/10 border border-slate-700 hover:border-[#C29828]/50 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#C29828]/20 flex items-center justify-center group-hover:bg-[#C29828]/30 transition-colors">
                        <Phone className="h-5 w-5 text-[#C29828]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Call Us</p>
                        <p className="font-semibold text-white">(951) 330-6963</p>
                      </div>
                    </a>

                    <a
                      href="mailto:Frank@aboveallmaintenancerepair.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 hover:bg-[#C29828]/10 border border-slate-700 hover:border-[#C29828]/50 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#C29828]/20 flex items-center justify-center group-hover:bg-[#C29828]/30 transition-colors">
                        <Mail className="h-5 w-5 text-[#C29828]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Email Us</p>
                        <p className="font-semibold text-white text-sm break-all">
                          Frank@aboveallmaintenancerepair.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                      <div className="w-12 h-12 rounded-full bg-[#C29828]/20 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-[#C29828]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Hours</p>
                        <p className="font-semibold text-white text-sm">Mon-Fri: 7AM - 6PM</p>
                        <p className="font-semibold text-white text-sm">Sat: 9AM - 5PM</p>
                        <p className="text-xs text-[#C29828]">Emergency: Nights & Weekends</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Area Map */}
              <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-white mb-4">Our Service Area</h3>
                  <div className="rounded-xl overflow-hidden border border-slate-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52956.55845837682!2d-117.33!3d34.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c353c8a2b8b8b1%3A0x8b8b8b8b8b8b8b8b!2sI-210%20%26%20I-215%2C%20San%20Bernardino%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Service Area Map - San Bernardino"
                    />
                  </div>
                  <p className="text-sm text-slate-400 mt-3 text-center">
                    Serving San Bernardino, Riverside, San Diego & Orange Counties
                  </p>
                </CardContent>
              </Card>

              {/* License Badge */}
              <a
                href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1075924"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-gradient-to-br from-[#C29828]/20 to-[#A67F20]/10 border-[#C29828]/30 hover:border-[#C29828]/50 transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-10 w-10 text-[#C29828] mx-auto mb-3" />
                    <p className="font-bold text-white">Licensed & Insured</p>
                    <p className="text-[#C29828] font-semibold">#1075924</p>
                    <p className="text-xs text-slate-400 mt-2">Click to verify on CSLB</p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
