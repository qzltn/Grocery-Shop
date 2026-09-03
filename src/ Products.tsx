import React from 'react'
import image1 from "./assets/gek3mmiig3lixlkpxks8.png"
import image2 from "./assets/vnzb2qbwtpab5gnqvx0f.png"
import image3 from "./assets/evuovl2nlwdjukosfz23.png"
import image4 from "./assets/ceqgisupuizyste9aifg.png"
import image5 from "./assets/dsnmko6gqtyw31okby80.png"
import image6 from "./assets/wnvtwlm2tphqburhsmyc.png"
import image7 from "./assets/kdbfytxisrjymgy0ubhk.png"
import image8 from "./assets/dsep7owmwvfrukzbslqo.png"
import image9 from "./assets/vihqr6wquv57byurvz46.png"
import image10 from "./assets/nb1mpxuo4fdcik6ey5yj.png"



const products = [
  {
    id: 1,
    title: "Cheese 200g",
  Image:  image1,
 off:"7% off",
 button:"+",
 pric:"$130.0",
     nopric:"$140.0"
    
  },
  {
    id: 2,
    title: "Knorr Cup Soup 70g Care",
    Image:  image2,
     off:"14% off",
     button:"+",
     pric:"$30.0",
     nopric:"$35.0"
  },
  {
    id: 3,
    title: "Basmati Rice 5kg",
    Image:  image3,
     off:"5% off",
     button:"+",
     pric:"$520.0",
     nopric:"$550.0"
  },
  {
    id: 4,
    title: "Carrot 500g",
    Image:   image4,
     off:"12% off",
     button:"+",
     pric:"$44.0",
     nopric:""
  },
  {
    id: 5,
    title: "Banana 1 kg",
    Image:    image5,
     off:"10% off",
     button:"+",
     pric:"$45.0",
     nopric:"$50.0"
  },
  {
    id: 6,
    title: "Onion 500g",
    Image:   image6 ,
     off:"10% off",
     button:"+",
     pric:"$45.0",
     nopric:"$50.0"
  },
  {
    id: 7,
    title: "Tomato 1 kg",
   Image:  image7,
    off:"7% off",
    button:"+",
     pric:"$28.0",
     nopric:"$30.0"
  },
  {
    id: 8,
    title: "Maggi Noodles 280g",
    Image:    image8,
     off:"27% off",
     button:"+",
     pric:"$40.0",
     nopric:"$55.0"
  },
  {
    id: 9,
    title: "Paneer 200g",
   Image:    image9,
    off:"6% off",
    button:"+",
     pric:"$85.0",
     nopric:"$90.0"
  },
  {
    id: 10,
    title: "Mango 1 kg",
   Image:   image10,
    off:"7% off",
    button:"+",
     pric:"$140.0",
     nopric:"$150.0"
  },
];
const  Products = () => {
  return (
    
  <section className="px-4 py-8">

   
    <div className="flex items-center justify-between mb-6">

      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Popular Products
        </h2>

        <p className="mt-2 text-gray-500">
          Top-rated products this season
        </p>
      </div>

      <button className="flex items-center gap-2 text-orange-500 font-semibold">
        View All
        <span>→</span>
      </button>

    </div>


 
    <div className="grid grid-cols-2 gap-4">

      {products.map((pro) => {

        return (
          <div
            key={pro.id}
            className="min-w-[180px] rounded-2xl bg-white p-3"
          >

           
            <div className="relative">

              <img
                src={pro.Image}
                alt={pro.title}
                className="h-40 w-full rounded-2xl  object-contain"
              />

           
              <span className="absolute left-2 top-2 rounded-full bg-orange-500 px-2 py-1 text-xs font-bold text-white">
               {pro.off}
              </span>

            </div>


            
            <div className="mt-3">

              <h3 className="font-semibold text-gray-800">
                {pro.title}
              </h3>

              <div className="mt-2 flex items-center gap-1 text-sm">
                <span>⭐</span>
                <span>4.5</span>
                <span className="text-gray-400">
                  (12)
                </span>
              </div>


              
              <div className="mt-2 flex items-center gap-4">

                <span className="font-bold text-gray-800">
                  {pro.pric}
                </span>

                <span className="text-sm text-gray-400 line-through">
                {pro.nopric}
                </span>

              


              
              <button className="mt-3 py-2 px-4 rounded-3xl bg-orange-500  font-semibold text-white text-center">
               {pro.button}
              </button>
</div>
            </div>

          </div>
        );

      })}

    </div>

  </section>
)
     
  











  
  
      

}

export default  Products;