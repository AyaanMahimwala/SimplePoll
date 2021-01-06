import React from 'react'
import {HorizontalBar} from 'react-chartjs-2';
import {
    Text
} from '@chakra-ui/react';

export default function Results(props) {
    const {optionVotes} = props.updatedPoll;
    if(optionVotes){
        const data = {
            labels: [`${optionVotes[0].optionTitle}`, `${optionVotes[1].optionTitle}`],
            datasets: [
              {
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)'],
                data: [optionVotes[0].votes, optionVotes[1].votes]
              }
            ]
          };
    
          const options = {
            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0
                },
                gridLines: {
                    display:false
                }    
              }]
            },
            maintainAspectRatio: true,
            legend: {display: false}
          };
        return (
            <HorizontalBar data={data} options={options} />
                    
        )
    }else{
        <Text>Fetching results...</Text>
    }

    
}
