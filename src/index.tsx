import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <center>
    <App imgUrl="/ss1.png" userName="aravind_ariharasudhan" postsCount={21} followingCount={35} bio="I am not a bad guy; I am not a good guy; I am just THE GUY!"/>
    <App imgUrl="/ss2.png" userName="ariharasudhan_ariharan" postsCount={21} followingCount={35} bio="I am not a bad guy; I am not a good guy; I am just THE GUY!"/>
    <App imgUrl="/ss7.png" userName="arvin_ariharan_arvin" postsCount={21} followingCount={35} bio="I am not a bad guy; I am not a good guy; I am just THE GUY!"/>
  </center>
);

