import React from 'react'


function ArticuloView({image,title,desc}) {
    return(
        <div className="articulo">
                    <div className="articuloimg">
                        <img src={image} alt={ "Imagen " + title}/>
                    </div>
                    <div className="articulotext">
                        <h2 className="articulotitle">{title}</h2>
                        <p className="articulodescription">{desc}</p>
                    </div>
                </div>
        

    );

}
export default ArticuloView;