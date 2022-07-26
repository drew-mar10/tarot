import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";


export default function TarotCards() {
    // const cardsAPI = 'https://rws-cards-api.herokuapp.com/api/v1/'
    const [data, setData] = useState([])
    const [tarot, setTarot] = useState([])
    const [tarots, setTarots] = useState([])
    // const [cards, setCards] = useState([])
    // const [name, setName] = useState([])


    const loaderProp =({ src }) => {
        return src;
    }


    useEffect(() => {
        axios
        .get("https://api.projectgamesapi.xyz/v1/tarot")
        .then((response) => {
            // console.log(response.data.data.tarot)
            // console.log(response)
            // console.log(response.data)
            // console.log("tarots")
            // console.log(Object.values(data))
            // console.log(response.data)
            setData(response.data.data)
            setTarots(response.data.data.tarot)
    })
    }, []);


    const tarotArray = Object.entries(tarots);
    tarotArray.forEach(([key, value]) => {
        // console.log(value);
    })
    // console.log(data)
    // console.log(tarots)



    return(

        <div>

            {tarots.map(tarot => {
                return (
                    <div key={tarot.id}>
                        <p>{tarot.id}</p>
                        <h2>name: {tarot.name}</h2>
                        <h3>suit: {tarot.suit}</h3>
                        <h3>description: {tarot.description}</h3>
                        <Image
                        src={tarot.image}
                        alt="tarot card"
                        width={125}
                        height={200}
                        loader={loaderProp}
                        />
                    </div>
                )
            }
            )
            }

            {/* {TarotCards.map((item, id) => (
                <div key={id}>
                    <h3>{`Name: ${item.name}`}</h3>
                </div>
            )
            )
            } */}

            {/* {tarots.map((id, name, key, tarot) => (
                <div key={id}>
                    <h3>{tarot}</h3>
                </div>
            ))
            } */}

        {tarotArray.map((key, value) => (
            <div key={key}>
                <h3>cards: {value}</h3>
                <h3></h3>
            </div>
        ))
        }

        {/* {tarotArray.forEach(([key, value]) => {
            return (
                <div key={key}>
                    <h3>{tarotArray.value}</h3>
                </div>
            )
        }
        )
        } */}

        </div>

        // <div>
        //     {data.length ? (
        //         <ul>
        //             {data.map((value) => {
        //                 return
        //                 <li>
        //                     {value}
        //                 </li>
        //             }
        //             )}
        //         </ul>
        //     ) : 'None'
        //     }
        // </div>

        // <div>
        //     {Object.keys(tarot).map((id, data, tarots) => {
        //         return (
        //         <>
        //         <div key={id}>
        //         {/* <p>{id}:{tarots[id]}</p> */}
        //         <p>{id}:{data[id]}</p>
        //         {/* <p>{data}</p>
        //         <p>{tarots}</p>
        //         <p>{id}{tarots[id]}</p> */}
        //         {/* <p>{tarots[data]}</p> */}
        //         {/* <p>{card.type}</p>
        //         <p>{card.meaningUp}</p>
        //         <p>{card.meaningDown}</p>
        //         <p>{card.desc}</p> */}
        //         </div>
        //         </>
        //         )
        //     }
        //     )
        //     }
        // </div>
    )
}