import React from 'react'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import './SkeletonBookMatch.scss'
import {motion} from 'framer-motion'

const SkeletonBookMatch = ({display}) => {
    
  return(
      <div style={{height: "400px", width: "100%"}}>
        <Accordion style={{opacity: "1", position: "absolute", top: "0", minWidth: "200px", width: "100%", height: "100%", borderRadius: "5px"}}>
        <Card style={{ backgroundColor: "var(--amz_gray"}}>
        <Accordion.Toggle style={{display: "flex", alignItems: "center"}} as={Card.Header} eventKey="0">
            <div className='bgAnimation' style={{ minWidth: "50px", width: "50px", height: "75px", marginRight: "20px", borderRadius: "calc(0.25rem - 1px)"}} />
              <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <div style={{fontSize: "20px"}}>
                  <div className='bgAnimation' style={{backgroundColor: "var(--amz_white)", width: "300px", height: "20px", margin: "5px 0px 5px 0px", borderRadius: "calc(0.25rem - 1px)"}}/>
                </div>
                <div style={{fontSize: "16px"}}>
                  <div className='bgAnimation' style={{backgroundColor: "var(--amz_white)", width: "150px", height: "16px", margin: "4px 0px 4px 0px", borderRadius: "calc(0.25rem - 1px)"}}/>
                </div>
              </div>
        </Accordion.Toggle>
        <Accordion.Toggle style={{opacity: ".75", display: "flex", alignItems: "center"}} as={Card.Header} eventKey="0">
            <div className='bgAnimation' style={{ minWidth: "50px", width: "50px", height: "75px", marginRight: "20px", borderRadius: "calc(0.25rem - 1px)"}} />
              <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <div style={{fontSize: "20px"}}>
                  <div className='bgAnimation' style={{backgroundColor: "var(--amz_white)", width: "300px", height: "20px", margin: "5px 0px 5px 0px", borderRadius: "calc(0.25rem - 1px)"}}/>
                </div>
                <div style={{fontSize: "16px"}}>
                  <div className='bgAnimation' style={{backgroundColor: "var(--amz_white)", width: "150px", height: "16px", margin: "4px 0px 4px 0px", borderRadius: "calc(0.25rem - 1px)"}}/>
                </div>
              </div>
        </Accordion.Toggle>
        <Accordion.Toggle style={{opacity: ".5", display: "flex", alignItems: "center"}} as={Card.Header} eventKey="0">
            <div className='bgAnimation' style={{ minWidth: "50px", width: "50px", height: "75px", marginRight: "20px", borderRadius: "calc(0.25rem - 1px)"}} />
              <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <div style={{fontSize: "20px"}}>
                  <div className='bgAnimation' style={{backgroundColor: "var(--amz_white)", width: "300px", height: "20px", margin: "5px 0px 5px 0px", borderRadius: "calc(0.25rem - 1px)"}}/>
                </div>
                <div style={{fontSize: "16px"}}>
                  <div className='bgAnimation' style={{backgroundColor: "var(--amz_white)", width: "150px", height: "16px", margin: "4px 0px 4px 0px", borderRadius: "calc(0.25rem - 1px)"}}/>
                </div>
              </div>
        </Accordion.Toggle>
        <Accordion.Toggle style={{opacity: ".25", display: "flex", alignItems: "center"}} as={Card.Header} eventKey="0">
            <div className='bgAnimation' style={{ minWidth: "50px", width: "50px", height: "75px", marginRight: "20px", borderRadius: "calc(0.25rem - 1px)"}} />
              <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <div style={{fontSize: "20px"}}>
                  <div className='bgAnimation' style={{backgroundColor: "var(--amz_white)", width: "300px", height: "20px", margin: "5px 0px 5px 0px", borderRadius: "calc(0.25rem - 1px)"}}/>
                </div>
                <div style={{fontSize: "16px"}}>
                  <div className='bgAnimation' style={{backgroundColor: "var(--amz_white)", width: "150px", height: "16px", margin: "4px 0px 4px 0px", borderRadius: "calc(0.25rem - 1px)"}}/>
                </div>
              </div>
        </Accordion.Toggle>
        <Accordion.Toggle style={{opacity: ".05", display: "flex", alignItems: "center"}} as={Card.Header} eventKey="0">
            <div className='bgAnimation' style={{ minWidth: "50px", width: "50px", height: "75px", marginRight: "20px", borderRadius: "calc(0.25rem - 1px)"}} />
              <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <div style={{fontSize: "20px"}}>
                  <div className='bgAnimation' style={{backgroundColor: "var(--amz_white)", width: "300px", height: "20px", margin: "5px 0px 5px 0px", borderRadius: "calc(0.25rem - 1px)"}}/>
                </div>
                <div style={{fontSize: "16px"}}>
                  <div className='bgAnimation' style={{backgroundColor: "var(--amz_white)", width: "150px", height: "16px", margin: "4px 0px 4px 0px", borderRadius: "calc(0.25rem - 1px)"}}/>
                </div>
              </div>
        </Accordion.Toggle>
        </Card>
        </Accordion>
      </div>
  )
}

export default SkeletonBookMatch