import React, { useState } from 'react'
import { Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button} from '@chakra-ui/react';
import MyAlert from './MyAlert';
import {sendPoll} from '../api/index';

export default function PollForm() {
    const [title, setTitle] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [link, setLink] = useState("");

    function titleChange(event){
        setTitle(event.target.value);
    }

    function option1Change(event){
        setOption1(event.target.value);
    }

    function option2Change(event){
        setOption2(event.target.value);
    }

    function submit(event){
        const pollInfo = {
            pollTitle: title,
            options: [option1, option2]
        };
        sendPoll(pollInfo).then((result) => {
            const { link } = result.data.poll;
            setLink(link);
        });
        setTitle("");
        setOption1("");
        setOption2("");
        setSubmitted(true);
        event.preventDefault();
    }

    const finish = () =>{
        setSubmitted(false);
        setLink("");
    } 


    return (
        <Flex direction='column' width="full" align="center" justifyContent="center">
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" mt={6}>
            <Box textAlign="center">
                <Heading>Create your SimplePoll!</Heading>
            </Box>
            <Box my={4} textAlign="left">
                <form onSubmit={submit}>
                <FormControl isRequired>
                    <FormLabel>Give your SimplePoll a title:</FormLabel>
                    <Input value={title} onChange={titleChange} placeholder="Poll Title" />
                </FormControl>
                <FormControl mt={6} isRequired>
                    <FormLabel>Specify the Options:</FormLabel>
                    <Input my={2} placeholder="Option #1" value={option1} onChange={option1Change} />
                    <Input my={2} placeholder="Option #2" value={option2} onChange={option2Change} />
                </FormControl>
                <Button colorScheme="blue" width="full" mt={4} type="submit">
                    Create!
                </Button>
                </form>
            </Box>
        </Box>
        {submitted === true ? <MyAlert link={link} isOpen={submitted} finish={finish}/> : null}
      </Flex>
        
    )
}
