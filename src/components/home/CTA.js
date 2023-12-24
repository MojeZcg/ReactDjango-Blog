export default function CTA() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden shadow-lg shadow-gray-400 rounded-xl sm:h-80 lg:order-last lg:h-full dark:shadow-sm dark:shadow-gray-800">
            <img
              alt="Party"
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover "
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl pb-4 dark:text-white">
              Empieza a crear.
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-100">
              Descubre un mundo de posibilidades creativas con nuestra guía
              completa 'Empieza a crear'. Desde inspiración hasta técnicas
              expertas, encuentra el impulso que necesitas para materializar tus
              ideas y alcanzar nuevos niveles de creatividad. ¡Da rienda suelta
              a tu imaginación hoy mismo!
            </p>

            <a
              href="/"
              className="mt-8 inline-flex shadow-xl shadow-gray-400 rounded-xl bg-oro border-2 border-oro px-12 py-2 text-sm font-medium text-gray-900 transition duration-200 ease-in-out hover:bg-white hover:border-black focus:border-oro-inespecifico xl:text-lg dark:hover:text-white dark:hover:bg-dark dark:hover:border-transparent dark:shadow-sm dark:shadow-gray-900 dark:hover:border-white "
            >
              Iniciate Hoy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
