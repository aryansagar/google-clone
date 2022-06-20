import React from 'react'
import "./Home.css"
import Search from "./Search"
import { Link } from "react-router-dom"

import AppsIcon from '@mui/icons-material/Apps';
import { Avatar, Button } from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';

function Home() {
    return (
        <div className="home">
            

            <div className="home__header">

                <div className="home__headerLeft">
                    <Link to="/about"> About</Link>
                    <Link to="/store">Store</Link>


                 
                </div>

               <div className="home__headerRight">
                  <Link to="/gmail">Gamil</Link>
                  <Link to="/about">Images</Link>
                  <AppsIcon />
                  <Avatar />

                  {/* Link */}
                  {/* Link */}
                  {/* Icon */}
                  {/* Avatar */}
               </div>

            </div>



           <div className="home__body">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />

                <div className="home__inputContainer">   
                 <Search hideButtons/>
                </div>
           </div>

        </div>
    )
}

export default Home
