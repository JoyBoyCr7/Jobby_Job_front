import './App.css';
import { Outlet } from 'react-router-dom';
import StarRating from './components/Stars';
function App() {
  return (
    <div className="App" >
      {/* <StarRating/> */}
      <Outlet/>
    </div>
  );
}

export default App;
