import { Box } from '@chakra-ui/react'
import Description from '../components/sections/Description'
import UseCases from '../components/sections/UseCases'
import Features from '../components/sections/Features'
import Team from '../components/sections/Team'
import References from '../components/sections/References'
import Pricing from '../components/sections/Pricing'
import '../styles/sections.css'

const Home = () => {
  return (
    <Box>
      <Box 
        id="description"
        className="section-container section-odd"
      >
        <Box className="section-content">
          <Description />
        </Box>
      </Box>
      <Box 
        id="use-cases"
        className="section-container section-even"
      >
        <Box className="section-content">
          <UseCases />
        </Box>
      </Box>
      <Box 
        id="features"
        className="section-container section-odd"
      >
        <Box className="section-content">
          <Features />
        </Box>
      </Box>
      <Box 
        id="team"
        className="section-container section-even"
      >
        <Box className="section-content">
          <Team />
        </Box>
      </Box>
      <Box 
        id="references"
        className="section-container section-odd"
      >
        <Box className="section-content">
          <References />
        </Box>
      </Box>
      <Box 
        id="pricing"
        className="section-container section-even"
      >
        <Box className="section-content">
          <Pricing />
        </Box>
      </Box>
    </Box>
  )
}

export default Home 