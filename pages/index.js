import React from "react";
import { useState, useContext, useRef } from "react";
import Link from "next/link";
import { Context } from "./Provider";
import { Router, useRouter } from "next/router";
import { Box, Text, Flex, SimpleGrid, Center, Grid, GridItem, IconButton, useMediaQuery } from "@chakra-ui/react";
import { ArrowDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useInView, AnimatePresence, motion, MotionConfig } from "framer-motion";
import CardContent from "../components/CardContent";


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


export default function Index() {
    const { transition } = useContext(Context);
    const [input, setInput] = useState('');
    const [data, setData] = useState({ question: "" });

    const [isNotSmallScreen] = useMediaQuery("(min-width: 600px");


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
                // max-width='50vw'
                max-height='130vh'
                bg='white'
                height={isNotSmallScreen ? '130vh' : '130vh'}
                width='3.25vw'
                paddingLeft={isNotSmallScreen ? '1.65%' : ''}
                marginLeft={isNotSmallScreen ? '75pt' : '45pt'}
            >
                <Flex
                    direction='column'
                    justifyContent='center'
                    alignContent='center'
                    justifyItems='center'
                >
                    <Text
                        as='b'
                        fontSize={isNotSmallScreen ? '105' : '85'}
                        color='#B07E09'
                        fontFamily='Aboreto'
                        // marginLeft='5%'
                        marginTop={isNotSmallScreen ? '' :  '4'}
                        letterSpacing='tight'
                        // paddingTop='1%'
                        // boxShadow= '0 75px 50px rgba(0, 0, 0, 0.1)'
                    >
                        Tarot
                    </Text>
                </Flex>
            </Box>

        <Box
            display='flex'
            flexDirection={isNotSmallScreen ? 'row' : 'column'}
            alignItems='flex-end'
            justifyContent={isNotSmallScreen ? 'flex-end' : 'center'}
            // paddingTop='7%'
            width='50vw'
            paddingBottom={isNotSmallScreen? '45%' : ''}
            marginBottom={isNotSmallScreen? '' : '-96'}
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
            max-height='130vh'
            bg='white'
            height={isNotSmallScreen ? '130vh' : '130vh'}
            width='3.25vw'
            paddingLeft={isNotSmallScreen ? '1.65%' : ''}
            marginLeft={isNotSmallScreen ? '75pt' : '45pt'}
        />
        <Box
            width='75vw'
            marginTop='55%'
            paddingTop='7%'
        >
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            width='50vw'
            bg='white'
            padding='1%'
            height='38.5vh'
            borderRadius='5'
        >
        <Box
            bg='#B07E09'
            width='63vw'
            padding='2%'
            marginTop='1%'
            borderRadius='5'
            ring='3.5pt'
            ringColor='white'
            ringOffset='2pt'
            ringOffsetColor='#3b413c'
        >
            <Text
                color='white'
                fontFamily='Poiret One'
                fontSize='25pt'
                lineHeight='30pt'
                // letterSpacing='tight'
                textAlign='justify'
                as='b'
            >
                Tarot is a form of divination where tarot
                cards and their associated meanings are used
                to gain insight into the past, present, or future.
                A traditional tarot deck consists of
                78 cards, divided into two primary groups:
                <br />
                Major Arcana and Minor Arcana.
            </Text>
        </Box>
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
            // position='relative'
            paddingLeft='1.65%'
            marginLeft='75pt'
        />

        <Box
            width='75vw'
            marginTop='25%'
            paddingTop='7%'
        >

        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            width='50vw'
            bg='white'
            padding='1%'
            height='82.5vh'
            borderRadius='5'
        >

        <Box
            // width='65vw'
            bg='#B07E09'
            width='63vw'
            padding='2%'
            marginTop='1%'
            borderRadius='5'
            ring='1.5pt'
            ringColor='white'
            ringOffset='2pt'
            ringOffsetColor='#3b413c'
        >
        <Text
            color='white'
            fontFamily='Poiret One'
            fontSize='20pt'
            lineHeight='27pt'
            letterSpacing='normal'
            textAlign='justify'
            as='b'
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
            fontFamily='Poiret One'
            fontSize='18pt'
            // lineHeight='27pt'
            textAlign='justify'
            >
                <br />
                <GridItem> <ChevronRightIcon /><strong> Past, Present, Future </strong></GridItem>
                <GridItem> <ChevronRightIcon /><strong> Situation, Action, Outcome </strong></GridItem>
                <GridItem> <ChevronRightIcon /><strong> You, Relationship, Partner </strong></GridItem>
                <GridItem> <ChevronRightIcon /><strong> Strengths, Weakness, Advice </strong></GridItem>
                <GridItem> <ChevronRightIcon /><strong> Solution 1, Solution 2, How to Choose </strong></GridItem>
                <GridItem> <ChevronRightIcon /><strong> You, Your Path, Your Potential </strong></GridItem>
            </Grid>
            </Box>
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