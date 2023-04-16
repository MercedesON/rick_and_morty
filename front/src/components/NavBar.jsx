import React from "react";
import SearchBar from "./SearchBar";
import style from '../styles/NavBar.module.css'
import rick from '../img/rick-y-morty.gif'

import { Link } from "react-router-dom";
import{useDispatch} from "react-redux";

import { resetCharacters } from "../redux/actions/actions";

export default function NavBar({ onSearch, logout }) {
  const dispatch=useDispatch()
  return (
    <div className={style.nav}>      
      <Link to="/home">
        <button  className={style.navbutton}  onClick={()=> dispatch(resetCharacters())}>Home</button>
      </Link>
      <Link to="/about">
        <button className={style.navbutton}>About</button>
      </Link>
      <Link to="/favorites">
        <button className={style.navbutton}>Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch}/>
      <div>
        <img className={style.logo} src={rick} alt="rick logo"></img>
      </div>
      <button className={style.navbutton} onClick={logout}>LogOut</button>
    </div>
  );
}