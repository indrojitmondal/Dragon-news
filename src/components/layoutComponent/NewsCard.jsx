import React from 'react';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  return (
    <div className="card w-full bg-base-100 shadow-md mb-4">
      {/* Author Info */}
      <div className="flex items-center px-4 py-2">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h2 className="text-sm font-semibold">{news.author.name}</h2>
          <p className="text-xs text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
        </div>
        <div className="ml-auto flex space-x-2 text-gray-500">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* News Title */}
      <div className="px-4">
        <h2 className="text-lg font-semibold">{news.title}</h2>
      </div>

      {/* News Image */}
      <div className="px-4 py-2">
        <img src={news.image_url} alt="News Thumbnail" className="rounded-lg w-full" />
      </div>

      {/* News Details */}
      <div className="px-4 py-2 text-gray-700 text-sm">
        <p>{news.details.slice(0, 150)}... <span className="text-primary font-semibold cursor-pointer">Read More</span></p>
      </div>

      {/* Rating and Views */}
      <div className="flex items-center justify-between px-4 py-2 border-t">
        <div className="flex items-center text-yellow-500">
          <FaStar />
          <span className="ml-1 font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye />
          <span className="ml-1">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

