import { useState } from "react";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { data } from "./shared/data";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  console.log(filter);
  return (
    <>
      <div className="container">
        <h3>data list</h3>
        <div className="my-3 row">
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Search Product by Name"
              type="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All Products</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
        </div>
        {data
          ?.filter((item) => {
            if (filter === "") {
              return data;
            } else {
              return item.category.toLowerCase().includes(filter.toLowerCase());
            }
          })
          ?.filter((data) =>
            data.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div className="mt-3 w-25" key={item.name}>
              <ProductCard item={item} />
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
