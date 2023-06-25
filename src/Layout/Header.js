export default function Header() {
  return (
    <header className="bg-sandy flex justify-between items-center p-4 mb-12">
      <div>
        <h1 className="text-3xl">Space Planner</h1>
      </div>
      <div>
        <a
          href="/"
          className=" text-white text-lg mr-6 no-underline"
        >
          Support
        </a>
        <a
          href="/"
          className=" text-white text-lg mr-6 no-underline"
        >
          Projects
        </a>
        <a
          href="/"
          className=" text-white text-lg no-underline"
        >
          About company
        </a>
      </div>
    </header>
  );
}
