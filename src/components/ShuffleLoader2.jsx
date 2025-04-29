import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NUM_BOXES = 5;

const ShuffleLoader2 = () => {
    const [boxes, setBoxes] = useState([...Array(NUM_BOXES).keys()]);
    const [yOffsets, setYOffsets] = useState(Array(NUM_BOXES).fill(0));
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (animating) return;

            // Pick two distinct indices
            let i = Math.floor(Math.random() * NUM_BOXES);
            let j;
            do {
                j = Math.floor(Math.random() * NUM_BOXES);
            } while (j === i);

            setAnimating(true);

            // Step 1: Animate Y (one up, one down)
            const tempY = [...yOffsets];
            tempY[i] = -40;
            tempY[j] = 40;
            setYOffsets(tempY);

            // Step 2: After 250ms, swap X by updating box order (Framer will animate layout)
            setTimeout(() => {
                setBoxes((prev) => {
                    const newBoxes = [...prev];
                    [newBoxes[i], newBoxes[j]] = [newBoxes[j], newBoxes[i]];
                    const tempY = [...yOffsets];
                    tempY[j] = -40;
                    tempY[i] = 40;
                    setYOffsets(tempY);
                    return newBoxes;
                });
            }, 250);

            // Step 3: Reset Y after swap
            setTimeout(() => {
                setYOffsets(Array(NUM_BOXES).fill(0));
                setAnimating(false);
            }, 600);
        }, 1300);

        return () => clearInterval(interval);
    }, [animating, yOffsets]);

    return (
        <div className="flex bg-black p-4 rounded justify-center h-full items-center">
            {boxes.map((box, idx) => (
                <motion.div
                    key={box}
                    layout
                    animate={{ y: yOffsets[idx] }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 bg-white border-l border-black"
                />
            ))}
        </div>
    );
};

export default ShuffleLoader2;
