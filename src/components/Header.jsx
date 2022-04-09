import '../styles/header.scss'

export function Header(){
    return(
        <header class="header">

            <a href="#" class="logo"> <span>NORD</span>GYM </a>

            <div id="menu-btn" class="fas fa-bars"></div>

            <nav class="navbar">
                <a href="#home">Home</a>
                <a href="#about">Sobre</a>
                <a href="#features">Recursos</a>
                <a href="#pricing">Orçamentos</a>
                <a href="#trainers">Instrutores</a>
                <a href="#blogs">blogs</a>
            </nav>

        </header>
    );
}