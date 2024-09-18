import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { PropTypes } from "prop-types";

export function GifGrid({category}) {
    
    const {images, isLoading} = useFetchGifs( category );// Llamamos nuestro custom hook
  
    return (
    <>
        <h3>{category}</h3>
        {
            isLoading ? (<h2 className="">Cargando...</h2>):null
        }
        <div className="card-grid">
            {   //Mapeamos el resultado [ara sacar el ID
                images.map( (image) => ( 
                    <GifItem 
                        key={image.id} 
                        {...image} //Esto es para enviar todas las props de image en lugar de mandar una por unaßß
                    />
                ))
            }
        </div>

    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}