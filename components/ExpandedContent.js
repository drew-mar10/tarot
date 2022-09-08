import React from "react";
import { useContext } from "react";
import { Context } from "../pages/AppContext";
import { motion } from 'framer-motion';
import { Button, Image } from "@chakra-ui/react";
import { ReactComponent as Close } from '../public/Close.svg'


const AnimatedContentBlock = ({children}) => {
    <motion.div>
        {children}
    </motion.div>
};

const ExpandedContent = ({data, onClick}) => {
    const { cardContentVariants, mainImageVariants, expandedVariants } = useContext(Context);

    return (
    <motion.div
        variants={expandedVariants}
        animate='active'
        initial='inactive'
        exit='exit'
    >
        <Button
            className="close"
            onClick={() => onClick(false)}>
                {/* <Close /> */}
        </Button>

        <motion.div className="flex">
            <motion.div
                className="imageContainer"
                variants={mainImageVariants}
            >
            {/* <Image
                src={data.imgSrc}
                alt={data.imgAlt}
                className="mainImage"
            /> */}
            </motion.div>
        </motion.div>

        <motion.div className="expandedContent">
            <AnimatedContentBlock>
                <h2 className="title-large">Title</h2>
                <h3 className="location">location</h3>
                <h5 className="price">price</h5>
                <p>longDescription</p>
            </AnimatedContentBlock>

            {/* <AnimatedContentBlock>
            <ul className="amenitiesList flex">
                {data.amenities.map((amenity) => (
                    <li key={amenity.name}>
                    <amenity.icon />
                    <span>{amenity.name}</span>
                    </li>
                ))}
            </ul>
            </AnimatedContentBlock> */}

            {/* <AnimatedContentBlock>
            <iframe
                className="map"
                title="Rental Map"
                src={data.mapUrl}
                loading="lazy"
            ></iframe>
            </AnimatedContentBlock> */}

            <AnimatedContentBlock>
                <Button className="reserveBtn">Reserve</Button>
            </AnimatedContentBlock>
        </motion.div>

    </motion.div>
    )
}

export default ExpandedContent;