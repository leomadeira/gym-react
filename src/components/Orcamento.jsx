import '../styles/orcamento.scss'
export function Orcamento(){
    return(
    <section class="pricing" id="pricing">

        <div class="information">
            <span>Orçamentos</span>
            <h3>Plano de preços acessível para você</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore excepturi ea suscipit fugiat cum quae, rerum optio mollitia! Tempora?</p>
            <p> <i class="fas fa-check"></i> Exercícios Aeróbicos  </p>
            <p> <i class="fas fa-check"></i> Levantamento de Peso </p>
            <p> <i class="fas fa-check"></i> Planos de Dieta  </p>
            <p> <i class="fas fa-check"></i> Resultados Gerais </p>
            <a href="#" class="btn">Todos os Preços</a>
        </div>

        <div class="plan basic">
            <h3>Plano Básico</h3>
            <div class="price"><span>r$</span>200<span>/mes</span></div>
        <div class="list">
            <p> <i class="fas fa-times"></i> Personal Training </p>
            <p> <i class="fas fa-check"></i> Exercícios Aeróbicos </p>
            <p> <i class="fas fa-check"></i> Levantamento de Peso </p>
            <p> <i class="fas fa-times"></i> Planos de Dieta </p>
            <p> <i class="fas fa-check"></i> Resultados Gerais </p>
        </div>
        <a href="#" class="btn">Começar</a>
        </div>

        <div class="plan">
            <h3>Plano Premium</h3>
            <div class="price"><span>R$</span>550<span>/mes</span></div>
        <div class="list">
            <p> <i class="fas fa-check"></i> personal training </p>
            <p> <i class="fas fa-check"></i> exercícios aeróbicos </p>
            <p> <i class="fas fa-check"></i> levantamento de peso </p>
            <p> <i class="fas fa-check"></i> planos de dieta </p>
            <p> <i class="fas fa-check"></i> resultados gerais  </p>
        </div>
        <a href="#" class="btn">Começar</a>
        </div>

    </section>
    );
}