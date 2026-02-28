import React, { useEffect, useRef } from 'react';

const StudioBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }

    let particles: Particle[] = [];

    // Ballpit colors: vibrant and playful
    const colors = [
      '239, 68, 68',   // Red
      '245, 158, 11',  // Amber
      '59, 130, 246',  // Blue
      '16, 185, 129',  // Emerald
      '139, 92, 246',  // Violet
      '236, 72, 153',  // Pink
    ];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const createParticle = (x?: number, y?: number): Particle => {
        const radius = Math.random() * 15 + 10; // Larger balls 10-25px
        return {
            x: x ?? Math.random() * canvas.width,
            y: y ?? -Math.random() * canvas.height, // Start above view
            radius: radius,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 2,
            color: colors[Math.floor(Math.random() * colors.length)]
        };
    };

    const initParticles = () => {
      // Adjust density - not too crowded to block view
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(Math.random() * canvas.width, Math.random() * canvas.height));
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gravity = 0.2;
      const friction = 0.99; // Air resistance
      const bounce = 0.7; // Floor bounce energy retention

      particles.forEach((p) => {
        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, 0.3)`; // Semi-transparent for overlay
        ctx.fill();
        ctx.strokeStyle = `rgba(${p.color}, 0.5)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Apply Gravity
        p.vy += gravity;
        p.vx *= friction;
        
        // Update Position
        p.x += p.vx;
        p.y += p.vy;

        // Floor Collision
        if (p.y + p.radius > canvas.height) {
            p.y = canvas.height - p.radius;
            p.vy *= -bounce;
            
            // Random horizontal impulse on bounce to simulate irregular surfaces/interactions
            if (Math.abs(p.vy) > 2) {
                 p.vx += (Math.random() - 0.5) * 0.5;
            }
        }

        // Wall Collision
        if (p.x + p.radius > canvas.width) {
            p.x = canvas.width - p.radius;
            p.vx *= -bounce;
        } else if (p.x - p.radius < 0) {
            p.x = p.radius;
            p.vx *= -bounce;
        }

        // Respawn if static at bottom
        // If speed is very low and near bottom, maybe it "melts" away and respawns at top
        if (Math.abs(p.vy) < 0.5 && Math.abs(p.vx) < 0.5 && p.y > canvas.height - p.radius - 5) {
             // 1% chance per frame to respawn if settled
             if (Math.random() < 0.01) {
                 p.y = -p.radius - Math.random() * 100;
                 p.x = Math.random() * canvas.width;
                 p.vy = 0;
                 p.vx = (Math.random() - 0.5) * 5;
             }
        }
      });

      // Simple collision resolution (Soft body ish)
      for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
              const p1 = particles[i];
              const p2 = particles[j];
              const dx = p2.x - p1.x;
              const dy = p2.y - p1.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const minDist = p1.radius + p2.radius;

              if (distance < minDist) {
                  // Push apart
                  const angle = Math.atan2(dy, dx);
                  const force = 0.05; // Gentle push
                  
                  const ax = Math.cos(angle) * force;
                  const ay = Math.sin(angle) * force;
                  
                  p1.vx -= ax;
                  p1.vy -= ay;
                  p2.vx += ax;
                  p2.vy += ay;
              }
          }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-30"
    />
  );
};

export default StudioBackground;