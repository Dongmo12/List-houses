import { useEffect, useState,useMemo, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './main-page.css';
import Header from "./header"
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeatureHouse from "../hooks/useFeatureHouse";
import HousesContext from "../context/housesContext";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeatureHouse(allHouses);

 
  
  return (
     <Router>
      <HousesContext.Provider value={allHouses} >
        <div className="container">        
        <Header subtitle=" Providing houses all over the world"/>
        <HouseFilter />

        <Routes>
          <Route path="/" exact element={<FeaturedHouse house={featuredHouse}/>} />
          <Route path="/house/:id" element={<HouseFromQuery  />} />
          <Route path="/searchresults/:country" element={<SearchResults  />} />
          
        </Routes>
      </div>
      </HousesContext.Provider>
     </Router>
  );
}

export default App;
