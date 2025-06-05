'use client'

import {
  Facebook,
  Instagram,
  Key,
  Menu,
  Search,
  ShoppingBag,
  Twitter,
  User,
  X,
} from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [showPromo, setShowPromo] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const togglePromo = () => setShowPromo(prev => !prev)
  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <nav className='flex flex-col w-full'>
      {/* Promo Banner */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className='px-4 py-2 bg-black text-white flex justify-between items-center'
          >
            <p className='text-sm font-medium tracking-wider'>
              Enjoy FREE Deliveries on all Orders Above N100,000 + A Free Gift{' '}
              <span className='underline cursor-pointer'>More details</span>
            </p>
            <X className='cursor-pointer' size={20} onClick={togglePromo} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <div className='flex justify-between items-center p-3 border-b text-sm font-medium tracking-wide'>
        <div className='flex items-center space-x-2'>
          <span>Call Us:</span>
          <span className='text-gray-700'>+2348139319843</span>
        </div>
        <div className='hidden lg:flex items-center space-x-6 text-gray-600'>
          <Link href='#'>Facebook</Link>
          <Link href='#'>Twitter</Link>
          <Link href='#'>Instagram</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className='flex justify-between items-center px-4 py-5'>
        <div className='lg:hidden cursor-pointer' onClick={toggleMenu}>
          <Menu size={24} />
        </div>
        <div className='flex items-center space-x-6 font-bold text-lg'>
          <Link href='/'>Logo</Link>
          <div className='hidden lg:flex space-x-6 text-sm font-semibold'>
            <Link href='/'>Home</Link>
            <Link href='/store'>Store</Link>
            <Link href='/categories'>Categories</Link>
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <Search />
          <User className='hidden lg:flex' />
          <ShoppingBag />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed top-0 left-0 h-full w-[260px] bg-white z-50 shadow-md flex flex-col p-6 space-y-6'
          >
            <div className='flex items-center justify-between'>
              <span className='text-lg font-bold'>Menu</span>
              <X className='cursor-pointer' onClick={toggleMenu} />
            </div>

            <div className='flex flex-col gap-4 text-sm font-medium border-b pb-4'>
              <Link href='/' onClick={toggleMenu}>Home</Link>
              <Link href='/store' onClick={toggleMenu}>Store</Link>
              <Link href='/categories' onClick={toggleMenu}>Categories</Link>
            </div>

            <div className='flex justify-around text-gray-600'>
              <Instagram />
              <Facebook />
              <Twitter />
            </div>

            <div className='flex flex-col gap-4 mt-4'>
              <h2 className='font-semibold'>My Account</h2>
              <div className='flex items-center gap-3 text-sm cursor-pointer'>
                <Key />
                <span>Sign In</span>
              </div>
              <div className='flex items-center gap-3 text-sm cursor-pointer'>
                <User />
                <span>Register</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optional overlay */}
      {menuOpen && (
        <motion.div
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          className='fixed top-0 left-0 w-full h-full bg-black z-40'
        />
      )}
    </nav>
  )
}

export default Navbar
