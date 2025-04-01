import { Box, Container, SimpleGrid, Heading, Text, Image, VStack } from '@chakra-ui/react'
import '../../styles/sections.css'

const References = () => {
  const companies = [
    {
      name: 'Terasky',
      logo: '/customers/terasky-logo.svg',
      testimonial: "Educates has transformed how we deliver technical training to our teams.",
    },
    {
      name: 'Broadcom',
      logo: '/customers/broadcom-logo.png',
      testimonial: "The platform's flexibility and ease of use have made our workshops much more effective.",
    },
    {
      name: 'Netways',
      logo: '/customers/netways-logo.png',
      testimonial: "We've seen a significant improvement in learning outcomes since adopting Educates.",
    },
    // {
    //   name: 'Company 4',
    //   logo: 'https://via.placeholder.com/150x50?text=Logo+4',
    //   testimonial: "The support and documentation have been exceptional throughout our journey.",
    // },
  ]

  return (
    <Box className="section-box">
      <Container maxW="2200px" h="100%" mx="auto">
        <Box 
          py={{ base: 20, md: 0 }}
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <VStack spacing={16}>
            <Box textAlign="center">
              <Heading mb={4}>Trusted By Industry Leaders</Heading>
              <Text fontSize="lg" color="gray.600" maxW="800px">
                Join the growing list of organizations that trust Educates Training Platform for their training needs.
              </Text>
            </Box>

            <SimpleGrid 
              columns={{ base: 2, sm: 2, md: Math.min(companies.length, 4) }} 
              spacing={8} 
              w="full"
              px={{ base: 4, md: 0 }}
            >
              {companies.map((company, index) => (
                <Box
                  key={index}
                  p={6}
                  textAlign="center"
                  filter="grayscale(1)"
                  transition="all 0.3s"
                  _hover={{ filter: 'grayscale(0)' }}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    mx="auto"
                    mb={4}
                  />
                </Box>
              ))}
            </SimpleGrid>

            <SimpleGrid 
              columns={{ base: 1, md: 2 }} 
              spacing={8} 
              w="full"
              px={{ base: 4, md: 0 }}
            >
              {companies.map((company, index) => (
                <Box
                  key={index}
                  bg="gray.50"
                  p={8}
                  borderRadius="lg"
                  position="relative"
                >
                  <Text fontSize="lg" fontStyle="italic" color="gray.600">
                    "{company.testimonial}"
                  </Text>
                  <Box mt={4}>
                    <Image
                      src={company.logo}
                      alt={company.name}
                      h="30px"
                      objectFit="contain"
                    />
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

export default References 