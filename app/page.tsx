import Image from "next/image";
import ContactForm from "./ContactForm";

const phoneDisplay = "(48) 98832-5964";
const whatsappUrl =
  "https://wa.me/5548988325964?text=Ol%C3%A1%2C%20Ermeson%20Advogados.%20Gostaria%20de%20agendar%20uma%20an%C3%A1lise%20jur%C3%ADdica.";

const practiceAreas = [
  {
    label: "Direito Civil",
    text: "Contratos, cobranças, responsabilidade civil e soluções para conflitos patrimoniais.",
    mark: "CV",
  },
  {
    label: "Direito da Família",
    text: "Orientação em divórcio, guarda, alimentos e acordos conduzidos com sensibilidade.",
    mark: "FM",
  },
  {
    label: "Direito Criminal",
    text: "Atuação técnica em medidas urgentes, acompanhamento e defesa em procedimentos criminais.",
    mark: "CR",
  },
  {
    label: "Direito Digital",
    text: "Demandas ligadas a imagem, dados, provas digitais e conflitos no ambiente online.",
    mark: "DG",
  },
];

const reviews = [
  {
    name: "Mariana Lemos de Carvalho",
    time: "um mês atrás",
    text: "Desde meu primeiro contato o Ermeson se mostrou muito solícito e sensível ao meu problema, me ajudando com urgência, inclusive trabalhando nos finais de semana.",
  },
  {
    name: "Ayla Caroline",
    time: "3 meses atrás",
    text: "Sempre muito prestativo, ágil e transparente durante o processo. Passou segurança desde o início e esclareceu todas as dúvidas com clareza e atenção.",
  },
  {
    name: "Emilin Souza",
    time: "9 meses atrás",
    text: "Mesmo a distância, sempre esteve esclarecendo dúvidas e me deixando segura sobre cada passo do processo.",
  },
];

const steps = [
  "Explique sua situação pelo WhatsApp.",
  "Receba uma primeira orientação com clareza.",
  "Defina a estratégia jurídica e os próximos passos.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ermeson Advogados">
          Ermeson Advogados
        </a>
        <nav aria-label="Seções principais">
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Áreas de atuação</a>
          <a href="#avaliacoes">Avaliações</a>
        </nav>
        <a className="header-cta" href={whatsappUrl}>
          Contato
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Advogado em Florianópolis</p>
          <div className="nameplate">
            <span />
            <strong>Ermeson Advogados</strong>
            <span />
          </div>
          <h1>Advogado em Florianópolis, com atendimento 24 horas.</h1>
          <p className="hero-lede">
            Atendimento acolhedor, estratégico e disponível para quem precisa
            resolver uma demanda jurídica com urgência, clareza e confiança.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappUrl}>
              Falar com advogado
              <span aria-hidden="true">›</span>
            </a>
            <p>Aberto 24 horas. Primeira conversa pelo WhatsApp.</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Foto de Ermeson no escritório">
          <Image
            alt="Ermeson Advogados em escritório jurídico"
            className="hero-photo"
            height={564}
            priority
            src="/emerson-office.png"
            width={442}
          />
          <div className="floating-note note-one">
            <b>5,0</b>
          <span>66 avaliações no Google</span>
          </div>
          <div className="floating-note note-two">
            <b>24h</b>
          <span>Atendimento para urgências</span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Credenciais">
        <article>
          <strong>66</strong>
          <span>avaliações públicas</span>
        </article>
        <article>
          <strong>5,0</strong>
          <span>nota media no Google</span>
        </article>
        <article>
          <strong>Centro</strong>
          <span>Florianópolis, SC</span>
        </article>
        <article>
          <strong>LGBTQ+</strong>
          <span>empresa acolhedora</span>
        </article>
      </section>

      <section className="mission section-shell" id="sobre">
        <article>
          <span className="card-mark">01</span>
          <div>
            <h2>Missao</h2>
            <p>
              Oferecer assessoria jurídica objetiva, humana e tecnicamente
              cuidadosa para que cada cliente entenda seu caso e decida com
              segurança.
            </p>
          </div>
        </article>
        <article>
          <span className="card-mark">02</span>
          <div>
            <h2>Valores</h2>
            <p>
              Comprometimento, ética, transparência, responsabilidade social e
              respeito integral à história de cada pessoa atendida.
            </p>
          </div>
        </article>
      </section>

      <section className="about section-shell">
        <div className="portrait-wrap">
          <Image
            alt="Retrato profissional de Ermeson Advogados"
            height={618}
            src="/emerson-portrait.png"
            width={403}
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Quem é Ermeson Advogados?</p>
          <h2>Presença, técnica e uma comunicação que você entende.</h2>
          <p>
            Em momentos jurídicos delicados, o cliente precisa de alguém que
            explique o caminho, organize as provas e aja com responsabilidade.
            A atuação do escritório prioriza estratégia, clareza nas
            informações e acompanhamento próximo do início ao fim.
          </p>
          <p>
            O atendimento acontece em Florianópolis e também a distância,
            mantendo transparência sobre riscos, prazos e alternativas de cada
            caso.
          </p>
        </div>
      </section>

      <section className="areas section-shell" id="atuacao">
        <p className="section-kicker">Áreas de atuação</p>
        <h2>Orientação jurídica para decisões importantes.</h2>
        <div className="area-grid">
          {practiceAreas.map((area) => (
            <article key={area.label}>
              <span>{area.mark}</span>
              <h3>{area.label}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-shell">
        <div>
          <p className="section-kicker">Como funciona</p>
          <h2>Uma conversa clara antes de qualquer medida.</h2>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <article key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews section-shell" id="avaliacoes">
        <div className="reviews-head">
          <p className="section-kicker">Avaliações</p>
          <h2>Clientes destacam atenção, agilidade e transparência.</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article key={review.name}>
              <div className="stars" aria-label="5 estrelas">
                ★★★★★
              </div>
              <p>“{review.text}”</p>
              <footer>
                <strong>{review.name}</strong>
                <span>{review.time}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contato">
        <div className="contact-panel">
          <div>
            <p className="section-kicker">Entre em contato</p>
            <h2>Conte seu caso e receba um direcionamento inicial.</h2>
            <p>
              Av. Hercílio Luz, 639 - Centro, Florianópolis - SC, 88020-000
            </p>
          </div>
          <ContactForm />
          <aside>
            <span>Atendimento</span>
            <strong>Aberto 24 horas</strong>
            <span>WhatsApp</span>
            <strong>{phoneDisplay}</strong>
            <span>Localização</span>
            <strong>Centro, Florianópolis</strong>
          </aside>
        </div>
      </section>

      <footer className="dark-cta">
        <div className="section-shell">
          <p>Poupe tempo, fale diretamente com quem pode orientar o caso.</p>
          <a className="primary-button dark" href={whatsappUrl}>
            Solicitar atendimento agora
            <span aria-hidden="true">›</span>
          </a>
          <small>
            Ermeson Advogados · {phoneDisplay} · Av. Hercílio Luz, 639 -
            Centro, Florianópolis
          </small>
        </div>
      </footer>
    </main>
  );
}
