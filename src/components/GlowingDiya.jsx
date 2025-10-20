import { motion } from 'motion/react';
import { Flame} from 'lucide-react';

export function GlowingDiya({size = 'md', position})
{
    const sizes = {
        sm : { container : 'w-12 h-12', icon : 20},
        md : { container : 'w-16 h-16', icon : 28},
        lg : { container : 'w-20 h-20', icon : 36},
    };

    const sizeConfig = sizes[size];

    const containerStyle = position ? {
        positon : 'absolute',
        left : position.x,
        top : position.y,
    } : {};
    
    return (
        <div style={containerStyle} className='relative'>
            <motion.div
                className={`${sizeConfig.container} relative`}
                animate = {{
                    y : [0, -5, 0],
                }}

                transition={{
                    duration : 2,
                    repeat : Infinity,
                    ease : "easeInOut"
                }}
            >
                <motion.div 
                    className='absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 blur-xl'
                    animate = {{
                        scale : [1, 1.3, 1],
                        opacity : [0.6, 0.9, 0.6],
                    }}
                    
                    transition={{
                        duration : 1.5,
                        repeat : Infinity,
                        ease : "easeInOut",
                    }}
                />

                <div
                    className= {`${sizeConfig.container} relative flex items-center justify-center`}
                >
                    <motion.div
                        animate={{
                            scale : [1, 1.1, 1],
                        }}

                        transition={{
                            duration : 1,
                            repeat : Infinity,
                            ease : "easeInOut",
                        }}
                    >
                        <Flame className='text-orange-500' size={sizeConfig.icon} fill="#f97316" />
                    </motion.div>
                </div>

                <motion.div
                    className='absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full'
                    
                    animate = {{
                        scale : [0, 1, 0],
                        opacity : [0, 1, 0],
                    }}

                    transition={{
                        duration : 1.5,
                        repeat : Infinity,
                        repeatDelay : 0.5,
                    }}
                >  
                </motion.div>
                
                <motion.div
                    className='absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full'

                    animate = {{
                        scale : [0, 1, 0],
                        opacity : [0, 1, 0],
                    }}

                    transition={{
                        duration : 1.5,
                        repeat : Infinity,
                        repeatDelay : 0.5,
                    }}
                >
                </motion.div>
            </motion.div>
        </div>
    )
}