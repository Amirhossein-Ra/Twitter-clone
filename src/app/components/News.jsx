import React from "react";

export default function News({ article }) {
  return (
    <a href={article.url} target="_blank">
      <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
        <div className="space-y-0.5 ">
          <h6 className="text-sm font-bold">{article.title}</h6>
          <p className="text-xs font-medium text-gray-500">
            {article.source.name}
          </p>
        </div>
        <img
          className="rounded-xl
        "
          src={article.urlToImage}
          alt=""
          width="70"
          height="70"
        />
      </div>
    </a>
  );
}
