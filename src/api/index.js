import axios from 'axios';

const url = 'https://ttsd9ikku8.execute-api.us-west-1.amazonaws.com/dev';

export const sendPoll = async (pollInfo) => {
    console.log("sending poll");
    let changeableUrl = url; 
    if(pollInfo){
        changeableUrl = `${url}/createPoll`;
    }
    try {
        const result = await axios.post(changeableUrl, pollInfo);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const getPoll = async (pollId) => { 
    let changeableUrl = url; 
    if(pollId){
        changeableUrl = `${url}/poll/${pollId}`;
    }
    try {
        const result = await axios.get(changeableUrl);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const vote = async (pollId, option) => {
    let changeableUrl = url; 
    if(pollId){
        changeableUrl = `${url}/vote/${pollId}`;
    }

    try {
        const result = await axios.patch(changeableUrl, option);
        return result;
    } catch (error) {
        console.log(error);
    }
}