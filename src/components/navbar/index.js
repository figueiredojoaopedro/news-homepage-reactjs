import "./style/navbar.css";


const NavigationBar = () => {
    return (
        <nav className="nav-container">
            <span className="logo">W.</span>
            <div className="menu-list-container">
                <ul className="menu-list">
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>
        </nav>
    );

}

export default NavigationBar;