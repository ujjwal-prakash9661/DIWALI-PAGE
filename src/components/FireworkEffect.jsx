import {motion} from 'motion/react'
import { useEffect, useState } from 'react'

export function FireworkEffect()
{
    const [fireworks, setFireworks] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newFirework = {
                id : Date.now(),
                x : Math.random() * 100,
                y : Math.random() * 60 + 10,
            };

            setFireworks((prev) => [...prev, newFirework])

            setTimeout(() => {
                setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id))
            }, 2000);
        }, 1500)

        return () => clearInterval(interval);
    }, [])
    
    return (
        <div className='fixed inset-0 pointer-events-none overflow-hidden z-20'>
            {fireworks.map((firework) => (
                <div
                    key={firework.id}
                    className='absolute'
                    style={{
                        left : `${firework.x}%`,
                        top : `${firework.y}%`,
                    }}
                >
                    {Array.from({ length : 12 }).map((_, i) => {
                        const angle = (i * 360) / 12;
                        const distance = 60;
                        const colors = ['#fbbf24', '#f97316', '#ec4899', '#8b5cf6', '#ef4444'];
                        const color = colors[Math.floor(Math.random() * colors.length)];

                        return (
                            <motion.div
                                key={i}
                                className='absolute w-2 h-2 rounded-full'
                                style={{
                                    backgroundColor : color
                                }}

                                initial={{
                                    x : 0,
                                    y : 0,
                                    opacity : 1,
                                }}

                                animate={{
                                    x : Math.cos((angle * Math.PI)/ 180) * distance,

                                    y : Math.sin((angle * Math.PI) / 180) * distance,

                                    opacity : 0,
                                    scale : [1, 1.5, 0],
                                }}

                                transition={{
                                    duration : 1.5,
                                    ease : 'easeOut',
                                }}
                            />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}