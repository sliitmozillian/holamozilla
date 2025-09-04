import { useEffect, useRef } from "react"

import "./Ticket.css"

export default function Ticket({ name }) {

  name = name.trim()
  const canvasRef = useRef()
  const initialized = useRef(false)

  useEffect(() => {
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
      ctx.font = "bold 32px serif"
      ctx.fillText(name, 30, 100)

      if (!initialized.current) {
        initialized.current = true
        return
      }

      // download image
      const link = document.createElement("a")
      link.download = `HolaMozilla-2025-${name.replaceAll(/\s+/g, "-")}.png`
      link.href = canvas.toDataURL("image/png")
      link.click()

    }
    ticketImage.src = "/images/ticket.png"

  }, [canvasRef, name])

  return (
    <canvas ref={canvasRef} className="ticket-canvas" width={560} height={280}></canvas>
  )
}