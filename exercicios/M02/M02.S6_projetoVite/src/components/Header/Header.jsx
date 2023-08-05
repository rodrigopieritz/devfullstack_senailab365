import LinkComponent from '../LinkComponent/LinkComponent';
import './Header.css'

const Header =() => {
    return(
        <nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div class="container-fluid">
   <div> <div class="company-logo" href="#">Minha Empresa S.A.</div></div>
    <div class="navbar-">
     <LinkComponent/>
    </div>
  </div>
</nav>
    )
}

export default Header;