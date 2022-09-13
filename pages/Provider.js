import React from "react";
import axios from "axios";
import { useEffect, useState, createContext, useContext, useRouter } from "react";


const Context = createContext({});

export function getServerSideProps() { return { props: {} }; }

export default function Provider({ children }) {
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

    const transition = {
        duration: 1.4,
        ease: [0.6, 0.01, -0.05, 0.9]
    };

    const homeVariant = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 1 }
    };

    const page2Variant = {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: { delay: 0.79 } }
    }

    const fadeVariant = {
        initial: { opacity: 0 },
        animate: { opacity: 1 }
    };

    const nameVariant = {
        animate: i => ({
        transition: {
            delayChildren: 0.55,
            staggerChildren: 0.12,
            staggerDirection: i
        }
        }),
        exit: i => ({
        transition: {
            staggerChildren: 0.08,
            staggerDirection: i
        }
        })
    };

    const letterVariant = {
        initial: { opacity: 1, y: "120%" },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: "-120%" },
        duration: 4,
    };


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
                shuffledTarots,
                transition,
                homeVariant,
                fadeVariant,
                page2Variant,
                nameVariant,
                letterVariant,
            }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider }
