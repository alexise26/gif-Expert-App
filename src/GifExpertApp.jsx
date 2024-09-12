import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () =>{

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory)) return;
        // setCategories( cat => [... cat, 'Attack on Titan']); // Forma desestructurada
        setCategories([newCategory, ...categories]); //Forma sin desestructurar
    }

    return (
        <>
            <h1>GiftExpertApp</h1>
            
            {/* <AddCategory setCategories = {setCategories}/> De esta manera se envia el set categories del useState*/}
             <AddCategory onNewCategory = {onAddCategory}/> {/*Aqui enviamos la funcion para que esta misma lo agregue */}

            {
                categories.map( ( category ) => (
                        <GifGrid 
                            key = { category}
                            category={ category }
                        />
                    )
                )
            }

        </>
    )
}