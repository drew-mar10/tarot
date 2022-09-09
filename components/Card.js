import React from "react";
import { Box, Image } from "@chakra-ui/react";


export default function Card(props) {

    return (

    <Box
        // key={props.id}
        bg='lightPink'
        borderRadius='10'
    >
        <Image
            key={props.id}
            width={200}
            height={300}
            backgroundImage={props.src}
            // alt="tarot card"
            loader={props.loaderProp}
            unoptimized="true"
            // backgroundRepeat= "no-repeat"
            backgroundSize= "100% 100%"
            // borderRadius='3'
        />

    </Box>
    );
}
