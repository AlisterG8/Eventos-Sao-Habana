import React from "react";
import PortadaView from './portadaComponent';
import ArticuloView from './articuloComponent';
import cumpleServ from '../data/cumpleServ'

function CGaleryView() {


    return(
        <main>
            <PortadaView></PortadaView>

            <section>
            {cumpleServ.map( (data) =>
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
export default CGaleryView;