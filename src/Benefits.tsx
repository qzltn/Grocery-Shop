import { FiTruck } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { FiShield } from "react-icons/fi";

const Benefits = () => {
  return (
    <section className="px-4 py-8 bg-white rounded-lg m-5">

      <div className="grid grid-cols-2 gap-4">

       
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 justify-center rounded-2xl bg-[#f8f6f0] items-center">
            <FiTruck size={28} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800">
              free delivery
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              orders over $20
            </p>
          </div>
        </div>


     
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 justify-center rounded-2xl bg-[#f8f6f0] items-center">
            <LuLeaf size={28} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800">
              100% organic
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              certified products
            </p>
          </div>
        </div>



        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 justify-center rounded-2xl bg-[#f8f6f0] items-center">
            <FiClock size={28} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800">
              same day
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              express delivery
            </p>
          </div>
        </div>


        
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 justify-center rounded-2xl bg-[#f8f6f0] items-center">
            <FiShield size={28} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800">
              secure pay
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              safe check out
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Benefits;