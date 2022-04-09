// import {imagemBg1} '..images/home-bg-2.jpg';
import { imagemBg1 } from '../images/home-bg-2.jpg';

export function Home(){
    return(
        <section class="home" id="home">

            <div class="swiper home-slider">

                <div class="swiper-wrapper">

                    <div class="swiper-slide slide" style="background:{imagemBg1} no-repeat;">
                        <div class="content">
                            <span>Ser forte, estar em forma</span>
                            <h3>Torne-se mais forte do que suas desculpas.</h3>
                            <a href="#" class="btn">Iniciar</a>
                        </div>
                    </div>

                    <div class="swiper-slide slide" style="background: url(images/home-bg-2.jpg) no-repeat;">
                        <div class="content">
                            <span>Ser forte, estar em forma</span>
                            <h3>Torne-se mais forte do que suas desculpas.</h3>
                            <a href="#" class="btn">Iniciar</a>
                        </div>
                    </div>

                    <div class="swiper-slide slide" style="background: url(images/home-bg-3.jpg) no-repeat;">
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