import './top-articles.css';
import TopArticlesItem from '../top-articles-item/top-articles-item';

const TopArticles = ({ topArticles }) => {
    return (
        <div className="container">
            <div className="top-articles">
                <h2 className='top-articles__title'>Featured Articles</h2>
                <div className="top-articles__cards">
                    {topArticles.map(item => (
                        <TopArticlesItem topArticlesTitle={item.title} topArticlesImage={item.img} />
                    ))}
                </div>
                <button className='top-articles__button' type='button'>Load more</button>
            </div>
        </div>
    )
}

export default TopArticles;