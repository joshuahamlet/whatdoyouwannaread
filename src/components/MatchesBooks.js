import React, {useEffect} from "react"
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import {motion} from 'framer-motion'
import {useQuery} from '@apollo/client'
import {getSelectedBooks} from '../graphql/queries'
import SkeletonBookMatch from './SkeletonBookMatch'

const pic2 ="https://www.kindpng.com/picc/m/346-3463544_pokeball-drawing-free-download-pokemon-master-ball-png.png"

const MatchesBooks = () => {

    const { loading, error, data, refetch } = useQuery(getSelectedBooks, {
        fetchPolicy: "no-cache",
        variables: {userId: "6008949669fca03ff4445f55"}
    })
    const selectedBooks = data ? data.getSelectedBooks : []

    useEffect(() => {
        console.log(selectedBooks)
        console.log("DATA", data)
    }, [selectedBooks])

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
         <Card style={{ minHeight: "100px", backgroundColor: "var(--amz_gray"}} >
         {loading && <SkeletonBookMatch/>}
         {selectedBooks ?
            selectedBooks.slice(0,5).map((book, index) => {
                return (
                  <div key={book.title}>
                    <Accordion.Toggle style={{display: "flex", alignItems: "center"}} as={Card.Header} eventKey={index.toString()}>
                        <img src={book.book_image} style={{width: "50px", height: "75px", marginRight: "20px", border: "0px", borderRadius: "5px"}} />
                          <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                            <div style={{fontSize: "20px"}}>
                              {book.title}
                            </div>
                            <div style={{fontSize: "16px"}}>
                              by: {book.author}
                            </div>
                          </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index.toString()}>
                        <Card.Body style={{display: "flex", alignItems:  "center"}}>
                            <img src={pic2} style={{backgroundColor: "red", width: "69px", marginRight: "20px"}} rounded/>
                            <div style={{fontSize: "20px"}}>heres some words</div>
                        </Card.Body>
                    </Accordion.Collapse>
                  </div>
                )
            })
          :
          <div style={{backgroundColor: "pink", width: "500px"}}>afbnaflibaglblgaebsga</div>
        }
        </Card>
        </Accordion>
      </motion.div>
    )
}

export default MatchesBooks