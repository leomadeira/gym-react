import '../styles/comentarios.scss'
export function Comentarios(){
    return(
    <section class="review">

        <div class="information">
            <span>Depoimentos</span>
            <h3>O que nossos clientes dizem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas praesentium asperiores fugiat, excepturi odit obcaecati a voluptatibus earum quisquam?</p>
            <a href="#" class="btn">Mais Informação</a>
        </div>
    
        <div class="swiper review-slider">
    
            <div class="swiper-wrapper">
    
                <div class="swiper-slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quo.</p>
                    <div class="user">
                        {/* <img src="images/pic-1.png" alt=""> */}
                        <div class="info">
                            <h3>John Deo</h3>
                            <span>Designer</span>
                        </div>
                        <i class="fas fa-quote-left"></i>
                    </div>
                </div>
    
                <div class="swiper-slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quo.</p>
                    <div class="user">
                        {/* <img src="images/pic-2.png" alt=""> */}
                        <div class="info">
                            <h3>John Deo</h3>
                            <span>Designer</span>
                        </div>
                        <i class="fas fa-quote-left"></i>
                    </div>
                </div>
    
                <div class="swiper-slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quo.</p>
                    <div class="user">
                        {/* <img src="images/pic-3.png" alt=""> */}
                        <div class="info">
                            <h3>John Deo</h3>
                            <span>Designer</span>
                        </div>
                        <i class="fas fa-quote-left"></i>
                    </div>
                </div>
    
                <div class="swiper-slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, quo.</p>
                    <div class="user">
                        {/* <img src="images/pic-4.png" alt=""> */}
                        <div class="info">
                            <h3>John Deo</h3>
                            <span>Designer</span>
                        </div>
                        <i class="fas fa-quote-left"></i>
                    </div>
                </div>
    
            </div>
    
        </div>
    
    </section>
    );
}