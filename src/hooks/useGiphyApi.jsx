import { useEffect, useState } from "react";
import { GetGifs } from "../components/helpers/GetGifs";


export const useGiphyApi = (category) => {


    const [images, setImages ] = useState([]);
    //when we start the hook, this is true, when "setIamges is finished, then its false"
    const [isLoading, setIsLoading ] = useState(true);

const getImages = async() => {
  const newImages = await GetGifs(category);
  setImages(newImages);
  setIsLoading(false);
}

//we're using useEffect because in GiftExpertApp we are creating the componen when we add a new category, we don't need to excecute the GetGifs with the others categories.
useEffect(() => {
  //the first condition is the action that we want to excecute
  getImages();
}, [])

//when we use images, is like if we were using images = images; also, isLoading can be true or false, depending in what we have.
    return {
        images,
        isLoading,
    }
}
