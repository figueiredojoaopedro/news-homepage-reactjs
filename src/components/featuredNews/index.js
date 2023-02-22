import "./style/style.css";
import mainImage from "../../images/image-web-3-desktop.jpg";

const FeaturedNews = () => {
    return(
        <div>
            <div className="main-image">
                <img style={{width: "100%"}} src={mainImage} alt=""/>
            </div>
            <div className="main-container">
                <div className="news-title">
                    <h1>The Bright Future of Web 3.0</h1>
                </div>
                <div className="paragraph-container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="read-more-btn">READ MORE</button>
                </div>
            </div>
        </div>
    );
}

export default FeaturedNews;