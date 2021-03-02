import React, {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Fade from 'react-bootstrap/Fade'
import {motion} from 'framer-motion'
import Animation from './Animation'



const Landing = () => {
    const [open, setOpen] = useState(false);
    

    return(
            <motion.div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                initial={{ x: "150vw" }}
                animate={{ x: "0" }}
                exit={{ x: "-150vw" }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                }}
            >
                <Animation/>
                <Alert style={{backgroundColor: "var(--amz_gray"}}>
                  ##LANDING##
                  <Button 
                   style={{marginLeft: "10px"}}
                   variant="light"
                   onClick={() => setOpen(!open)}
                  >
                    Light
                  </Button>
                </Alert>

                <Fade in={open}>
                <div id="example-fade-text">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                </div>
                </Fade>
            </motion.div>
    )
}

export default Landing