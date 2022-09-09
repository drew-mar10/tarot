import React from "react";
import { Context } from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { Router, useRouter } from "next/router";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import Card from "../components/Card";
import { Container, Text, Stack, Box, SimpleGrid, Button, GridItem, Grid } from "@chakra-ui/react";
import { Reading } from "../components/Reading";


export default function TarotCards(props) {
    const { tarots } = useContext(Context);
    const [spread, setSpread] = useState(tarots);
    const router = useRouter();
    const query = router.query;
    const question = query.question;
    const controls = useAnimationControls()


    useEffect(() => {
        setSpread(tarots);
    }, [tarots]);

    const child1Variants = {
        hidden: { y: "100vw" },
        visible: { y: "0", transition: { delay: 1, duration: 1 } }
      };
      const child2Variants = {
        hidden: { x: "-100vw" },
        visible: { x: "0", transition: { delay: 2, duration: 1 } }
      };
      const child3Variants = {
        hidden: { x: "100vw" },
        visible: { x: "0", transition: { delay: 2, duration: 1 } }
      };


    return(
    <>
        <Box
        width='100vw'
        sx={{
            // backgroundImage: 'url(/SpreadBG.png)',
            backgroundSize: "100% 100%",
            // backgroundRepeat: "no-repeat",
            // borderWidth: '2pt',
            // // borderColor: '#B07E09',
            // borderRadius: '5',
            backgroundColor: '#3b413c',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            position: "relative",
            overflow: 'scroll',
            }}
        >


        <Box
            maxWidth='100vw'
            maxHeight='10vh'
            bg='white'
            height='3.25vh'
            width='100vw'
            // marginTop='25%'
            // borderRadius='5'
            boxShadow= '75px 75px 75px rgba(0, 0, 0, 0)'
            // position='relative'
            paddingTop='1.65%'
            marginTop='15pt'
        />

        <Container
            paddingTop='40px'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            width='80vw'
        >

        <Box
            marginTop='7px'
            width='75vw'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            // bg="#B07E09"
            // ring='2pt'
            // ringColor='white'
            // ringOffset='2pt'
            // ringOffsetColor='#3b413c'
            borderRadius='7'
            padding='2%'
        >
            <Text
                fontSize='45pt'
                textColor='#B07E09'
                letterSpacing='tight'
                textAlign='justify'
                fontFamily='Merienda'
            >
                question: {question}
            </Text>
        </Box>

        <Stack spacing='100vw'direction='column'>

        <SimpleGrid
            columns={[1, null, 3]}
            spacingX='5px'
            w='85vw'
            marginTop='4%'
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
                        borderWidth='1.5pt'
                        width='18vw'
                        height='40vh'
                        paddingTop='1.5'
                        padding= '1.5'
                        // bg='white'
                        marginLeft='18%'
                        borderRadius='5'
                        bg='black'
                    >
                <AnimatePresence>
                <motion.div
                    layout
                    rotateY= '0'
                    initial={{ y: '-1000', opacity: 0 }}
                    animate={{ opacity: 1.5, x: 16, y: 15 }}
                    transition={{
                        type:'spring',
                        duration: 2,
                        delay: 1,
                        // staggerChildren: 0.5,
                        // beforeChildre: 'true',
                    }}
                    // init= {{ y: -200 }}
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
        </Box>

    </>
    )
}

{/* <Button
className="close"
onClick={() => onClick(false)}>
</Button> */}

