import React from "react";
import { Box, OrderedList, ListItem, Text, UnorderedList, Divider } from "@chakra-ui/react";

export function Descriptions() {

function firstDescription() {
    return (
    <>
        <Box
            marginTop='10%'
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
            // sx={{
            //     boxShadow: 'dark-lg',
            //     borderWidth: '2pt',
            //     borderColor: '#B07E09',
            // }}
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
        </>
    )
}

function secondDescription() {
    return (
        <Box
        marginRight='5%'
        marginLeft='5%'
        marginBottom='2%'
        display='flex'
        flexDirection='column'
        alignItems='center'
        >

            <Text
            color='white'
            fontFamily='Estonia'
            fontSize='25pt'
            lineHeight='27pt'
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

                <UnorderedList
                color='white'
                fontFamily='Aboreto'
                >
                    <br />
                    <ListItem>Past, Present, Future</ListItem>
                    <ListItem>Situation, Action, Outcome</ListItem>
                    <ListItem>You, Relationship, Partner</ListItem>
                    <ListItem>Strengths, Weakness, Advice</ListItem>
                    <ListItem>Solution 1, Solution 2, How to Choose</ListItem>
                    <ListItem>You, You Path, Your Potential</ListItem>
                    <ListItem>Mind, Body, Spirit</ListItem>
                </UnorderedList>
        </Box>
    )
}
}

export default Descriptions;