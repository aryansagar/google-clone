import React,{useState} from 'react'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

import "./Search.css"
import { useHistory } from "react-router-dom"

import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button }  from "@mui/material"

function Search({ hideButtons = false }) {
    const [state, dispatch] = useStateValue();

    const [input , setInput ] = useState('')
    const history = useHistory()
 
    const search = (e) =>{
      e.preventDefault();
      console.log("you hit the search button >>", input)
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term : input 
      })
      history.push('/search')
      
    }

    return (
        <form className="search">
            <div className="search__input">
              <SearchIcon className="search__inputIcon" />
              <input value={input} onChange={e =>setInput(e.target.value)}/>
              <MicIcon />

            </div>
        {!hideButtons ? (
           <div className="search__buttons">
              <Button type="submit" onClick={search} varient="outlined">Goolgle Search </Button>
              <Button  varient="outlined">I'm Feeling Lucky </Button>
            </div> ): (
            <div className="search__buttonsHidden">
              <Button type="submit" onClick={search} varient="outlined">Goolgle Search </Button>
              <Button  varient="outlined">I'm Feeling Lucky </Button>
            </div>

 )
 }

           
            
        </form>
    )
}

export default Search
