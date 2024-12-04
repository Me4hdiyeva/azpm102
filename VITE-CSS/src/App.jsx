import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto flex">
        <div className=" hidden md:block">
          <img

            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUPPObe8bkov6CluwLDx5FNgla0wkgvJxAgPhrGxg_ZcXu36M1nBLZDnHfRyltQNjZVw4VROMhokT0D4mTrQ57g"
            alt=""
          />
        </div>
        <div>
          <form className="w-1/2 mx-auto ">
            <h1>Sign in with</h1>
            <div className="flex lex-col sm:flex-nowrap flex-wrap gap-4">
              <button           className="sm:w-1/2 w-full bg-blue-500 text-white ml-3 py-3 rounded-md font-semibold hover:bg-blue-600"
              >Facebook</button>
              <button           className="sm:w-1/2 w-full bg-blue-500 text-white ml-3 py-3 rounded-md font-semibold hover:bg-blue-600"
              >Google</button>
            </div>
            <input
              className="mt-2 p-1  w-full border rounded-md"
              placeholder="Username"
              type="text"
            />
            <input type="text" />
            <input
              className="mt-2 p-1  w-full border rounded-md"
              placeholder="Password"
              type="text"
            />
            <input type="text" />
            <button className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
