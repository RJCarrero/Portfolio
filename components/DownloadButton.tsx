import { Download } from "lucide-react"

interface DownloadButtonProps {
  file: string
  label?: string
  className?: string
}

export function DownloadButton({ file, label = "Download Resume", className = "" }: DownloadButtonProps) {
  return (
    <a
      href={file}
      download
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-400 text-white font-semibold hover:bg-orange-500 transition-colors ${className}`}
      aria-label={label}
    >
      <Download size={20} />
      <span>{label}</span>
    </a>
  )
}