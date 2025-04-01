import { Box, Container, SimpleGrid, Heading, Text, VStack, Icon } from '@chakra-ui/react'
import { FaCloud, FaLock, FaExpandArrowsAlt, FaPuzzlePiece, FaBook, FaCode, FaPencilAlt, FaGlobe, FaDocker } from 'react-icons/fa'
import '../../styles/sections.css'

const Feature = ({ title, description, icon }) => (
  <VStack 
    align="start" 
    spacing={4} 
    p={6} 
    bg="white" 
    borderRadius="lg" 
    boxShadow="sm"
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
  >
    <Icon as={icon} w={8} h={8} color="blue.500" />
    <Heading size="md">{title}</Heading>
    <Text color="gray.600">{description}</Text>
  </VStack>
)

const Features = () => {
  const features = [
    {
      title: 'Kubernetes Native',
      description: 'Built from the ground up to run natively on Kubernetes, leveraging its powerful features and ecosystem.',
      icon: FaCloud,
    },
    {
      title: 'Secure by Design',
      description: 'Enterprise-grade security with isolated environments and controlled access for each participant.',
      icon: FaLock,
    },
    {
      title: 'Highly Scalable',
      description: 'Scale your training environments effortlessly to accommodate any number of participants.',
      icon: FaExpandArrowsAlt,
    },
    {
      title: 'Extensible Platform',
      description: 'Customize and extend the platform to meet your specific training needs and requirements.',
      icon: FaPuzzlePiece,
    },
    {
      title: 'Local Container Runtime',
      description: 'Run the platform locally using a local container runtime.',
      icon: FaDocker,
    },
    {
      title: 'Self Paced or Supervised',
      description: 'Choose between self-paced or supervised training modes to suit your learning style and needs.',
      icon: FaBook,
    },
    {
      title: 'Developer Friendly',
      description: 'The platform is designed to be developer friendly, with a focus on ease of use and customization.',
      icon: FaCode,
    },
    {
      title: 'Customizable',
      description: 'Customize the platform to your specific training needs and requirements.',
      icon: FaPencilAlt,
    },
    { 
      title: 'Run Anywhere',
      description: 'The platform can be run anywhere, whether it be on a local machine, a cloud provider, or a Kubernetes cluster.',
      icon: FaGlobe,
    },
    {
      title: 'Open Source',
      description: 'The platform is open source, so you can customize it to your specific training needs and requirements.',
      icon: FaCode,
    }
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
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading mb={4}>Platform Features</Heading>
              <Text fontSize="lg" color="gray.600" maxW="800px">
                Educates Training Platform provides a comprehensive set of features designed to make your training and workshop experiences seamless and effective.
              </Text>
            </Box>
            
            <SimpleGrid 
              columns={{ base: 1, md: 2 }} 
              spacing={8} 
              w="full"
              px={{ base: 4, md: 0 }}
            >
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

export default Features 