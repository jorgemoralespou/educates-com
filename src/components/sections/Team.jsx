import { Box, Container, SimpleGrid, Heading, Text, Image, VStack, HStack, Link, Icon } from '@chakra-ui/react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import '../../styles/sections.css'

const TeamMember = ({ name, role, image, github, twitter, linkedin }) => (
  <VStack
    bg="white"
    p={6}
    borderRadius="lg"
    boxShadow="md"
    spacing={4}
    align="center"
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
  >
    <Image
      src={image}
      alt={name}
      borderRadius="full"
      boxSize="150px"
      objectFit="cover"
    />
    <VStack spacing={2}>
      <Heading size="md">{name}</Heading>
      <Text color="gray.600">{role}</Text>
    </VStack>
    <HStack spacing={4}>
      {github && (
        <Link href={github} isExternal>
          <Icon as={FaGithub} w={6} h={6} color="gray.600" />
        </Link>
      )}
      {twitter && (
        <Link href={twitter} isExternal>
          <Icon as={FaTwitter} w={6} h={6} color="twitter.500" />
        </Link>
      )}
      {linkedin && (
        <Link href={linkedin} isExternal>
          <Icon as={FaLinkedin} w={6} h={6} color="linkedin.500" />
        </Link>
      )}
    </HStack>
  </VStack>
)

const Team = () => {
  const teamMembers = [
    {
      name: 'Graham Dumpleton',
      role: 'Project co-Lead',
      image: 'https://avatars.githubusercontent.com/u/507637?v=4',
      github: 'https://github.com/GrahamDumpleton',
      twitter: 'https://twitter.com/GrahamDumpleton',
      linkedin: 'https://linkedin.com/in/GrahamDumpleton',
    },
    {
      name: 'Jorge Morales',
      role: 'Project co-Lead',
      image: 'https://avatars.githubusercontent.com/u/78350?v=4',
      github: 'https://github.com/jorgemoralespou',
      twitter: 'https://twitter.com/jorgemoralespou',
      linkedin: 'https://linkedin.com/in/jorgemoralespou',
    },
    // {
    //   name: 'Mike Johnson',
    //   role: 'DevOps Engineer',
    //   image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    //   github: 'https://github.com/mikejohnson',
    //   twitter: 'https://twitter.com/mikejohnson',
    //   linkedin: 'https://linkedin.com/in/mikejohnson',
    // },
    // {
    //   name: 'Sarah Wilson',
    //   role: 'UX Designer',
    //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    //   github: 'https://github.com/sarahwilson',
    //   twitter: 'https://twitter.com/sarahwilson',
    //   linkedin: 'https://linkedin.com/in/sarahwilson',
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
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading mb={4}>Meet Our Team</Heading>
              <Text fontSize="lg" color="gray.600" maxW="800px">
                We are a dedicated team of professionals working together to make Educates the best platform for interactive learning.
              </Text>
            </Box>
            
            <SimpleGrid 
              columns={{ base: 1, md: 2, lg: Math.min(teamMembers.length, 4) }} 
              spacing={8} 
              w="full"
              px={{ base: 4, md: 0 }}
            >
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

export default Team 