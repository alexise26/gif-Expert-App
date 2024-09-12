import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
     const [images, setImages] = useState([]);//Creamos el UseState que va a guardar las imagenes
     const [isLoading, setIsLoading] = useState(true);

     const getImages = async()=> {
         const newImages = await getGifs( category ); // Llamamos nuestra funcion de JS y almacenamos el resultado en newImages
         setImages(newImages); //Asignamos el resultado al Use State
         setIsLoading(false);
     };

     useEffect(() => {
         getImages();        //Llamamos la funcion que llama a la de JS usando un Use Effect para que se llame cada vez que se inicialice un componente
     }, []);
  
    return {
    images:images,
    isLoading: isLoading
  }
}

