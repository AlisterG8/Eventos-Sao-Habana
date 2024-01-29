import React from 'react'
import { Link } from 'react-router-dom';

function CateView() {
    const bod ="boda"
    const cum ="cumpleaños"
    const qui ="quince"
    return(
        <section className='categorias'>
                <Link className='lim' to={bod}>    
                    <div className="categoriasImgB">
                        <div className='categoriasImgDiv'>
                        <h3>Bodas</h3>
                        </div>
                    </div>
                </Link>
                <Link className='lim' to={cum}>
                    <div className="categoriasImgC">
                        <div className='categoriasImgDiv'>
                            <h3>Cumpleanos</h3>
                        </div>
                    </div>
                </Link>
                <Link className='lim' to={qui}>
                    <div className="categoriasImgQ">
                        <div className='categoriasImgDiv'>
                            <h3>Quinces</h3>
                        </div>
                    </div>
                </Link>
            </section>

    );

}
export default CateView;