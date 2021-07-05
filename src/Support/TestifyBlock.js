import MISSIONARY from './missionary'
import './style.css'



function TestifyBlock() {
  const lengthMissionary = MISSIONARY.length - 1;
  function ramdonNumber() {
    return Math.ceil(Math.random() * lengthMissionary);
  }
  let array = [];
      do {
        array[1] = MISSIONARY[ramdonNumber()]
        array[2] = MISSIONARY[ramdonNumber()]
        array[0] = MISSIONARY[ramdonNumber()]

      } while(array[0] === array[1] || array[1] === array[2] || array[0] === array[2]) 

  console.log(array)
  return (
    <section className="testify ">
    <hr />
      <h2 className="title text-center py-4">Saiba por quem orar</h2>
      <div className="d-gridTest  justify-content-center text-center pt-3">
        {array.map((item, idx) => {
          return (
            <div key={idx} className="cardsTest">
              <img src={item["img"]} alt={array[idx].name} />
              <h4 className="paragrafo fs-3 mt-2 fw-bold">{item.name}</h4>
              <p className="paragrafo mt-0 mb-0"><strong>Local de atuação: </strong></p>
              <p className="paragrafo fs-5 mt-0">{item.local}</p>
            </div>
          )
        })}

      </div>
      <hr />
    </section>
  )
}


export default TestifyBlock