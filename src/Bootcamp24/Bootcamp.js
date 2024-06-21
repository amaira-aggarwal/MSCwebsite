import { Link } from "react-router-dom";
import "./Bootcamp.css";
import Teamleft from "./assets/Teamleft";
import Teamright from "./assets/Teamright";
import Bootintro from "./assets/Bootintro";

function Bootcamp24() {
  return (
    <>
      <div className="boot">
        <Bootintro />
      </div>

      <div className="domainsection">
        <h3>DOMAINS</h3>
        <div className="left">
          <Link to="/bootcamp24/webd">
            <Teamleft name="Web Development" />{" "}
          </Link>
          <Link to="/bootcamp24/appd">
            <Teamleft name="App Development" />
          </Link>
          <Link to="/bootcamp24/arvr">
            <Teamleft name="AR / VR" />
          </Link>
        </div>
        <div className="right">
          <Link to="/bootcamp24/aiml">
            <Teamright name="AI / ML" />
          </Link>
          <Link to="/bootcamp24/cyber">
            <Teamright name="Cyber Security" />
          </Link>
          <Link to="/bootcamp24/web3">
            <Teamright name="Web3" />
          </Link>
        </div>{" "}
        <div className="bottom">
          <Link to="/bootcamp24/prodmgmt">
            <Teamleft name="Product Management" />{" "}
          </Link>
          <Link to="/bootcamp24/dataanal">
            <Teamleft name="Data Analytics" />
          </Link>
        </div>
      </div>
    </>
  );
}
export default Bootcamp24;
