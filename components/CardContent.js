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
            display='flex'
            flexDirection='column'
            alignItems='center'
            // marginTop='-1%'
            // bg="#B07E09"
        >
        <Box
        width='100%'
        bg='#B07E09'
        height='33%'
        borderRadius='5'
        display='flex'
        flexDirection='column'
        alignItems='center'
        // boxShadow= '0px -5px 75px 100px rgba(0, 0, 0, 0.7)'
        >
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            width='100%'
            marginTop='1%'
        >
            <Input
                type="text"
                width='99%'
                height='8vh'
                textColor="black"
                bg='white'
                // margin='auto'
                marginTop='2%'
                marginRight='7%'
                // borderColor="#3b413c"
                borderRadius='5'
                // borderWidth='3'
                textAlign='center'
                letterSpacing='wider'
                placeholder="What is it that you seek to know?"
                alignItems='center'
                value={data.question}
                onChange={(event) =>
                    setData({
                        question: event.target.value,
                })}
            />
        </Box>
        </Box>


        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            marginTop='10%'
        >
            <Link
                href={{
                pathname: "/TarotCards",
                query: data}}
            >
            <a style={{
                color: "white",
                textDecoration: "none"
            }}>
                <Button
                    marginTop='5%'
                    ring='1.5pt'
                    ringColor='white'
                    ringOffset='2pt'
                    ringOffsetColor='#3b413c'
                    bg='#B07E09'
                    borderRadius='5'
                    height='30px'
                    width= '95%'
                >
                Discover Your Fate
                </Button>
            </a>
            </Link>
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