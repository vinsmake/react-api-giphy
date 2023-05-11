import { GetGifs } from "./helpers/GetGifs";
import { useEffect } from "react";

export const GifGrid = ({ category }) => {

//we're using useEffect because in GiftExpertApp we are creating the componen when we add a new category, we don't need to excecute the GetGifs with the others categories.
useEffect(() => {
  //the first condition is the action that we want to excecute
  GetGifs(category);
}, [])

  
  

  return (
    <>
      <h3>{category}</h3>

    </>
  )
}
