import React, { useState } from "react";
// import ho from "../.././dist/assets/housi.png"
const Search = (props) => {
  const [query, setQuery] = useState("");
  return (
    <div>
          
    <div className="bar">
      <input className="searchbar" type="text" title="Search" />
      <a href="http://localhost:3000/"> <img className="voice" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png" title="r" /></a>
    </div>
   
    </div>
 
  );
};

export default Search;