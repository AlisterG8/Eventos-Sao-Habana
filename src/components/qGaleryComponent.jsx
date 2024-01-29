import React from "react";
import PortadaView from "./portadaComponent";
import ArticuloView from './articuloComponent';
import quinceServ from '../data/quinceServ'

function QGaleryView() {


    return(
        <main>
            <PortadaView></PortadaView>

            <section>
            {quinceServ.map( (data) =>
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
export default QGaleryView;