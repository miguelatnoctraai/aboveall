"use client"

import { useEffect, useRef, forwardRef, useImperativeHandle, useState } from "react"

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          "expired-callback": () => void
          theme?: "light" | "dark"
          size?: "normal" | "compact"
        },
      ) => number
      reset: (widgetId?: number) => void
      getResponse: (widgetId?: number) => string
    }
    onRecaptchaLoad?: () => void
  }
}

export interface ReCaptchaRef {
  reset: () => void
  getResponse: () => string
}

interface ReCaptchaProps {
  onVerify: (token: string) => void
  onExpire?: () => void
  theme?: "light" | "dark"
  size?: "normal" | "compact"
}

export const ReCaptcha = forwardRef<ReCaptchaRef, ReCaptchaProps>(
  ({ onVerify, onExpire, theme = "dark", size = "normal" }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const widgetIdRef = useRef<number | null>(null)
    const [isLoaded, setIsLoaded] = useState(false)

    // Get it from: https://www.google.com/recaptcha/admin
    // Register domain: aboveallmaintenancerepair.com
    // Select: reCAPTCHA v2 → "I'm not a robot" Checkbox
    const siteKey = "6Le6lUYsAAAAACqcH6ahEfw427_tbZpO1HkBml9g" // Replace with actual key  Google reCAPTCHA admin

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (widgetIdRef.current !== null && window.grecaptcha) {
          window.grecaptcha.reset(widgetIdRef.current)
        }
      },
      getResponse: () => {
        if (widgetIdRef.current !== null && window.grecaptcha) {
          return window.grecaptcha.getResponse(widgetIdRef.current)
        }
        return ""
      },
    }))

    useEffect(() => {
      const renderCaptcha = () => {
        if (containerRef.current && window.grecaptcha && widgetIdRef.current === null) {
          try {
            widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
              sitekey: siteKey,
              callback: onVerify,
              "expired-callback": () => {
                onExpire?.()
              },
              theme,
              size,
            })
            setIsLoaded(true)
          } catch (error) {
            console.log("reCAPTCHA render error:", error)
          }
        }
      }

      if (window.grecaptcha && window.grecaptcha.render) {
        window.grecaptcha.ready(renderCaptcha)
      } else {
        const existingScript = document.querySelector('script[src*="recaptcha"]')
        if (!existingScript) {
          const script = document.createElement("script")
          script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
          script.async = true
          script.defer = true
          window.onRecaptchaLoad = renderCaptcha
          document.head.appendChild(script)
        } else {
          window.onRecaptchaLoad = renderCaptcha
        }
      }

      return () => {
        widgetIdRef.current = null
      }
    }, [onVerify, onExpire, siteKey, theme, size])

    return (
      <div className="recaptcha-container">
        <div ref={containerRef} />
        {!isLoaded && (
          <div className="h-[78px] w-[304px] bg-slate-800 border border-slate-700 rounded flex items-center justify-center">
            <span className="text-slate-400 text-sm">Loading reCAPTCHA...</span>
          </div>
        )}
      </div>
    )
  },
)

ReCaptcha.displayName = "ReCaptcha"
