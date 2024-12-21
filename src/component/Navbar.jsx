import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HeartHandshake, LayoutDashboard, Menu, X, DollarSign } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPhilanthropy, setIsPhilanthropy] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handlePhilanthropyClick = () => {
    setIsPhilanthropy(false)
    navigate("/philanthropy")
  }

  const handleInvestmentClick = () => {
    setIsPhilanthropy(true)
    navigate("/")
  }

  return (
    <nav className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 py-2 px-4 z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/">
          <motion.div 
            className="flex items-center space-x-2 justify-center cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/ballerlogo.png"
              alt="Ballers Logo"
              className="h-16 w-auto"
            />
            <span className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
              Ballers
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {isPhilanthropy ? (
            <NavItem 
              Icon={HeartHandshake} 
              label="Philanthropy" 
              to="/philanthropy" 
              isActive={location.pathname === '/philanthropy'}
              onClick={handlePhilanthropyClick}
            />
          ) : (
            <NavItem 
              Icon={DollarSign} 
              label="Investment" 
              to="/" 
              isActive={location.pathname === '/'}
              onClick={handleInvestmentClick}
            />
          )}
          <NavItem 
            Icon={LayoutDashboard} 
            label="Dashboard" 
            to="/dashboard"
            isActive={location.pathname === '/dashboard'}
            onClick={closeMenu}
          />
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <X className="h-8 w-8 text-amber-300" />
          ) : (
            <Menu className="h-8 w-8 text-amber-300" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-amber-800 to-amber-900 py-6 px-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {isPhilanthropy ? (
              <NavItem 
                Icon={HeartHandshake} 
                label="Philanthropy" 
                to="/philanthropy"
                isActive={location.pathname === '/philanthropy'}
                onClick={handlePhilanthropyClick}
              />
            ) : (
              <NavItem 
                Icon={DollarSign} 
                label="Investment" 
                to="/"
                isActive={location.pathname === '/'}
                onClick={handleInvestmentClick}
              />
            )}
            <NavItem 
              Icon={LayoutDashboard} 
              label="Dashboard" 
              to="/dashboard"
              isActive={location.pathname === '/dashboard'}
              onClick={closeMenu}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const NavItem = ({ Icon, label, to, isActive, onClick }) => (
  <Link to={to} onClick={onClick}>
    <motion.div 
      className={`flex items-center gap-3 cursor-pointer group ${
        isActive ? 'text-yellow-300' : 'text-amber-300'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className={`h-6 w-6 ${
        isActive 
          ? 'text-yellow-300' 
          : 'text-amber-300 group-hover:text-yellow-300'
      } transition-colors duration-300`} />
      <span className={`text-lg font-semibold ${
        isActive 
          ? 'text-yellow-300' 
          : 'text-amber-100 group-hover:text-yellow-300'
      } transition-colors duration-300 relative`}>
        {label}
      </span>
    </motion.div>
  </Link>
)

export default Navbar