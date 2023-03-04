import { getGifs } from '../../src/helpers/getGifs'

describe('Pruebas en GetGfis', () => {

    test('debe de retonar un arreglo con el gif', async() => {

        const gifs = await getGifs('Hulk')
        // console.log(gifs)
        expect( gifs.length ).toBeGreaterThan (0)
       
        expect( gifs[0] ).toEqual({
            id: expect.any( String ), // String siempre en mayuscula
            title: expect.any( String ),
            url: expect.any( String ),
        }) 
    })
})
