import { Box, Button, Text, Link as ChakraLink, Image, IconButton, useDisclosure } from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isOpen, onToggle } = useDisclosure()

  const navItems = [
    { name: 'Description', to: 'description' },
    { name: 'Use Cases', to: 'use-cases' },
    { name: 'Features', to: 'features' },
    { name: 'Team', to: 'team' },
    { name: 'References', to: 'references' },
    { name: 'Pricing', to: 'pricing' },
  ]

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    onToggle()
  }

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <Box as="nav" className="navbar">
      <Box className="navbar-content">
        <ChakraLink 
          as={ScrollLink} 
          to="description" 
          smooth={true} 
          duration={500} 
          offset={-80}
          className="navbar-brand"
        >
          <Image src="/logo.svg" h="40px" alt="Educates Logo" />
          <Text fontSize="xl" fontWeight="bold">Educates Training Platform</Text>
        </ChakraLink>

        <Box className="navbar-links">
          {navItems.map((item) => (
            <ChakraLink
              key={item.to}
              as={ScrollLink}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              cursor="pointer"
              _hover={{ color: 'blue.500' }}
            >
              {item.name}
            </ChakraLink>
          ))}
          <Button colorScheme="blue" size="md">
            Login / Sign Up
          </Button>
        </Box>

        <IconButton
          display={{ base: 'block', lg: 'none' }}
          icon={<HamburgerIcon />}
          variant="ghost"
          onClick={handleMenuToggle}
          aria-label="Toggle navigation"
          className="navbar-menu-button"
        />

        <Box 
          className={`navbar-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item) => (
            <ChakraLink
              key={item.to}
              as={ScrollLink}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              cursor="pointer"
              _hover={{ color: 'blue.500' }}
              onClick={handleNavItemClick}
            >
              {item.name}
            </ChakraLink>
          ))}
          <Button colorScheme="blue" size="md" width="100%">
            Login / Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar 