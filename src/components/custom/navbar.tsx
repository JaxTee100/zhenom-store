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
import { usePathname } from 'next/navigation' // <-- NEW
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'


const Navbar = () => {
    const [showPromo, setShowPromo] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)

    const pathname = usePathname() // <-- NEW

    const togglePromo = () => setShowPromo(prev => !prev)
    const toggleMenu = () => setMenuOpen(prev => !prev)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/store', label: 'Store' },
        { href: '/categories', label: 'Categories' },
    ]

    const linkClass = (href: string) =>
        `transition-colors hover:text-black ${pathname === href ? 'text-black font-bold border-b-2 border-black' : 'text-gray-600'
        }`

    return (
        <nav className='flex flex-col w-full'>
            {/* Promo Banner */}
            <AnimatePresence>
                {showPromo && (
                    <motion.div
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        className='px-4 py-2 bg-black text-white flex justify-between lg:justify-center space-x-6 items-center'
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
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <Search />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className='cursor-pointer hidden lg:flex'>
                                <User className='w-5 h-5' />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end' className='w-40'>
                            <DropdownMenuItem asChild>
                                <Link href='/login' className='w-full'>Login</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href='/register' className='w-full'>Register</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
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
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={linkClass(link.href)}
                                    onClick={toggleMenu}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className='flex justify-around text-gray-600'>
                            <Instagram />
                            <Facebook />
                            <Twitter />
                        </div>

                        <div className='flex flex-col gap-4 mt-4'>
                            <h2 className='font-semibold'>My Account</h2>
                            <div className='flex items-center gap-3 text-sm cursor-pointer'>
                                <Link href='/login' className='flex items-center space-x-2'>
                                    <Key size={14} />
                                    <span>Sign In</span>
                                </Link>

                            </div>
                            <div className='flex items-center gap-3 text-sm cursor-pointer'>
                                <Link href='/register' className='flex space-x-2 items-center'>
                                    <User size={14} />
                                    <span>Register</span>
                                </Link>

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
