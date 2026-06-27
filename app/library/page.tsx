export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10 text-center">
        My Library
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl">
          <h2 className="text-2xl mb-3">Atomic Habits</h2>
          <p className="text-gray-400">
            A book about habits and self-development.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl">
          <h2 className="text-2xl mb-3">Clean Code</h2>
          <p className="text-gray-400">
            A classic book about writing quality code.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl">
          <h2 className="text-2xl mb-3">The Pragmatic Programmer</h2>
          <p className="text-gray-400">
            Practical advice for software developers.
          </p>
        </div>
      </div>
    </main>
  );
}