import React from 'react'
import { motion } from 'framer-motion'

const Motion = ({children, pos, posTop}) => {
    return (
        <motion.div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                //maxWidth: "900px",
            }}
            initial={{ x: "125vw" }}
            animate={{ x: "0" }}
            exit={{ x: "-125vw" }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20
            }}
        >
            {children}
        </motion.div>
    )
}

export default Motion