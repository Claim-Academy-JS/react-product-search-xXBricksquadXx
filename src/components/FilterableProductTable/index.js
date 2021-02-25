import Table from "./ProductTable";
import Search from "./SearchBar";

const FilterableProductTable = () => {
  function handleKeyUp({ target: { value } }) {
    console.log(value);
  }
  function handleChange({ target: { checked } }) {
    console.log(checked);
  }

  return (
    <main className="container mx-auto w-1/2 flex flex-col items-center mt-8">
      <Search searchHandler={handleKeyUp} inStockHandler={handleChange} />
      <Table />
    </main>
  );
};

export default FilterableProductTable;
