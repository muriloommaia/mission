import { Link } from "react-router-dom";
import TestifyBlock from "../../Support/TestifyBlock";
import Logo from "../../imgs/logo-only.png";
import ScrollToTop from "../../Support/ScrollToTop";

const BodyIndex = () => {
  return (
    <main id="home">
      <section className="d-flex justify-content-center sec bg-1">
        <div className="logo d-flex">
          <div className="slogan">
            <p>DEUS DE MISSÕES</p>
            <p className="fs-3">Prazer em servir</p>
          </div>
          <img src={Logo} alt="" />
        </div>
      </section>

      <div id="orar"></div>
      <div className="bg-full">
        <div className="text-center bg-text paragrafo fs-3 pt-4">
          <cite className=" text-center">
            Passa a macedônia e ajuda-nos <br />
            (Atos 16:9)
          </cite>
        </div>

        <TestifyBlock />

        <div className="bg-transparent text-center">
          <h1 className="title pt-3 pb-3">Como posso contribuir?</h1>
        </div>
        <section
          id="doar"
          className="d-flex justify-content-center align-items-center pb-5"
        >
          <div className="d-flex justify-content-center align-items-center rounded-3">
            <div className="container align-items-center">
              <div className="row gx-2 text-center">
                <div className="col-12 col-sm-6">
                  <div className="box border border-dark border-2 p-3 m-3 bg-light rounded-3">
                    <p className="h2 title fw-bolder">Doe para a Missões</p>
                    <p className="paragrafo fs-5 mt-4">
                      Trabalhamos no sustento e no cuidado de mais de 30
                      famílias missionárias, todos estes recursos são
                      provenientes da nossa Oferta Missionária de Fé (OMF).{" "}
                      <br />
                      <strong>
                        Conheça também as famílias missionárias{" "}
                      </strong>{" "}
                      <br />
                      em Missionários e Projetos. Faça sua doação clicando
                      abaixo!
                    </p>
                    <a
                      className="d-flex paragrafo fs-5 justify-content-end"
                      target="_blank"
                      rel="noreferrer"
                      href="https://1b.org.br/contribua"
                    >
                      Doe para missões
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="box p-3 m-3 border border-dark border-2 bg-light rounded-3">
                    <p className="h2 title fw-bolder text-center">
                      Ore por Missões
                    </p>
                    <p className="paragrafo fs-5 mt-4 text-center">
                      Somos um ministérios apaixonado por aquilo que Deus tem
                      feito no mundo. Cremos no porder que a oração possui
                      quando vinda de um justo (Tiago 5:16). Orar por missões
                      significa fazer parte também da missão, é pedir a Deus
                      para que os missionários possam resistir, permanecendo
                      firme na fé.
                      {/* <strong>Conheça por quem orar </strong>
                      clicando abaixo. */}
                    </p>
                    <Link
                      className="d-flex paragrafo fs-5 justify-content-end"
                      onClick={ScrollToTop}
                      to="/missoes"
                    >
                      Por quem orar?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center bg-transparent paragrafo fs-3">
          <hr className="mt-0" />
          <cite className="d-flex text-center pb-4 versiculo">
            Resisti-lhe, permanecendo firmes na fé, conscientes de que os irmãos
            que tendes em todo o mundo estão atravessando os mesmos sofrimentos{" "}
            <br />
            (1 Pedro 5:9)
          </cite>
        </div>
      </div>

      <section className="bg5">
        <div className="space"></div>
        <div className="d-flex justify-content-center align-items-center sec-def pt-3">
          <div className="bg-2 rounded-3 d-flex justify-content-center align-items-center animate__animated animate__flipInX">
            <div className="box-one border border-dark p-3 m-3 bg-box rounded-3">
              <p className="h2 title fs-1 fw-bolder text-center">Nossa Visão</p>
              <p className="paragrafo fs-5 mt-4 text-center">
                <strong>Nossa visão </strong> é tornar a Primeira Batista uma
                igreja modelo, envolvida em Missões Locais, Estaduais, Nacionais
                e Mundiais fazendo diferença no cenário Batista e evangélico
                brasileiro. Tonar nossos missionários conhecidos pela igreja em
                nível pessoal, envolvendo a igreja na sua vida, ministério e
                campo missionário. <br />
                Somos o Ministério de Missões. <strong>Nossa razão </strong>é
                manter acesa e ampliar a visão missionária da igreja. Temos como
                missão cuidar da participação missionária da igreja em termos de
                Jerusalém, Judéia, Samaria e confins da terra. Existimos para
                viabilizar a adoção e manutenção das famílias missionárias,
                através do processo de personalização missionária. <br />
                <strong>Nosso propósito </strong> é administriar a OMF (Oferta
                Missionária de Fé)bem como outras ofertas e participações
                missionárias.
                <strong> Acreditamos </strong> que é tarefa da nossa geração
                proclamar a salvação ao mundo sem Cristo. Atuamos na mobilização
                da igreja para o cumprimento da sua vocação missionária, sempre
                subordinados ao colégio pastoral e a Assembleia da igreja.{" "}
                <br />
                <cite>
                  O que queremos? Que o Ministério possa compreender e traduzir
                  o sentimento missionário da igreja em termos práticos.
                </cite>
              </p>
              <a
                className="d-flex paragrafo fs-5 justify-content-end"
                href="#sonhos"
              >
                Conheça nossas metas
              </a>
            </div>
          </div>
        </div>
        <div id="sonhos"></div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="bg-2 rounded-3 d-flex justify-content-center align-items-center">
            <div className="box-two border border-dark p-3 m-3 bg-light rounded-3">
              <p className="h2 title text-center">
                Metas, compromissos e ações
              </p>
              <p className="paragrafo fs-5 mt-4">
                Promovemos conferências missionárias anuais; estipulamosalvos e
                promovemos campanhas e ofertas missionárias, valorizando essa
                tarefa e crendo que é uma responsabilidade da igreja lcal, e
                operacionalizada com os vocacionados por Deus e organizações
                missionárias (agências). <br />
                As ações tomadas para atingir os nossos objetivos (curto, médio
                e longo prazo) estão em implementar a participação através da
                OMF, buscando atingir a participação total da igreja. Organizar
                a igreja em grupos de apoio missionário. Implementar viagens
                missionárias de fé. Promover encontros, cafés e momentos
                missionários ao longo do ano eclesiástico. Queremos atingir a
                meta de 60 famílias missionárias mantidas, adotadas e
                conveniadas até 2030.
              </p>
            </div>
          </div>
        </div>
        <div className="space"></div>
      </section>
    </main>
  );
};
export default BodyIndex;
