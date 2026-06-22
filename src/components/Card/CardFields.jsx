import axios from "axios";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";
const CardFields = () => {
  const [bookName, setBookName] = React.useState("");
  const [isloading, setIsLoading] = React.useState(false);
  const onSubmit = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?title=${bookName}`,
        );
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);

        setIsLoading(false);
      }
    };  
    setIsLoading(true);
    fetchData();
    setBookName("");
  };
  return (
    <div>
      {isloading ? (
      <LoadingSpinner />
      ) : (
          <>
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
              className="m-2 rounded-lg bg-amber-800 p-2"
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
