import NavigationBar from '../../components/navbar/index';
import FeaturedNews from '../../components/featuredNews/index';
import FeaturedNewsList from '../../components/newsList/index';
import TopNewsList from '../../components/topNewsList/index';
import "./style.css"

const Main = () => {
    return(
        <div>
            <NavigationBar></NavigationBar>
            <div className='main-section'>
                <FeaturedNews></FeaturedNews>
                <FeaturedNewsList></FeaturedNewsList>
            </div> 
            <TopNewsList></TopNewsList>
        </div>
    );
}

export default Main;