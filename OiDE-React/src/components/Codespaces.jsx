import React from 'react'
import { useParams } from 'react-router-dom';
import { Container, Textarea, Text, SimpleGrid,Box,Button } from '@chakra-ui/react'
const Codespaces = () => {
    const { lang } = useParams();
    console.log(lang)
    let [value, setValue] = React.useState('')

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }
    return (
            <div id='gon' style={{ width: '100%'}}>
                <h1 style={{textAlign:'center'}}>Welcome to {lang} IDE!</h1>
                <Text mb='8px'></Text>
                <SimpleGrid columns={2} spacing={10} height='100vh' style={{scrollbarWidth:'none' ,margin:'0'}}>
                    
                    <Box style={{marginLeft:'60px'}}>
                        <Textarea
                            onChange={handleInputChange}
                            placeholder='Here is a sample placeholder'
                            size='lg'
                            width='90%'
                            height='80%'
                            
                        ></Textarea>
                <Button style={{marginLeft:'77%',marginTop:'10px'}}>Compile</Button>

                    </Box>
                    <Box>
                        <Textarea style={{marginRight:'10px'}}
                            onChange={handleInputChange}
                            placeholder='Here is a sample placeholder'
                            size='lg'
                            width='90%'
                            height='80%'
                        />
                        
                    </Box>
                </SimpleGrid>
            </div>
    )
}

export default Codespaces
