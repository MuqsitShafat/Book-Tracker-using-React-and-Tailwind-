
import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useData } from "../API Context/DataProvider";
const CardFields = () => {
    const { bookName, setBookName, isloading, fetchBooks } = useData();

  const onSubmit = () => {
    fetchBooks(bookName);
    setBookName("");
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6">
      {isloading ? (
      <LoadingSpinner />
      ) : (
          <>
          <img  className="size-70" src="src/assets/images/Book.png"/>
          <h1 className="m-2 italic font-bold text-zinc-900">
            Enter Your Favourite Book Name
          </h1>

          <div className="flex items-center justify-center p-2">
            <input
              className="h-10 w-full rounded-lg border-2 flex p-2 cursor-pointer"
              type="text"
              placeholder="Enter text..."
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
            <button
              onClick={onSubmit}
              className="m-2 rounded-lg bg-amber-800 p-2 cursor-pointer active:scale-95"
            >
              Search
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardFields;
