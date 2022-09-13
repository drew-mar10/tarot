import React from "react";
import { Context } from "./Provider";
import { useEffect, useState, useContext } from "react";
import { Router, useRouter } from "next/router";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import Card from "../components/Card";
import { Container, Text, Stack, Box, SimpleGrid, Button, GridItem, Grid } from "@chakra-ui/react";
import { Reading } from "../components/Reading";


export default function TarotCards(props) {
    const { tarots, homeVariant, nameVariant, letterVariant, page2Variant, transition, fadeVariant } = useContext(Context);
    const [spread, setSpread] = useState(tarots);
    const router = useRouter();
    const query = router.query;
    const question = query.question;
    const controls = useAnimationControls()


    useEffect(() => {
        setSpread(tarots);
    }, [tarots]);


    return(
    <>

        <Box
        width='100vw'
        sx={{
            backgroundSize: "100% 100%",
            backgroundColor: '#3b413c',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            position: "relative",
            overflow: 'scroll',
            }}
        >

<AnimatePresence>
    <motion.main
        layout
        variants={letterVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ...transition }}
        bg='#3b413c'
    >

        <Container
            paddingTop='40px'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            width='80vw'
        >

        <Box
            // marginTop='7px'
            width='75vw'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            borderRadius='7'
            padding='2%'
        >
        <Box
            bg='white'
            maxWidth='100vw'
            maxHeight='10vh'
            height='3.25vh'
            width='100vw'
            paddingBottom='3%'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            // alignContent='center'
            alignItems='center'
        >
            <Text
                fontSize='45pt'
                textColor='#B07E09'
                letterSpacing='tight'
                textAlign='justify'
                fontFamily='Merienda'
                paddingTop='6%'
            >
                question: {question}
            </Text>
        </Box>
        </Box>


        <Stack spacing='100vw'direction='column'>

        <SimpleGrid
            columns={[1, null, 3]}
            spacingX='5px'
            w='85vw'
            marginTop='4%'
        >

                <Text
                    color='white'
                    textDecoration='underline'
                    fontSize='15pt'
                    textAlign='center'
                >
                    {tarots.id} <br /> {tarots.id}
                </Text>

                <Text
                    color='white'
                    textDecoration='underline'
                    fontSize='15pt'
                    textAlign='center'
                >
                    {tarots.id} {tarots.id}
                </Text>

                <Text
                    color='white'
                    textDecoration='underline'
                    fontSize='15pt'
                    textAlign='center'
                >
                    {tarots.id} {tarots.id}
                </Text>


            {tarots.slice(0, 3).map((tarot, id) => {
                return (
                <>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        borderWidth='1pt'
                        width='18vw'
                        height='40vh'
                        paddingTop='1.5'
                        padding= '1.5'
                        // bg='white'
                        marginLeft='18%'
                        borderRadius='5'
                        bg='black'
                        // boxShadow= '30px 75px 100px 100px rgba(0, 0, 0, 0.5)'
                    >
                <AnimatePresence>
                <motion.div
                    layout
                    // variants= {nameVariant}
                    initial={{ y: '-1000', opacity: 0 }}
                    animate={{ opacity: 1.5, x: 16, y: 17 }}
                    transition={{
                        type:'spring',
                        duration: 2,
                        delay: 1,
                    }}
                    exit= {{ opacity: 0 }}
                >
                        <Card
                            key={tarot.id}
                            src={tarot.image}
                            name={tarot.name}
                            arcana={tarot.suit}
                            // description={tarot.description}
                            value={tarot.id}
                            loader={props.loaderProp}
                            unoptimized="true"
                        />
                    </motion.div>
                    </AnimatePresence>
                    </Box>
                {/* </motion.div> */}
                </>
                )}
            )}

            {/* </AnimatePresence> */}

            </SimpleGrid>
            </Stack>

            <Box
                bg="#B07E09"
                ring='5pt'
                ringColor='white'
                ringOffset='3pt'
                ringOffsetColor='#3b413c'
                borderRadius='7'
                padding='3%'
                marginTop='15%'
                paddingBottom='7%'
            >
            {tarots.slice(0, 3).map((tarot, i) => {
                return (
                    <>
                    <Reading
                        key={tarot.id}
                        name={tarot.name}
                        arcana={tarot.suit}
                        description={tarot.description}
                    />
                    </>
                )}
            )}
            </Box>

        <Box
        display='flex'
        alignItems='flex-end'
        alignContent='flex-end'
        marginTop='15%'
        marginBottom='5%'
        >
            <Button
                // className="close"
                bg='#B07E09'
                type="submit"
                borderWidth='1pt'
                textColor='white'
                onClick={() => router.push("/")}
            >
                New Reading
            </Button>
        </Box>

        </Container>

        </motion.main>
        </AnimatePresence>

        </Box>

    </>
    )
}

