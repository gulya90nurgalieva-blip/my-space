export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">

      {/* Верхнее меню */}
      <nav className="border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

          <h1 className="text-4xl font-serif">
            MySpace
          </h1>

          <ul className="flex gap-12 text-lg">
            <li>Projects</li>
            <li className="font-semibold border-b-2 border-orange-300 pb-1">
              Library
            </li>
            <li>Journal</li>
            <li>About</li>
          </ul>

        </div>
      </nav>

      {/* Кнопка назад */}
      <div className="max-w-7xl mx-auto px-8 pt-10">
        <a
          href="/"
          className="text-orange-700 hover:text-orange-900"
        >
          ← Back to Home
        </a>
      </div>

      {/* Заголовок */}
      <section className="text-center py-16">

        <h1 className="text-7xl font-serif mb-6">
          My Library
        </h1>

        <p className="text-2xl text-stone-500">
          Books that changed my thinking.
        </p>

      </section>

      {/* Категории */}
      <section className="flex justify-center gap-6 flex-wrap mb-16">

        <button className="px-8 py-3 rounded-full bg-orange-100">
          All Books
        </button>

        <button className="px-8 py-3 rounded-full border">
          Programming
        </button>

        <button className="px-8 py-3 rounded-full border">
          Personal Growth
        </button>

        <button className="px-8 py-3 rounded-full border">
          Korean Culture
        </button>

        <button className="px-8 py-3 rounded-full border">
          Fiction
        </button>

      </section>

      {/* Книги */}
      <section className="max-w-7xl mx-auto px-8 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Карточка 1 */}
          <div className="
           bg-white
           rounded-3xl
           p-8
           shadow-sm
           hover:shadow-2xl
           hover:-translate-y-3
           transition-all
           duration-300
            ">

            <div className="flex gap-6">

              <img
               src="/books/atomic-habits.jpg"
               alt="Atomic Habits"
               className="w-32 h-48 rounded-2xl object-cover"
               />

              <div>
                <h2 className="text-4xl font-serif mb-3">
                  Atomic Habits
                </h2>

                <p className="text-orange-700 mb-4">
                  James Clear
                </p>

                <p className="text-stone-600 mb-6">
                  A book about habits, discipline and continuous improvement.
                </p>

                <span className="bg-orange-100 px-4 py-2 rounded-full">
                  Personal Growth
                </span>
              </div>

            </div>

          </div>

          {/* Карточка 2 */}
          <div className="
           bg-white
           rounded-3xl
           p-8
           shadow-sm
           hover:shadow-2xl
           hover:-translate-y-3
           transition-all
           duration-300
            ">

            <div className="flex gap-6">

              <img
                   src="/books/clean-code.jpg"
                   alt="Clean Code"
                    className="w-32 h-48 rounded-2xl object-cover"
                    />

              <div>
                <h2 className="text-4xl font-serif mb-3">
                  Clean Code
                </h2>

                <p className="text-orange-700 mb-4">
                  Robert C. Martin
                </p>

                <p className="text-stone-600 mb-6">
                  Learn how to write clean and maintainable code.
                </p>

                <span className="bg-blue-100 px-4 py-2 rounded-full">
                  Programming
                </span>
              </div>

            </div>

          </div>

          {/* Карточка 3 */}
          <div className="
           bg-white
           rounded-3xl
           p-8
           shadow-sm
           hover:shadow-2xl
           hover:-translate-y-3
           transition-all
           duration-300
            ">
            <div className="flex gap-6">

              <img
               src="https://m.media-amazon.com/images/I/41as+WafrFL.jpg"
                alt="The Pragmatic Programmer"
                className="w-32 h-48 rounded-2xl object-cover"
                 />

              <div>
                <h2 className="text-3xl font-serif mb-3">
                  The Pragmatic Programmer
                </h2>

                <p className="text-orange-700 mb-4">
                  David Thomas
                </p>

                <p className="text-stone-600 mb-6">
                  Timeless principles for software developers.
                </p>

                <span className="bg-blue-100 px-4 py-2 rounded-full">
                  Programming
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}