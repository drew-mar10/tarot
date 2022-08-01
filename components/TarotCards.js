import React from "react";
import { Context } from "../pages/AppContext";
import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import Image from "next/image";
import { Container, Heading, Text, Stack, Box, SimpleGrid, Center, Button } from "@chakra-ui/react";



export default function TarotCards(props) {
    const { tarots, cardDraw, showDeck } = useContext(Context)
    const [spread, setSpread] = useState(tarots)

    useEffect(() => {
        setSpread(tarots);
    }, [tarots]);


    return(
    <>
        <Box
        bg='white'
        height='100vh'
        >

        <Container
        paddingTop='80px'
        display='flex'
        flex='3'
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
                <h2>
                    The Past: {tarots.id} {tarots.id}
                </h2>
                <h2>
                    The Present: {tarots.id} {tarots.id}
                </h2>
                <h2>
                    The Future: {tarots.id} {tarots.id}
                </h2>

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


            </Container>
            {/* <Button
                onClick={() => cardDraw(true)
            }>
                New Reading
            </Button> */}
        </Box>
    </>
    )
}

