import "./App.css";
import "./components/content"
import Contentsec from "./components/content";
const App=()=>{
  return (
  <div className="container">
    <nav>
    <div className="logo">
    <img src="/images/brand_log.png" alt="logo" />
  </div>
  <ul>
    <li href="#">Menu</li>
    <li href="#">Location</li>
    <li href="#">About</li>
    <li href="#">Contact</li>
  </ul>
<button>
Login
</button>
</nav>
<Contentsec/>
</div>
);
}
export default App;