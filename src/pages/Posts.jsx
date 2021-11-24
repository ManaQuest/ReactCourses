import React,{useState,useEffect,useRef} from 'react'
//import PostsList from'../components/PostsList'
import ReactPaginate from 'react-paginate';
import axios from "axios"; 

function Posts() {
  const [postLoading, setPostLoading] = useState(false); 
  const trigger = useRef(null); 
  const [posts, setPosts] = useState([]); 
  const [page, setPage] = useState(1); 
  const [totalPage, setTotalPage] = useState(10); 
  const limit = 10 
  const observer = useRef(null); 
 
  useEffect(()=>{ 
    if(postLoading) return; 
    if(page>10) return; 
    if(observer.current) observer.current.disconnect(); 
    var callback = function(entries, observer) { 
       if(entries[0].isIntersecting){ 
         console.log(page) 
         setPage(page+1) 
       } 
    }; 
    observer.current = new IntersectionObserver(callback); 
    observer.current.observe(trigger.current) 
     
  },[postLoading]) 
 
  useEffect(() => { 
    fetchPosts(); 
  }, [page]); 
 
   
  const fetchPosts = async () => { 
      setPostLoading(true); 
      const count = await axios.get("https://jsonplaceholder.typicode.com/posts") 
      setTotalPage(count.data.length/limit); 
      const fetchPosts = await axios.get("https://jsonplaceholder.typicode.com/posts",{ 
        params:{ 
          _page:page, 
          _limit:limit, 
        } 
      }); 
      setPosts([...posts,...fetchPosts.data]); 
      setPostLoading(false); 
  }; 
 
  return ( 
    <div className="container"> 
      <h2>Posts</h2> 
      {posts && 
        posts.map((post) => ( 
          <div class="container">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{post.title}</span>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))} 
      <div ref={trigger} className="card  red darken-4">I am reference</div> 
    </div> 
  ); 
}

export default Posts
