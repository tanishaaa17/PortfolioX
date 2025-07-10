import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">👋 Hi, I'm Tanisha</h1>
        <p className="mt-4 text-lg text-gray-600">A passionate web developer & designer.</p>
      </main>
    </div>
  );
}
