/* eslint-disable react-hooks/rules-of-hooks */
import Container from "@/components/Elements/Container";
import { fetchData, fetchSelectedPost } from "../api/getData";
import Link from "next/link";
import Head from "next/head";

const postId = ({ post }) => {
  const date = new Date(post.createdAt);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main className="dark:bg-slate-800 dark:text-white transition">
        <Container>
          <div className="py-5">
            <h1 className="text-3xl">{post.title}</h1>
            <div className="w-fit gap-10 mt-3 flex justify-between">
              <span className="px-5 h-8 bg-sky-500 text-white dark:bg-green-500 dark:text-black dark:hover:bg-green-600 hover:bg-sky-600 dark:hover:text-white flex justify-center items-center rounded-sm cursor-pointer transition">
                {date.toDateString().slice(3)}
              </span>
              <span className="px-5 h-8 bg-sky-500 text-white dark:bg-green-500 dark:text-black dark:hover:bg-green-600 hover:bg-sky-600 dark:hover:text-white flex justify-center items-center rounded-sm cursor-pointer transition">
                <Link href={"/"} className="">
                  {post.category}
                </Link>
              </span>
            </div>
            <p className="w-full md:h-4/5 lg:w-2/3 mt-5 text-lg">{post.body}</p>
          </div>
        </Container>
      </main>
    </>
  );
};

export const getStaticProps = async (context) => {
  const { postId } = context.params;
  const data = await fetchSelectedPost(postId);
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await fetchData();
  const paths = data.map((post) => {
    return {
      params: {
        postId: post.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default postId;
