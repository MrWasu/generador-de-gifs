import { useState } from 'react'
//import { setCategory } from "../GifApp"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => setInputValue(event.target.value)

    const onSendSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        //setCategory( (category) => [inputValue, ...category] ) // apuntes
        onNewCategory( inputValue.trim() )

        setInputValue('');
    }

    return (
        <form onSubmit={ onSendSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange} />
        </form>
    )
}

// al terminar esto tomar apuntes con chatgpt de lo que aqui no entienda


