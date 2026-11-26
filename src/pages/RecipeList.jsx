import { Link } from "react-router";

export default function RecipeListPage() {
  return (
    <div className="text-center text-2xl font-bold">
      <h1>Recipe List Page</h1>
      <Link
        to={`/recipes/`}
        className="block border rounded-lg overflow-hidden bg-white hover:shadow-md transition"
      >
        <img src="/" alt="/" className="w-full h-44 object-cover" />
        <div className="p-4">
          <span className="text-xs text-orange-600 font-medium">kategori</span>
          <h2 className="text-lg font-semibold text-gray-800 mt-1">title</h2>
          <p className="text-sm text-gray-500 mt-2">durasi</p>
        </div>
      </Link>
    </div>
  );
}
