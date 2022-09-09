import React from "react";
import { useState, useContext } from "react";
import { Text, Heading, Box, Center, Image, Container } from "@chakra-ui/react";

export function Reading(props){
    return (
        <Box
            width= '70vw'
        >
            <Container>
            <Text
                paddingTop='2%'
                color='white'
                fontWeight='400'
                fontSize='15pt'
            >
                <strong>{props.name} of {props.arcana}</strong>: {props.description}
            </Text>
            </Container>
        </Box>
    )
}