import  { ThreeDots } from  'react-loader-spinner'
import React from 'react'

export default function Loader(){
    return(
        <>
            <ThreeDots 
                color="#E5E5E5"
                height={40} 
                width={90}
                margin={40}
                display="flex"
                align-items="center"
                justify-content="center"
            />
        </>
        );
    };