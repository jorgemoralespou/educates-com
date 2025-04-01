import { Box, Container, Flex, Heading, Text, Image } from '@chakra-ui/react'
import '../../styles/sections.css'

const Description = () => {
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
          <Flex 
            align="center" 
            gap={10} 
            h="100%"
          >
            <Box flex="1">
              <Heading 
                as="h1" 
                size="2xl" 
                mb={6}
                lineHeight="shorter"
                textAlign="center"
              >
                Interactive Training Platform
              </Heading>
              <Text 
                fontSize="xl" 
                color="gray.600" 
                lineHeight="tall"
                textAlign="center"
              >
                The Educates project provides a system for hosting interactive workshop environments in Kubernetes, 
                or on top of a local container runtime. It can be used for self paced or supervised workshops. 
                It can also be useful where you need to package up demos of applications hosted in Kubernetes 
                or a local container runtime.
              </Text>
            </Box>
            <Box 
              flex="1" 
              display={{ base: 'none', md: 'flex' }}
              justifyContent="center"
              alignItems="center"
            >
              <Image 
                src="/screenshot.png" 
                alt="Educates Platform"
                w="80%"
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Description 