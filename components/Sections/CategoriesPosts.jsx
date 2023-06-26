import PostsSlider from "../Elements/PostsSlider";
import Link from "next/link";

const CategoriesPosts = ({ data, title, length, pathname }) => {
  return (
    <div className="w-full py-5">
      <div className="flex w-fit gap-10">
        <h2 className="capitalize">{`${title}${
          length ? ` (${length})` : ""
        }`}</h2>
        <button
          className={`bg-sky-500 text-white dark:bg-green-500 dark:text-black dark:hover:bg-green-600 hover:bg-sky-600 dark:hover:text-white relative transition text-lg rounded-sm py-2 px-4 cursor-pointer`}
        >
          <Link href={`/categories/${title}`}>See all</Link>
        </button>
      </div>

      <div className="flex justify-between gap-7 mt-5">
        <PostsSlider
          data={data.length > 3 ? data.slice(0, 3) : data}
          pathname={pathname}
        ></PostsSlider>
      </div>
    </div>
  );
};

export default CategoriesPosts;
