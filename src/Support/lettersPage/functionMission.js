
function FunctionMission(element) {
  const elemento = element["element"];
  const mes = elemento[0];
  const missionario = elemento[2];
  const arquivo = elemento[1];
  console.log(elemento)
  return (
    <div className="d-flex justify-content-around flex-wrap container-carta">
      <div className="col-12 col-sm-4">
        <a href={arquivo} target="_blank" rel="noreferrer"> Carta Missionária </a>
      </div>
      <div className="col-12 col-sm-4">
        <p>{mes}</p>
      </div>
      <div className="col-12 col-sm-4">
        <p>{missionario}</p>
      </div>
    </div>
  )
}


export default FunctionMission