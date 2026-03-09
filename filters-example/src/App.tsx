import { FiltersSelector, ProductList, SearchInput } from "./components/shared";

function App() {
  return (
    <div className="App">
      <div className="max-w-5xl mx-auto px-4 mb-5">
        <div className="mt-10">
          <FiltersSelector />
        </div>
        <SearchInput />
        <div className="mt-10">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
