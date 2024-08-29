import Header from "../components/Header";
import Footer from "../components/Footer";

function Sobre() {
  return (
    <div>
      <Header />
      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray">
        Quem somos
      </h1>
      <div class="flex items-center">
        <img
          class="h-auto p-5 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src="/imagem-sobre1.jpeg"
          alt="imagem 1"
        />

        <p class="mb-3 text-gray-500 dark:text-gray-600 p-3">
          A Calçados Democrata começou sua trajetória em 1985, quando dois irmãos,
          Marcos e João Ferreira, decidiram transformar a paixão pela fabricação
          de calçados em um negócio.
          A qualidade dos produtos logo chamou a atenção dos lojistas da região,
          que começaram a encomendar cada vez mais pares. Com o aumento da
          demanda, a pequena fábrica cresceu, e os irmãos contrataram mais
          funcionários, expandindo a produção e diversificando os modelos
          oferecidos.
        </p>


      </div>

      <div class="flex items-center">

        <p class="text-gray-500 dark:text-gray-600 p-3">
        Nos dias atuais, a Calçados Democrata é uma empresa sólida, com mais de 50 lojas espalhadas pelo Brasil e uma presença digital forte. Ainda comandada pela família Ferreira, a empresa continua a inovar, sem perder as raízes artesanais que a tornaram famosa. Hoje, além de calçados, a Orion oferece acessórios e uma linha premium de sapatos feitos sob medida, consolidando sua reputação como sinônimo de qualidade e estilo no mercado brasileiro.
        </p>

        <img
          class="h-auto p-5 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src="/imagem-sobre2.webp"
          alt="imagem 2"
        />

    </div>

    <div class="flex items-center">
        <img
          class="h-auto p-5 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src="/imagem-sobre1.jpeg"
          alt="imagem 1"
        />

        <p class="mb-3 text-gray-500 dark:text-gray-600 p-3">
          A Calçados Democrata começou sua trajetória em 1985, quando dois irmãos,
          Marcos e João Ferreira, decidiram transformar a paixão pela fabricação
          de calçados em um negócio.
          A qualidade dos produtos logo chamou a atenção dos lojistas da região,
          que começaram a encomendar cada vez mais pares. Com o aumento da
          demanda, a pequena fábrica cresceu, e os irmãos contrataram mais
          funcionários, expandindo a produção e diversificando os modelos
          oferecidos.
        </p>


      </div>
      <Footer />
    </div>
  );
}

export default Sobre;
