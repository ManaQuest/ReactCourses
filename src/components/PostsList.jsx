import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [posts2, setPosts2] = useState(null);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setPosts(res.data);
      setPosts2(res.data);
    });
  }, []);
  const deletePost = (id) => {
    const confirm = window.confirm("Реально что-ли удалить?");
    if (confirm) setPosts(posts.filter((posts) => posts.id !== id));
  };
  const onChange = (e) => {
    if(e.target.value!=="")
    {
      setPosts2(...posts);
      setPosts2(
        posts.filter((item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      
    }
      if(e.target.value==="")
      setPosts2(posts);
  };
  return (
    <div>
      <form className="col s12">
        <div className="input-field col s12">
          <i className="material-icons prefix">search</i>
          <textarea
            id="icon_prefix2"
            className="materialize-textarea"
            placeholder="Search"
            onChange={onChange}
          ></textarea>
        </div>
      </form>
      {posts2 &&
        posts2.map((item, key) => (
          <div className="row" key={key} onClick={() => deletePost(item.id)}>
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{item.title}</span>
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Posts;
