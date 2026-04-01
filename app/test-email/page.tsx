"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestEmailPage() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testConfig = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/send")
      const data = await response.json()
      setResult({ type: "config", data })
    } catch (error: any) {
      setResult({ type: "error", data: error.message })
    }
    setLoading(false)
  }

  const testPromoEmail = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "promo",
          email: "test@example.com",
        }),
      })
      const data = await response.json()
      setResult({ type: "promo", data })
    } catch (error: any) {
      setResult({ type: "error", data: error.message })
    }
    setLoading(false)
  }

  const testContactEmail = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: "Test User",
          email: "test@example.com",
          phone: "951-555-1234",
          service: "Plumbing",
          propertyType: "Commercial",
          urgency: "routine",
          details: "This is a test email",
        }),
      })
      const data = await response.json()
      setResult({ type: "contact", data })
    } catch (error: any) {
      setResult({ type: "error", data: error.message })
    }
    setLoading(false)
  }

  return (
    <div className="container mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle>Email System Test</CardTitle>
          <CardDescription>Test your Resend email configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button onClick={testConfig} disabled={loading}>
              Check Configuration
            </Button>
            <Button onClick={testPromoEmail} disabled={loading}>
              Test Promo Email
            </Button>
            <Button onClick={testContactEmail} disabled={loading}>
              Test Contact Email
            </Button>
          </div>

          {result && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Result:</h3>
              <pre className="bg-slate-900 text-white p-4 rounded overflow-auto text-xs">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <h4 className="font-semibold mb-2">Troubleshooting Checklist:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Is RESEND_API_KEY set in Vercel environment variables?</li>
              <li>Is the domain "aboveallmaintenancerepair.com" verified in Resend?</li>
              <li>Check Vercel function logs for error messages</li>
              <li>Check browser console for API call errors</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
