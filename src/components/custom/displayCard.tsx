'use client'
import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import displayImage from '../../../public/assets/images/about.jpg'
import { ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'

interface DisplayCardProps {
    itemName: string
    itemDetails: string
    price: number
    percentage: number
}

const DisplayCard: React.FC<DisplayCardProps> = ({
    itemName,
    itemDetails,
    price,
    percentage,
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <Card className="relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-neutral-900 group cursor-pointer">
                {/* Sale Badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10 shadow">
                    Sale {percentage}%
                </div>

                {/* Image Section */}
                <div className="relative w-full h-48 overflow-hidden">
                    <Image
                        src={displayImage}
                        alt="display"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        priority
                    />
                </div>

                {/* Content Section */}
                <div className="p-4 space-y-2">
                    <h2 className="text-lg font-semibold text-neutral-800 dark:text-white">
                        {itemName}
                    </h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300 line-clamp-2">
                        {itemDetails}
                    </p>
                </div>

                {/* Footer Section */}
                <div className="flex justify-between items-center px-4 pb-4">
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                        ${price.toFixed(2)}
                    </span>
                    <div className="bg-neutral-200 dark:bg-neutral-700 p-2 rounded-full hover:bg-neutral-300 transition">
                        <ShoppingBag className="w-5 h-5 text-neutral-800 dark:text-white" />
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

export default DisplayCard
