import React from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useLocation } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Moon from "../public/moon.jpg"
import Sign from "../public/sign.jpg"
import { Box, FormControl, FormHelperText, FormLabel, Button, Center, Heading, Container, Input } from "@chakra-ui/react";



export default function Landing() {
    const [onSubmit, setSubmit] = useState(false);
    const [input, setInput] = useState('');
    const [data, setData] = useState({ question: "" });

    const handleInputChange = (e) => setInput(e.target.value);

    const isError = input === ''

    const router = useRouter();

    const blackBox = {
        height: '100vh',
        initial: {
            height: "100vh",
            bottom: 0,
        },
        animate: {
            height: 0,
            transition: {
                delay: 2,
                // when: 'afterChildren',
                duration: 5,
                ease: 'easeOut',
                out: 0,
            },
        },
    };

    return (
        <Box
        sx={{
            backgroundImage: 'url(/LandingPage.png)',
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "110vh",
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
        >

        {/* <motion.div
            id='initialTransitionDiv'
            initial="initial"
            animate="animate"
            exit='exit'
            variants={blackBox}
        >
        </motion.div> */}

        <Container
            display='flex'
            flex='1'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            // paddingTop='25%'
        >
            <Center />
        <Heading textColor='white'>
            Tarot
        </Heading>

        <Input
            type="text"
            bg='white'
            textColor="black"
            placeholder="What do you seek to know?"
            value={data.question}
            onChange={(event) =>
            setData({
                question: event.target.value,
            })}
        />


            {/* <Input
                placeholder="Your Question Here."
            /> */}
        {/* <Button
            type="submit"
            onClick={() => router.push("Spread")}>
            Submit
        </Button> */}

        <Link
            marginTop='10px'
            href={{
            pathname: "/Spread",
            query: data}}
        >
        <a style={{
            color: "black",
            textDecoration: "none"
        }}>
            Deal your Cards
        </a>
        </Link>

        </Container>
        
        {/* <Image
        src={Moon}
        alt='crescent moon'
        layout="fill"
        /> */}
    </Box>
    )
}