import { useState } from "react"

function Header() {

    const [name, setName] = useState('Clique aqui')

    function mudarNome() {
        let novoNome = prompt('Insira seu nome')
        if(novoNome){
            setName(novoNome)
        }else{
            setName('Clique aqui')
        }
    }
        
    return (  
        <div className="p-3 mb-2 bg-light">

           <nav className="navbar navbar-light bg-light text-center rounded">
               <a className="navbar-brand" href="#" onClick={mudarNome}>
                  
                   Bem-vindo, {name}
               </a>
           </nav>

       </div>

    );
}

export default Header;