import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Button, Box, Text, SimpleGrid, Container, Heading } from "@chakra-ui/react";
import TarotCards from "../components/TarotCards";
import { Router, useRouter } from "next/router";
import { Context } from "./AppContext";
import { motion } from "framer-motion";



export default function Spread() {
    const router = useRouter();
    const query = router.query;
    const question = query.question;

    const blackBox = {
        height: '100vh',
        initial: {
            height: "100vh",
            bottom: 0,
        },
        animate: {
            height: 0,
            transition: {
                delay: 3,
                // when: 'afterChildren',
                duration: 3,
                ease: 'easeOut',
                out: 0,
            },
        },
    };


    return (
        <>
        {/* <Box
            sx={{
                backgroundImage: 'url(/clouds.jpg)',
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
                // backgroundPosition: 'center',
                // backgroundAttachment: 'fixed',
                // maxWidth: '100%',
                // width: '100vh',
                // minHeight: '100vw',
                // height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                position: "relative",
                overflow: 'scroll',
                }}
        > */}

        <Box
        bg="black"
        width='100vw'
        height='100vh'
        >

        <motion.div
            id='initialTransitionDiv'
            initial="initial"
            animate="animate"
            enter="enter"
            variants={blackBox}
        >
        </motion.div>
        {/* </Box> */}

        <Box
        bg='white'
        marginTop='20px'
        display='flex'
        flex='1'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        >
            <Text
            fontSize='lg'
            >
            question: {question}
            </Text>
        </Box>

        <TarotCards />


        <Button
            type="submit"
            onClick={() => router.push("Landing")}>
            New Reading
        </Button>
        </Box>
    </>
    )
}