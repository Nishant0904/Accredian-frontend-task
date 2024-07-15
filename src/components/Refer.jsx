import { Link } from "react-router-dom";
const Refer = ({ handleclick }) => {
  return (
    <>
      <div className="refer-main flex justify-center align-middle">
        <div className="refer-text flex-col justify-center align-middle">
          <div className="heading">Let's Learn & Earn</div>
          <div className="refer-two flex-col justify-center align-middle">
            <p className="chance">Get a chance to win up-to</p>
            <p className="rs">Rs. 15,000</p>
          </div>
          <div>
            <Link to="/Modal" className="btn btn-primary" onClick={handleclick}>
              Refer
            </Link>
          </div>
        </div>
        <div className="refer-img">
          <img
            className="refer-img"
            src="./referimg.png"
            alt="img not found"
            style={{ height: 350, width: 393 }}
          />
        </div>
      </div>
    </>
  );
};
export default Refer;
