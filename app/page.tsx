export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-[1700px] mx-auto grid grid-cols-12 gap-6">
      {/* Навигация */}
       <nav className="col-span-12 backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl">
         <div className="px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MySpace</h1>

          <ul className="flex gap-8 text-gray-300">
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li>
           <a href="/library" className="hover:text-white">
           Library
           </a>
           </li>
            <li className="hover:text-white cursor-pointer">Journal</li>
            <li className="hover:text-white cursor-pointer">About</li>
           </ul>
         </div>
         </nav>
      </div>
      {/* Hero */}
      <section
          className="h-[65vh] bg-cover bg-center flex items-center justify-center rounded-3xl overflow-hidden"
          style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
          <div className="backdrop-blur-md bg-white/10 p-10 rounded-3xl border border-white/20 text-center">
           <h1 className="text-4xl font-serif leading-tight mb-4">
            Create<br />
            Inspire<br />
            Grow
          </h1>

           <p className="text-gray-300 mb-6">
            Build your world. Make it beautiful.
          </p>

          <button className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition">
            Explore
          </button>
        </div>
      </section>
      <section className="bg-black py-16">

  <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-6">

    {/* Левая часть */}
    <div className="col-span-9">

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-black/10 p-6 rounded-3xl border border-white/10 h-[180px]">
          <h3 className="text-2xl mb-2">💻 Projects</h3>
          <p className="text-gray-400">
            Websites and coding projects.
          </p>
        </div>

        <div className="bg-black/10 p-6 rounded-3xl border border-white/10 h-[180px]">
          <h3 className="text-2xl mb-2">📚 Library</h3>
          <p className="text-gray-400">
            My favourite books.
          </p>
        </div>

        <div className="bg-black/10 p-6 rounded-3xl border border-white/10 h-[180px]">
          <h3 className="text-2xl mb-2">🏋️ Fitness</h3>
          <p className="text-gray-400">
            Strength and discipline.
          </p>
        </div>

        <div className="bg-black/10 p-6 rounded-3xl border border-white/10 h-[180px]">
          <h3 className="text-2xl mb-2">📝 Journal</h3>
          <p className="text-gray-400">
            Thoughts and reflections.
          </p>
        </div>

      </div>

    </div>

    {/* Правая колонка */}
    <div className="col-span-3">

      <div className="
        bg-black/10
        backdrop-blur-md
        border border-white/10
        rounded-3xl
        p-8
        h-full
      ">

        <h2 className="text-3xl font-serif mb-6">
          About Me
        </h2>

        <div className="flex items-center gap-5 mb-6">

          <img
            src="/me.jpg"
            alt="Me"
            className="w-24 h-24 rounded-full object-cover"
          />

          <div>
            <h3 className="text-xl font-semibold">
              Gulzhaukhar
            </h3>

            <p className="text-gray-400">
              System Administrator & Creator
            </p>
          </div>

        </div>

        <p className="text-gray-300 leading-8">
          I create my life consciously and with love.
          Technology, creativity, books and sport
          shape who I am.
        </p>

        <p className="mt-6 italic text-gray-500">
          Create. Inspire. Grow.
        </p>

      </div>

    </div>

  </div>

</section>
    
      {/* Library Preview */}
      <section className="bg-stone-50 text-stone-800 py-24">

     <div className="max-w-7xl mx-auto px-8">

     <div className="flex justify-between items-center mb-14">

      <div>
        <h2 className="text-6xl font-serif mb-4">
          My Library
        </h2>

        <p className="text-xl text-stone-500">
          Books that inspire and shape my thinking.
        </p>
      </div>

      <a
        href="/library"
        className="text-lg text-orange-700 hover:text-orange-900"
      >
        View all books →
      </a>

    </div>

     <div className="flex justify-center gap-6 flex-wrap">

      <div className="w-56 bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

        <img
          src="/books/atomic-habits.jpg"
          alt="Atomic Habits"
          className="w-36 h-52 object-cover rounded-2xl mb-4 mx-auto"
        />

        <h3 className="text-xl font-serif mb-2 text-center">
          Atomic Habits
        </h3>

        <p className="text-stone-500 text-center">
          James Clear
        </p>

      </div>

      <div className="w-56 bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

        <img
          src="/books/clean-code.jpg"
          alt="Clean Code"
          className="w-36 h-52 object-cover rounded-2xl mb-4 mx-auto"
        />

        <h3 className="text-xl font-serif mb-2 text-center">
          Clean Code
        </h3>

        <p className="text-stone-500 text-center">
          Robert C. Martin
        </p>

      </div>

      <div className="w-56 bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

        <img
          src="/books/pragmatic-programmer.jpg"
          alt="The Pragmatic Programmer"
         className="w-36 h-52 object-cover rounded-2xl mb-4 mx-auto"
        />

        <h3 className="text-xl font-serif mb-2 text-center">
          The Pragmatic Programmer
        </h3>

        <p className="text-stone-500 text-center">
          David Thomas
        </p>

      </div>

    </div>

  </div>

</section>
       
      
    </main>
  );
}