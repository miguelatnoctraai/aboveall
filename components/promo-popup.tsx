"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Gift, Mail, Loader2, AlertCircle } from "lucide-react"
import { SimpleToast } from "@/components/simple-toast"

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [alreadySubscribed, setAlreadySubscribed] = useState(false)
  const [toast, setToast] = useState({ isVisible: false, message: "", type: "success" as "success" | "error" })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const forceShow = urlParams.get("testpopup") === "true"

    const hasSeenOffer = localStorage.getItem("seenOffer")
    const subscribedEmail = localStorage.getItem("subscribedEmail")

    // Check if user already subscribed
    if (subscribedEmail && !forceShow) {
      setAlreadySubscribed(true)
    }

    if (!hasSeenOffer || forceShow) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("seenOffer", "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setErrorMessage("")

    // Check if this email was already used
    const previousEmail = localStorage.getItem("subscribedEmail")
    if (previousEmail === email.toLowerCase()) {
      setErrorMessage("This email has already been used to claim a discount code. Check your inbox or spam folder.")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "promo", email }),
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        // Store the email to prevent duplicate signups
        localStorage.setItem("seenOffer", "true")
        localStorage.setItem("subscribedEmail", email.toLowerCase())

        setTimeout(() => {
          setIsVisible(false)
          setToast({
            isVisible: true,
            message: "Success! Check your email for your discount code.",
            type: "success",
          })
        }, 2500)
      } else {
        const errorDetails = data.error || data.message || "Failed to send email"
        setErrorMessage(errorDetails)
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Toast Notification */}
      <SimpleToast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />

      {isVisible && (
        <>
          {/* Backdrop with blur */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 transition-opacity duration-300"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
              className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glassmorphism container */}
              <div className="relative bg-slate-900/95 backdrop-blur-xl border-2 border-[#C29828] rounded-2xl shadow-2xl shadow-[#C29828]/20 overflow-hidden">
                {/* Gold accent glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C29828]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#C29828]/10 rounded-full blur-3xl" />

                {/* Close button */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 p-3 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800 active:bg-slate-700"
                  aria-label="Close popup"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Content */}
                <div className="relative p-8 pt-10">
                  {!isSubmitted ? (
                    <>
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full bg-[#C29828]/20 border border-[#C29828]/30">
                          <Gift className="h-10 w-10 text-[#C29828]" />
                        </div>
                      </div>

                      {/* Headline */}
                      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
                        Unlock <span className="text-[#C29828]">15% OFF</span>
                        <br />
                        Your First Service
                      </h2>

                      {/* Subtext */}
                      <p className="text-slate-400 text-center mb-8 text-sm">
                        Plus priority access to seasonal specials and emergency alerts.
                      </p>

                      {/* Error Message */}
                      {errorMessage && (
                        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <p className="text-red-300 text-sm">{errorMessage}</p>
                        </div>
                      )}

                      {/* Already Subscribed Message */}
                      {alreadySubscribed && !errorMessage && (
                        <div className="mb-4 p-3 bg-amber-500/20 border border-amber-500/50 rounded-lg">
                          <p className="text-amber-300 text-sm text-center">
                            You've already claimed a discount code. Check your email inbox or spam folder for your code.
                          </p>
                        </div>
                      )}

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value)
                              setErrorMessage("")
                            }}
                            placeholder="Enter your email address"
                            required
                            disabled={isSubmitting}
                            className="w-full pl-12 pr-4 py-4 bg-slate-800 text-white placeholder-slate-500 rounded-xl border border-slate-700 focus:border-[#C29828] focus:ring-2 focus:ring-[#C29828]/20 outline-none transition-all text-base disabled:opacity-50"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-[#C29828] hover:bg-[#D4A93A] text-slate-900 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-[#C29828]/30 hover:shadow-[#C29828]/50 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-5 w-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Get My Code"
                          )}
                        </button>
                      </form>

                      {/* Dismiss link */}
                      <button
                        type="button"
                        onClick={handleClose}
                        className="w-full mt-4 text-slate-500 hover:text-slate-300 text-sm transition-colors py-2"
                      >
                        No thanks, I'll pay full price
                      </button>
                    </>
                  ) : (
                    /* Success State */
                    <div className="text-center py-8">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full bg-green-500/20 border border-green-500/30">
                          <svg
                            className="h-10 w-10 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
                      <p className="text-slate-400">Check your email for your exclusive discount code.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
