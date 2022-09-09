import React from "react";
import axios from "axios";
import { useEffect, useState, createContext, useContext, useRouter } from "react";


const Context = createContext({});

const Provider = ({ children }) => {
    const [tarots, setTarots] = useState([]);
    const [showDeck, setShowDeck] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const toggleFullScreen = () => setFullScreen(prevState => !prevState);


    const refreshPage = () => {
        window.location.reload(false)
    };

    const refreshCards = () => {
        location.reload(false)
    };

    const loaderProp =({ src }) => {
        return src;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    useEffect(() => {
        axios
        .get("https://api.projectgamesapi.xyz/v1/tarot")
        .then((response) => {
            console.log(response.data.data.tarot)
            setTarots(response.data.data.tarot)
        })
    }, []);


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array;
    };
    const shuffledTarots = shuffle(tarots);


    // function shuffleDeck() {   
    //     const shuffled = [];
    //     while (tarots.length > 0) {
    //     let i = Math.floor(Math.random() * max);
    //         shuffled.push(tarots[i]);
    //         tarots.splice(i, 1);
    //     }
    //     setTarots([...shuffled]);   

    //     console.log('shuffleDeck')
    // }


    const cardDraw = () => {
        if (showDeck === false) {
            setShowDeck(true);
        } else {
            setShowDeck(false);
            setTimeout(() => {
                setShowDeck(true)
            }, 0)
    }};



    return (
        <Context.Provider
            value={{
                tarots,
                setTarots,
                showDeck,
                refreshPage,
                refreshCards,
                loaderProp,
                shuffle,
                cardDraw,
                handleSubmit,
                // shuffleDeck,
                shuffledTarots,
            }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider }