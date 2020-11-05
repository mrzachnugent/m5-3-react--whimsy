import React, { useContext } from "react";

import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import { Stat } from "./Stat";

const Tweet = ({
  displayName,
  username,
  avatarSrc,
  tweetContents,
  isRetweetedByCurrentUser,
  isLikedByCurrentUser,
  date,
  numOfRetweets,
  numOfLikes,
  handleToggleLike,
  handleIsRetweeted,
}) => {
  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
      />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Divider />
      <Stats>
        <Stat num={numOfRetweets} action="Retweet" />
        <Stat num={numOfLikes} action="Likes" />
      </Stats>

      <Divider />
      <ActionBar
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
        handleIsLiked={handleToggleLike}
        handleIsRetweeted={handleIsRetweeted}
      />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

export default Tweet;
