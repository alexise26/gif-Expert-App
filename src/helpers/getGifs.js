
export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jvpNGEnchy1VGGO05KAqNDYdVpv1pW7y&q=${ category }&limit=10`;
    const resp = await fetch(url); //Se llama el url y se guarda la respuesta

     const { data } = await resp.json(); //Desestructuramos para solo obtener data: en formato json
    
     const gifs = data.map( img => ({ //Damos formato para solo obtener esas tres propiedades de data
         id:img.id,
         title: img.title,
         url: img.images.downsized_medium.url
     }));

    return gifs;
};