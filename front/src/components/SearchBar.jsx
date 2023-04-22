import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleNumber } from "../redux/actions/actions";
import style from "../styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // console.log("####", onSearch);
  const [id, setId] = useState("");
  const dispatch =useDispatch()

  function handleChange(event) {
    setId(event.target.value);
  }
  function submit(){
    onSearch(id)
    dispatch(handleNumber(1))
  }
  return (
    <div className={style.search}>
      <input className={style.searchInput} onChange={handleChange} type="search" name="search" value={id} />
      <button className={style.searchButton} onClick={() => onSearch(id)}>Search 🔎</button>
    </div>
  );
}
