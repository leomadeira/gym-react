import '../styles/blogs.scss'
export function Blogs(){
    return(
    <section class="blogs" id="blogs">

        <h1 class="heading"> <span>Postagens Diárias</span> </h1>

        <div class="swiper blogs-slider">

            <div class="swiper-wrapper">

                <div class="swiper-slide slide">
                    <div class="image">
                        {/* <img src="images/blog-1.jpg" alt=""> */}
                    </div>
                    <div class="content">
                        <div class="link"> <span>Escrito por:</span><a href="#">John Deo</a> <span>|</span> <a href="#">27 Jan, 2022</a> </div>
                        <h3>FITNESS NÃO É SER MELHOR DO QUE OUTRA PESSOA</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                        
                        <a href="#" class="btn">Mais informação</a>
                    </div>
                </div>
                
                <div class="swiper-slide slide">
                    <div class="image">
                        {/* <img src="images/blog-2.jpg" alt=""> */}
                    </div>
                    <div class="content">
                        <div class="link"> <span>Escrito por:</span><a href="#">John Deo</a> <span>|</span> <a href="#">27 Jan, 2022</a> </div>
                        <h3>3 TREINOS SIMPLES PARA VOCÊ FAZER NAS FÉRIAS    </h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                        <a href="#" class="btn">Mais informação</a>
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <div class="image">
                        {/* <img src="images/blog-3.jpg" alt=""> */}
                    </div>
                    <div class="content">
                        <div class="link"> <span>Escrito por:</span><a href="#">John Deo</a> <span>|</span> <a href="#">27 Jan, 2022</a> </div>
                        <h3>VEJA QUAIS SÃO OS 12 MELHORES SUPLEMENTOS PARA QUEM TREINA
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                        <a href="#" class="btn">Mais informação</a>
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <div class="image">
                        {/* <img src="images/blog-4.jpg" alt=""> */}
                    </div>
                    <div class="content">
                        <div class="link"> <span>Escrito por:</span><a href="#">John Deo</a> <span>|</span> <a href="#">27 Jan, 2022</a> </div>
                        <h3>6 DICAS PROFISSIONAIS PARA VOCÊ GANHAR MOTIVAÇÃO PARA TREINAR</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                        <a href="#" class="btn">Mais informação</a>
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <div class="image">
                        {/* <img src="images/blog-5.jpg" alt=""> */}
                    </div>
                    <div class="content">
                        <div class="link"> <span>Escrito por:</span><a href="#">John Deo</a> <span>|</span> <a href="#">27 Jan, 2022</a> </div>
                        <h3>O QUE É ORANGE? E COMO ESSA AULA PODE TE AJUDAR A PERDER PESO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tenetur?</p>
                        <a href="#" class="btn">Mais informação</a>
                    </div>
                </div>

            </div>

            <div class="swiper-pagination"></div>

        </div>

    </section>
    );
}