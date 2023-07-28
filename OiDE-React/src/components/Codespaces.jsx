import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Textarea, Text, SimpleGrid, Box, Button } from '@chakra-ui/react'
import axios from 'axios';
import "../assets/Codespaces.css"

const Codespaces = () => {
    const { lang } = useParams();
    let [value, setValue] = React.useState('')
    let [OUTPUT__INJECTION__FROM__NODEJS,setOUTPUT__INJECTION__FROM__NODEJS] = useState("")
    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }
    let [id,setId] = useState(null)
    let [version,setVersion] = useState(null)
    let [versionName,setVersionName] = useState(null)
    let [mem,setMem] = useState(null)

    let [buttonClick, setbuttonClick] = useState(false)
    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await axios.post('https://oide-node.onrender.com/api', {
                    code: value,
                    language:lang[0].toLowerCase() + lang.slice(1,lang.length)
                })
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
                setId(null)
                setVersion(null)
                setVersionName(null)
                setMem(null);
                const {id,version,version_name} = res.data.language;
                const {memory } = res.data;
                res.data.output?(
                setOUTPUT__INJECTION__FROM__NODEJS(res.data.output)):
                setOUTPUT__INJECTION__FROM__NODEJS(res)
                setId(id)
                setVersion(version)
                setVersionName(version_name)
                setMem(memory);
            }).catch(e => {
                console.log(e.message)
                setOUTPUT__INJECTION__FROM__NODEJS(e.message)
            }).finally(() => {
                setbuttonClick(false)
            })
        }

    }, [buttonClick])




    return (
        <div id='gon' style={{ width: '100%' }}>  return (

            <h1 style={{ textAlign: 'center' }} className='gradient-text'>Welcome to {lang} IDE!</h1>
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
                    <Button style={{ marginLeft: '75.8%', marginTop: '10px' }} onClick={() => { setbuttonClick((prevState) => !prevState) }} isDisabled={buttonClick}>Compile</Button>

                </Box>
                <Box>
                    <Textarea style={{ marginRight: '10px' }}
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
            <h6>Memory : {mem}</h6>
            <h6>Version : {version}</h6>
            <h6>Version Name : {versionName}</h6>
            <h6>ID : {id}</h6>
        </div>
    )
}

export default Codespaces
