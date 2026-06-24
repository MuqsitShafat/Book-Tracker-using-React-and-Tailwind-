import React from "react";
import { useData } from "../API Context/DataProvider";

const Grid = () => {
  const { searchResults } = useData();
  const [flippedCards, setFlippedCards] = React.useState({});

  const toggleFlip = (key, e) => {
    e.stopPropagation(); 
    setFlippedCards((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex flex-col ">
      <div className="h-1 w-full bg-blue-500"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center p-4 ">
        {searchResults.map((result) => {
          const currentCardIsFlipped = !!flippedCards[result.key];

          return (
            <div
              key={result.key}
              className="size-90 sm:size-50 md:size-100 bg-amber-300 rounded-lg flex flex-col items-center justify-center p-4 gap-4 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${
                  currentCardIsFlipped
                    ? "src/assets/images/BookBackground.png" 
                    : result.cover_i
                    ? `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`
                    : "src/assets/images/BookBackground.png"
                })`,
              }}
            >
              {/* Added h-full w-full flex flex-col to keep inner structure layout clean */}
              <div className="w-full h-full flex flex-col justify-between p-2">
                {!currentCardIsFlipped ? (
                  <div className="flex items-center justify-center h-full w-full">
                    <button 
                      onClick={(e) => toggleFlip(result.key, e)} 
                      className="bg-black text-white cursor-pointer active:bg-slate-800 active:scale-95 transition p-2 rounded-lg"
                    >
                      Check Info
                    </button>
                  </div>
                ) : (
                  // Changed from relative to a vertical flex container
                  <div className="flex flex-col h-full justify-start gap-4">
                    {/* Flexbox pushes this button cleanly to the top-left */}
                    <button 
                      onClick={(e) => toggleFlip(result.key, e)} 
                      className="self-start ml-4 bg-amber-300 p-2 rounded-md cursor-pointer active:scale-95 transition text-black font-medium text-xs"
                    >
                      Return back
                    </button>
                    
                    {/* Main Text Details Area */}
                    <div className="flex flex-col gap-2 mt-10 pl-12">
                      <h1 className="font-semibold text-black">
                        Title : {result.title || "No Title"}
                      </h1>
                      <h1 className="font-semibold text-black mt-1">
                        Author Name : {result.author_name?.[0] || "Unknown Author"}
                      </h1>
                      <h1 className="font-semibold text-black mt-1">
                        Publish Year: {result.first_publish_year || "N/A"}
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ); 
        })}
      </div>
    </div>
  );
};

export default Grid;