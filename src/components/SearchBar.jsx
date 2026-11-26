export default function SearchBar() {
  return (
    <label className="input w-2/3 flex items-center rounded-4xl gap-2 focus-within:outline-none ">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input type="search" required placeholder="Search" />
      <button className="btn btn-sm bg-secondary text-primary rounded-2xl">
        Button
      </button>
    </label>
  );
}
