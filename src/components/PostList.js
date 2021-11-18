import React, { useState, useEffect } from "react";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";
import "../components/postList.css";
import data_arr from "../data/db";

function PostList() {
  const [pageIndex, setPageIndex] = useState(0);

  const [postdata, setPostData] = useState([]);

  const pageindexHandler = (e) => {
    //console.log(e.target.innerText);
    setPageIndex(Number(e.target.innerText) - 1);
  };

  useEffect(async () => {
    await fetch(data_arr[pageIndex])
      .then((response) => response.json())
      .then((data) => setPostData(data.posts));
    window.scrollTo(0, 0);
  }, [pageIndex]);

  console.log(postdata);
  return (
    <div className="post_List">
      {postdata.map((post) => (
        <Post key={uuidv4()} post={post} />
      ))}

      <div className="pages">
        {data_arr.map((post, indx) => {
          return (
            <div className="pageNo" key={uuidv4()} onClick={pageindexHandler}>
              {indx + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostList;
