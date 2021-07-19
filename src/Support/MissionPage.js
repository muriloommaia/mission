import '../style.css'
import React from 'react';

function MissionPage({ MISSIONARY, PROJECT }) {
  const [Cards, SetCards] = React.useState(MISSIONARY)

  const FilterFunction = (event) => {
    const filteredMiss = MISSIONARY.filter(char => {
      return char.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    SetCards(filteredMiss)
  }

  return (
    <div className="container-fluid">
      {/* <div className="space"></div> */}
      <div className="bg-4" id="missionarios"></div>
      <div className="text-center">
        <div className="rows">
          <img src={require('../imgs/logotipo_lideres_de_missoes-removebg-preview.png').default} alt="'" />
        </div>
        <div className="bg-light pt-2">
          <hr />
          <h1 className="title-grid pt-2 pb-2">Nossos Missionários</h1>
          <hr />
        </div>
        <div className="bg-light">
          <input className="mt-3 p-2 mb-1"
            type="search"
            placeholder="Busque o missionário"
            onChange={FilterFunction}
          />
          <div className="p-2"></div>
          <div className="scrolls margin">
            <div className="d-grid  justify-content-center">
              {Cards.map((item, idx) => {
                return (<>
                  <div key={idx} className="cards rounded-3 bg-card">
                    <img className="border border-2 border-secondary" src={Cards[idx].img} alt={Cards[idx].name} />
                    <h4 className="paragrafo fs-3 mt-2 fw-bold">{Cards[idx].name}</h4>
                    {/* <p className="paragrafo mt-4 mb-0 fs-5"><strong>Local de atuação: </strong></p>
                      <p className="paragrafo mt-0">{MISSIONARY[idx].local}</p> */}
                    <button type="button" className="paragrafo mt-2 btn btn-primary mb-2 bottom" data-bs-toggle="modal" data-bs-target={"#exampleModal-" + idx}>
                      Conhecer mais!
                    </button>
                  </div>

                  <div className="modal fade" id={"exampleModal-" + idx} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="title text-center" id="exampleModalLabel">{Cards[idx].name}</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p className="paragrafo fs-5">{Cards[idx].resumo}</p>
                          {/* <MissionLetter idx={idx} Cards={Cards} /> */}
                          <hr />
                          <p className="paragrafo mt-0 mb-0"><strong>Local de atuação: </strong></p>
                          <p className="paragrafo fs-5 mt-0">{Cards[idx].local}</p>
                          <hr />
                          <p className="paragrafo mt-0 mb-0">Para conhecer os pedidos de oração clique abaixo!</p>
                        </div>
                        <div className="modal-footer">
                          <a type="button" className="btn btn-primary paragrafo"
                            target="_blank" href={Cards[idx].link} rel="noreferrer">
                            Conheça Mais
                          </a>
                          <button type="button" className="btn btn-secondary paragrafo" data-bs-dismiss="modal">Fechar</button>
                        </div>
                      </div>
                    </div>
                  </div>


                </>
                )
              })}
            </div>
          </div>
        </div>
      </div>


      {/* PROJETOS */}
      <div id="projetos"></div>
      <div className="text-center bg-light">
        <div className="bg-light pt-2">
          <hr />
          <h1 className="title-grid pt-2 pb-2">Nossos Projetos</h1>
          <hr />
        </div>
        <div className="scrolls d-grid bg-light justify-content-center margin pb-4 mt-2">
          {PROJECT.map((item, idx) => {
            return (<>
              <div key="{idx}" className="cards rounded-3 bg-card border-dark">
                <img className="border border-2 border-secondary" src={PROJECT[idx].img} alt={PROJECT[idx].name} width="200px" height="200px" />
                <h4 className="paragrafo fs-3 mt-2 fw-bold">{PROJECT[idx].name}</h4>
                {/* <p className="paragrafo mt-4 mb-0 fs-5"><strong>Local de atuação: </strong></p>
                      <p className="paragrafo mt-0">{MISSIONARY[idx].local}</p> */}
                <button type="button" className="paragrafo mt-2 btn btn-primary mb-2 bottom" data-bs-toggle="modal" data-bs-target={"#projectModel-" + idx}>
                  Conhecer mais!
                </button>
              </div>

              <div className="modal fade" id={"projectModel-" + idx} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="title text-center" id="exampleModalLabel">{PROJECT[idx].name}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p className="paragrafo fs-5">{PROJECT[idx].resumo}</p>
                      <hr />
                      <p className="paragrafo mt-0 mb-0"><strong>Local de atuação: </strong></p>
                      <a target="_blank" href={PROJECT[idx].local} className="paragrafo fs-5 mt-0"
                        rel="noreferrer">
                        {PROJECT[idx].local}
                      </a>
                      <hr />
                      <p className="paragrafo mt-0 mb-0">Para conhecer os pedidos de oração clique abaixo!</p>
                    </div>
                    <div className="modal-footer">
                      <a type="button" className="btn btn-primary paragrafo"
                        target="_blank" href={PROJECT[idx].link} rel="noreferrer">
                        Conheça Mais
                      </a>
                      <button type="button" className="btn btn-secondary paragrafo" data-bs-dismiss="modal">Fechar</button>
                    </div>
                  </div>
                </div>
              </div>


            </>
            )
          })}
        </div>
        <div className="space"></div>
      </div>




    </div>
  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default MissionPage