import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <AddCategory />', () => {

    test('debe cambiar el valor de la caja de texto', () => {

        render ( <AddCategory onNewCategory={ () => {} } /> )
        const input = screen.getByRole('textbox')

        fireEvent.input( input, {target: {value: 'palabraEjemplo'} } )
        expect( input.value ).toBe('palabraEjemplo')
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue= 'palabraEjemplo'
        const onNewCategory = jest.fn()

        render ( <AddCategory onNewCategory={ onNewCategory } /> )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit( form )

        expect( input.value ).toBe('')
        expect ( onNewCategory ).toHaveBeenCalledTimes(1);
        expect ( onNewCategory ).toHaveBeenCalledWith('palabraEjemplo');
    })

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
      
        const onNewCategoryMock = jest.fn();
        const { getByLabelText } = render(<AddCategory onNewCategory={onNewCategoryMock} />);
        const input = getByLabelText('form').querySelector('input');
    
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.submit(getByLabelText('form'));
    
        expect(onNewCategoryMock).not.toHaveBeenCalled();

    })
    
    
})
