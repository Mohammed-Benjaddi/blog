import PostsSlider from "../Elements/PostsSlider";
import Link from "next/link";

const LatestPosts = ({ data }) => {
  return (
    <div className="w-full py-5 relative">
      <h2 className="capitalize">Latest Posts</h2>

      <div className="flex justify-between gap-7 mt-5">
        <PostsSlider
          data={data.length > 5 ? data.slice(0, 5) : data}
          pathname={""}
        ></PostsSlider>
      </div>

      <button
        className={`bg-sky-500 text-white dark:bg-green-500 dark:text-black dark:hover:bg-green-600 hover:bg-sky-600 dark:hover:text-white relative my-5 left-1/2 -translate-x-1/2 transition text-lg rounded-sm py-2 px-4 cursor-pointer`}
      >
        <Link href={"/posts"}>Read More</Link>
      </button>
    </div>
  );
};

export default LatestPosts;
