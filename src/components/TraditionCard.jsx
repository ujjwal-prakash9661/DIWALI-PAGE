import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function TraditionCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateY: -90 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: 'spring' }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <motion.div
        whileHover={{
          boxShadow: '0 10px 40px rgba(249, 115, 22, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      >
        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 h-full">
          <CardHeader>
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mb-4"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="text-white" size={24} />
            </motion.div>
            <CardTitle className="text-orange-900">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-orange-700">{description}</CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
