import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Container, Box, Button } from "@chakra-ui/react";

    const refreshPage = () => {
        window.location.reload(false)
    }

    const loaderProp =({ src }) => {
        return src;
    }


export default function TarotCards() {
    const [data, setData] = useState([])
    const [tarots, setTarots] = useState([])

    useEffect(() => {
        axios
        .get("https://api.projectgamesapi.xyz/v1/tarot")
        .then((response) => {
            // console.log(response.data.data.tarot)
            // console.log(response)
            // console.log(response.data)
            setData(response.data.data)
            setTarots(response.data.data.tarot)
        })
    }, []);


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
    }

    const shuffledTarots = shuffle(tarots)
        console.log(tarots)





    // const tarotArray = Object.entries(tarots);
    // tarotArray.forEach(([key, value]) => {
    //     console.log(value);
    // })
    // console.log(data)

    return(

        <div>
            {tarots.slice(0, 3).map(tarot => {
                return (
                    <Container key={tarot.id}>
                        <Image
                            src={tarot.image}
                            alt="tarot card"
                            width={125}
                            height={200}
                            loader={loaderProp}
                            unoptimized
                        />
                            <p>{tarot.id}</p>
                            <h2>{tarot.name}</h2>
                            <h3>arcana: {tarot.suit}</h3>
                            <h3>description: {tarot.description}</h3>
                    </Container>
                )}
            )}
            {/* <Button
            onClick={}
            >
                shuffle
            </Button> */}
        </div>
    )
}