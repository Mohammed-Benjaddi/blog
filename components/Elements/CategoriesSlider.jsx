import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CategoriesSlider = ({ data }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesArray = data.map((category, i) => {
      return (
        <SwiperSlide key={i + 1} className="w-full">
          <Link
            href={
              category === "all" ? "/categories" : `/categories/${category}`
            }
            className="w-full px-5 h-10 bg-sky-300 text-black dark:bg-green-500 dark:text-black dark:hover:bg-green-600 hover:bg-sky-500 hover:text-white flex justify-center items-center rounded-sm cursor-pointer transition"
          >
            {category}
          </Link>
        </SwiperSlide>
      );
    });
    setCategories(categoriesArray);
  }, [data]);

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="mt-5"
      >
        {categories}
      </Swiper>
    </>
  );
};

export default CategoriesSlider;
