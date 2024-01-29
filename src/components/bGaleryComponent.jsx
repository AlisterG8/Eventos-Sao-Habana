import React from "react";
import PortadaView from './portadaComponent';
import ArticuloView from './articuloComponent';
import bodaServ from '../data/bodaServ'


function BGaleryView() {
    

    return(
        <main>
            <PortadaView></PortadaView>
            <section>
            {bodaServ.map( (data) =>
                    <ArticuloView key={data.Title}
                        image={data.Image} 
                        title={data.Title}
                        desc={data.Desc} 
                    />                
            )}
            </section>
            
            
        </main>
    );

}
export default BGaleryView;