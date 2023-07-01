import Link from "next/link";
import Image from "next/image";
import background from "../../public/background.png";

const Hero = () => {
  return (
    <div className="relative w-full h-96 lg:h-[calc(100vh-64px)] flex justify-center items-center flex-col gap-10">
      <Image
        alt="Mountains"
        src={background}
        fill
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="select-none"
      />
      <span className="absolute w-full h-full bg-sky-600 dark:bg-green-600 bg-opacity-25 dark:bg-opacity-25 backdrop-blur-sm"></span>
      <div className="z-10 w-11/12 md:px-0 md:w-3/4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-Pacifico text-white text-3xl md:text-4xl lg:text-6xl font-semibold">
          Unleashing The Programmer's Palette
        </h1>
        <button
          className={`absolute mt-10 bg-sky-500 text-white dark:bg-green-500 dark:text-black dark:hover:bg-green-600 hover:bg-sky-600 dark:hover:text-white my-5 left-1/2 -translate-x-1/2 transition text-lg rounded-sm py-2 px-4 cursor-pointer`}
        >
          <Link href={"/posts"}>See All Posts</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
