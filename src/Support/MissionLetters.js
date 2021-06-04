function MissionLetter ({Cards, idx}) {
    if (Cards[idx].letter) {
        return (
            <div>
                <hr />
                <p className="paragrafo mt-0 mb-0"><strong>Cartas Missionárias: </strong></p>
                        {Cards[idx].letter.map((item, ind) =>{
                        return (<>
                            <a  target="_blank" className="paragrafo" 
                            href={Cards[idx].letter[ind]}>
                            Carta Missionária {ind+1}</a> | 
                        </>)
                        })}
                                  
                <hr />
                
            </div>
        )
     } else {
         return ""
     }
    

    
    
}


export default MissionLetter