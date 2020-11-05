import React, { createContext, useState } from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const [tweetContents, setTweetContents] = useState(
    "Where in the world am I?"
  );
  const [displayName, setDisplayName] = useState("Carmen Sandiego ✨");
  const [username, setUsername] = useState("carmen-sandiego");
  const [avatarSrc, setAvatarSrc] = useState(avatar);
  const [isRetweetedByCurrentUser, setIsRetweetedByCurrentUser] = useState(
    isRetweeted
  );
  const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(isLiked);

  const date = moment(new Date()).format("LT - LL");

  const handleToggleLike = (e) => {
    e.preventDefault();
    if (isLiked) {
      setIsLiked(false);
      setIsLikedByCurrentUser(!isLiked);
      setNumOfLikes(numOfLikes - 1);
    } else {
      setIsLiked(true);
      setNumOfLikes(numOfLikes + 1);
      setIsLikedByCurrentUser(!isLiked);
    }
  };
  const handleToggleRetweet = () => {
    if (isRetweeted) {
      setIsRetweeted(false);
      setIsRetweetedByCurrentUser(!isRetweeted);
      setNumOfRetweets(numOfRetweets - 1);
    } else {
      setIsRetweeted(true);
      setNumOfRetweets(numOfRetweets + 1);
      setIsRetweetedByCurrentUser(!isRetweeted);
    }
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        setTweetContents,
        displayName,
        setDisplayName,
        username,
        setUsername,
        avatarSrc,
        setAvatarSrc,
        isRetweetedByCurrentUser,
        setIsRetweetedByCurrentUser,
        isLikedByCurrentUser,
        setIsLikedByCurrentUser,
        date,
        numOfLikes,
        numOfRetweets,
        handleToggleLike,
        handleToggleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
