
import React from 'react';
const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  const BarStyling = {width:"14rem", maxWidth: "250px", background:"#F2F1F9", border:"none", padding:"0.7rem"};
  return (
    <input 
     style={BarStyling}
     className="search"
     key="random1"
     value={keyword}
     placeholder={"search communities"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar