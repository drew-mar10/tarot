// import React, { useContext } from "react";
// import { Context } from "../pages/AppContext";
// import { useEffect, useState } from "react";
// import { Button, Box, Text, SimpleGrid, Container, Heading, Skeleton } from "@chakra-ui/react";
// import TarotCards from "../components/TarotCards";
// import { Router, useRouter } from "next/router";
// import { motion } from "framer-motion";


// export default function Spread() {
//     const { tarots, cardDraw, showDeck } = useContext(Context);
//     const router = useRouter();
//     const query = router.query;
//     const question = query.question;
//     const [isLoaded, setIsLoaded] = useState(false)


//     const blackBox = {
//         height: '100vh',
//         initial: {
//             height: "100vh",
//             bottom: 0,
//         },
//         animate: {
//             height: 0,
//             transition: {
//                 delay: 2,
//                 // when: 'afterChildren',
//                 duration: 4,
//                 ease: 'easeOut',
//                 out: 0,
//             },
//         },
//     };

//     return (
//         <>

//         <Box
//         bg="black"
//         width='100vw'
//         height='100vh'
//         >

//         <motion.div
//             id='initialTransitionDiv'
//             initial="initial"
//             animate="animate"
//             enter="enter"
//             variants={blackBox}
//         />

//         <TarotCards />

//         {/* <Button
//             type="submit"
//             onClick={() => router.push("/")}>
//             New Reading
//         </Button> */}
//         {/* </Box> */}
//         </Box>
//     </>
//     )
// }