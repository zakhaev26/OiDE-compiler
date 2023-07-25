'use client'
import "../assets/Features.css"
import TerminalIcon from '@mui/icons-material/Terminal';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import WebhookIcon from '@mui/icons-material/Webhook';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import AndroidIcon from '@mui/icons-material/Android';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'

const Card = ({ heading, description, icon, href }) => {
  return (

    <Box id="box"
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}

          id="icon"
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
          
        </Flex>
        <Box mt={2}>
          <Heading size="md" id='heading__text'>{heading}</Heading>
          <Text mt={1} fontSize={'sm'} id="card__text">
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        <h4>Experience the convenience of coding anytime, anywhere</h4>
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Language Support'}
            description={`With over 70+ supported languages, you can code in your language of choice. From popular ones like Python, JavaScript, and C++, to more niche languages, this IDE has you covered.`}
            href={'#'}
            icon={<TerminalIcon style={{color:'red'}}/>}
          />
          <Card
            heading={'MERN Efficiency'}
            icon={<FlashOnIcon style={{color:'blue'}}/>}
            description={`This IDE leverages the MERN stack's versatility to provide you with a smooth and efficient coding environment. Seamlessly code without worrying about compatibility issues.`}
            href={'#'}
          />
          <Card
            heading={'API Compilation'}
            icon={<WebhookIcon  style={{color:'magenta'}}/>}
            description={`Powerful API integration handles the heavy lifting for you. Compile and execute your code with just a click, saving you valuable time and effort`}
            href={'#'}
          />
          <Card
            heading={'UI'}
            icon={<ViewQuiltIcon  style={{color:'purple'}}/>}
            description={`Code on-the-go with OiDE's responsive design.`}
            href={'#'}
          />
          <Card
            heading={'Android and Web Support'}
            icon={<AndroidIcon  style={{color:'green'}}/>}
            description={`Available in Android App and Web Version`}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}