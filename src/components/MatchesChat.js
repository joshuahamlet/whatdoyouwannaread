import React, {useEffect, useRef, useState} from "react"
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import {motion} from 'framer-motion'
import {useQuery, useSubscription} from '@apollo/client'
import {getUserChannels, messageAddedSubscription} from '../graphql/queries'
import {IoSend} from 'react-icons/io5'
import './MatchesChat.scss'
import SkeletonBookMatch from './SkeletonBookMatch'

const MatchesChat = () => {
    const [scrollClick, setScrollClick] = useState(0)

    const ref1 = useRef(null)
    const ref2 = useRef(null)

    const handleScroll = () => {
        setTimeout(() => {
            setScrollClick(scrollClick + 1 )
            console.log(scrollClick)
        }
            , 500)
    }
            

    const { loading, error, data, refetch } = useQuery(getUserChannels, {
        fetchPolicy: "no-cache",
        //variables: {userId: "6008949669fca03ff4445f55"}
    })
    const userChannels = data ? data.getUserChannels : []
    console.log("USERCHANNELS", userChannels)

    useSubscription(messageAddedSubscription, {
        variables: {messageChannel: "6028012478fe0822f30db15f"},
        onSubscriptionData: ({client, subscriptionData}) => {
            console.log(subscriptionData)
            refetch()
        }
      })

      useSubscription(messageAddedSubscription, {
        variables: {messageChannel: "602e387d7654b432af9832f0"},
        onSubscriptionData: ({client, subscriptionData}) => {
            console.log(subscriptionData)
            refetch()
        }
      })

      //const handleScroll = () => ref1.current.scrollIntoView()

      useEffect(() => {
        if(ref1.current) {
            ref1.current.scrollTo(0, ref1.current.scrollHeight)
        }
      }, [userChannels, scrollClick])


    const chats = userChannels.map((channel, index) => {
        return(
            <>
            <Accordion.Toggle
                onClick={handleScroll} 
                style={{display: "flex", alignItems: "center"}} 
                as={Card.Header} 
                eventKey={index.toString()}
                >
                <div className='bgAnimation' style={{ minWidth: "50px", width: "50px", height: "75px", marginRight: "20px", borderRadius: "calc(0.25rem - 1px)"}} />
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div>
                            {channel.channelName}
                        </div>
                        <div style={{display: "flex", fontSize: "10px"}}>
                        {channel.channelMembers[0].userName}
                        {channel.channelMembers[1].userName}
                        </div>
                    </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body className='test' style={{display: "flex", 
                    flexDirection: "column", 
                    alignItems:  "center", 
                    height: "400px",
                    maxHeight: "400px", 
                    }}>
                    {
                        channel.messageList.map((message, index) => {
                            return(
                                <div style={{
                                    marginTop: "3px",
                                    color: "var(--amz_white)", 
                                    alignSelf: message.messageFrom._id === "6008949669fca03ff4445f55" ? "flex-start" : "flex-end",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: message.messageFrom._id === "6008949669fca03ff4445f55" ? "flex-start" : "flex-end",
                                    borderRadius: "10px"
                                    }}>
                                    {console.log("MESSAGE", message)}
                                    {console.log("MESSAGEFROM ID", message.messageFrom._id)}
                                    <div style={{fontSize: "12px"}}>
                                        {message.messageFrom.userName}
                                    </div>
                                    <div style={{
                                        fontSize: "16px", 
                                        margin: "5px",
                                        color: "var(--amz_black)",
                                        backgroundColor: "var(--amz_white)",
                                        borderRadius: "10px",
                                        padding: "7px",
                                        margin: message.messageFrom._id === "6008949669fca03ff4445f55" ? "0px 0px 0px 15px" : "0px 15px 0px 0px",
                                        }}>
                                        {message.messageText}
                                    </div>
                                </div> 
                            )
                        })
                    }    

                    <div style={{display: "flex", width: "100%", alignItems: "center"}}>
                        <input className="mc-input" type="text" placeholder="Say something..."/>
                        <button className="input-button"><IoSend className="input-button-icon" /></button>
                    </div>
                    <div style={{ float:"left", clear: "both" }}
                    ref={index === 0 ? ref1 : ref2}></div>
                </Card.Body>
            </Accordion.Collapse>
            </>
        )
    })

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
        <Accordion style={{minWidth: "200px", width: "100%", borderRadius: "5px"}} >
            <Card style={{minHeight: "100px", backgroundColor: "var(--amz_gray"}} >
                {loading && <SkeletonBookMatch/>}
                {userChannels && chats}
                
            </Card>
        </Accordion>
        </motion.div>
    )
}

export default MatchesChat