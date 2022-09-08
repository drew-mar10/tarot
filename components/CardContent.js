import React from "react";
import { useContext, useState } from "react";
import { Context } from "../pages/AppContext";
import { motion } from 'framer-motion';
import Link from "next/link";
import { Box, Button, Container, Input, Center } from "@chakra-ui/react";

//homepage card view

const CardContent = ({ onClick }) => {
    const { shuffleDeck } = useContext(Context);
    const [input, setInput] = useState('');
    const [data, setData] = useState({ question: "" });


    return (
        <>

        <Box
            // className="card"
            width='40vw'
            height='25vh'
            borderRadius='5'
            // marginTop='-1%'
            // bg="#B07E09"
        >
            <Input
                type="text"
                width='100%'
                textColor="black"
                bg='white'
                // margin='auto'
                marginTop='20%'
                borderColor="#3b413c"
                boxShadow= '0 15px 15px rgba(0, 0, 0, 0.1)'
                borderRadius='5'
                // borderWidth='3'
                placeholder="What is it that you seek to know?"
                alignItems='center'
                value={data.question}
                onChange={(event) =>
                    setData({
                        question: event.target.value,
                })}
            />


        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
        <Button
            marginTop='5%'
            ring='2pt'
            ringColor='white'
            ringOffset='2pt'
            ringOffsetColor='#3b413c'
            bg='#B07E09'
            borderRadius='5'
            height='25px'
            width= '75%'
        >
            <Link
                href={{
                pathname: "/TarotCards",
                query: data}}
            >
            <a style={{
                color: "black",
                textDecoration: "none"
            }}>
                Discover Your Fate
            </a>
            </Link>
        </Button>
        {/* <Button
            marginTop='20%'
            bg='#B07E09'
            marginBottom='5%'
            variant='outline'
            textColor='white'
            type='submit'
            onClick={() => onClick(true)}
            position='absolute'
            href={{
                pathname: "/TarotCards",
                query: data}}
        >

            Discover your Fate
        </Button> */}

    </Box>
    </Box>

    </>
    )
}

export default CardContent;