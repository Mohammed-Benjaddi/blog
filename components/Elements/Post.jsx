import Image from "next/image";
import Link from "next/link";

const Post = ({ id, width, body, title, category, src, createdAt }) => {
  const date = new Date(createdAt);

  return (
    <Link href={`/posts/${id}`} className={width}>
      <div className="max-[554px]:w-full min-[555px]:w-full max-h-[400px] bg-sky-300 dark:bg-green-500 dark:text-black p-2 rounded-sm cursor-pointer">
        <div className="w-full">
          <Image
            className="w-full"
            width={10}
            height={10}
            alt="image"
            src={src}
          />
        </div>

        <div className="w-full py-1 flex flex-col gap-2 justify-evenly h-1/3">
          <h3 className="text-xl font-medium">{title.slice(0, 10)}</h3>
          <p className="w-full">{body.slice(0, 25)}...</p>
          <div className="flex justify-between">
            <span className="bg-sky-200 dark:bg-green-300 px-2 py-0.5 rounded-sm">
              {date.toDateString().slice(3)}
            </span>
            <span className="bg-sky-200 dark:bg-green-300 px-2 py-0.5 rounded-sm">
              {category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
