export const EMAILJS_CONFIG = {
  serviceId: "service_qniz07n",
  templateId: "template_kq0rv9g",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "OQ9HiKtD8OtEaWW6o",
} as const

export interface EmailFormData {
  name: string
  email: string
  subject: string
  message: string
}
