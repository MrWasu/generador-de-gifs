/* Componente que recoge la parte de imput  */
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => setInputValue(event.target.value)

    const onSendSubmit = (event) => {
        // previene que se recargue la pagina al mandar el form:
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

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


