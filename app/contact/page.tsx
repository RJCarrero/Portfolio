"use client"

import type React from "react"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Linkedin, Github } from "lucide-react"

import { PageLayout } from "@/components/page-layout"
import { NavigationButton } from "@/components/navigation-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EMAILJS_CONFIG, type EmailFormData } from "@/lib/emailjs-config"

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<EmailFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey,
      )

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")
      setErrorMessage("Failed to send message. Please try again or contact me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Contact Me</h1>
              <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Ready to collaborate on your next IT project? Let's discuss how I can help with your network and
                technology needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
                <h2 className="text-2xl font-bold text-orange-400 mb-6">Send a Message</h2>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
                    <p className="text-green-400 font-medium">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
                    <p className="text-red-400 font-medium">❌ {errorMessage}</p>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400 disabled:opacity-50"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400 disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400 disabled:opacity-50"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400 resize-none disabled:opacity-50"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
                  <h2 className="text-2xl font-bold text-orange-400 mb-6">Get In Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-orange-400 text-xl">📧</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-300">rafaeljcarrero@outlook.com</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-orange-400 text-xl">📍</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-gray-300">Clarksville, TN</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Links */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
                  <h2 className="text-2xl font-bold text-orange-400 mb-6">Professional Links</h2>
                  <div className="space-y-4">
                    <a
                      href="https://www.linkedin.com/in/rafael-carrero-9749a0348"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                        <Linkedin className="text-blue-400 w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium">LinkedIn</p>
                        <p className="text-gray-400 text-sm">Professional Network</p>
                      </div>
                    </a>

                    <a
                      href="https://github.com/RJCarrero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center mr-4">
                        <Github className="text-gray-400 w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium">GitHub</p>
                        <p className="text-gray-400 text-sm">Code Repository</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
                  <h2 className="text-2xl font-bold text-orange-400 mb-4">Availability</h2>
                  <p className="text-gray-200 mb-4">
                    I'm currently available for freelance projects and full-time opportunities in network administration
                    and IT support.
                  </p>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-green-400 font-medium">Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-gray-300 mb-8 text-lg">Want to learn more about my experience?</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <NavigationButton href="/resume">View Resume</NavigationButton>
                <NavigationButton href="/skills" variant="secondary">
                  Technical Skills
                </NavigationButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
