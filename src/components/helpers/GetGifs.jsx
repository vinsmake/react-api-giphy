export const GetGifs = async (category) => {
    const KEY = `MUdNYQ4z6WNI0GjV5JP9dM76Z3X10gZB`
    const LIMIT = `20`
    const URL = `http://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${category}&limit=${LIMIT}`

    //we get the response as a variable
    const response = await fetch(URL);

    //with {data} we only extract the data propierty of the response.json() (Which is the response but we are transforming it into a json) 
    const { data } = await response.json();

    const gifs = data.map(item => {
      return {
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url
      }
    });

    console.log(gifs);
    return gifs;
  }//getGifs
  