import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const Modal = ({open, handleClose, bookDeets}) => {

    const containerVariants = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        
        visible: {
            opacity: 1,
            x: '0',
            y: '0',
            transition: { delay: .2, duration: .5 }
        },
        exit: {
            x: '-100vw',
            transition: { delay: .1, duration: .5 },
            opacity: 0
        },
        hiddenFade: {
            opacity: 0
        },
        visibleFade: {
            opacity: 1,
            transition: { delay: .1, duration: 1 }
        },
        exitFade: {
            opacity: 0,
            transition: { delay: .1, duration: .75 }
        }
    }

    const modalBackdrop = {
        position: "fixed",
        right: "0",
        top: "0",
        zIndex: "200",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.75)"
    }

    const modal = {
        backgroundColor: "var(--amz_gray)",
        zIndex: "201",
        height: "500px",
        width: "329px",
        borderRadius: "10px",
        position: "fixed",
        right: "50",
        top: "50",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        textAlign: "left"
    }

    const detailsAuth = {
        fontSize: "16px", 
        marginBottom: "30px"
    }

    const detailsDesc = {
        fontSize: "16px", 
        marginBottom: "20px"
    }

    return(
        <AnimatePresence exitBeforeEnter>
        { open &&
        <>
        <motion.div 
          onClick={handleClose}
          style={modalBackdrop}
          variants={containerVariants}
          initial="hiddenFade"
          animate="visibleFade"
          exit="exitFade"
        />
        
        <motion.div
          style={modal}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div>{bookDeets.title}</div>
          <div style={detailsAuth}>by {bookDeets.author}</div>
          <div style={detailsDesc}>{bookDeets.description}</div>
          <div style={{fontSize: "11px"}}>isbn13: {bookDeets.primary_isbn13}</div>
        </motion.div>
        </>
        }
        </AnimatePresence>
    )
    

}

export default Modal