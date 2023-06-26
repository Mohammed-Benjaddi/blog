import CategoriesSlider from "../Elements/CategoriesSlider";

const Categories = ({ data }) => {
  return (
    <div className="w-full">
      <h2>Categories</h2>
      <div className="">
        <CategoriesSlider data={data} />
      </div>
    </div>
  );
};

export default Categories;
