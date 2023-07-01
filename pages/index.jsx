import Head from "next/head";
import Hero from "../components/Sections/Hero";
import LatestPosts from "../components/Sections/LatestPosts";
import Container from "../components/Elements/Container";
import Categories from "../components/Sections/Categories";
import { fetchCategories, fetchData } from "./api/getData";

export default function Home({ data, categories }) {
  return (
    <>
      <Head>
        <title>The Programmer's Palette | Home</title>
        <meta
          property="og:title"
          content="The Programmer's Palette"
          key="title"
        />
        <meta
          name="description"
          content="here you can find anything about programming, web devlopment, mobile development, ai and more subjects"
        ></meta>
      </Head>
      <main className="dark:bg-slate-800 dark:text-white transition">
        <Hero />
        <Container className={"pt-10"}>
          <Categories data={categories} />

          <LatestPosts data={data} />
        </Container>
      </main>
    </>
  );
}

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
