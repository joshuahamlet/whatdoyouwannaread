import React, {useEffect, useState} from "react"
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import {motion, AnimatePresence} from 'framer-motion'
import {useQuery} from '@apollo/client'
import {getUserFriends} from '../graphql/queries'
import './MatchesFriends.scss'
import SkeletonBookMatch from './SkeletonBookMatch'

const pic2 ="https://www.kindpng.com/picc/m/346-3463544_pokeball-drawing-free-download-pokemon-master-ball-png.png"

const MatchesFriends = () => {
    const [imgStatus, setImgStatus] = useState({
        loaded: {display: "none"},
        loading: {},
        test: "shit"
    })

    //friend.userIcon

    const { loading, error, data, refetch } = useQuery(getUserFriends, {
        fetchPolicy: "no-cache",
        variables: {userId: "6008949669fca03ff4445f55"}
    })
    const userFriends = data ? data.getUserFriends : []

    useEffect(() => {
        console.log("LOADING", loading)
        console.log("USERFRIENDS", userFriends)
        console.log("IMGSTATUS", imgStatus)
    }, [userFriends, imgStatus, loading])

    const imgLoadHandler = () => {
        setImgStatus({
            loaded: {},
            loading: {display: "none"},
            test: "FUCK"
        })
    }

    return(
        <motion.div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "95%",
            position: "absolute",
            top: "0"
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
        
        {/* <AnimatePresence>
            {imgStatus.test !== "FUCK" && <SkeletonBookMatch /> } 
        </AnimatePresence> */}
        
         <Accordion style={{minWidth: "200px", width: "100%", borderRadius: "5px"}} >
         <Card style={{ minHeight: "100px", backgroundColor: "var(--amz_gray"}} >
        {loading && <SkeletonBookMatch/>}
        { userFriends &&
            userFriends.map((friend, index) => {
                return (
                  <div style={{marginBottom: "-1px"}} key={friend.userName}>
                    <Accordion.Toggle style={{display: "flex", alignItems: "center"}} as={Card.Header} eventKey={index.toString()}>
                        <img className="loaded" onLoad={imgLoadHandler} src={friend.userIcon} style={imgStatus.loaded} />
                        <div className="loading" style={imgStatus.loading} />
                          <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                            <div style={{fontSize: "20px"}}>
                              {friend.userName}
                            </div>
                            <div style={{fontSize: "16px"}}>
                              X books in common
                            </div>
                          </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index.toString()}>
                        <Card.Body style={{display: "flex", alignItems:  "center"}}>
                            <Image src={pic2} style={{backgroundColor: "red", width: "69px", marginRight: "20px"}} rounded/>
                            <div style={{fontSize: "20px"}}>These are the books!</div>
                        </Card.Body>
                    </Accordion.Collapse>
                  </div>
                )
            })
        }
        </Card>
        </Accordion>

        </motion.div>
    )
}

export default MatchesFriends