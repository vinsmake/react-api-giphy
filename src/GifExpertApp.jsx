import { useState } from "react";
import { AddCategory, GifGrid } from "./components"




export const GifExpertApp = () => {

  //here we have the categories as an array
  const [categories, setCategories] = useState(['One Piece Anime']);

  //here we are adding a new category to the list
  const onAddCategory = (newCategory) => {

    //yo check if there's already that category in the list
    if (categories.includes(newCategory)) {
      return;
    }

    //here we use spread to expand/continue the array. We can also use [...categories, 'valorant'] to add it after and not before
    setCategories([newCategory, ...categories]);
  }





  //html zone
  return (
    <>
      <h1>Giphy API by @vinsmake</h1>


      {/* input */}
      <AddCategory
        onNewCategory={onAddCategory}
        ></AddCategory>

      {/* listado de gif */}
      
        {/* This maps all of the categories elements as a category */}
        {categories.map((category) => (
          /* the iterating element must have the key */
          <GifGrid 
          key={category} 
          category={category}
          ></GifGrid>
        ))}

      
    </>
  )
}
