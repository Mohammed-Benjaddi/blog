/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { fetchCategories, fetchCategoryPosts } from "../api/getData";
import Post from "@/components/Elements/Post";
import Container from "@/components/Elements/Container";
import Head from "next/head";

const category = ({ data, category }) => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const allPosts = data.map((post) => {
      return (
        <Post
          id={post.id}
          key={post.id}
          title={post.title}
          body={post.body}
          createdAt={post.createdAt}
          category={post.category}
          src={post.image}
        />
      );
    });
    setPosts(allPosts);
  }, [data]);

  return (
    <>
      <Head>
        <title>{`${category} Posts`}</title>
      </Head>
      <main className="dark:bg-slate-800 dark:text-white transition min-h-[90vh]">
        <Container className={"py-16"}>
          <h2 className="capitalize"> All {category} Posts</h2>
          <div className="grid max-[600px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 mt-7">
            {posts}
          </div>
        </Container>
      </main>
    </>
  );
};

export const getStaticProps = async (context) => {
  const { category } = context.params;
  const data = await fetchCategoryPosts(category);
  return {
    props: {
      data,
      category,
    },
  };
};

export const getStaticPaths = async () => {
  const categories = await fetchCategories();
  const paths = categories.map((category) => {
    return {
      params: {
        category,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default category;
