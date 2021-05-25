import './style.css'
import LogoOnly from './imgs/logo-only.png';
import manual from './Support/pages/manual do lider de missoes 2021 MIOLO.pdf'

function Navbar () {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light-nav ">
        <div className="container-fluid d-flex justify-content-between">
            <div className="m-2">
            <a className="navbar-brand align-middle" href="#orar">
                <strong>DDM</strong>
                <img  src={LogoOnly} alt="" width="35" height="35"/>
            </a>
            </div>
            <div className="space-nav"></div>
          <button className="navbar-toggler" type="button" 
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-1 h5">
                <li className="nav-item">
                    <a class="nav-link active" aria-current="page" href="#orar">Orar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#doar">
                      Missões
                    </a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" href="#sonhos">Sonhos</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#doar" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Recursos
                    </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item"  href="#missionarios">Missionários</a></li>
                  <li><a className="dropdown-item" href= "#projetos">Projetos Missionários</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#doar">Cartas Missionárias</a></li>
                  <li><a className="dropdown-item" target="_blank" href={manual} rel="noreferrer">Manual do Missionário</a></li>
                </ul>
              </li>

            </ul>
            <ul className="navbar-nav me-1 h5">
                <li className="nav-item">
                <a className="nav-link" target="_blank" href="https://1b.org.br/contribua" 
                    rel="noreferrer">
                      <strong>Doar Para Missões</strong>
                    </a>
                </li>
              </ul>
          </div>
        </div>
    </div>
    )
}

export default Navbar