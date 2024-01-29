import React from 'react'
import image from '../data/image';
import star from '../assets/ico/starpng.png'

function ComentView() {
    return(
        <section className="comentBox">
            <div className="coment">
                <div className="namePhoto">
                    <img className="photo" src={image.novios1} alt=""/>
                    <div className="nameStar">
                        <p className="name">Miguel y Jakima</p>
                        <img className="star" src={star} alt=""/>
                    </div>
                </div>
                <p className="comentText">Estamos Aradecidos por todo el tiempo y esfuerzo  que han puesto en hacer un dia especial y único. EXITOS</p>
    
            </div>
            <div className="coment">
                <div className="namePhoto">
                    <img className="photo" src={image.novios1} alt=""/>
                    <div className="nameStar">
                        <p className="name">Brian y su Familia</p>
                        <img className="star" src={star} alt=""/>
                    </div>
                </div>
                <p className="comentText">Inceible todo, muy bonito y especial cuidaron cada detalle mil gracias</p>
    
            </div>
            <div className="coment">
                <div className="namePhoto">
                    <img className="photo" src={image.novios1} alt=""/>
                    <div className="nameStar">
                        <p className="name">Marcos y Liset</p>
                        <img className="star" src={star} alt=""/>
                    </div>
                </div>
                <p className="comentText">Gracias por la dedicacion y por hacer algo tan unico y original.Ha sido una boda inolvidable gracias a ustedes tendremos esos recuerdos</p>
    
            </div>
            
            
            
    
        </section>

    );

}
export default ComentView;