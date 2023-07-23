import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Heading,Button,Text } from '@chakra-ui/react'
import "../assets/Features.css"



const Features = () => {

    const CardFeature =()=>{
        return (
            <div id='use-now'>
            <Card align='center'>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'>View here</Button>
                </CardFooter>
            </Card>
        </div>
        )
    }

    return (
        <div id='use-now'>
            <CardFeature/>
            <CardFeature/>
            <CardFeature/>
        </div>
    )
}

export default Features


