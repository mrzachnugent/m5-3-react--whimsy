import React, { useContext } from "react";
import styled from "styled-components";

import Tweet from "./Tweet";

import { TweetContext } from "./TweetContext";

const App = () => {
  const {
    tweetContents,
    displayName,
    username,
    avatarSrc,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
    date,
    numOfRetweets,
    numOfLikes,
    handleToggleLike,
    handleToggleRetweet,
  } = useContext(TweetContext);
  return (
    <Wrapper>
      <Tweet
        tweetContents={tweetContents}
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
        date={date}
        numOfLikes={numOfLikes}
        numOfRetweets={numOfRetweets}
        handleToggleLike={handleToggleLike}
        handleIsRetweeted={handleToggleRetweet}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
