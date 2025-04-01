import { Box, Heading, Link, Icon } from '@chakra-ui/react'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import '../styles/footer.css'

const Footer = () => {
  const sections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Use Cases', href: '#use-cases' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Documentation', href: 'https://docs.educates.dev' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Team', href: '#team' },
        { label: 'References', href: '#references' },
        { label: 'Blog', href: 'https://educates.dev/blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Getting Started', href: 'https://educates.dev/getting-started-guides' },
        { label: 'Tutorials', href: 'https://educates.dev/getting-started-guides' },
        { label: 'API Reference', href: '#' },
        { label: 'Community', href: 'https://github.com/educates' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Support', href: '#' },
        { label: 'Sales', href: '#' },
        // { label: 'Partners', href: '#' },
        // { label: 'Careers', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/educates' },
    // { icon: FaTwitter, href: 'https://twitter.com' },
    // { icon: FaLinkedin, href: 'https://linkedin.com' },
    { icon: FaEnvelope, href: 'mailto:contact@educates.dev' },
  ]

  return (
    <Box className="footer">
      <Box className="footer-content">
        <Box className="footer-grid">
          {sections.map((section) => (
            <Box key={section.title} className="footer-section">
              <Heading as="h2" size="md">{section.title}</Heading>
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          ))}
        </Box>

        <Box className="footer-bottom">
          <Box color="gray.400">
            © {new Date().getFullYear()} Educates. All rights reserved.
          </Box>
          <Box className="footer-social">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="footer-link"
              >
                <Icon as={link.icon} w={5} h={5} />
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer 