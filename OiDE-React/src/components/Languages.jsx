import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Text, SimpleGrid } from '@chakra-ui/react'
import "../assets/Languages.css"
import lang from "../lang.js"

const Languages = () => {
  // console.log(lang.language)
  return (
    <>
      <div id='lang-sup'>
        <h1>Languages Supported</h1>
      </div>

      <div>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          {
            lang.language.map(language => {return <LangCard lang={language} /> })
          }
        </SimpleGrid>
      </div>
    </>
  )
}

const LangCard = ({ lang }) => {
  return (<Card>
    <CardHeader>
      <Heading size='sm'>{lang}</Heading>
    </CardHeader>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>)
}

export default Languages
