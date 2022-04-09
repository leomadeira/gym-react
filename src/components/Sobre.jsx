import '../styles/sobre.scss'

export function Sobre(){
    return(
    <section class="about" id="about">

        <div class="image">
            {/* <img src={images/about-img.jpg} alt=""> */}
            <img src="" alt="" />
        </div>

        <div class="content">
            <span>Sobre</span>
            <h3 class="title">Cada dia é uma chance de se tornar melhor</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quia accusamus dicta inventore nobis obcaecati vero odio, id dolorum. Consequatur ex, aperiam deserunt nostrum perferendis illum unde ipsa? Consequatur, distinctio?</p>
            <div class="box-container">
                <div class="box">
                    <h3><i class="fas fa-check"></i>Corpo e Mente</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
                </div>
                <div class="box">
                    <h3><i class="fas fa-check"></i>Vida Saudável</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
                </div>
                <div class="box">
                    <h3><i class="fas fa-check"></i>Estratégias</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
                </div>
                <div class="box">
                    <h3><i class="fas fa-check"></i>Treino</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
                </div>
            </div>
            <a href="#" class="btn">Consulte mais Informação</a>
        </div>

    </section>
    );
}