import { useState } from "react";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { data } from "./utils/data";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <>
      <div className="container my-3">
        <h3>Product List</h3>
        <div className="my-3 row">
          <div className="col-md-4">
            <input
              className="form-control border-2"
              placeholder="Search Product by Name"
              type="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-4 mt-3 mt-md-0 ms-auto">
            <select
              className="form-select border-2"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All Products</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
        </div>
        <div className="row">
          {data
            ?.filter((item) => {
              if (filter === "") {
                return data;
              } else {
                return item.category
                  .toLowerCase()
                  .includes(filter.toLowerCase());
              }
            })
            ?.filter((data) =>
              data.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <div
                className="mt-3 col-12 col-sm-6 col-md-4 col-lg-3"
                key={item.name}
              >
                <ProductCard item={item} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
