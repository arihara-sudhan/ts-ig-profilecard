import RightBar from "./components/RightBar";
import "./style.css";

const App : React.FC = () => {
  return <div className="parentFlex">
          <img src="assets/profile-img.jpg" alt="ProfileImage"/>
          <RightBar/>
        </div>
}

export default App;