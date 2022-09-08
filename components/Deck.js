// import React from "react";
// import { useState, useContext } from "react";
// import { Context } from "../pages/AppContext";
// import CardContent from './CardContent';
// import TarotCards from './TarotCards'
// import { Box } from "@chakra-ui/react";

// export default function Deck() {
//     const { cardVariants } = useContext(Context);
//     const [isExpanded, setIsExpanded] = useState();

//     return (
//         // <motion.div
//         // className={`card ${isExpanded ? 'expanded' : 'initial'}`}
//         // variants={cardVariants}
//         // animate={isExpanded ? "active" : "inactive"}
//         // initial="inactive"
//         // >

//             <div
//             // className="content"
//             >
//                 {/* <AnimatePresence
//                     initial={false}
//                     exitBeforeEnter
//                 > */}
//                     {!isExpanded ? (
//                         <Box>
//                         <CardContent
//                             onClick={setIsExpanded}
//                             key="deck" // children of AnimatePresence need a key
//                         />
//                         </Box>
//                     ) : (
//                         <Box
//                         marginTop='-140pt'
//                         width='100vw'
//                         >
//                         <TarotCards
//                             onClick={setIsExpanded}
//                             key="tarotcards" // children of AnimatePresence need a key
//                         />
//                         </Box>
//                     )}
//                 {/* </AnimatePresence> */}
//             </div>

//         // </motion.div>
//     );
// }