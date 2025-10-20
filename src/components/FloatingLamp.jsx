import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function FloatingLamp({delay = 0, duration = 3})
{
    return (
        <motion.div
            className='absolute'
            initial = {{
                y : 0,
                opacity : 0.6,
                scale : 0
            }}

            animate = {{
                y : [-20, 20, -20],
                opacity : [0.6, 1, 0.6],
                scale : [1, 1.2, 1],
                rotate : [0, 180, 360]
            }}

            transition={{
                duration,
                repeat : Infinity,
                delay,
                ease : "easeInOut",
            }}
        >
            <motion.div
                animate={{
                    filter : [
                        'drop-shadow(0 0 5px rgba(251, 191, 36, 0.6))',
                        'drop-shadow(0 0 20px rgba(251, 191, 36, 1))',
                        'drop-shadow(0 0 5px rgba(251, 191, 36, 0.6))',
                    ],
                }} 

                transition={{
                    duration : 1.5,
                    repeat : Infinity,
                    ease : "easeInOut",
                }}
            >
                <Sparkles className='text-yellow-400' size={24} fill="#fbbf24" />
            </motion.div>
        </motion.div>
    )
}