import React, { useContext } from "react";
import "../components/post.css";
import view from "../assets/view.svg";
import like from "../assets/like.png";
import share from "../assets/share.png";
import postContext from "../context";

const Post = (props) => {
  const { postViewData, setpostViewdata } = useContext(postContext);
  const { thumbnail_image, event_name, event_date, likes, shares, views } =
    props.post;
  const createDate = () => {
    let vardate = new Date(event_date);
    let eventdate = vardate.toString().split(" ").splice(0, 5).join(" ");
    return eventdate;
  };
  //console.log(props.post.event_name);
  return (
    <a href="#postview">
      <div className="post" onClick={() => setpostViewdata(props.post)}>
        <div className="image">
          <img
            className="thumbnail"
            src={thumbnail_image}
            alt={event_name}
          ></img>
        </div>
        <div className="information">
          <div className="basic_information">
            <h3 className="eventname">Event Name{":  " + event_name}</h3>
            <h3 className="eventname">Event Date{":  " + createDate()}</h3>
          </div>
          <div className="social_information">
            <div className="views">
              <img className="view icons" src={view} alt={event_name}></img>
              <h5 className="viewcount">{views}</h5>
            </div>
            <div className="likes">
              <img className="like icons" src={like}></img>
              <h5 className="likecount">{likes}</h5>
            </div>
            <div className="shares">
              <img className="share icons" src={share}></img>
              <h5 className="sharecount">{shares}</h5>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Post;
