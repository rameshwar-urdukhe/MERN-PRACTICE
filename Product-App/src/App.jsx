import {  useState } from "react";
import Card from "../Component/Card";
import Filter from "../Component/Filter";
import SearchProduct from "../Component/SearchProduct";
import Sort from "../Component/Sort"

const obj = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    category: "Electronics",
  },
  {
    id: 4,
    name: "T-Shirt",
    price: 800,
    category: "Clothing",
  },
  {
    id: 5,
    name: "Jeans",
    price: 1800,
    category: "Clothing",
  },
  {
    id: 6,
    name: "Jacket",
    price: 3500,
    category: "Clothing",
  },
  {
    id: 7,
    name: "Rice",
    price: 1200,
    category: "Grocery",
  },
  {
    id: 8,
    name: "Cooking Oil",
    price: 1500,
    category: "Grocery",
  },
  {
    id: 9,
    name: "Coffee",
    price: 450,
    category: "Grocery",
  },
  {
    id: 10,
    name: "Smart Watch",
    price: 5000,
    category: "Electronics",
  },
];

const App = () => {
  const [product, setProduct] = useState(obj);
  const [searchValue, setSearchValue] = useState("");
  // const [sortOrder, setSortOrder] = useState("");

  const handleSearchChange = () => {
   const searchProduct = obj.filter((p) =>
     p.name.toLowerCase().includes(searchValue.toLowerCase()),
   );
    setProduct(searchProduct)
  };
  
  const handelFilter = (category)=>{
    if(category === ""){
      return setProduct(obj)
    }  
    
    const searchCategory = obj.filter((p) => p.category === category);
     setProduct(searchCategory);
  }

 const handelSortOrder = (order) => {
   if (order === "Low-High") {
     setProduct([...product].sort((a, b) => a.price - b.price));
   }

   if (order === "High-Low") {
     setProduct([...product].sort((a, b) => b.price - a.price));
   }
};

  return (
    <div>
      <SearchProduct
        handleChange={handleSearchChange}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <br />
      <Filter handelFilter={handelFilter} />
      <br />
      <Sort handelSortOrder={handelSortOrder} />
      <h3>Product Info</h3>
      {product.map((p, id) => {
        return (
          <Card
            key={id}
            ProductName={p.name}
            Price={p.price}
            Category={p.category}
          />
        );
      })}
    </div>
  );
}

export default App
