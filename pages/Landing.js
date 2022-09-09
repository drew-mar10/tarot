import React from "react";
import { useState, useContext, useRef } from "react";
import { Context } from "./AppContext";
import { Router, useRouter } from "next/router";
import { Box, Text, SimpleGrid, Center, Grid, GridItem, Button } from "@chakra-ui/react";
import { useInView } from "framer-motion";
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
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            {children}
          </span>
        </section>
      );
    }

export default function Landing() {
    const { shuffleDeck } = useContext(Context);
    const [onSubmit, setSubmit] = useState(false);
    const [input, setInput] = useState('');
    const [data, setData] = useState({ question: "" });

    const router = useRouter();


    return (
        <>

        <Section>

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
                    paddingTop='17%'
                    // boxShadow= '0 75px 50px rgba(0, 0, 0, 0.1)'
                >
                    Tarot
                </Text>
            </Box>
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
            display='flex'
            flexDirection='column'
            alignItems='center'
            paddingTop='7%'
            paddingRight='5%'
            width='100%'
        >
        <Box
        marginTop='25%'
        borderRadius='7'
        padding= '2'
        >
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
        </Box>
            </Box>
        </SimpleGrid>
        </Section>



        <Section>
        <SimpleGrid columns={2}>

        <Box
            maxWidth='10vw'
            maxHeight='130vh'
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
        display='flex'
        flexDirection='column'
        alignItems='center'
        paddingTop='7%'
        paddingRight='15%'
        width='100%'
        >
        <Text
            color='white'
            fontFamily='Merienda'
            fontSize='20pt'
            lineHeight='27pt'
            letterSpacing='tight'
            // textAlign='justify'
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
        <br />

            <Grid
            color='white'
            fontFamily='Aboreto'
            fontSize='15pt'
            lineHeight='27pt'
            textAlign='justify'
            >
                <GridItem>Past, Present, Future</GridItem>
                <GridItem>Situation, Action, Outcome</GridItem>
                <GridItem>You, Relationship, Partner</GridItem>
                <GridItem>Strengths, Weakness, Advice</GridItem>
                <GridItem>Solution 1, Solution 2, How to Choose</GridItem>
                <GridItem>You, Your Path, Your Potential</GridItem>
            </Grid>
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
            paddingTop='50%'
            paddingRight='15%'
        >
            <CardContent />

        </Box>

        </SimpleGrid>
        </Section>


        {/* <Section>
            <TarotCards />
        </Section> */}

            {/* <Box
            bg='#B07E09'
            width='100vw'
            display= 'flex'
            flexDirection= 'row'
            justifyContent='center'
            borderWidth='2px'
            paddingTop='1%'
            paddingBottom='1%'
            // ring='5pt'
            // ringColor='white'
            // ringOffset='3pt'
            // ringOffsetColor='#3b413c'
            // borderRadius='7'
            >
                <Heading
                    textColor='white'
                    fontSize='70'
                    color='white'
                    fontFamily='Aboreto'
                >
                    Tarot
                </Heading>
            </Box>

            <Box
            sx={{
                backgroundColor: 'black',
                // backgroundImage: 'url(/SpreadBG.png)',
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "90vh",
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                position: "absolute",
                overflow: 'scroll',
            }}>

        <Box
            marginTop='7%'
            // marginBottom='3%'
            marginRight='5%'
            marginLeft='5%'
            padding='2%'
            // borderWidth='1pt'
            display='flex'
            flexDirection='column'
            alignItems='center'
            ring='5pt'
            ringColor='white'
            ringOffset='3pt'
            ringOffsetColor='#3b413c'
            bg='#B07E09'
            // boxShadow='#B07E09'
            borderRadius='7'
        >
            <Text
            color='white'
            fontFamily='Merienda'
            fontSize='15pt'
            lineHeight='20pt'
            letterSpacing='tight'
            textAlign='justify'
            >
                Tarot is a form of divination where tarot
                cards and their associated meanings are used
                to gain insight into the past, present, or future.
                A traditional tarot deck consists of
                78 cards, divided into two primary groups:
                the Major Arcana and the Minor Arcana.
            </Text>
        </Box>

        <Deck />

    </Box> */}

    </>
    )
}