import React from "react";
import { Context } from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { Router, useRouter } from "next/router";
import { motion, useAnimationControls } from "framer-motion";
import Card from "../components/Card";
import { Container, UnorderedList, ListItem, Text, Stack, Box, SimpleGrid, Center, Button } from "@chakra-ui/react";
import { Reading } from "../components/Reading";


export default function TarotCards({ onClick }, props) {
    const { tarots, contentBlockVariants, contentVariants, expandedVariants } = useContext(Context);
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
        sx={{
            // backgroundImage: 'url(/SpreadBG.png)',
            backgroundSize: "100% 100%",
            // backgroundRepeat: "no-repeat",
            // borderWidth: '2pt',
            // // borderColor: '#B07E09',
            // borderRadius: '5',
            backgroundColor: '#3b464b',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            position: "relative",
            overflow: 'scroll',
            // marginTop: '20pt',
            // marginBottom: '40pt',
            // marginRight: '30pt',
            // marginLeft: '30pt',
            }}
        >

        <Container
            paddingTop='40px'
            display='flex'
            // flex='1'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >

        <Box
            // bg='black'
            marginTop='30px'
            display='flex'
            // flex='1'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            bg="#B07E09"
            ring='2pt'
            ringColor='white'
            ringOffset='2pt'
            ringOffsetColor='#3b413c'
            borderRadius='7'
            padding='2%'
            // marginTop='15%'
            // paddingBottom='7%'
        >
            <Text
                fontSize='lg'
                textColor='white'
            >
                question: {question}
            </Text>
        </Box>

        <Stack spacing='100vw'direction='column'>

        <SimpleGrid
            columns={[1, null, 3]}
            spacingX='5px'
            w='85vw'
            marginTop='5%'
            // spacingY='100px'
            // spacing='10pt'
            // minChildWidth='180px'
        >
                <Text
                color='white'
                textDecoration='underline'
                fontSize='15pt'
                textAlign='center'
                >
                    1: {tarots.id} <br /> {tarots.id}
                </Text>
                <Text
                color='white'
                textDecoration='underline'
                fontSize='15pt'
                textAlign='center'
                >
                    2: {tarots.id} {tarots.id}
                </Text>
                <Text
                color='white'
                textDecoration='underline'
                fontSize='15pt'
                textAlign='center'
                >
                    3: {tarots.id} {tarots.id}
                </Text>

            {tarots.slice(0, 3).map((tarot, id) => {
                return (
                <>
                <motion.div
                    layout
                    initial= {{
                        opacity: 0,
                        scale: 1.5,
                        transition: { duration: 1 },
                    }}
                    // initial={{ opacity: 0, scale: 0.5, rotate: 90, }}
                    animate={{ opacity: 1, scale: 1, }}
                    transition={{
                        delay: 1,
                        duration: 5,
                        staggerChildren: 0.3,
                    // default: {
                    //     duration: 0.3,
                    //     ease: [0, 0.71, 0.2, 1.01],
                    //     stagger: 0.5,
                    //     delay: 1,
                    // },
                    // scale: {
                    //     type: "spring",
                    //     damping: 5,
                    //     stiffness: 150,
                    //     restDelta: 0.001
                    // }
                    }}
                    // whileHover={{
                    //     scale: 1.15,
                    //     transition: { duration: 1 },
                    // }}
                >
                    <Box
                        display='flex'
                        // flex:'3',
                        flexDirection='column'
                        alignItems='center'
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
                    </Box>
                </motion.div>
                </>
                )}
            )}

            </SimpleGrid>
            </Stack>

            <Box
                bg="#B07E09"
                ring='5pt'
                ringColor='white'
                ringOffset='3pt'
                ringOffsetColor='#3b413c'
                borderRadius='7'
                padding='5%'
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
        marginTop='25%'
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
        </Box>

    </>
    )
}

{/* <Button
className="close"
onClick={() => onClick(false)}>
</Button> */}

