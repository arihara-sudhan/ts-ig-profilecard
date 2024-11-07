import React, { Component } from "react";
import "./App.css";

interface IgCardProps {
  imgUrl?: string;
  userName: string;
  postsCount: number;
  followingCount: number;
  bio: string;
}

interface IgCardState {
  followersCount: number;
  followText: FollowStatus;
}

enum FollowStatus {
  FOLLOW = "Follow",
  FOLLOWING = "Following"
}

class IgCard extends Component<IgCardProps, IgCardState> {
  static defaultProps = {
    imgUrl: "./fback.png"
  };

  constructor(props: IgCardProps) {
    super(props);
    this.state = {
      followersCount: 777,
      followText: FollowStatus.FOLLOW
    };
  }

  componentDidUpdate(prevProps: IgCardProps, prevState: IgCardState) {
    if (prevState.followText !== this.state.followText) {
      this.setState((prevState) => ({
        followersCount:
          this.state.followText === FollowStatus.FOLLOW
            ? prevState.followersCount - 1
            : prevState.followersCount + 1
      }));
    }
  }

  followUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState((prevState) => ({
      followText:
        prevState.followText === FollowStatus.FOLLOW
          ? FollowStatus.FOLLOWING
          : FollowStatus.FOLLOW
    }));
  };

  render() {
    const { userName, postsCount, followingCount, bio, imgUrl } = this.props;
    const { followersCount, followText } = this.state;

    return (
      <div className="card">
        <img src={imgUrl} alt="User" />
        <div>
          <div className="name-button">
            <h3>{userName}</h3>
            <button onClick={this.followUser}>{followText}</button>
          </div>
          <div className="posts-meta">
            <h4>{postsCount} Posts</h4>
            <h4>{followersCount} Followers</h4>
            <h4>{followingCount} Following</h4>
          </div>
          <span>{bio}</span>
        </div>
      </div>
    );
  }
}

export default IgCard;
