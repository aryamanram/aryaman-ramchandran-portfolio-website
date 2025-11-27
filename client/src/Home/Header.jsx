import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Header = () => {
    const canvasRef = useRef(null)
    const animationRef = useRef({ A: 0, B: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        const bgChar = '+'
        const shadeChars = ' .,-~:;=!*#$@'

        // Set canvas to full screen
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Font settings
        const fontSize = 20
        const charWidth = 12
        const charHeight = 22

        // GSAP animation for smooth rotation
        gsap.to(animationRef.current, {
            A: Math.PI * 20,
            B: Math.PI * 14,
            duration: 120,
            ease: 'none',
            repeat: -1
        })

        const renderFrame = () => {
            const cols = Math.ceil(canvas.width / charWidth)
            const rows = Math.ceil(canvas.height / charHeight)

            const output = new Array(cols * rows).fill(bgChar)
            const zBuffer = new Array(cols * rows).fill(0)

            const { A, B } = animationRef.current

            const cubeSize = 12
            const distanceFromCam = 80
            const K1 = 30

            // Aspect ratio correction (characters are taller than wide)
            const aspectRatio = 2.2

            const cosA = Math.cos(A)
            const sinA = Math.sin(A)
            const cosB = Math.cos(B)
            const sinB = Math.sin(B)

            const renderSurface = (cubeX, cubeY, cubeZ, char) => {
                // Rotation around X axis
                const y1 = cubeY * cosA - cubeZ * sinA
                const z1 = cubeY * sinA + cubeZ * cosA

                // Rotation around Y axis
                const x2 = cubeX * cosB + z1 * sinB
                const y2 = y1
                const z2 = -cubeX * sinB + z1 * cosB

                // Project to 2D with aspect ratio correction
                const z3 = z2 + distanceFromCam
                const ooz = 1 / z3

                const xp = Math.floor(cols * 0.75 + K1 * ooz * x2 * aspectRatio)
                const yp = Math.floor(rows / 2 - K1 * ooz * y2)

                const idx = xp + yp * cols

                if (xp >= 0 && xp < cols && yp >= 0 && yp < rows && ooz > zBuffer[idx]) {
                    zBuffer[idx] = ooz
                    output[idx] = char
                }
            }

            // Draw cube faces with different characters for shading
            const step = 0.6
            for (let i = -cubeSize; i < cubeSize; i += step) {
                for (let j = -cubeSize; j < cubeSize; j += step) {
                    // Each face gets a different shade character
                    renderSurface(i, j, cubeSize, '@')      // Front
                    renderSurface(i, j, -cubeSize, '.')     // Back
                    renderSurface(-cubeSize, i, j, '#')     // Left
                    renderSurface(cubeSize, i, j, '$')      // Right
                    renderSurface(i, cubeSize, j, '=')      // Top
                    renderSurface(i, -cubeSize, j, '~')     // Bottom
                }
            }

            // Clear and draw
            ctx.fillStyle = '#0E131C'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.font = `${fontSize}px monospace`
            ctx.fillStyle = '#4B5563' // gray-600

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const char = output[col + row * cols]
                    const x = col * charWidth
                    const y = row * charHeight + charHeight

                    // Different colors for cube vs background
                    if (char !== bgChar) {
                        ctx.fillStyle = '#9CA3AF' // gray-400 for cube
                    } else {
                        ctx.fillStyle = '#374151' // gray-700 for background
                    }
                    ctx.fillText(char, x, y)
                }
            }

            requestAnimationFrame(renderFrame)
        }

        const frameId = requestAnimationFrame(renderFrame)

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(frameId)
            gsap.killTweensOf(animationRef.current)
        }
    }, [])

    return (
        <header className="relative h-screen w-full overflow-hidden bg-[#0E131C]">
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    Hi, I'm Aryaman
                </h1>
                <p className="text-gray-400 text-xl md:text-2xl">
                    [ Software Engineer ]
                </p>
            </div>
        </header>
    )
}

export default Header
