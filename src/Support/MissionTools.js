
function MissionTools () {
   return (
       <div className="bg-light">
           <div className="container">
                <div className="space"></div>
               <h1 className="mt-3 mb-3 title-grid text-center">Ferramentas Missionárias</h1>
               <hr />
               <p className="title fs-3 text-center"> Quem são os Líderes de missões?</p>
               <hr />
               <p className="paragrafo fs-4 text-center">
                    Somos uma igreja que ama missões e possuímos homens e mulheres de Deus envolvidos 
                    voluntariamente para levar o conteúdo de missões para os pequenos grupos. <br />
                    <span className="fs-5">
                        Confira abaixo a playlist com 3 vídeos explicando quem são os líderes de missões:
                    </span>
               </p>
               <div className="m-2 p-2 d-flex justify-content-center">
                    <iframe 
                        width="534" height="300" 
                        src="https://www.youtube.com/embed/V5vr66EjnMI?list=PLStbt-gW7QOCxeM8BsehaEcKflmtSCgMk" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
               </div>
               <hr />
               <p className="title fs-3 text-center"> Momento de Missões</p>
               <hr />
               <p className="paragrafo fs-4 text-center">
                    Deseja conhecer mais os trabalhos realizados a partir do testemunho de alguns dos 
                    missionários e apresentar isso ao seu pequeno grupo? <br />
                    <span className="fs-5">
                        Na playlist abaixo se encontram todos os nossos momentos missionários gravados em 
                        vídeo. 
                    </span>
               </p>
               <div className="m-2 p-2 d-flex justify-content-center">
                    <iframe 
                        width="534" height="300" 
                        src="https://www.youtube.com/embed/Dq_bjDP0tT0?list=PLStbt-gW7QOCVpf6eHWQ2jOFdnJdSK6n3" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
               </div>
               <hr />
               <p className="title fs-2 text-center"> Área de Cursos</p>
               <hr />
               <p className="paragrafo fs-4 text-center">
                    Motivados pela Grande Comissão, nós oferecemos alguns cursos curtos e 
                    <strong> gratuitos </strong> para a capacitação do povo de Deus em missões <br />
                    <span className="fs-5">
                        Na playlist abaixo se encontram todos os nossos momentos missionários gravados em 
                        vídeo. 
                    </span>
               </p>
               <div className="m-2 p-2 d-flex justify-content-center">
                    <div className="grid w-100">
                        <div className="row height">
                           <div className="col-sm-5">
                           <iframe 
                           width="100%" height="80%" src="https://www.youtube.com/embed/etstEKmz8mw" 
                           title="YouTube video player" frameborder="0" 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                           allowfullscreen>
                           </iframe>
                           </div>
                           <div className="col-sm-7">
                               <h1 className="title fs-4">
                                    A missão da Igreja <br />
                               </h1>
                               <p className="paragrafo">
                                   {`Imperativa, Intrasferível e inadiável.
                                   A missão da igreja é ampla ou focada?
                                   Diferença em Poder e Autoridade`}
                               </p>
                           </div>
                        </div>
                    </div>
               </div>
           </div>
       </div>
   )

}


export default MissionTools