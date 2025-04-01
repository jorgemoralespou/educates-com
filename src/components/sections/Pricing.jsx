import { Box, Container, SimpleGrid, Heading, Text, Button, VStack, List, ListItem, ListIcon } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'
import '../../styles/sections.css'
import { EDUCATES_PROJECT_URL } from '../../constants/urls'

const PriceCard = ({ name, price, features, isPopular, isOSS }) => (
  <Box
    bg="white"
    p={8}
    borderRadius="lg"
    boxShadow={isPopular ? 'xl' : 'md'}
    border={isPopular ? '2px solid' : '1px solid'}
    borderColor={isPopular ? 'blue.500' : 'gray.200'}
    position="relative"
    transform={isPopular ? 'scale(1.05)' : 'none'}
    zIndex={isPopular ? 1 : 0}
    height="100%"
    display="flex"
    flexDirection="column"
  >
    {isPopular && (
      <Box
        position="absolute"
        top="-12px"
        right="50%"
        transform="translateX(50%)"
        bg="blue.500"
        color="white"
        px={4}
        py={1}
        borderRadius="full"
        fontSize="sm"
        fontWeight="bold"
      >
        Most Popular
      </Box>
    )}
    <VStack spacing={5} align="stretch" flex="1">
      <Box>
        <Heading size="lg" mb={2}>{name}</Heading>
        { Number.parseInt(price) >=0 &&
        <>
        <Text fontSize="3xl" fontWeight="bold">
          ${price}
          <Text as="span" fontSize="sm" fontWeight="normal" color="gray.600">
            /month
          </Text>
        </Text>
        </>
        ||  
        <Text fontSize="3xl" fontWeight="bold">
          {price}
        </Text>
        }
      </Box>
      
      <List spacing={3} flex="1">
        {features.map((feature, index) => (
          <ListItem key={index} display="flex" alignItems="center">
            <ListIcon as={FaCheck} color="green.500" />
            {feature}
          </ListItem>
        ))}
      </List>
      
      <Box mt="auto">
        {isOSS ? (
          <Button
            as="a"
            href={EDUCATES_PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme={isPopular ? 'blue' : 'gray'}
            size="lg"
            w="full"
          >
            Visit Project
          </Button>
        ) : (
          <Button
            colorScheme={isPopular ? 'blue' : 'gray'}
            size="lg"
            w="full"
          >
            Get Started
          </Button>
        )}
      </Box>
    </VStack>
  </Box>
)

const Pricing = () => {
  const plans = [
    {
      name: 'Open source',
      price: '0',
      features: [
        'Self-hosted (Install on your own infrastructure)',
        'Community support',
        'Basic features',
        'GitHub repository access',
        'Apache 2.0 License'
      ],
      isOSS: true,
    },
    {
      name: 'Free',
      price: '0',
      features: [
        'Up to 10 workshops',
        'Basic support',
        'Community access',
        'Basic analytics',
      ],
    },
    {
      name: 'Professional',
      price: '49',
      features: [
        'Up to 100 workshops',
        'Advanced support',
        'Advanced analytics',
      ],
    },
    {
      name: 'Enterprise',
      price: '299',
      features: [
        'Everything in Professional',
        'White label of site',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'Dedicated infrastructure',
      ],
    },
    {
      name: 'Consultancy',
      price: 'On request',
      features: [
        'Time based consultancy',
        'Priority support',
      ],
      isPopular: true,
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
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading mb={4}>Simple, Transparent Pricing</Heading>
              <Text fontSize="lg" color="gray.600" maxW="800px">
                Choose the plan that best fits your needs. All paid plans include a 14-day free trial.
              </Text>
            </Box>
            
            <SimpleGrid 
              columns={{ base: 1, lg: Math.min(plans.length, 5) }} 
              spacing={{ base: 8, lg: 0 }} 
              w="full"
              px={{ base: 4, md: 0 }}
            >
              {plans.map((plan, index) => (
                <Box key={index} px={4} height="100%">
                  <PriceCard {...plan} />
                </Box>
              ))}
            </SimpleGrid>
            
            <Box textAlign="center" pt={8}>
              <Text fontSize="sm" color="gray.600">
                Need a custom plan? <Button variant="link" colorScheme="blue">Contact us</Button>
              </Text>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

export default Pricing 