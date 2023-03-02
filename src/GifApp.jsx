import { useState } from "react"
import { AddCategory, GifGrid } from "./components" //apuntes de porque pilla el index

export const GifApp = () => {

    const [category, setCategory] = useState(['final fantasy', 'Overwatch'])

    const onAddCategory = (newCategory) => {

        if (category.some(category => category.toLowerCase() === newCategory.toLowerCase())) return;

        setCategory([newCategory, ...category])
        /* Aquí, usamos el operador spread (...) para copiar los elementos existentes del arreglo category 
        y luego agregamos el nuevo valor 'caca' al final del arreglo.
         De esta manera, category seguirá siendo un arreglo válido 
         y se actualizará correctamente en la próxima renderización. */
    }

    return (
        <div>
            <h1>Generador de Gifs </h1>

            <AddCategory
                // setCategory={ setCategory } 
                onNewCategory={event => onAddCategory(event)}
            /> {/* apuntes */}


            {
                category.map((category) => (
                    <GifGrid key={category} category={category} /> //apuntes porque se tienen que llamar igual???
                )
                )
            }
        </div>
    )
}


