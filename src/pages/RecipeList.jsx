import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function RecipeListPage() {
  return (
    <div className="text-center text-2xl font-bold">
      <Navbar />
      <div className="p-4">
        <Hero />
      </div>
      <h1>Recipe List Page</h1>
    </div>
  );
}
