import { Search } from "lucide-react";
import React from "react";

function SearchSection({onSearchInput}:any) {
  
  return (
    <div className="p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col gap-2 justify-center items-center">
      <h2 className="text-3xl font-bold text-white">Browse All Templates</h2>
      <p className="text-white">What would you like to create today?</p>
      <div className="flex justify-center w-full">
        <div className="flex gap-2 items-center border p-2 my-3 bg-white rounded-md w-[50%] ">
          <Search className="text-violet-600" />
          <input type="text" placeholder="Search" className="bg-transparent outline-none text-black" onChange={(event)=>onSearchInput(event.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
