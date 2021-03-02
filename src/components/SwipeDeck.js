import React, {useEffect, useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import TinderCard from 'react-tinder-card'
import './SwipeDeck.scss'
import {useQuery} from '@apollo/client'
import {bookQuery, bookSelectedMutation, selectBook, rejectBook, snoozeBook, getBookDeck} from '../graphql/queries'
import LoadSmoothImg from './LoadSmoothImg'
import Motion from './Motion'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import SkeletonCard from './SkeletonCard'

const SwipeDeck = () => {

    const [swipeCount, setSwipeCount] = useState(0)

    const [bookDeets, setBookDeets] = useState({})
    const [open, setOpen] = useState(false)
    const handleClose = () => {
      setOpen(false)
      setBookDeets({})
    }
    const handleOpen = (bookInfo) => {
      setOpen(true)
      setBookDeets(bookInfo)
    }

    
    

    const { loading, error, data, refetch } = useQuery(bookQuery, {
        fetchPolicy: "no-cache"
    })
    const bookList = data ? data.getBooks : []

    const loadMoreBooks = () => {
        setSwipeCount(0)
        refetch()
    }

    useEffect(() => {
        console.log(swipeCount)
        console.log(bookList)
        console.log(data)
    }, [swipeCount])

    const onSwipe = async(direction, bookInfo) => {
        console.log('You swiped: ' + direction)
        
        switch(direction) {
            case 'right':
  ///////////////////////////////////////////////////////////////////
              console.log("BOOKINFO", bookInfo)
                const stuffR = await selectBook(bookInfo._id)
                console.log(stuffR[stuffR.length -1])
                setSwipeCount(swipeCount => swipeCount + 1)
  ///////////////////////////////////////////////////////////////////////
              return
            case 'left':
  
              const stuffL = await rejectBook(bookInfo._id)
                console.log(stuffL[stuffL.length -1])
                setSwipeCount(swipeCount => swipeCount + 1)
  
              return
            case 'up':
              
              const stuffU = await snoozeBook(bookInfo._id)
                console.log(stuffU[stuffU.length -1])
              setSwipeCount(swipeCount => swipeCount + 1)

              return
            case 'down':
  
              //DownLogic
              console.log(bookInfo)
              handleOpen(bookInfo)
              
              return
            default:
              return 'foobar';
          }




        
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    const bookCards = () => bookList.map(
        (book, index) => {
        
        return (
            <TinderCard 
              key={book.title}
              className={`swipe ${index === 0 ? "top-card" : ""}`}  
              
              onSwipe={(dir) => onSwipe(dir, book)} 
              onCardLeftScreen={() => onCardLeftScreen(book.title)} 
              preventSwipe={['down']}
            >
              <div 
                style={{backgroundColor: "var(--amz_black)", overflow: "hidden"}} 
                className="tinder-card"
              >
                <LoadSmoothImg src={book.book_image} alt={book.title} />
              </div>

            </TinderCard>
        )}
    )


    return(
        <>
          <Modal open={open} handleClose={handleClose} bookDeets={bookDeets}/>
            <Motion>
            {loading && <SkeletonCard/> }   
                { 
                
                bookList.length === 10 ?

                bookList.map(
                    (book, index) => {
                    
                    return (
                        <TinderCard 
                          key={book.title}
                          className={`swipe ${index === 0 ? "top-card" : ""}`}  
                          
                          onSwipe={(dir) => onSwipe(dir, book)} 
                          onCardLeftScreen={() => onCardLeftScreen(book.title)} 
                          preventSwipe={['down']}
                        >
                          <div 
                            style={{backgroundColor: "var(--amz_black)", overflow: "hidden"}} 
                            className="tinder-card"
                          >
                            <LoadSmoothImg src={book.book_image} alt={book.title} />
                          </div>
            
                        </TinderCard>
                    )})
                
                : ""
                
                
                }
            </Motion>

            { swipeCount !== 10 ? "" :
            <Motion>
                <Alert onClick={loadMoreBooks} style={{backgroundColor: "var(--amz_blue)", color: "var(--amz_white)", cursor: "pointer", width: "280px"}}>
                    Load More Books
                </Alert>
                <Link style={{textDecoration: "none", width: "280px"}} to="/matches">
                <Alert style={{backgroundColor: "var(--amz_gray)", color: "var(--amz_orange)"}}>
                    Check Matches
                </Alert>
                </Link>
            </Motion>
            }
        </>
    )
}

export default SwipeDeck