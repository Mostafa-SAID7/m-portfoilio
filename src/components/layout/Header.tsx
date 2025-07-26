export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:text-blue-500">Home</a></li>
          <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
