import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/layoutComponent/NewsCard';

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    console.log(news);
    return (
        <div>
            <p className='text-gray-400 text-sm'>{news.length} News Found in this Category</p>
            <div>
                {
                    news.map( singleNews => <NewsCard key={singleNews._id} news={singleNews} >{singleNews.title}</NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;