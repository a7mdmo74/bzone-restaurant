import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import Apple from "../../assets/f8.png";
import Blueberries from "../../assets/f3.png";
import Pinneapple from "../../assets/f2.png";
import Concord from "../../assets/f4.png";
import Banana from "../../assets/f9.png";
import Watermelon from "../../assets/f10.png";
import Pomegranate from "../../assets/f6.png";
import Raspberry from "../../assets/f7.png";
import Strawberry from "../../assets/f1.png";
const Scrolling = () => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <section className="w-full my-5">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl text-headingColor font-semi-bold capitalize relative before:absolute before:rounded before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Our fresh & healthy fruits
        </p>
        <div className="hidden md:flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-all duration-100 ease-in-out hover:shadow-lg"
            onClick={() => scroll(-750)}
          >
            <IoIosArrowBack className="text-lg text-white" />
          </div>
          <div
            className="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-all duration-100 ease-in-out hover:shadow-lg"
            onClick={() => scroll(750)}
          >
            <IoIosArrowForward className="text-lg text-white" />
          </div>
        </div>
      </div>
      <div
        className="bg-containerbg w-full my-12 flex items-center min-h-[200px] gap-4 px-2 overflow-x-scroll scrollbar-hidden scroll-smooth"
        ref={ref}
      >
        <div className="w-[275px] min-w-[275px] md:w-[300px] md:min-w-[300px] my-2 md:my-5 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer">
          <div className="w-full flex items-center justify-between">
            <img
              src={Apple}
              alt="Apple"
              className="w-40 h-40 md:w-48 -mt-8 object-contain cursor-pointer"
            />
          </div>
          <div className="w-full flex items-end justify-end flex-col">
            <p className="text-textColor font-semi-bold text-lg">Apple</p>
            <p className="mt-1 text-sm text-gray-500">Red Delicious</p>
            <div className="flex items-center justify-between gap-8 ">
              <p className="text-base text-headingColor font-semibold">
                <span className="text-sm text-red-600">£</span> 15.00
              </p>
            </div>
          </div>
        </div>
        <div className="w-[275px] min-w-[275px] md:w-[300px] md:min-w-[300px] my-2 md:my-5 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer">
          <div className="w-full flex items-center justify-between">
            <img
              src={Blueberries}
              alt="Blueberries"
              className="w-40 h-40 md:w-48 -mt-8 object-contain cursor-pointer"
            />
          </div>
          <div className="w-full flex items-end justify-end flex-col">
            <p className="text-textColor font-semi-bold text-lg">Blueberries</p>
            <p className="mt-1 text-sm text-gray-500">Blue Berries</p>
            <div className="flex items-center justify-between gap-8 ">
              <p className="text-base text-headingColor font-semibold">
                <span className="text-sm text-red-600">£</span> 12.25
              </p>
            </div>
          </div>
        </div>
        <div className="w-[275px] min-w-[275px] md:w-[300px] md:min-w-[300px] my-2 md:my-5 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer">
          <div className="w-full flex items-center justify-between">
            <img
              src={Pinneapple}
              alt="Pinneapple"
              className="w-40 h-40 md:w-48 -mt-8 object-contain cursor-pointer"
            />
          </div>
          <div className="w-full flex items-end justify-end flex-col">
            <p className="text-textColor font-semi-bold text-lg">Pinneapple</p>
            <div className="flex items-center justify-between gap-8 ">
              <p className="text-base text-headingColor font-semibold">
                <span className="text-sm text-red-600">£</span> 6.00
              </p>
            </div>
          </div>
        </div>
        <div className="w-[275px] min-w-[275px] md:w-[300px] md:min-w-[300px] my-2 md:my-5 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer">
          <div className="w-full flex items-center justify-between">
            <img
              src={Concord}
              alt="Concord"
              className="w-40 h-40 md:w-48 -mt-8 object-contain cursor-pointer"
            />
          </div>
          <div className="w-full flex items-end justify-end flex-col">
            <p className="mt-1 text-sm text-gray-500">Concord grapes</p>
            <div className="flex items-center justify-between gap-8 ">
              <p className="text-base text-headingColor font-semibold">
                <span className="text-sm text-red-600">£</span> 14.00
              </p>
            </div>
          </div>
        </div>
        <div className="w-[275px] min-w-[275px] md:w-[300px] md:min-w-[300px] my-2 md:my-5 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer">
          <div className="w-full flex items-center justify-between">
            <img
              src={Banana}
              alt="Banana"
              className="w-40 h-40 md:w-48 -mt-8 object-contain cursor-pointer"
            />
          </div>
          <div className="w-full flex items-end justify-end flex-col">
            <p className="text-textColor font-semi-bold text-lg">Banana</p>
            <p className="mt-1 text-sm text-gray-500">Fresh Banana</p>
            <div className="flex items-center justify-between gap-8 ">
              <p className="text-base text-headingColor font-semibold">
                <span className="text-sm text-red-600">£</span> 22.99
              </p>
            </div>
          </div>
        </div>
        <div className="w-[275px] min-w-[275px] md:w-[300px] md:min-w-[300px] my-2 md:my-5 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer">
          <div className="w-full flex items-center justify-between">
            <img
              src={Watermelon}
              alt="Watermelon"
              className="w-40 h-40 md:w-48 -mt-8 object-contain cursor-pointer"
            />
          </div>
          <div className="w-full flex items-end justify-end flex-col">
            <p className="text-textColor font-semi-bold text-lg">Watermelon</p>
            <p className="mt-1 text-sm text-gray-500">melon</p>
            <div className="flex items-center justify-between gap-8 ">
              <p className="text-base text-headingColor font-semibold">
                <span className="text-sm text-red-600">£</span> 5
              </p>
            </div>
          </div>
        </div>
        <div className="w-[275px] min-w-[275px] md:w-[300px] md:min-w-[300px] my-2 md:my-5 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer">
          <div className="w-full flex items-center justify-between">
            <img
              src={Pomegranate}
              alt="Pomegranate"
              className="w-40 h-40 md:w-48 -mt-8 object-contain cursor-pointer"
            />
          </div>
          <div className="w-full flex items-end justify-end flex-col">
            <p className="text-textColor font-semi-bold text-lg">Pomegranate</p>
            <div className="flex items-center justify-between gap-8 ">
              <p className="text-base text-headingColor font-semibold">
                <span className="text-sm text-red-600">£</span> 20.00
              </p>
            </div>
          </div>
        </div>
        <div className="w-[275px] min-w-[275px] md:w-[300px] md:min-w-[300px] my-2 md:my-5 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer">
          <div className="w-full flex items-center justify-between">
            <img
              src={Raspberry}
              alt="Raspberry"
              className="w-40 h-40 md:w-48 -mt-8 object-contain cursor-pointer"
            />
          </div>
          <div className="w-full flex items-end justify-end flex-col">
            <p className="text-textColor font-semi-bold text-lg">Raspberry</p>
            <p className="mt-1 text-sm text-gray-500">Cascade Delight</p>
            <div className="flex items-center justify-between gap-8 ">
              <p className="text-base text-headingColor font-semibold">
                <span className="text-sm text-red-600">£</span> 16.99
              </p>
            </div>
          </div>
        </div>
        <div className="w-[275px] min-w-[275px] md:w-[300px] md:min-w-[300px] my-2 md:my-5 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer">
          <div className="w-full flex items-center justify-between">
            <img
              src={Strawberry}
              alt="Strawberry"
              className="w-40 h-40 md:w-48 -mt-8 object-contain cursor-pointer"
            />
          </div>
          <div className="w-full flex items-end justify-end flex-col">
            <p className="text-textColor font-semi-bold text-lg">Strawberry</p>
            <div className="flex items-center justify-between gap-8 ">
              <p className="text-base text-headingColor font-semibold">
                <span className="text-sm text-red-600">£</span> 9.99
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scrolling;
