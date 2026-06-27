export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
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

      {/* Hero */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
        <div className="backdrop-blur-md bg-white/10 p-10 rounded-3xl border border-white/20 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Create. Inspire. Grow.
          </h1>

          <p className="text-xl mb-8 text-gray-300">
            Build your world. Make it beautiful.
          </p>

          <button className="bg-white text-black px-8 py-3 rounded-full hover:scale-105 transition">
            Explore
          </button>
        </div>
      </section>
      {/* Библиотека */}
<section className="bg-black py-20 px-8">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold mb-12 text-center">
      My Library
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">
          Atomic Habits
        </h3>
        <p className="text-gray-400">
          A book about building good habits and changing your life.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">
          Clean Code
        </h3>
        <p className="text-gray-400">
          One of the best books about writing quality code.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">
          The Pragmatic Programmer
        </h3>
        <p className="text-gray-400">
          Practical advice for software developers.
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}