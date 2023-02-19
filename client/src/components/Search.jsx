import React, { useState } from "react";
// import ho from "../.././dist/assets/housi.png"
const Search = (props) => {
  const [query, setQuery] = useState("");
  return (
    <div>
          
    <div className="bar">
      <input className="searchbar" type="text" title="Search" />
      <a href="http://localhost:3000/"> <img className="voice" src="https://res.cloudinary.com/dsaso2a8g/image/upload/v1676575174/logos_mt94zx.jpg" /></a>
    </div>
   
    </div>
 
  );
};

export default Search;