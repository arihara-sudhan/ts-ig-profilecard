type FollowersProp = {
    followCount: number
}

const Followers : React.FC<FollowersProp> = (props) => {
    return <div>
            <h1>48 Posts</h1>
            <h1>815 Followers</h1>
            <h1>{props.followCount} Following</h1>        
           </div>
}

export default Followers;

