import {motion} from 'motion/react'
import { Flame, Gift, Heart, Home, Sparkles, Users } from 'lucide-react'
import {ParticleField} from './components/Particle'
import {FireworkEffect} from './components/FireworkEffect'
import {FloatingLamp} from './components/FloatingLamp'
import {GlowingDiya} from './components/GlowingDiya'
import {ImageWithFallback} from './components/images/ImageWithFallback'
import {AnimatedText, GlowingText} from './components/AnimatedText'
import {Button} from './components/ui/button'
import { Card, CardContent } from './components/ui/card';
import {TraditionCard} from './components/TraditionCard'


const App = () => {

  const traditions = [
    {
      icon : Flame,
      title : 'Light Diyas',
      description : 'Illuminate your home with traditional oil lamps to symbolize the victory of light over darkness.',
    },

    {
      icon : Gift,
      title : 'Exchange Gifts',
      description : 'Share sweets and presents with loved ones to spread joy and strengthen bonds.',
    },

    {
      icon : Sparkles,
      title: 'Rangoli Designs',
      description: 'Create beautiful and colorful patterns at entrances to welcome prosperity.',
    },

    {
      icon : Home,
      title: 'Clean & Decorate',
      description: 'Prepare your home with thorough cleaning and festive decorations.',
    },

    {
      icon : Users,
      title: 'Family Gatherings',
      description: 'Come together with family and friends for prayers, feasts, and celebrations.',
    },

    {
      icon : Heart,
      title: 'Lakshmi Puja',
      description: 'Worship Goddess Lakshmi for prosperity, wealth, and good fortune.',
    },
  ]

  const wishes = [
    'May the divine light of Diwali spread peace, prosperity, and happiness in your life.',
    'Wishing you a festival full of sweet memories, happiness, and success.',
    'May this Diwali bring you the utmost in peace and prosperity.',
    'Let the light of the diyas guide you on the path of progress and success.',
  ];
  
  return (
    <div className='min-h-screen bg-gradient-to-b from-orange-950 via-purple-900 to-orange-950 overflow-hidden'>
      <ParticleField />

      <FireworkEffect />

      <div className='fixed inset-0 pointer-events-none z-10'>
        <FloatingLamp delay={0} />

        <div className='absolute top-20 right-20'>
          <FloatingLamp delay = {0.5} duration={4} />
        </div>

        <div className='absolute top-40 left-32'>
          <FloatingLamp delay = {1} duration={3.5} />
        </div>

        <div className='absolute bottom-40 right-40'>
          <FloatingLamp delay = {1.5} duration={4.5} />
        </div>

        <div className="absolute bottom-20 left-20">
          <FloatingLamp delay={2} duration={3} />
        </div>

      </div>

      <div className='fixed inset-0 pointer-events-none z-10'>
        <GlowingDiya size="sm" position={{x : '10%', y : '20%'}} />
        <GlowingDiya size="md" position={{ x: '85%', y: '15%' }} />
        <GlowingDiya size="sm" position={{ x: '90%', y: '45%' }} />
        <GlowingDiya size="lg" position={{ x: '5%', y: '60%' }} />
        <GlowingDiya size="md" position={{ x: '15%', y: '85%' }} />
        <GlowingDiya size="sm" position={{ x: '80%', y: '80%' }} />
      </div>

      <section className='relative min-h-screen flex items-center justify-center px-4'>
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1700788629800-ad3a0b202054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXdhbGklMjBsYW1wcyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MDg5NzkxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Diwali celebration"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className='relative z-10 text-center max-w-4xl mx-auto'
        >
          <motion.div
            initial = {{
              scale : 1,
              rotate : 0,
            }}

            transition={{
              duration : 0.8,
              type : 'spring',
              bounce : 0.5
            }}
          >
            <motion.div
              animate = {{
                rotate : [0, 10, -10, 0],
                scale : [1, 1.1, 1],
              }}

              transition={{
                duration : 3,
                repeat : Infinity,
                ease : 'easeInOut',
              }}
            >
              <Sparkles className='text-yellow-400 w-16 h-16 mx-auto mb-6' fill="#fbbf24" />
            </motion.div>
          </motion.div>

          <AnimatedText 
            text= "Happy Diwali"
            className="text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 mb-6"
            delay={0.2}
          />

          <motion.p
            className="text-xl md:text-2xl text-orange-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
              Festival of Lights • शुभ दीपावली
          </motion.p>

          <motion.p
            className="text-orange-200 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Celebrate the triumph of light over darkness, good over evil, and knowledge over ignorance.
            May your life be filled with happiness, prosperity, and endless joy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                boxShadow : [
                  '0 10px 30px rgba(249, 115, 22, 0.3)',
                  '0 10px 50px rgba(249, 115, 22, 0.6)',
                  '0 10px 30px rgba(249, 115, 22, 0.3)',
                ],
              }}

              transition={{
                duration : 2, 
                repeat : Infinity,
              }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg shadow-orange-500/50"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="mr-2" size={20} />
                </motion.div>
                Spread The Joy
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className='relative py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
              <motion.div
                className='text-center mb-16'
                initial = {{opacity : 1, y : 20}}
                whileInView={{opacity : 1, y : 0}}
                viewport={{once : true}}
                transition={{duration : 0.6}}
              >
                <h2 className='text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-5'>The Festival Of Lights</h2>

                <p className='text-orange-200 max-w-3xl mx-auto'>
                  Diwali, also known as Deepavali, is one of the most important festivals in Indian culture.
                  Celebrated over five days, it marks the victory of light over darkness and good over evil.
                </p>
              </motion.div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
                <motion.div
                  initial={{opacity : 0, x : -20}}
                  whileInView={{opacity : 1, x : 0}}
                  viewport={{once : true}}
                  transition={{duration : 0.6}}
                  whileHover={{scale : 1.03, rotate : -1}}
                >
                  <motion.div
                    animate={{
                      boxShadow : [
                        '0 0 20px rgba(249, 115, 22, 0.3)',
                        '0 0 40px rgba(249, 115, 22, 0.5)',
                        '0 0 20px rgba(249, 115, 22, 0.3)',
                      ],
                    }}

                    transition={{duration : 2, repeat : Infinity}}
                  >
                    <Card className='bg-gradient-to-br from-purple-900/50 to-orange-900/50 border-orange-500/30 overflow-hidden'>
                      <CardContent className='p-0'>
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1605455021703-13b57dcb9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBsYW1wcyUyMGRpeWFzfGVufDF8fHx8MTc2MDk1MTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Diwali diyas"
                          className="w-full h-64 object-cover"
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{opacity : 0, x : 20}}
                  whileInView={{opacity : 1, x : 0}}
                  viewport={{once : true}}
                  transition={{duration : 0.6}}
                  whileHover={{scale : 1.03, rotate : 1}}
                >
                  <motion.div
                    animate={{
                      boxShadow : [
                        '0 0 20px rgba(236, 72, 153, 0.3)',
                        '0 0 40px rgba(236, 72, 153, 0.5)',
                        '0 0 20px rgba(236, 72, 153, 0.3)',
                      ],
                    }}

                    transition={{
                      duration : 2.5,
                      repeat : Infinity
                    }}
                  >

                    <Card className="bg-gradient-to-br from-purple-900/50 to-orange-900/50 border-orange-500/30 overflow-hidden">
                    
                      <CardContent className="p-0">

                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1700993714468-408700d3599e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXdhbGklMjByYW5nb2xpJTIwY29sb3JzfGVufDF8fHx8MTc2MDk1MTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Rangoli designs"
                          className="w-full h-64 object-cover"
                        />

                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </div>
        </div>
      </section>

      <section className='relative py-20 px-4 bg-gradient-to-b from-transparent via-orange-950/30 to-transparent'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial = {{opacity : 0, y : 20}}
            whileInView={{opacity : 1, y : 0}}     
            viewport={{once : true}}
            transition={{duration : 0.6}}
          >
            <h2 className='text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4'>DIWALI TRADITIONS</h2>

            <p className="text-orange-200 max-w-3xl mx-auto">
              Discover the beautiful customs and rituals that make Diwali a truly magical celebration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traditions.map((tradition, index) => (
              <TraditionCard
                key={index}
                icon={tradition.icon}
                title={tradition.title}
                description={tradition.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
              Warm Wishes
            </h2>
            <p className="text-orange-200 max-w-3xl mx-auto">
              Share these heartfelt messages with your loved ones this Diwali.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wishes.map((wish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <motion.div
                  animate={{
                    borderColor: [
                      'rgba(234, 179, 8, 0.3)',
                      'rgba(234, 179, 8, 0.6)',
                      'rgba(234, 179, 8, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Card className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/30 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      >
                        <Sparkles className="text-yellow-400 mb-4" size={24} />
                      </motion.div>
                      <p className="text-orange-100">{wish}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
            <motion.div
              className='relative rounded-2xl overflow-hidden'
              initial = {{opacity : 0, y : 20}}
              whileInView={{opacity : 1, y : 0}}
              viewport={{once : true}}
              transition={{duration : 0.6}}
              whileHover={{scale : 1.02}}
            >
              <motion.div
                animate={{
                  boxShadow : [
                    '0 0 30px rgba(139, 92, 246, 0.4)',
                    '0 0 60px rgba(139, 92, 246, 0.7)',
                    '0 0 30px rgba(139, 92, 246, 0.4)',
                  ],
                }}

                transition={{duration : 3, repeat : Infinity}}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1562169261-1b80dfeef03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJld29ya3MlMjBuaWdodCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MDk1MTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fireworks celebration"
                  className="w-full h-96 object-cover"
                />
              </motion.div>

              <div className='absolute inset-0 bg-gradient-to-t from-orange-950 via-transparent to-transparent flex items-end justify-center pb-12'>
                <GlowingText 
                  text = "May Your Life Sparkle with Joy & Prosperity"
                  
                  className='text-3xl md:text-4xl text-white text-center px-4'
                />
              </div>
            </motion.div>
        </div>

      </section>

      <footer className='relative py-12 px-4 border-t border-orange-800/30'>
        <div className='max-w-6xl mx-auto text-center'>
            <motion.div
              initial = {{opacity : 0}}
              whileInView={{opacity : 1}}
              viewport={{once : true}}
              transition={{duration : 0.6}}
            >
              <motion.div
                animate = {{
                  scale : [1, 1.2, 1],
                  filter : [
                    'drop-shadow(0 0 5px rgba(249, 115, 22, 0.5))',

                    'drop-shadow(0 0 15px rgba(249, 115, 22, 0.8))',

                    'drop-shadow(0 0 5px rgba(249, 115, 22, 0.5))',
                  ],
                }}

                transition={{duration : 2, repeat : Infinity}}
              >
                <Flame className='text-orange-500 w-9 h-8 mx-auto mb-4' fill="#f97316" />
              </motion.div>

              <motion.p
                className='text-orange-300 mb-2'
                initial = {{opacity : 0, y : 10}}
                whileInView={{opacity : 1, y : 0}}
                viewport={{once : true}}
                transition={{duration : 0.2}}
              >
                Wishing you and your family a very Happy Diwali!
              </motion.p>
              
              <motion.p
                className='text-orange-500'
                initial = {{opacity : 0, y : 10}}
                whileInView={{opacity : 1, y : 0}}
                viewport={{once : true}}
                transition={{delay : 0.4}}
              >
                May the festival of lights illuminate your life with joy, health, and wealth.
              </motion.p>
            </motion.div>
        </div>
      </footer>

      <div className="fixed right-4 bottom-4 z-50 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: [0, 1], y: [20, 0], scale: [0.95, 1] }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.04 }}
          className="backdrop-blur-sm bg-black/40 border border-orange-600/40 rounded-full px-4 py-2 flex items-center gap-3 shadow-lg"
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 animate-pulse" />
          <div className="text-xs text-white font-semibold tracking-wider uppercase">DEVELOPER - UJJAWAL PRAKASH</div>
        </motion.div>
      </div>
    </div>
  );
}

export default App