/* eslint-disable react-hooks/rules-of-hooks */
import { fetchCategories, fetchData } from "../api/getData";
import Container from "@/components/Elements/Container";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CategoriesPosts from "@/components/Sections/CategoriesPosts";
import Head from "next/head";

const categories = ({ data, categories }) => {
  const [allCategories, setAllCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const all_categories = categories.map((category) => {
      if (category !== "all") {
        const categoryPosts = data.filter((post) => post.category === category);
        return (
          <CategoriesPosts
            key={category}
            title={category}
            length={categoryPosts.length}
            data={categoryPosts}
            pathname={router.asPath}
          />
        );
      }
    });

    setAllCategories(all_categories);
  }, [categories, data, router.asPath]);

  return (
    <>
      <Head>
        <title>The Programmer's Palette | Categories</title>
      </Head>
      <div className="dark:bg-slate-800 dark:text-white transition">
        <Container className={"py-10"}>{allCategories}</Container>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await fetchData();
  const categories = await fetchCategories();

  return {
    props: {
      data,
      categories,
    },
  };
};

export default categories;
