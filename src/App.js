import "./App.css";
import PostList from "./components/PostList";
import postContext from "./context";
import React, { useState } from "react";
import Post from "./components/Post";

function App() {
  const [postViewData, setpostViewdata] = useState(null);

  return (
    <div className="App">
      <postContext.Provider value={{ postViewData, setpostViewdata }}>
        <PostList />
      </postContext.Provider>

      {postViewData ? (
        <div id="postview" className="post_view">
          <Post post={postViewData} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
