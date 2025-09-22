import { useEffect, useRef, useState } from "react"

import "./Ticket.css"

export default function Ticket({ name }) {

  name = name.trim()
  const canvasRef = useRef()
  const [issued, setIssued] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const canvasHeight = canvas.height
    const canvasWidth = canvas.width

    const ticketSkeletonImage = new Image(canvasWidth, canvasHeight)
    ticketSkeletonImage.onload = () => {
      if (!issued) {
        ctx.drawImage(ticketSkeletonImage, 0, 0, canvasWidth, canvasHeight)
      }
    }

    ticketSkeletonImage.src = "/images/ticket-skeleton.png"
  }, [issued])

  useEffect(() => {
    if (name !== '' && !issued) setIssued(true)
    if (!issued) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height

    const ticketImage = new Image(canvasWidth, canvasHeight)
    ticketImage.onload = () => {
      // draw the ticket background
      ctx.drawImage(ticketImage, 0, 0, canvasWidth, canvasHeight)
      // draw participant name
      ctx.fillStyle = "white"
      ctx.font = "bold 40px 'Darker Grotesque'"
      ctx.fillText(name, 40, 95)

      // download image
      const link = document.createElement("a")
      link.download = `HolaMozilla-2025-${name.replaceAll(/\s+/g, "-")}.png`
      link.href = canvas.toDataURL("image/png")
      link.click()

    }
    ticketImage.src = "/images/ticket.png"

  }, [issued, canvasRef, name])

  return (
    <canvas ref={canvasRef} className="ticket-canvas" width={560} height={280}></canvas>
  )
}