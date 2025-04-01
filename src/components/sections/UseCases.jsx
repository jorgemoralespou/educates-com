import { Box, Container, SimpleGrid, Heading, Text, Icon } from '@chakra-ui/react'
import { FaLaptopCode, FaUsers, FaRocket, FaChalkboardTeacher } from 'react-icons/fa'
import '../../styles/sections.css'

const UseCaseCard = ({ title, description, icon }) => (
  <Box 
    bg="white" 
    p={8} 
    borderRadius="lg" 
    boxShadow="md"
    textAlign="center"
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
  >
    <Icon as={icon} w={10} h={10} color="blue.500" mb={4} />
    <Heading as="h3" size="md" mb={4}>
      {title}
    </Heading>
    <Text color="gray.600">
      {description}
    </Text>
  </Box>
)

const UseCases = () => {
  const useCases = [
    {
      title: 'Interactive Workshops',
      description: 'Host engaging workshops with hands-on exercises and real-time feedback.',
      icon: FaLaptopCode,
    },
    {
      title: 'Team Training',
      description: 'Train your team effectively with customized learning environments.',
      icon: FaUsers,
    },
    {
      title: 'Product Demos',
      description: 'Showcase your products with interactive demonstrations and tutorials.',
      icon: FaRocket,
    },
    {
      title: 'Educational Programs',
      description: 'Create comprehensive educational programs with practical exercises.',
      icon: FaChalkboardTeacher,
    },
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
          <Heading textAlign="center" mb={12}>
            Use Cases
          </Heading>
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 4 }} 
            spacing={8}
            px={{ base: 4, md: 0 }}
          >
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}

export default UseCases 