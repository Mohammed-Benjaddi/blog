import Post from "./Post";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const PostsSlider = ({ data, pathname }) => {
  const [posts, setPosts] = useState();

  const slidesPerView_600 = data.length >= 2 ? 2 : 1;
  const slidesPerView_1024 = data.length >= 3 ? 3 : data.length;

  useEffect(() => {
    const posts = data.map((post) => {
      return (
        <SwiperSlide
          className={
            pathname === "/categories" && data.length < 3
              ? "min-[600px]:max-w-[50%] lg:max-w-[32%]"
              : ""
          }
          key={post.id}
        >
          <Post
            id={post.id}
            title={post.title}
            body={post.body}
            src={post.image}
            category={post.category}
            createdAt={post.createdAt}
            width={"w-full"}
          />
        </SwiperSlide>
      );
    });

    setPosts(posts);
  }, [data, pathname]);

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        modules={[Autoplay]}
        breakpoints={{
          600: {
            slidesPerView: slidesPerView_600,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: slidesPerView_1024,
            spaceBetween: 30,
          },
        }}
      >
        {posts}
      </Swiper>
    </>
  );
};

export default PostsSlider;
