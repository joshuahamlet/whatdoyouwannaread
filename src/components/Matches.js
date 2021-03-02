import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import './Matches.scss'
import { bookQuery } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import MatchesFriends from './MatchesFriends'
import MatchesBooks from './MatchesBooks'
import MatchesChat from './MatchesChat'
import { motion, AnimatePresence } from 'framer-motion'

const Matches = () => {

    const [matchState, setMatchState] = useState("Books")
    const handleStateBooks = () => setMatchState("Books")
    const handleStateFriends = () => setMatchState("Friends")
    const handleStateChat = () => setMatchState("Chat")

    //const { data } = useQuery(bookQuery)
 
    //console.log(data)

return(
    <motion.div style={{
        display: "flex", 
        flexDirection: "column", 
        width: "100%", 
        maxWidth: "900px", 
        height: "100%", 
        marginTop: "50px", 
        position: "relative"
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
    <AnimatePresence>
    <motion.div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                alignSelf: 'center'
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
        <ButtonGroup style={{ width: "95%", marginBottom: "15px", alignSelf: "center"}} >
            <Button onClick={handleStateBooks} className="match_button" variant="primary" >Books</Button>
            <Button onClick={handleStateFriends} className="match_button" variant="primary" >Friends</Button>
            <Button onClick={handleStateChat} className="match_button" variant="primary" >Chat</Button>
        </ButtonGroup>
    </motion.div>
    </AnimatePresence>
    <div style={{width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center"}}>
    <AnimatePresence>
    {matchState === "Friends" && <MatchesFriends/>}
    </AnimatePresence>
    <AnimatePresence>
    {matchState === "Books" && <MatchesBooks/>}
    </AnimatePresence>
    <AnimatePresence>
    {matchState === "Chat" && <MatchesChat/>}
    </AnimatePresence>
    </div>
    </motion.div>
    )
}

export default Matches