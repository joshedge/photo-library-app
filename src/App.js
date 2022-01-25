import React from "react";
import LibraryList from "./components/LibraryList";

const App = () => {
  return (
    <div className="flex flex-col items-center font-raleway w-[100%]">
      <div className="">
        <h1 className="text-4xl font-light text-center uppercase py-6 text-emerald-900 bg-gray-100 px-12 my-4 shadow-xl">
          Random Image Search
        </h1>
      </div>
      <div className="w-[100%]">
        <LibraryList />
      </div>
    </div>
  );
};

export default App;
