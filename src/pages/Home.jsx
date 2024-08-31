import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      {/* Início Títulos */}
      <h1 class="mb-4 mt-5 text-4xl text-center font-serif leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Calçados Democrata
      </h1>
      <h2 class="text-4xl text-center font-serif">
        Para Homens que Caminham com Confiança
      </h2>
      {/* Fim Títulos */}
      <br />
      {/* Início Galeria */}
      <div class="grid gap-4 m-auto p-5">
        <div>
          <img
            class="h-30 max-w-full rounded-lg m-auto"
            src="/capa.jpg"
            alt=""
          />
        </div>
        <div class="grid grid-cols-5 gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src="/img1.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="/img2.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="/img3.webp" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="/img4.webp" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="/img5.webp" alt="" />
          </div>
        </div>
      </div>
      {/* Fim Galeria */}

      <h3 class="text-4xl text-center font-serif">Novidades</h3>
      <br />

      {/* Início Novidades */}

      <div class="flex items-center p-5 m-auto justify-between">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            class="p-8 rounded-t-lg"
            src="sapato.webp"
            alt="imagem do produto 1"
          />
          <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Sapato Masculino
            </h5>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                R$ 199,90
              </span>
            </div>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            class="p-8 rounded-t-lg"
            src="/relogio.webp"
            alt="imagem do produto 2"
          />

          <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Relógio Masculino
            </h5>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                R$ 399,90
              </span>
            </div>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            class="p-8 rounded-t-lg"
            src="/jaqueta.jpg"
            alt="imagem do produto 3"
          />
          <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Jaqueta Masculina
            </h5>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse"></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                R$ 599,90
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Fim Novidades */}
      <h3 class="text-4xl text-center font-serif">Blogs</h3>
      <br />
      {/* Início Blogs */}

      <div class="flex flex-row justify-evenly items-center m-auto p-5">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Conheça nossa história
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Uma empresa de família, que já está no mercado há quatro décadas.
          </p>
          <Link to="/Sobre">
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sabia mais
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </Link>
        </div>

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Conheça nosso blog
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Fique por dentro de todas as novidades. Confira!
          </p>
          <a
            href="https://www.democrata.com.br/"
            target="_blank"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Saiba mais
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <br />
      {/* Fim Blogs */}

      {/* Início Categorias */}

      <h3 class="text-4xl text-center font-serif">Categorias de produtos</h3>

      <div class="justify-center items-center m-auto p-5 grid grid-cols-3 gap-4">
        {/* Categoria 1 */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
          <img
            class="h-auto max-w-full rounded-lg"
            src="/roupa-masculina.jpg"
            alt="imagem de roupa masculina"
          />

          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Roupas
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-100">
              Para homens de bom gosto. Confira!
            </p>

            <a
              href="/Roupas"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to="/Roupas">Conheça</Link>
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Categoria 2 */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
          <img class="h-auto max-w-full rounded-lg" src="/calcado-masculino.jpg" alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Calçados
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-100">
              Conforto e estilo em um só lugar. Confira!
            </p>
            <a
              href="/Roupas"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to="/Sapatos">Conheça</Link>
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Categoria 3 */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
          <img class="h-auto max-w-full rounded-lg" src="/relogio-masculino.jpg" alt="" />

          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Acessórios
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-100">
              Para complementar o seu look. Confira!
            </p>
            <a
              href="/Acessorios"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to="Acessorios">Conheça</Link>
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

      </div>
      {/* Fim Categorias */}
      <div class="flex flex-col justify-center items-center m-auto p-5">

      <p class="text-gray-700 dark:text-gray-500 p-5 text-center">
        Uma loja como você nunca viu!
      </p>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700" />
      <p class="text-gray-700 dark:text-gray-500 p-5 text-center ">
        Há muitos motivos para comprar conosco. Venha nos visitar!
      </p>
      </div>

      {/* Início Marcações */}
      <div class="flex flex-row truncate justify-evenly items-center m-auto p-5">

      <div class="flex w-16 flex-col justify-center items-center">
        <span class="flex w-16 h-16 bg-white border-4 border-gray-500 rounded-full"></span>
        <p class="mb-3 text-center xl:text-wrap  text-gray-800 dark:text-gray-600 mt-3">Pagamentos Seguros</p>
        </div>

        <div class="flex w-16 flex-col justify-center items-center ">
        <span class="flex w-16 h-16 bg-white border-4 border-gray-500 rounded-full"></span>
        <p class="mb-3 text-center xl:text-wrap text-gray-800 dark:text-gray-600 mt-3">Fretes e Devoluções Grátis</p>
        </div>

        <div class="flex w-16 flex-col justify-center items-center ">
        <span class="flex w-16 h-16 bg-white border-4 border-gray-500 rounded-full"></span>
         <p class="mb-3 text-center xl:text-wrap text-gray-800 dark:text-gray-600 mt-3">SAC 24/7</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
