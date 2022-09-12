// import React from 'react'
// import { useState, useContext, useEffect } from 'react'
// import { Context } from '../pages/AppContext'
// import Card from './Card'
// import { motion, AnimatePresence, useAnimation } from 'framer-motion'
// import { Container, Box, SimpleGrid, Button, LinkOverlay } from '@chakra-ui/react'
// import { shuffle } from 'lodash'
// import CardBack from '../public/CardBack.jpeg'

// const defaultState = {
//     opacity: 0,
//     scale: 0.6
// };

// const spring = {
//     type: "spring",
//     // velocity: 50,
//     damping: 1,
//     stiffness: 75,
//     // duration: 30,
//     // transition: {
//     //     staggerDirection: 3,
//     //     // duration: 5,
//     //     repeat: Infinity,
//     // },
//     mass: 7,
// };



// export default function Shuff() {
//     const { tarots, refreshCards, setTarots, shuffledTarots, shuffleDeck } = useContext(Context);
//     const [isMounted, setIsMounted] = useState(false);

//     const controls = useAnimation();


//     useEffect(() => {
//         const timer = setTimeout(() => {
//             controls.start({
//                 transition: {
//                     type: "spring",
//                     damping: 25,
//                     stiffness: 120,
//                 },
//                 hidden: { opacity: 0 },
//             });
//         }, 2000);
//         return () => {
//             clearTimeout(timer);
//         };
//         }, [])
//     //     setTimeout(() => setTarots(shuffle(tarots)), 2000);
//     // }, [tarots]);


// return (
//     <>
//     <Box bg="black">

//     {/* <Button
//     onClick={() => setIsMounted(!isMounted)}>
//         {`${isMounted ? "Unmount" : "Mount"} Element`}
//         shuffle
//     </Button> */}

//     <SimpleGrid
//         columns={[5, null, 5]}
//         spacingX='5px'
//         w='85vw'
//     >

//     {tarots.slice(0, 20).map((tarot, index) => {
//         return (
//             // <Box>
//             <>
//             <AnimatePresence>
//                 {/* {isMounted && ( */}
//                 <motion.div
//                 animate={controls}
//                 layout= "position"
//                 initial={{
//                     opacity: 3,
//                 }}
//                 transition={{
//                     type: "spring",
//                         damping: 25,
//                         stiffness: 120,
//                     transition: {
//                         staggerDirection: 3,
//                         repeat: 4,
//                         ease: 'Linear',
//                         // repeatType: 'Loop',
//                     },
//                     // mass: 6,
//                 }}
//                 exit={{
//                     opacity: 3,
//                 }}
//                     key={tarot.id}
//                 >

//                 <Card
//                     key={tarot.id}
//                     src={tarot.image}
//                     // name={tarot.name}
//                     // arcana={tarot.suit}
//                     // description={tarot.description}
//                     value={tarot.id}
//                 />

//                 </motion.div>
//                 {/* )} */}

//             </AnimatePresence>
//         </>
//         )}
//     )}

//     </SimpleGrid>
//     </Box>
//     </>
// )}


// // const spring = {
// //     type: "spring",
// //     damping: 25,
// //     stiffness: 120
// //   };
  
// //   const transition = {
// //     type: "spring",
// //     damping: 25,
// //     stiffness: 120
// //   };

// //   const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];

  
// //   export default function ShuffleDeck() {
// //     const [colors, setColors] = useState(initialColors);
  
// //     useEffect(() => {
// //       setTimeout(() => setColors(shuffle(colors)), 1000);
// //     }, [colors]);
  
// //     return (
// //       <ul>
// //         {colors.map((background) => (
// //           <motion.li
// //             key={background}
// //             layout
// //             transition={spring}
// //             style={{ background }}
// //           />
// //         ))}
// //       </ul>
// //     );
// //   };