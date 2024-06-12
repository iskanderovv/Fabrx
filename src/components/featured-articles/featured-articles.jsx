import './featured-articles.css';
import FeaturedArticlesItem from '../featured-articles-item/featured-articles-item';

const FeaturedArticles = ({data}) => {
    return (
        <div className="container">
            <div className="articles">
                <h2 className='articles__title'>Featured Articles</h2>
                <div className="articles__cards">
                    {data.map(item => (
                        <FeaturedArticlesItem cardTitle={item.title} cardImage={item.img} cardAvatar={item.avatar} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedArticles;