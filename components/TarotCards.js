import React from "react";
import { Context } from "../pages/AppContext";
import { useEffect, useState, useContext } from "react";
import { Router, useRouter } from "next/router";
import { Flipper, Flipped } from "react-flip-toolkit";
import Card from "./Card";
import Image from "next/image";
import { Container, Heading, Text, Stack, Box, SimpleGrid, Center, Button } from "@chakra-ui/react";



export default function TarotCards(props) {
    const { tarots, cardDraw, showDeck } = useContext(Context);
    const [spread, setSpread] = useState(tarots);
    const router = useRouter();
    const query = router.query;
    const question = query.question;

    useEffect(() => {
        setSpread(tarots);
    }, [tarots]);


    return(
    <>
        <Box
        // bg='white'
        // height='100vh'
        sx={{
            backgroundImage: 'url(/SpreadBG.png)',
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            position: "relative",
            overflow: 'scroll',
            }}
        >

        <Box
        // bg='black'
        marginTop='60px'
        display='flex'
        // flex='1'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        >
            <Text
            fontSize='lg'
            textColor='white'
            >
            question: {question}
            </Text>
        </Box>

        <Container
        // paddingTop='50px'
        display='flex'
        flex='1'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        >

        <Stack spacing='100vw'direction='column'>

        <SimpleGrid
            columns={[1, null, 3]}
            spacingX='40px'
            w='85vw'
            // spacingY='100px'
            // spacing='10pt'
            // minChildWidth='180px'
        >
                <Text
                color='white'
                >
                    The Past: {tarots.id} {tarots.id}
                </Text>
                <Text
                color='white'
                >
                    The Present: {tarots.id} {tarots.id}
                </Text>
                <Text
                color='white'
                >
                    The Future: {tarots.id} {tarots.id}
                </Text>

            {tarots.slice(0, 3).map((tarot, i) => {
                return (
                    <>
                        <Card
                            key={tarot.id}
                            src={tarot.image}
                            name={tarot.name}
                            arcana={tarot.suit}
                            description={tarot.description}
                            value={tarot.id}
                        />
                    </>
                )}
            )}
            </SimpleGrid>
            </Stack>

        <Box
        display='flex'
        // flex='1'
        // flexDirection='column'
        // justifyContent='center'
        alignItems='flex-end'
        alignContent='flex-end'
        marginTop='90px'
        >
        <Button
            type="submit"
            onClick={() => router.push("/")}>
            New Reading
        </Button>
        </Box>

            </Container>
        </Box>
    </>
    )
}

