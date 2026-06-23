import React from "react";
import axios from "axios";

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [bookName, setBookName] = React.useState("");
  const [isloading, setIsLoading] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);

  const fetchBooks = async (query) => {
    if (!query.trim()) return;
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${query}`,
      );
      console.log(response.data);
      setSearchResults(response.data.docs || []);
    } catch (error) {
      console.log(error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <DataContext.Provider
      value={{
        bookName,
        setBookName,
        isloading,
        fetchBooks,
        searchResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);
