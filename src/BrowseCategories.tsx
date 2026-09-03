import fruits from "./assets/fruits_vegetables-DKTFzdXr.png";
import personalcare from "./assets/personal_care-DGCwg-ZT.png";
import pantry from "./assets/pantry_staples-CcPzJo59.png";
import bakery from "./assets/bakery-B-i44uip.png";
import beverages from "./assets/drinks-5Jevbc87 (1).png";
import meatseafood from "./assets/meat_seafood-B2LTBWqG.png";
import snacks from "./assets/snacks-Br0zj0km.png";
import frozenfoods from "./assets/frozen_foods-CJqLnA0J.png";
import babycare from "./assets/baby_care-CoAR19dL.png"
import dairyeggs from "./assets/dairy_eggs-BM544moA.png";

const categories = [
  {
    id: 1,
    title: "Fruits & Vegetables",
    Image:fruits,
  },
  {
    id: 2,
    title: "Personal Care",
    Image:personalcare,
  },
  {
    id: 3,
    title: "Pantry Staples",
    Image:pantry,
  },
  {
    id: 4,
    title: "Bakery",
      Image:bakery,
  },
  {
    id: 5,
    title: "Beverages",
      Image:beverages,
  },
  {
    id: 6,
    title: "Meat & Seafood",
      Image:meatseafood,
  },
  {
    id: 7,
    title: "Snacks",
      Image:snacks,
  },
  {
    id: 8,
    title: "Frozen Foods",
      Image:frozenfoods,
  },
  {
    id: 9,
    title: "Baby Care",
      Image:babycare,
  },
  {
    id: 10,
    title: "Dairy & Eggs",
      Image:dairyeggs,
  },
];

const BrowseCategories = () => {
  return (
    <section className="px-4 py-8">

    
      <h2 className="mb-5 text-2xl font-bold text-gray-800">
        Browse Categories
      </h2>
<p className="text-gray-600 m-5">Find exactly what you need using

</p>
   
      <div className="min-w-[120px] flex gap-4 overflow-x-auto mt-20">
        {categories.map((category) => {
          return (
            <div
              key={category.id}
              className="rounded-2xl  text-center"
            >
              <img
              src={category.Image}
              alt={category.title}
              className="bg-orange-100   h-24 w-24 rounded-3xl object-contain"/>
              <h3 className="text-sm font-semibold text-gray-800 m-3">
                {category.title}
              </h3>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default BrowseCategories;