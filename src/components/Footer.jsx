import '../styles/footer.scss'
export function Footer(){
    return(
    <section class="footer">

        <div class="box-container">

            <div class="box">
                <h3>Links Rápidos</h3>
                <a class="links" href="#home">Home</a>
                <a class="links" href="#about">Sobre</a>
                <a class="links" href="#features">Recursos</a>
                <a class="links" href="#pricing">Orçamentos</a>
                <a class="links" href="#trainers">Instrutores</a>
                <a class="links" href="#blogs">Blogs</a>
            </div>

            <div class="box">
                <h3>Horário de Funcionamento</h3>
                <p> Segunda-feira: <i> 07h00 - 22h30 </i> </p>
                <p> Terça-feira: <i> 07h00 - 22h30 </i> </p>
                <p> Quarta-feira: <i> 07h00 - 22h30 </i> </p>
                <p> Sexta-feira: <i> 07h00 - 22h30 </i> </p>
                <p> Sábado : <i> 07h00 - 20h00 </i> </p>
                <p> Domingo : <i> Fechado </i> </p>
            </div>

            <div class="box">
                <h3>Horário de Funcionamento</h3>
                <p> <i class="fas fa-phone"></i> +55 (48) 98427-4450 </p>
                <p> <i class="fas fa-phone"></i> +55 (48) 3223-0000 </p>
                <p> <i class="fas fa-envelope"></i> leo.madeira96@gmail.com </p>
                <p> <i class="fas fa-map"></i> Florianópolis, SC - 88020-100 </p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                </div>
            </div>

            <div class="box">
                <h3>Receba Notícias</h3>
                <p>Inscreva-se para atualizações mais recentes</p>
                {/* <form action="">
                    <input type="email" name="" class="email" placeholder="Digite seu e-mail" id="">
                    <input type="submit" value="Inscrever" class="btn">
                </form> */}
            </div>

        </div>

    </section>
    );
}