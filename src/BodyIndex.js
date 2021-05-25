import './style.css'
import Logo from './imgs/logo.png';

function BodyIndex () {
    return (
        <div>
        <div class="d-flex justify-content-center sec bg-1">
            <div class="logo">
                <img src={Logo} alt=""/>
            </div>  
        </div>
        <div id="orar"></div>
        <div class="bg-full">
            <div class="d-flex justify-content-center align-items-center sec-def">
                <div class="bg-2 rounded-3 d-flex justify-content-center align-items-center animate__animated animate__flipInX">
                    <div class="box-one border border-warning p-3 m-3 bg-light rounded-3">
                        <p class="h2 title text-center">Ore por Missões</p>
                        <p class="paragrafo fs-5 mt-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ea quidem neque 
                            libero numquam, reiciendis voluptas deserunt necessitatibus, sit possimus dolores 
                            perspiciatis expedita molestiae vel cum? Quidem iste necessitatibus beatae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia eos facilis fugiat 
                            explicabo quod! Unde sapiente quo a. Corporis, architecto fugiat! Molestiae facilis doloremque 
                            quia nulla repellendus magnam qui?
                        </p>
                        <a class="d-flex paragrafo fs-5 justify-content-end" href="#doar">cadastro para oração</a>
                    </div>
                </div>
            </div>
            <div id="doar" class="d-flex justify-content-center align-items-center sec-def">
                <div class="d-flex justify-content-center align-items-center bg-2 rounded-3  animate__animated animate__flipInX">
                    <div class="container align-items-center">
                        <div class="row gx-2 text-center">
                            <div class="col-12 col-sm-6">
                                <div class="box border border-warning p-3 m-3 bg-light rounded-3">
                                    <p class="h2 title">Doe para a Missões</p>
                                    <p class="paragrafo fs-5 mt-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla commodi veniam 
                                        sequi excepturi. Aliquid quae voluptatum eum! Consequuntur quos vel voluptates tempore 
                                        repellat inventore optio doloremque commodi ex perferendis.
                                    </p>
                                    <a class="d-flex paragrafo fs-5 justify-content-end" href="#doar">Conheça nossos missionários</a>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="box p-3 m-3 border border-warning bg-light rounded-3">
                                    <p class="h2 title">Doe para um projeto</p>
                                    <p class="paragrafo fs-5 mt-4">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Ipsam ea quidem neque libero numquam, reiciendis voluptas deserunt necessitatibus, 
                                        sit possimus dolores perspiciatis expedita molestiae vel cum? Quidem iste necessitatibus 
                                        beatae.
                                    </p>
                                    <a class="d-flex paragrafo fs-5 justify-content-end" href="#doar">Conheça nossos projetos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div  class="bg5">
        <div id="sonhos" class="space"></div>
        <div class="d-flex justify-content-center align-items-center">
            <div class="bg-2 rounded-3 d-flex justify-content-center align-items-center">
                <div class="box-two border border-dark p-3 m-3 bg-light rounded-3">
                    <p class="h2 title text-center">Nosso Sonho / Nossa Visão</p>
                    <p class="paragrafo fs-5 mt-4">
                        O que somos? Somos o Ministério de Missões. 
                        Qual a nossa razão de ser? Manter acesa e ampliar a visão missionária da igreja. 
                        Qual é a nossa missão? Cuidar da participação missionária da igreja em termos de Jerusalém, Judéia, Samaria e confins da terra. 
                        Para que existimos? Viabilizar a adoção e manutenção das famílias missionárias, através do processo de personalização missionária. 
                        O que fazemos? Promovemos conferências missionárias anuais; estipulamos alvos e promovemos campanhas e ofertas missionárias. 
                        Qual é o nosso propósito? Administrar a OMF bem como outras ofertas e participação missionárias. 
                        Qual é a nossa visão? Tornar a Primeira Batista uma igreja missionária modelo, envolvida em Missões Local, Estadual, Nacional e Mundial, fazendo diferença no cenário Batista e evangélico brasileiro. Tornar nossos missionários conhecidos pela Igreja em nível pessoal, envolvendo a igreja na sua vida, ministério e campo missionário. 
                        O que queremos ser? Que o Ministério possa compreender e traduzir o sentimento missionário da igreja em termos práticos. 
                        O que valorizamos? Cremos que a tarefa missionária é de responsabilidade da igreja local, e é operacionalizada com vocacionados por Deus e organizações missionárias (agências). 
                        Em que acreditamos? Acreditamos que é tarefa da nossa geração proclamar a salvação ao mundo sem Cristo. Atuamos na mobilização da igreja para o cumprimento da sua vocação missionária, sempre subordinados ao colégio pastoral e a Assembleia da igreja. 
                        Como nos relacionamos? Nosso relacionamento com nossos missionários se realiza na busca de uma cooperação e apoio, tanto material quanto espiritual, para o desempenho da sua vocação. 
                        Como chegar aonde queremos? Mobilizando a Primeira Batista em oração, amor missionário, envolvimento pessoal e apoio financeiro a obra de Missões. 
                        Que ações devemos implementar para atingir os objetivos (curto, médio e longo prazo)? Implementar a participação através da OMF, buscando atingir participação total dos membros da igreja. Organizar a igreja em grupos de apoio missionário. Implementar as viagens missionárias de fé. Promover encontros, cafés e momentos missionários ao longo do ano eclesiástico. Atingir a meta de 60 famílias missionárias mantidas, adotadas e conveniadas até 2030.
                    </p>
                </div>
            </div>

        </div>
        <div class="space"></div>
    </div>

    </div>
    )
}
export default BodyIndex