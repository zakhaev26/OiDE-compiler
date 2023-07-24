import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Text, SimpleGrid } from '@chakra-ui/react'
import "../assets/Languages.css"
import lang from "../lang.map.js"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Languages = () => {
  console.log(lang.language)

  return (
    <>
      <div id='lang-sup'>
        <h1 id='hero-lang'>Languages Supported</h1>
      </div>

      <div>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          {
            lang.language.map((language, i) => { return <LangCard id={i} lang={language[0].toUpperCase() + language.slice(1, language.length)} /> })
          }
        </SimpleGrid>
      </div>
    </>
  )
}

const LangCard = ({ lang, i }) => {

  return (
    <Card key={i} >
      <CardHeader>
        <Heading size='sm'>{lang}</Heading>
      </CardHeader>
      <CardFooter style={{backgroundColor:'azure'}}>
      <Link to={`/code/${lang}`}>
        <Button  >Code in {lang} !</Button>
      </Link>
      </CardFooter>
    </Card>
  )
}

export default Languages
