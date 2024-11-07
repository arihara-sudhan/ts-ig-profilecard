import React, { Component } from "react";
import "./App.css";

class IgCard extends Component {
  static defaultProps = {
    imgUrl: "./fback.png"
  };

  constructor(props) {
    super(props);
    this.state = {
      followersCount: 777,
      followText: "Follow"
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.followText !== this.state.followText) {
      this.setState((prevState) => ({
        followersCount:
          this.state.followText === "Follow"
            ? prevState.followersCount - 1
            : prevState.followersCount + 1
      }));
    }
  }

  followUser = () => {
    this.setState((prevState) => ({
      followText: prevState.followText === "Follow" ? "Following" : "Follow"
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
