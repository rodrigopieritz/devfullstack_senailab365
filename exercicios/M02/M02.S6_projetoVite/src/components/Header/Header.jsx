import './Header.css'

const Header =() => {
    return(
        <nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div class="container-fluid">
   <div> <a class="navbar-brand" href="#">Minha Empresa S.A.</a></div>
    <div class="navbar-">
      <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" href="#">Produtos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contatos</a>
        </li>
              </ul>
    </div>
  </div>
</nav>
    )
}

export default Header;