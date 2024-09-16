import React, { useState } from "react";
import MenuIcon from "../components/btn/MenuIcon";
import MenuCloseIcon from "../components/btn/MenuCloseIcon";

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectCategory, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Cutie Cat 1",
      price: 500,
      image: "/img/cat1.jpg?height=200&width=20",
      category: "Toy",
    },
    {
      id: 2,
      name: "Cutie Cat 2",
      price: 500,
      image: "/img/cat.jpg?height=200&width=20",
      category: "Home",
    },
    {
      id: 3,
      name: "Sexy Toy",
      price: 500,
      image: "/img/icon.jpg?height=200&width=20",
      category: "Toy",
    },
    {
      id: 4,
      name: "Cutie Cat 2",
      price: 500,
      image: "/img/cat.jpg?height=200&width=20",
      category: "Toy",
    },
    {
      id: 5,
      name: "Cutie Cat 1",
      price: 500,
      image: "/img/cat1.jpg?height=200&width=20",
      category: "Toy",
    },
    {
      id: 6,
      name: "Cutie Cat 1",
      price: 500,
      image: "/img/cat1.jpg?height=200&width=20",
      category: "Accessories",
    },
    {
      id: 7,
      name: "Cutie Cat 1",
      price: 500,
      image: "/img/cat1.jpg?height=200&width=20",
      category: "Stationary",
    },
    {
      id: 8,
      name: "Cutie Cat 2",
      price: 500,
      image: "/img/cat.jpg?height=200&width=20",
      category: "Home",
    },
  ];

  const category = ["All", "Toy", "Stationary", "Accessories", "Home"];
  const filterProducts = products.filter((product) => {
    return (
      (selectCategory === "All" || product.category === selectCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  console.log(filterProducts);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white text-black">
        <header className="sticky top-0 bg-white border-b border z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-4xl font-bold text-black">RosShop</h1>
              <div className="hidden md:flex items-center space-x-4">
                <button className="text-black hover:text-gray-800">
                  Login
                </button>
                <button className="bg-black text-white hover:bg-gray-900 py-2 px-4 rounded">
                  Register
                </button>
                <button>
                  <svg
                    className="w-6 h-6 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    className="w-6 h-6 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </button>
              </div>
              <button
                className="md:hidden text-black hover:text-gray-600"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <MenuCloseIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <nav className="hidden md:flex space-x-6 mb-4 md:mb-0">
                <a
                  className="text-black hover:text-gray-600 transition-colors"
                  href=""
                >
                  Home
                </a>
                <a
                  className="text-black hover:text-gray-600 transition-colors"
                  href=""
                >
                  Shop
                </a>
                <a
                  className="text-black hover:text-gray-600 transition-colors"
                  href=""
                >
                  About
                </a>
                <a
                  className="text-black hover:text-gray-600 transition-colors"
                  href=""
                >
                  Contact
                </a>
              </nav>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
                <input
                  className="pl-10 pr-4 py-2 w-full md:w-64 border outline-none rounded"
                  placeholder="Search item here..."
                  type="search"
                  name=""
                  id=""
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          {mobileOpen && (
            <div className="flex flex-col md:hidden">
              <a href="">Home</a>
              <a href="">Shop</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <button>Login</button>
              <button>Register</button>
            </div>
          )}
        </header>
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Categories</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {category.map((category) => (
                <button
                  key={category}
                  className={
                    selectCategory === category
                      ? "bg-black border text-white py-2 px-4 rounded"
                      : "border-black border text-black hover:bg-gray-100 py-2 px-4 rounded"
                  }
                  onClick={() => setCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden border border-gray-200 transition-all rounded shadow-lg hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <div>{product.category}</div>
                  <p className="text-black">${product.price.toFixed(2)}</p>
                  <button className="w-full py-2 mt-4 bg-black text-white rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="bg-white border-t border-gray-200 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col items-center">
              <div className="text-center mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-black">RosShop</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Bringing cuteness to your life!
                </p>
              </div>
              <div className="mt-2 text-center text-sm text-gray-500">
                &copy; 2023 RosShop. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Dashboard;
