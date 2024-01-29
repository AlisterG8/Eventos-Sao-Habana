import React from 'react'
import image from '../data/image';


function NewsView() {
    return(
        <section className="newsContainer">
            <div className="news">
                <img src={image.FMV6732} alt="" />
                <h3 className="newstext">Confía en Sao para hacer excepcionales eventos históricos. Desde bodas íntimas hasta vibrantes fiestas en La Habana, nuestra experiencia y complicidad garantizan momentos memorables sin preocupaciones. ¡Déjanos crear juntos un recuerdo inolvidable para ti!</h3>
            </div>
            </section>

    );

}
export default NewsView;