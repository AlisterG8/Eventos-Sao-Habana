import React from 'react'
import { Link } from 'react-router-dom';
import PortadaView from './portadaComponent';
import ComentView from './comentComponent';
import NosotrosView from './nosotrosComponent';
import CateView from './cateComponent';
import NewsView from './newsComponent';


function Bodyview() {
    
    return(
        <main>
            
            <PortadaView></PortadaView>
        
            <CateView></CateView>

            <NosotrosView></NosotrosView>
            
            <NewsView></NewsView>

            <ComentView></ComentView>


        </main>
    );

}
export default Bodyview;