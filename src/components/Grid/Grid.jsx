import React from "react";
import { useData } from "../API Context/DataProvider";

const Grid = () => {
  const { searchResults } = useData();
  return (
    <div className="flex flex-col ">
      <div className="h-1 w-full bg-blue-500"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center p-4 ">
        {searchResults.map((result) => (
          <div
            key={result.key}
            className="size-90 sm:size-50 md:size-100 bg-amber-300 rounded-lg flex flex-col flex-wrap p-2 pl-6 pt-10 sm:pl-10 md:pl-8  gap-4 bg-cover bg-no-repeat bg-center "
            style={{
              backgroundImage: `url(${
                result.cover_i
                  ? `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`
                  : "src/assets/images/BookBackground.png"
              })`,
            }}
          >
            {/* <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-white">
                Title : {result.title || "No Title"}
              </h1>
              <h1 className="font-semibold text-white mt-1">
                Author Name : {result.author_name?.[0] || "Unknown Author"}
              </h1>
              <h1 className="font-semibold text-white mt-1">
                Publish Year: {result.first_publish_year || "N/A"}
              </h1>

            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
