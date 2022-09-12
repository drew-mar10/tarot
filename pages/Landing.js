import React from "react";
import { useState, useContext, useRef } from "react";
import Link from "next/link";
import { Context } from "./AppContext";
import { Router, useRouter } from "next/router";
import { Box, Text, SimpleGrid, Center, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { ArrowDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useInView, AnimatePresence, motion, MotionConfig } from "framer-motion";
import CardContent from "../components/CardContent";
import TarotCards from "./TarotCards";

    function Section({ children }) {
        const ref = useRef(null);
        const isInView = useInView(ref);

    return (
        <section ref={ref}>
            <span
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
            }}
            >
                {children}
            </span>
        </section>
        );
    }


export default function Landing() {
    const { shuffleDeck, letterVariant, transition, fadeVariant, homeVariant } = useContext(Context);
    const [input, setInput] = useState('');
    const [data, setData] = useState({ question: "" });

    const router = useRouter();


    return (
        <>
    <AnimatePresence>

        <motion.main
            layout
            // variants={homeVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{delay: 0.8, ...transition }}
        >

        <Section>
        <SimpleGrid columns={2}>

            <Box
                max-width='50vw'
                max-height='130vh'
                bg='white'
                height='130vh'
                width='3.25vw'
                // marginTop='25%'
                // borderRadius='5'
                boxShadow= '75px 75px 75px rgba(0, 0, 0, 0)'
                // position='relative'
                paddingLeft='1.65%'
                marginLeft='75pt'
            >
                {/* <Center /> */}
                <Text
                    as='b'
                    fontSize='110'
                    color='#B07E09'
                    fontFamily='Aboreto'
                    // marginLeft='5%'
                    letterSpacing='tight'
                    paddingTop='1%'
                    // boxShadow= '0 75px 50px rgba(0, 0, 0, 0.1)'
                >
                    Tarot
                </Text>
            </Box>

        <Box
            display='flex'
            flexDirection='row'
            alignItems='flex-end'
            justifyContent='flex-end'
            // paddingTop='7%'
            width='50vw'
            paddingBottom='40%'
            paddingRight='10%'
        >
            <Link
                href='#question'
            >
            <a>
                <IconButton
                    bg='#3b413c'
                    icon={<ArrowDownIcon />}
                />
            </a>
            </Link>
        </Box>

        </SimpleGrid>
        </Section>


        <Section>
        <SimpleGrid minChildWidth='12px'>

        <Box
            max-width='50vw'
            max-height='110vh'
            bg='white'
            height='110vh'
            width='3.25vw'
            // marginTop='25%'
            // borderRadius='5'
            boxShadow= '75px 75px 75px rgba(0, 0, 0, 0)'
            // position='relative'
            paddingLeft='1.65%'
            marginLeft='75pt'
            position='relative'
        />
        <Box
        width='90vw'
        marginTop='25%'
        >
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            paddingTop='7%'
            paddingRight='5%'
            width='50vw'
        >
        {/* <Box
        > */}
        <Text
            color='white'
            fontFamily='Merienda'
            fontSize='20pt'
            lineHeight='30pt'
            // letterSpacing='tight'
            textAlign='justify'
        >
            Tarot is a form of divination where tarot
            cards and their associated meanings are used
            to gain insight into the past, present, or future.
            A traditional tarot deck consists of
            78 cards, divided into two primary groups:
            the Major Arcana and the Minor Arcana.
        </Text>
        {/* </Box> */}
            </Box>
            </Box>
        </SimpleGrid>
        </Section>



        <Section>
        <SimpleGrid minChildWidth='12px'>

        <Box
            maxWidth='10vw'
            maxHeight='150vh'
            bg='white'
            height='150vh'
            width='3.25vw'
            // marginTop='25%'
            // borderRadius='5'
            boxShadow= '75px 75px 75px rgba(0, 0, 0, 0)'
            // position='relative'
            paddingLeft='1.65%'
            marginLeft='75pt'
        />

        <Box
            width='90vw'
            marginTop='25%'
        >

        <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        paddingTop='10%'
        paddingRight='15%'
        width='65vw'
        height='150vh'
        >
        <Text
            color='white'
            fontFamily='Merienda'
            fontSize='20pt'
            lineHeight='27pt'
            letterSpacing='tight'
            textAlign='justify'
        >
            This reading will consist of a traditional three card
            spread. Considered by both professional and amatuer readers
            as the most practical, concise, and accurate template for readings,
            the three card spread allows the inquirer to gain valuable insight
            into the answers that they seek. The intent is that the
            spread will be read from left to right, revealing a path,
            a sequence of events, or a cause and effect.

            There are many different variations of a three card tarot
            spread that an inquier may use:
        </Text>

            <Grid
            color='white'
            fontFamily='Aboreto'
            fontSize='15pt'
            lineHeight='27pt'
            textAlign='justify'
            >
                <br />
                <GridItem> <ChevronRightIcon /> Past, Present, Future</GridItem>
                <GridItem> <ChevronRightIcon /> Situation, Action, Outcome</GridItem>
                <GridItem> <ChevronRightIcon /> You, Relationship, Partner</GridItem>
                <GridItem>  <ChevronRightIcon />Strengths, Weakness, Advice</GridItem>
                <GridItem> <ChevronRightIcon /> Solution 1, Solution 2, How to Choose</GridItem>
                <GridItem> <ChevronRightIcon /> You, Your Path, Your Potential</GridItem>
            </Grid>
            </Box>
            </Box>

            </SimpleGrid>
        </Section>



        <Section>
        <SimpleGrid columns={2}>

        <Box
            max-width='10vw'
            max-height='130vh'
            bg='white'
            height='130vh'
            width='3.25vw'
            // marginTop='25%'
            // borderRadius='5'
            boxShadow= '75px 75px 75px rgba(0, 0, 0, 0)'
            // position='relative'
            paddingLeft='1.65%'
            marginLeft='75pt'
        />

        <Box
            id='question'
            paddingTop='50%'
            paddingRight='15%'
        >
            <CardContent />

        </Box>

        </SimpleGrid>
        </Section>

        </motion.main>
    </AnimatePresence>

    </>
    )
}