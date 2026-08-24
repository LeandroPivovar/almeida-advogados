import Image from "next/image";
import ContactForm from "./ContactForm";
import ScrollReveal from "./ScrollReveal";

const phoneDisplay = "(48) 3304-0762";
const whatsappDisplay = "(48) 98822-1886";
const email = "advkehl@gmail.com";
const address =
  "Rua das Algas, 173 - Sala 04 - Jurerê Internacional, Florianópolis - SC";
const whatsappUrl =
  "https://wa.me/5548988221886?text=Ol%C3%A1%2C%20Almeida%20Kehl%20Advogados%20Associados.%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.";

const practiceAreas = [
  {
    label: "Direito do Trabalho",
    text: "Vínculo empregatício, jornada de trabalho, horas extras, férias, 13º salário, acidente de trabalho, gestação, aviso prévio e rescisão contratual.",
    mark: "TR",
  },
  {
    label: "Direito Civil",
    text: "Ações indenizatórias, posse e usucapião, contratos, consumidor, bancário, empresarial, residência, naturalização e cidadania.",
    mark: "CV",
  },
  {
    label: "Famílias e Sucessões",
    text: "Divórcio, união estável, partilha de bens, pensão alimentícia, guarda, convivência, adoção, inventário e testamento.",
    mark: "FS",
  },
  {
    label: "Direito Previdenciário",
    text: "Aposentadoria por tempo de contribuição, idade, invalidez, aposentadoria especial, auxílios, pensão por morte e salário-maternidade.",
    mark: "PR",
  },
];

const team = [
  {
    name: "Silvana Almeida Kehl",
    role: "Advogada, OAB/SC 37.133",
    image: "/silvana-almeida-kehl.jpg",
    text: "Sócia fundadora do Almeida Kehl Advogados Associados, consolidado desde 2013 no norte da Ilha, em Canasvieiras. Especialista em Direito Previdenciário, Direito e Processo do Trabalho, Direito de Família e Sucessões.",
  },
  {
    name: "Wellen Oliveira Cruz",
    role: "Advogada, OAB/SC 31.597 · OAB/PR 105.227-A",
    image: "/wellen-oliveira-cruz.jpg",
    text: "Pós-graduada em Direito e Processo do Trabalho, membro da Comissão de Direito do Trabalho da OAB/SC e com 14 anos de atuação na área trabalhista.",
  },
  {
    name: "Camila Arévalo",
    role: "Advogada, OAB/MS 28.450",
    image: "/camila-arevalo.jpeg",
    text: "Atuação em Direito Civil, com experiência na Advocacia-Geral da União e no Tribunal de Justiça. Desenvolve soluções estratégicas para interesses individuais e empresariais.",
  },
  {
    name: "Juliana Teresinha Conradi",
    role: "Assessora Jurídica",
    image: "/juliana-conradi.jpeg",
    text: "Assessora jurídica com atuação nas áreas Cível e de Família, com ênfase em inventários e partilhas.",
  },
];

