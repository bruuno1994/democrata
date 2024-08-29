function Home() {
  return (
    <div>
        <h1 class="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Calçados Democrata</h1>
        <h2 class="text-4xl text-center font-extrabold">Para Homens que Caminham com Confiança</h2>
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
            <img
              class="h-30 max-w-full rounded-lg"
              src="/img1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-30 max-w-full rounded-lg"
              src="/img2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/img3.webp"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/img4.webp"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/img5.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
