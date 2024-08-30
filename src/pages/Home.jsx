import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <h1 class="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Calçados Democrata
      </h1>
      <h2 class="text-4xl text-center font-extrabold">
        Para Homens que Caminham com Confiança
      </h2>
      <br />
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
            <img class="h-30 max-w-full rounded-lg" src="/img1.jpg" alt="" />
          </div>
          <div>
            <img class="h-30 max-w-full rounded-lg" src="/img2.jpg" alt="" />
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

      <h3 class="text-4xl text-center font-extrabold">Novidades</h3>

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

      <Footer />
    </div>
  );
}

export default Home;
