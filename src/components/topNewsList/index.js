import "./style/style.css";
import img1 from "../../images/image-retro-pcs.jpg";
import img2 from "../../images/image-top-laptops.jpg";
import img3 from "../../images/image-gaming-growth.jpg";


const TopNewsList = () => {
  return (
    <div className="top-news-list-container">
        <div className="new-section">
            <div className="new-image">
                <img style={{ width: "100%" }} src={img1} alt="" />
            </div>
            <div className="new-texts">
                <h2>01</h2>
                <h3>Reviving Retro PCS</h3>
                <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
        <div className="new-section">
            <div className="new-image">
                <img style={{ width: "100%" }} src={img2} alt="" />
            </div>
            <div className="new-texts">
                <h2>02</h2>
                <h3>Top 10 Laptops 2023</h3>
                <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
        <div className="new-section">
            <div className="new-image">
                <img style={{ width: "100%" }} src={img3} alt="" />
            </div>
            <div className="new-texts">
                <h2>03</h2>
                <h3>The Growth of Games</h3>
                <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    </div>
  );
};

export default TopNewsList;
