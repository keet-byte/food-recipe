import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../Components/recipe-item";

export default function Home() {
  const { recipeList , loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => {
          return <RecipeItem item={item} key={item.id} />;
        })
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">Try some other recipe..</p>
        </div>
      )}
    </div>
  );
}
