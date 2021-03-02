import React, {useState, useEffect, useContext} from 'react'
import {AuthContext} from '../contexts/authContext'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import {GiSpellBook} from 'react-icons/gi'
import {HiMenu} from 'react-icons/hi'
import './Navbar.scss'
import {useQuery} from '@apollo/client'
import {bookQuery} from '../graphql/queries'

const NavbarTitle = () => {

    const {authState, setAuthState} = useContext(AuthContext)

    useQuery(bookQuery)

    useEffect(() => {
        console.log("NAV AUTHSTATE", authState)
    }, [authState])

    const logout = () => {
        localStorage.removeItem('accessToken')
        setAuthState(null)
    }

    return(
        <Navbar className="justify-content-between navbar_main" collapseOnSelect expand="sm" variant="dark">
            <Navbar.Brand className="navbar_brand" href="#home">
                <Link style={{color: "white", textDecoration: "none", display: "flex"}} to="/">
                <GiSpellBook style={{color: "var(--amz_white)", fontSize: "50px", marginRight: "10px"}}/>
                <div style={{lineHeight: "20px", alignSelf: "flex-end"}}>
                    WhatDoYou <br/>
                    WannaRead
                </div>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" >
                <HiMenu style={{color: "var(--amz_white)", fontSize: "25px"}}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navbar_links" >
                { authState ?
                    <>
                      <Nav.Link href="#" style={{alignSelf: "flex-end"}} >
                        <Link style={{color: "var(--amz_white)", fontSize: "20px", textDecoration: "none"}} to="/startswiping">
                          Swipe!
                        </Link>
                      </Nav.Link>
                      <Nav.Link style={{alignSelf: "flex-end"}} href="#">
                        <Link style={{color: "var(--amz_white)", fontSize: "20px", textDecoration: "none"}} to="/matches">
                          Matches
                        </Link>
                      </Nav.Link>
                      <Nav.Link  style={{alignSelf: "flex-end"}} href="#">
                        <Link onClick={logout} style={{color: "var(--amz_white)", fontSize: "20px", textDecoration: "none"}} to="/">
                          Logout
                        </Link>
                      </Nav.Link>
                    </>
                  : 
                  <>
                    <Nav.Link style={{alignSelf: "flex-end"}} href="#">
                      <Link style={{color: "var(--amz_white)", fontSize: "20px", textDecoration: "none"}} to="/Login">
                        Login
                      </Link>
                    </Nav.Link>
                  </>
                }
            </Nav>  
            </Navbar.Collapse>
        </Navbar>
    )


}

export default NavbarTitle