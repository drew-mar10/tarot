import React from "react";
import { useState, useContext } from "react";
import { Context } from "../pages/AppContext";
import { Text, Heading, Box, Center, Image } from "@chakra-ui/react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";

const CardStyle = {
    bg:'white',
    margin:'5pt',
    paddingTop:'10pt',
    paddingLeft:'5pt',
    paddingRight:'5pt',
    paddingBottom:'10pt',
    w:'220px',
    borderWidth:'1px',
    display:'flex',
    flex:'3',
    flexDirection:'column',
    alignItems:'center',
}

const Card = props => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
    <>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Box
            style={CardStyle}
            onMouseEnter={() => setIsFlipped((prev) => !prev)}
            key={props.id}
            className='CardFront'
        >
        <Center />

        <Image
            src={props.src}
            alt="tarot card"
            width={225}
            height={300}
            loader={props.loaderProp}
            unoptimized="true"
        />
        </Box>

        {/* <motion.div
            whileHover={{ scale: 0.8 }}
        > */}

        <Box
            style={CardStyle}
            onMouseLeave={() => setIsFlipped((prev) => !prev)}
            key={props.id}
            className='CardBack'
            bg='white'
        >
        <Center />

            <Heading>{props.name}</Heading>
            <Text>arcana: {props.arcana}</Text>
            <Text>description: {props.description}</Text>

        {/* </motion.div> */}
        </Box>
        </ReactCardFlip>
    </>
    );
};

export default Card;


// export default function Card() {
//     const { tarots, loaderProp, cardDraw } = useContext(Context);


//     return (
//         <TarotCards
//         value={tarot.id}
//         />
//     )
// }