import React from "react";
import { useContext, useState } from "react";
import { Context } from "./AppContext";
import Card from "../components/Card";
import { Box, Spacer, Text, Container } from "@chakra-ui/react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";


    // function BottomSheet({ onClose }) {
    //     const shouldClose =
    //         // velocity.y > 20 || (velocity.y >= 0 && point.y > 45);
    //     if (shouldClose) onClose();
    // }

export default function Major(props) {
    const { tarots, useTarots } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);
    // const [isVisible, setIsVisible] = useState(false);

    function onClose() {
        setIsOpen(false);
    }
    
    function onToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <>

        <Box
            bg='#3b464b'
            width='100vw'
            display='flex'
            flexDirection='row'
            flexWrap='wrap'
            justifyContent= 'spaceBetween'
            alignItems= 'spaceBetween'
            gap='20px'
            padding= '20px 20px 20px 20px'
        >

    {tarots.splice(0,22).map((tarot, id) => {
        return (
        <>
            <Container
                width={200}
                paddingTop='4pt'
                key={tarot.id}
                onClick={onToggle}
            >
                <Card
                    key={tarot.id}
                    src={tarot.image}
                    // name={tarot.name}
                    // arcana={tarot.suits}
                    // description={tarot.description}
                    value={tarot.id}
                    loader={props.loaderProp}
                    unoptimized="true"
                />
            </Container>



        <Container
            width={200}
            bg='white'
            paddingTop='4pt'
            isOpen={isOpen}
            onClose={onClose}
        >
            <Text
                paddingTop='2%'
                color='black'
                fontWeight='400'
            >
                {tarot.id}
                <strong>{tarot.name} of {tarot.suit}</strong>: {tarot.description}
            </Text>
        </Container>

        </>
        )}
    )}

        </Box>
        </>
    );
}
