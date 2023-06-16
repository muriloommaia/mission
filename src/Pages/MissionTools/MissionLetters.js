import "./css/styleCartas.css";
import CARTAS from "./lettersPage/cartas";
import FunctionMission from "./lettersPage/functionMission";
import { Fragment } from "react";

export const MissionLetters = () => {
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
            return (
              <Fragment key={index}>
                <FunctionMission element={element} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MissionLetters;
