import React from "react";
import Card from "./components/Card/Card";
import Title from "./components/Title/Title";
import { DataProvider, useData } from "./components/API Context/DataProvider";
import Grid from "./components/Grid/Grid";
const AppContent = () => {
  const { searchResults } = useData();
  
  return (
    <div className='min-h-screen w-full bg-slate-800'>
      <Title />
      <Card />
      {searchResults.length > 0 && <Grid />}
    </div>
  );
};

const App = () => {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
};
export default App;
