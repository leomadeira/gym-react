// import {imagemBg1} '..images/home-bg-2.jpg';
import imagemBg1 from '../images/home-bg-1.jpg';
import imagemBg2 from '../images/home-bg-2.jpg';
import imagemBg3 from '../images/home-bg-3.jpg';

import '../styles/home.scss'

export function Home(){
    return(
        <section class="home" id="home">

            <div class="swiper home-slider">

                <div class="swiper-wrapper">

                    <div class="bgC swiper-slide slide">
                        {/* <img src={imagemBg1} alt="imagemBg1" /> */}
                        <div class="content">
                            <span>Ser forte, estar em forma</span>
                            <h3>Torne-se mais forte do que suas desculpas.</h3>
                            <a href="#" class="btn">Iniciar</a>
                        </div>
                    </div>

                    <div class="swiper-slide slide">
                        {/* <img src={imagemBg2} alt="imagemBg1" /> */}
                        <div class="content">
                            <span>Ser forte, estar em forma</span>
                            <h3>Torne-se mais forte do que suas desculpas.</h3>
                            <a href="#" class="btn">Iniciar</a>
                        </div>
                    </div>

                    <div class="swiper-slide slide">
                        {/* <img src={imagemBg3} alt="imagemBg1" /> */}
                        <div class="content">
                            <span>Ser forte, estar em forma</span>
                            <h3>Torne-se mais forte do que suas desculpas.</h3>
                            <a href="#" class="btn">Iniciar</a>
                        </div>
                    </div>

                </div>

                <div class="swiper-pagination"></div>

            </div>

        </section>
    )
}