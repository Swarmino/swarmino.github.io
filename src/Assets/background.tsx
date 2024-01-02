import React, { useEffect, useRef, useState } from 'react';

const Background: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const numLines = 100; // Choose the amount of lines here
    const lineSize = 1000; // Adjust the size of lines here
    const lineColor = ''; // Adjust the color of lines here
    const [controlPointXOffset, setControlPointXOffset] = useState(100); // Adjust the x offset of control points here
    const [controlPointYOffset, setControlPointYOffset] = useState(100); // Adjust the y offset of control points here
    const [fadeOut, setFadeOut] = useState(false); // Flag to indicate fading out
    const [curvature, setCurvature] = useState(0.2); // Adjust the curvature of lines here
    const [speed, setSpeed] = useState(0.0001); // Adjust the speed of the animation here

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (!canvas || !context) {
            return;
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();

        window.addEventListener('resize', resizeCanvas);

        let t = 0; // Time variable for bezier curve animation

        const draw = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw lines along bezier curve
            for (let i = 0; i < numLines; i++) {
                const lineX = bezierCurveX(t, i, numLines, canvas.width);
                let lineY = bezierCurveY(t, i, numLines, canvas.height);

                // Move lines down the screen
                lineY += t * canvas.height;

                context.beginPath();
                context.moveTo(lineX, lineY);
                context.bezierCurveTo(
                    lineX + lineSize / 2, lineY + lineSize / 2,
                    lineX + lineSize / 2, lineY - lineSize / 2,
                    lineX + lineSize, lineY + lineSize
                ); // Use bezierCurveTo to create curvy lines
                context.strokeStyle = lineColor;
                context.globalAlpha = fadeOut ? 1 - t : t; // Adjust the alpha value for fading
                context.stroke();
            }

            t += fadeOut ? -speed : speed; // Adjust the speed of the animation here

            if (t > 1) {
                t = 0; // Reset time to seamlessly animate from left to right
                setFadeOut(false);
            } else if (t < 0) {
                t = 1; // Reset time to seamlessly animate from left to right
                setFadeOut(true);
            }

            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [fadeOut, speed]);

    // Calculate x coordinate of bezier curve
    const bezierCurveX = (t: number, i: number, numLines: number, canvasWidth: number) => {
        const controlPointX = canvasWidth / 2 + Math.sin(t * Math.PI * 2) * controlPointXOffset; // Adjust control point position here
        const startX = -lineSize + (i - t) * (canvasWidth + lineSize) / numLines;
        const endX = -lineSize + (i - t + 1) * (canvasWidth + lineSize) / numLines;

        return (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlPointX + t * t * endX * curvature;
    };

    // Calculate y coordinate of bezier curve
    const bezierCurveY = (t: number, i: number, numLines: number, canvasHeight: number) => {
        const controlPointY = canvasHeight / 2 + Math.cos(t * Math.PI * 2) * controlPointYOffset; // Adjust control point position here
        const startY = -lineSize;
        const endY = canvasHeight + lineSize;

        return (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlPointY + t * t * endY * curvature;
    };

    return (
        <div>
            <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />
        </div>
    );
};

export default Background;
