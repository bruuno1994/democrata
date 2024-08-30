import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Sapatos() {
  return (
    <div>
      <Header />
      <h2 class="text-4xl text-center font-extrabold">
        Confira os nossos produtos dessa categoria
      </h2>
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

      </div>
      <Footer />
    </div>
  );
}

export default Sapatos;
