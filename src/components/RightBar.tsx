import { useState } from "react";
import Followers from "./Followers";
import NameButton from "./NameButton";
import BioDetail from "./BioDetail";

const RightBar : React.FC = () => {
    const [followCount, setFollowCount] = useState<number>(819);
    return <div className="rightBar">
                <NameButton name="aravind_ariharasudhan" handleFollow={(e)=>{setFollowCount(followCount+1)}}/>
                <Followers followCount={followCount}/>
                <BioDetail/>
           </div>
}

export default RightBar;