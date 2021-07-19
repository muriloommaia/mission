import "./css/styleCartas.css"
import CARTAS from './cartas'
import FunctionMission from "./functionMission";

function MissionCartas() {

  return (
    <div className="text-center container-page">
      <div className="space"></div>
      <div className="titulo">
        <h1> Cartas Missionárias</h1>
      </div>
      <div className="container">
        <div className="d-flex justify-content-around flex-wrap titleCartas">
          <p className="col-12 col-sm-4">Link Carta Missionária</p>
          <p className="col-12 col-sm-4">Mês Carta</p>
          <p className="col-12 col-sm-4">Missionário</p>
        </div>
        <div className="d-flex flex-column">
          {CARTAS.map((element, index) => {
            return <FunctionMission element={element} />
          })}

        </div>
      </div>
    </div>
  )

}


export default MissionCartas;