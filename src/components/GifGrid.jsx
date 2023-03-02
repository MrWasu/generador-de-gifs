import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <div key={category}>
            <h3>{category}</h3>
            
            { isLoading && (<h2 >Cargando</h2>) }
        
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image} // apuntes, abrevia, si hubiera 100 props, 100 props que resume
                        />
                    ))
                }
                {/* { gifs.map((e) => <p> {e} </p>)} */}
            </div>
        </div>
    )
}


