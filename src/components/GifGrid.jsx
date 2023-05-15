import {GifItem} from "./GifItem";
import {useGiphyApi} from "../hooks/useGiphyApi";

export const GifGrid = ({ category }) => {




//this is a custom wook which returns the images and the state (loading)
const { images, isLoading} = useGiphyApi(category)
  
  

  return (
    <>
      <h3>{category}</h3>
      
    {
      isLoading && (<h2>Cargando...</h2>)
    }


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
