import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShuffleLoader = () => {
    const [boxes, setBoxes] = useState([0, 1, 2, 3, 4]);
    const color = ['bg-red-100', 'bg-cyan-100']
    useEffect(() => {
        const interval = setInterval(() => {
            setBoxes((prev) => {
                const newArr = [...prev];
                const i = Math.floor(Math.random() * newArr.length);
                const j = Math.floor(Math.random() * newArr.length);
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
                return [...newArr];
            });
        }, 700);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-2 bg-black p-4 rounded">
            {boxes.map((box) => (
                <motion.div
                    key={box}
                    layout
                    className={`w-10 h-16 ${box % 2 ? color[0] : color[1]} border border-gray-300`}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
            ))}
        </div>
    );
};

export default ShuffleLoader;
