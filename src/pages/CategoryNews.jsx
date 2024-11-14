import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const {data} = useLoaderData();
    console.log(data);
    return (
        <div>
            {data.length} Found in this Category
        </div>
    );
};

export default CategoryNews;