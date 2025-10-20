import {motion} from 'motion/react'
import { useState } from 'react'

function Particle({delay = 0})
{
    const [position] = useState({
        x : Math.random() * 100,
        y : Math.random() * 100,
    });

    const [size] = useState(Math.random() * 4 + 2);

    return(
        <motion.div
            className='absolute rounded-full bg-yellow-400'
            style={{
                left : `${position.x}%`,
                top : `${position.y}%`,
                width : `${size}px`,
                height : `${size}px`,
            }}
            
            initial={{
                opacity : 0,
                scale : 0,
            }}

            animate = {{
                opacity : [0, 1, 0],
                scale : [0, 1.5, 0],
                y : [0, -100],
            }}

            transition={{
                duration : Math.random() * 3 + 2,
                repeat : Infinity,
                delay : delay + Math.random() * 2,
                ease : 'easeOut',
            }}
        />
    )
}

export function ParticleField()
{
    return (
        <div className='fixed inset-0 pointer-events-none overflow-hidden'>
            {Array.from({ length : 30 }).map((_, i) => (
                <Particle key={i} delay={i * 0.1} />
            ))}
        </div>
    )
}