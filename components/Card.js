import React from "react";
import { Box, Image } from "@chakra-ui/react";


export default function Card(props) {

    return (
        <Image
            key={props.id}
            width={200}
            height={300}
            backgroundImage={props.src}
            alt=""
            loader={props.loaderProp}
            unoptimized="true"
            backgroundSize= "100% 100%"
        />
    );
}
