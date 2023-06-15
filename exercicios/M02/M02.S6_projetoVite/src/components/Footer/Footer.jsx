import './Footer.css'

const Footer =() => {
    return(
                    <footer className="container-fluid bg-dark text-light">
              <div className="row">
                <div className="col">
                  <h5 className="company-logo">Minha Empresa S.A</h5>
                  </div>
                <div className="col">
                  <h5>Contato</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="https://www.facebook.com">Facebook</a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">Twitter</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com">Instagram</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h5>Outros Links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                      <a href="#trabalhe-conosco">Trabalhe Conosco</a>
                    </li>
                    <li>
                      <a href="#outros-locais">Outros Locais</a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
    )
}

export default Footer;