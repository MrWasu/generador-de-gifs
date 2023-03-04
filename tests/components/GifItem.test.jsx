import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem.jsx'

describe('Pruebas en GifItem', () => {

    const title = 'Hulk'
    const url = 'https://google.com'

    test('debe de hacer match con el snapshot ', () => {

        const { container } = render( <GifItem title={title} url={url} />)

        expect(container).toMatchSnapshot();
    })

    test('debe mostrar la imagen con el URL y contener Title', () => {

        render( <GifItem title={title} url={url} />)

        //screen.debug();

        expect( screen.getByRole('img').src ).toBe( url + '/' )
        expect( screen.getByText ( title ) ).toBeTruthy();
    })
})
