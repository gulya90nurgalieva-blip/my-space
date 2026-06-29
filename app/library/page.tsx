const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "/books/atomic-habits.jpg",
    category: "Personal Growth",
    rating: "⭐⭐⭐⭐⭐",
    note: "Changed my view on discipline."
  },

  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "/books/clean-code.jpg",
    category: "Programming",
    rating: "⭐⭐⭐⭐⭐",
    note: "A must-read for every developer."
  },

  {
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    image: "https://m.media-amazon.com/images/I/41as+WafrFL.jpg",
    category: "Programming",
    rating: "⭐⭐⭐⭐⭐",
    note: "Timeless advice for engineers."
  }
   ];
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

     {books.map((book) => (

     <div
      key={book.title}
      className="
        bg-white
        rounded-3xl
        p-8
        shadow-sm
        hover:shadow-2xl
        hover:-translate-y-3
        transition-all
        duration-300
      "
      >

      <img
        src={book.image}
        alt={book.title}
        className="w-40 h-56 object-cover rounded-2xl mb-6 mx-auto"
      />

      <h2 className="text-3xl font-serif mb-2">
        {book.title}
      </h2>

      <p className="text-orange-700 mb-4">
        {book.author}
      </p>

      <p className="text-stone-600 mb-4">
        {book.note}
      </p>

      <div className="text-yellow-500 mb-4">
        {book.rating}
      </div>

      <span className="bg-orange-100 px-4 py-2 rounded-full">
        {book.category}
      </span>

     </div>

    ))}

        </div>

      </section>

    </main>
  );
}