const steps = [
  "Agende sua consulta pelo WhatsApp.",
  "Escolha atendimento presencial ou online.",
  "Receba orientação objetiva para os próximos passos.",
];

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Almeida Kehl Advogados Associados"
        >
          <Image
            alt=""
            aria-hidden="true"
            height={259}
            src="/almeida-logo.png"
            width={290}
          />
          <span>Almeida Kehl</span>
        </a>
        <nav aria-label="Seções principais">
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Áreas de atuação</a>
          <a href="#equipe">Equipe</a>
        </nav>
        <a className="header-cta" href={whatsappUrl}>
          Consulta
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy" data-reveal="left">
          <p className="eyebrow">Canasvieiras · Florianópolis · SC</p>
          <div className="nameplate">
            <span />
            <strong>Almeida Kehl</strong>
            <span />
          </div>
          <h1>Advocacia especializada, presencial e online.</h1>
          <p className="hero-lede">
            Equipe líder em Direito Trabalhista, Civil, das Famílias,
            Previdenciário e outras áreas, com atendimento diferenciado em
            Florianópolis.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappUrl}>
              Agende a sua consulta
              <span aria-hidden="true">›</span>
            </a>
            <p>Atendimento presencial em Jurerê Internacional e online.</p>
          </div>
        </div>

        <div
          className="hero-visual office-visual"
          data-reveal="right"
          aria-label="Identidade visual Almeida Kehl Advocacia"
        >
          <Image
            alt="Almeida Kehl Advocacia e Consultoria Jurídica"
            className="hero-photo office-photo"
            height={472}
            priority
            src="/almeida-office.jpg"
            width={505}
          />
          <div className="floating-note note-one">
            <b>2013</b>
            <span>Escritório consolidado no norte da Ilha</span>
          </div>
          <div className="floating-note note-two">
            <b>+12</b>
            <span>Anos de atuação jurídica</span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Credenciais">
        <article data-reveal>
          <strong>2013</strong>
          <span>atuação consolidada</span>
        </article>
        <article data-reveal>
          <strong>Online</strong>
          <span>consulta à distância</span>
        </article>
        <article data-reveal>
          <strong>Jurerê</strong>
          <span>Florianópolis, SC</span>
        </article>
        <article data-reveal>
          <strong>Equipe</strong>
          <span>advocacia especializada</span>
        </article>
      </section>

      <section className="mission section-shell" id="sobre">
        <article data-reveal>
          <span className="card-mark">01</span>
          <div>
            <h2>Compromisso</h2>
            <p>
              Oferecer soluções jurídicas em diversas áreas do direito, com o
              suporte necessário para atender demandas pessoais, familiares,
              trabalhistas e empresariais.
            </p>
          </div>
        </article>
        <article data-reveal>
          <span className="card-mark">02</span>
          <div>
            <h2>Excelência</h2>
            <p>
              Atendimento ágil, ético e pautado na confiança em cada etapa do
              processo, com comunicação objetiva e acompanhamento próximo.
            </p>
          </div>
        </article>
      </section>

      <section className="about section-shell">
        <div className="portrait-wrap logo-wrap" data-reveal="left">
          <Image
            alt="Marca Almeida Kehl Advocacia e Consultoria Jurídica"
            height={250}
            src="/almeida-hero.jpg"
            width={250}
          />
        </div>
        <div className="about-copy" data-reveal="right">
          <p className="eyebrow">Quem somos</p>
          <h2>Mais de 12 anos no norte da Ilha de Florianópolis.</h2>
          <p>
            A Advocacia e Consultoria Jurídica foi fundada pela Dra. Silvana
            Almeida Kehl e mantém endereço consolidado em Canasvieiras, região
            privilegiada da capital catarinense.
          </p>
          <p>
            O escritório atua em Direito de Família e Sucessões, Empresarial,
            Trabalho, Civil, Consumidor e Previdenciário, além de assessoria
            para estrangeiros que buscam residência, naturalização ou cidadania
            brasileira.
          </p>
        </div>
      </section>

      <section className="areas section-shell" id="atuacao" data-reveal>
        <p className="section-kicker">Áreas de atuação</p>
        <h2>Suporte jurídico para pessoas, famílias e empresas.</h2>
        <div className="area-grid">
          {practiceAreas.map((area) => (
            <article key={area.label} data-reveal>
              <span>{area.mark}</span>
              <h3>{area.label}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-shell">
        <div data-reveal="left">
          <p className="section-kicker">Atendimento</p>
          <h2>Presencial em Jurerê Internacional e online.</h2>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <article key={step} data-reveal="right">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team section-shell" id="equipe">
        <div className="team-head" data-reveal>
          <p className="section-kicker">Conheça a nossa equipe</p>
          <h2>Profissionais qualificados e comprometidos com excelência.</h2>
        </div>
        <div className="team-grid">
          {team.map((person) => (
            <article key={person.name} data-reveal>
              <Image
                alt={person.name}
                height={680}
                src={person.image}
                width={450}
              />
              <div>
                <h3>{person.name}</h3>
                <strong>{person.role}</strong>
                <p>{person.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contato" data-reveal>
        <div className="contact-panel">
          <div>
            <p className="section-kicker">Entre em contato</p>
            <h2>Faça contato para realizar a sua consulta.</h2>
            <p>{address}</p>
          </div>
          <ContactForm />
          <aside>
            <span>Telefone</span>
            <strong>{phoneDisplay}</strong>
            <span>WhatsApp</span>
            <strong>{whatsappDisplay}</strong>
            <span>E-mail</span>
            <strong>{email}</strong>
          </aside>
        </div>
      </section>

      <footer className="dark-cta" data-reveal>
        <div className="section-shell">
          <p>Atendimento jurídico especializado para conduzir sua demanda com segurança.</p>
          <a className="primary-button dark" href={whatsappUrl}>
            Agende a sua consulta agora
            <span aria-hidden="true">›</span>
          </a>
          <small>
            Almeida Kehl Advogados Associados · {phoneDisplay} · WhatsApp{" "}
            {whatsappDisplay} · {address}
          </small>
        </div>
      </footer>
    </main>
  );
}
