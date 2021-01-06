import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {getPoll, vote} from '../api/index';
import Results from './Results';
import { Flex,
    Heading,
    Divider,
    Button,
    Box,
    useToast} from '@chakra-ui/react';
    

export default function Poll(props) {
    let { pollId } = useParams();
    const [pollTitle, setTitle] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [pollIdLong, setPollIdLong] = useState("");
    const [voted, setVoted] = useState(false);
    const [updatedPoll, setUpdatedPoll] = useState({});
    const toast = useToast()
    const submitVote = (option) => {
        if(option !== "" && pollIdLong !== ""){
            const pollVote = {
                "vote": option
            }
            vote(pollIdLong, pollVote).then((result) =>{
                
                setUpdatedPoll(result.data.updatedPoll);
                setVoted(true);
            });
            toast({
                title: "Thanks for voting!",
                description: `You're vote for ${option} has been recorded!`,
                status: "success",
                duration: 5000,
                isClosable: true,
              })

        }
    }

    const showResults = () => {
        getPoll(pollId).then((result) => {
            setUpdatedPoll(result.data.poll);
            setVoted(true);
        });
    }

    useEffect(() => {
        getPoll(pollId).then((result) => {
           
            const {pollTitle, optionVotes, id} = result.data.poll;
            setPollIdLong(id);
            const opt1 = optionVotes[0].optionTitle;
            setOption1(opt1);
            const opt2 = optionVotes[1].optionTitle;
            setOption2(opt2);
            setTitle(pollTitle);
        });
      }, [pollId]);
    
    return (
        
        <Flex direction='column' width="full" align="center" justifyContent="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" mt={6}>
                <Box textAlign="center">
                    <Heading>{pollTitle}</Heading>
                </Box>
                <Divider my={3}></Divider>
                {voted ? <Results updatedPoll={updatedPoll}/> : 
                <Flex my={4} textAlign="left">
                    <Button colorScheme="blue" width="full" mx={3} onClick={() => submitVote(option1)} >{option1}</Button>
                    <Button colorScheme="blue" width="full" mx={3} onClick={() => submitVote(option2)} >{option2}</Button>
                </Flex> }
                <Flex direction='column' my={4} textAlign="left">
                    <Divider my={3}></Divider>
                    <Button colorScheme="blue" width="full" onClick={showResults}>Results</Button>
                </Flex>
            </Box>
        </Flex>
    )
}
