import React from "react";
import { useState, useContext } from "react";
import { Context } from "../pages/AppContext";
import { Text, Heading, Box, Center, Image, Container } from "@chakra-ui/react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import { useSpring, animated } from '@react-spring/web';
import CardBack from '../public/CardBack.jpeg'

    const CardStyle = {
        // bg:'white',
        // margin:'5pt',
        // marginTop: '5pt',
        // paddingTop:'5pt',
        // paddingLeft:'5pt',
        // paddingRight:'5pt',
        // paddingBottom:'10pt',
        // w:'220px',
        // borderWidth:'1px',
        // display:'flex',
        // // flex:'3',
        // flexDirection:'column',
        // alignItems:'center',
    }


export default function Card(props) {
    const { contentVariants, cardContentVariants, thumbnailVariants, expandedVariants, contentBlockVariants, cardVariants } = useContext(Context)
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);


    return (

    <Box
        key={props.id}
        // style={CardStyle}
        bg='lightPink'
        borderRadius='10'
    >
        <Image
            // key={props.id}
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
