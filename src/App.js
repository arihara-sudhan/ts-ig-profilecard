import { useState, useEffect } from "react";
import "./App.css";

interface IgCardProps {
  imgUrl?: string,
  userName: string,
  postsCount: number,
  followingCount: number,
  bio: string
}

const IgCard: React.FC<IgCardProps> = (props) => {
  const {
    userName,
    postsCount,
    followingCount,
    bio,
    imgUrl = "./fback.png"
  } = props;
  const [followersCount, setFollowersCount] = useState<number>(777);
  const [followText, setFollowText] = useState<"Follow" | "Following">("Follow");

  useEffect(()=>{
    followText === "Follow" ? setFollowersCount(followersCount-1) : setFollowersCount(followersCount+1);
  }, [followText])

  const followUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    followText === "Follow" ? setFollowText("Following") : setFollowText("Follow");
  }

  return <div className="card">
            <img src={imgUrl} alt="Image"/>
            <div>
              <div className="name-button">
                <h3>{userName}</h3>
                <button onClick={followUser}>{followText}</button>
              </div>
              <div className="posts-meta">
                <h4>{postsCount} Posts</h4>
                <h4>{followersCount} Followers</h4>
                <h4>{followingCount} Following</h4>
              </div>
              <span>{bio}</span>
            </div>
         </div>
}



export default IgCard;
