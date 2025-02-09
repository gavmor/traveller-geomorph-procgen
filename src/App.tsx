import {h} from "preact"
import "./app.css"
import {useRef, useEffect} from "preact/hooks"

export function App() {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const dpr = window.devicePixelRatio || 1
        canvas.width = canvas.clientWidth * dpr
        canvas.height = canvas.clientHeight * dpr
        ctx.scale(dpr, dpr)

        // Draw squares
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(30, 30, 60, 60)

        ctx.fillStyle = "#00FF00"
        ctx.fillRect(120, 30, 60, 60)

        ctx.fillStyle = "#0000FF"
        ctx.fillRect(30, 120, 60, 60)
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: "400px",
                height: "300px",
                border: "1px solid #000",
            }}
        />
    )

}
