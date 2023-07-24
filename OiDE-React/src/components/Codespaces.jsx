import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Textarea, Text, SimpleGrid, Box, Button } from '@chakra-ui/react'
import axios from 'axios';
import "../assets/Codespaces.css"
const Codespaces = () => {
    const { lang } = useParams();
    let [value, setValue] = React.useState('')
    let [OUTPUT__INJECTION__FROM__NODEJS,setOUTPUT__INJECTION__FROM__NODEJS] = useState(null)
    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    let [buttonClick, setbuttonClick] = useState(false)
    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await axios.post('http://127.0.0.1:5000/api', {
                    code: value,
                    language:lang[0].toLowerCase() + lang.slice(1,lang.length)
                })
                console.log(data + "data from fetchData")
                return data
            }
            catch (e) {
                console.log(e.message)
                return null;
            }
        }

        console.log(buttonClick)
        if (buttonClick === true) {
            console.log('Compiling..')
            fetchData().then((res) => {
                setOUTPUT__INJECTION__FROM__NODEJS(res.data.output)
            }).catch(e => {
                console.log(e.message)
            }).finally(() => {
                setbuttonClick(false)
            })
        }

    }, [buttonClick])




    return (
        <div id='gon' style={{ width: '100%' }}>
            <h1 style={{ textAlign: 'center' }}>Welcome to {lang} IDE!</h1>
            <Text mb='8px'></Text>
            <SimpleGrid columns={2} spacing={10} height='100vh' style={{ scrollbarWidth: 'none', margin: '0' }}>

                <Box style={{ marginLeft: '60px' }}>
                    <Textarea
                        onChange={handleInputChange}
                        placeholder='Input'
                        size='lg'
                        width='90%'
                        height='80%'
                        value={value}
                        id='textarea'
                        errorBorderColor='none'
                        autoCorrect='false'
                    ></Textarea>
                    <Button style={{ marginLeft: '77%', marginTop: '10px' }} onClick={() => { setbuttonClick((prevState) => !prevState) }} isDisabled={buttonClick}>Compile</Button>

                </Box>
                <Box>
                    <Textarea style={{ marginRight: '10px' }}
                        onChange={handleInputChange}
                        placeholder='Output'
                        size='lg'
                        width='90%'
                        height='80%'
                        id='textarea'
                        className='textarea'
                        value={OUTPUT__INJECTION__FROM__NODEJS}
                    />

                </Box>
            </SimpleGrid>
        </div>
    )
}

export default Codespaces
