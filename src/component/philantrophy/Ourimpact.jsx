import { Trophy, Users, Heart, TrendingUp } from 'lucide-react'
import {motion} from 'framer-motion'
export default function ImpactMetrics() {
  return (
    <section className="w-full py-12  text-white">
      <div className="container mx-auto px-4">
      <motion.h2
                className="text-4xl md:text-5xl lg:text-7xl font-light text-center mb-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <span className="bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    Our impact
                </span>
                <div className="w-48 h-px mx-auto bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mt-6" />
            </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className=" rounded-lg p-6">
            <div className="flex flex-col items-center">
              <Trophy className="w-12 h-12 text-[#FFD700] mb-4" />
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-center text-gray-300">Athletes Supported</div>
            </div>
          </div>

          <div className="rounded-lg p-6">
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-[#FFD700] mb-4" />
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-center text-gray-300">Community Members</div>
            </div>
          </div>

          <div className="rounded-lg p-6">
            <div className="flex flex-col items-center">
              <Heart className="w-12 h-12 text-[#FFD700] mb-4" />
              <div className="text-3xl font-bold mb-2">$2M+</div>
              <div className="text-center text-gray-300">Donations Raised</div>
            </div>
          </div>

          <div className="rounded-lg p-6">
            <div className="flex flex-col items-center">
              <TrendingUp className="w-12 h-12 text-[#FFD700] mb-4" />
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-center text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

