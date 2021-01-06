import React, { Component } from 'react';
import { Flex,
    Box,
    Heading,
    Divider } from '@chakra-ui/react';

export default class PollTitle extends Component {

    render() {
        return (
        <Flex direction='column' width="full" align="center" justifyContent="center">
            <Box bg="blue.500" w="100%" h={1}></Box>
            <Flex direction='column'  py={5}w='100%'>
                <Heading px={5} fontSize="3xl">📊 SimplePoll</Heading>
                <Divider my={3} orientation="horizontal" w="100%"/>
            </Flex>
        </Flex> 
        )
    }
}
//<input type="submit" value="Submit" />
/*<div >
                <h2>Create a public poll and share it with your friends!</h2>
                <form className="content" onSubmit={this.handleSubmit} >
                    <label>
                        Poll Title:
                        <input type="text" value={this.state.pollTitle} onChange={this.handlePTChange} />
                    </label>
                    <label>
                        Option #1:
                        <input type="text" value={this.state.option1} onChange={this.handleO1Change} />
                    </label>
                    <label>
                        Option #2:
                        <input type="text" value={this.state.option2} onChange={this.handleO2Change} />
                    </label>
                    <Button colorScheme="blue">Submit</Button>
                    
                </form>
            </div>
            */
