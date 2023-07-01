/* eslint-disable react-hooks/rules-of-hooks */
import Container from "../../components/Elements/Container";
import { fetchData } from "../api/getData";
import Post from "../../components/Elements/Post";
import Head from "next/head";

const posts = ({ data }) => {
  const posts = data.map((post) => {
    return (
      <Post
        id={post.id}
        key={post.id}
        title={post.title}
        body={post.body}
        createdAt={post.createdAt}
        category={post.category}
        src={post.image}
        width={"col-span-1"}
      />
    );
  });

  return (
    <>
      <Head>
        <title>The Programmer's Palette | Posts</title>
      </Head>
      <main className="dark:bg-slate-800 dark:text-white transition">
        <Container
          className={
            "grid max-[600px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 py-16"
          }
        >
          {posts}
        </Container>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
}

export default posts;
