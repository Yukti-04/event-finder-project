import React, { useState, useEffect } from "react";
import './SearchBar.css'
import axios from 'axios'
const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="Search">
      <h3>Search Filter</h3>
      <input type="text"  className="SearchBar" placeholder="Search..." onChange={(e) => setSearchTitle(e.target.value)}/>
      <div className="SearchElement">
        <h4>Search List</h4>
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
              
            ) {
              return value;
            }
          })
          .map((item) => <h6 key={item.id}>{item.title}</h6>)
      )}
      </div>
    </div>  
  );
}
export default SearchBar;
