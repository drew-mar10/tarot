import React from "react";
import { Text, Heading, Box, Center, Image } from "@chakra-ui/react";

const Card = props => {
    return (
    <>

        <Box
            bg='white'
            margin='5pt'
            paddingTop='10pt'
            paddingLeft='5pt'
            paddingRight='5pt'
            paddingBottom='10pt'
            w='220px'
            borderWidth='1px'
            display='flex'
            flex='3'
            flexDirection='column'
            alignItems='center'
            key={props.id}
        >
        <Center />

        <Image
            src={props.src}
            alt="tarot card"
            width={125}
            height={200}
            loader={props.loaderProp}
            unoptimized="true"
        />
        <Heading>{props.name}</Heading>
        <Text>arcana: {props.arcana}</Text>
        <Text>description: {props.description}</Text>
        </Box>
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