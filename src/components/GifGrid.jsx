import { useEffect, useState } from "react";
import { GetGifs } from "./helpers/GetGifs";
import {GifItem} from "./GifItem";

export const GifGrid = ({ category }) => {


const [images, setImages ] = useState([]);


const getImages = async() => {
  const newImages = await GetGifs(category);
  setImages(newImages);
}

//we're using useEffect because in GiftExpertApp we are creating the componen when we add a new category, we don't need to excecute the GetGifs with the others categories.
useEffect(() => {
  //the first condition is the action that we want to excecute
  getImages();
}, [])

  
  

  return (
    <>
      <h3>{category}</h3>

    <div className="card-grid">
      {/* We are descructuring "images" here (the one used in useState) */}
      {
        images.map( ( images ) => (
          /* with ...images we spred all the propierties to GifItem */
          <GifItem key={images.id} {...images}/>
        ))
      }
    </div>
    </>
  )
}
