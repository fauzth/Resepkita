import { Routes, Route } from "react-router";
import FavoritePage from "./pages/Favorite";
import NotFoundPage from "./pages/NotFound";
import RecipeListPage from "./pages/RecipeList";
import RecipeDetailPage from "./pages/RecipeDetail";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
