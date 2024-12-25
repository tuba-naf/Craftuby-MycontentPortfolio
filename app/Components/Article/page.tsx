"use client";

import React, { useState } from "react";
import ArticleCard from "../ArticleCard/page"; 
import ArticleContent from "../ArticleContent/page"; 

const ARTICLES = [
  {
    id: 1,
    title: "Then Vs Now: Generation Z Concerns",
    excerpt: "Explore how Generation Z faces unique challenges in today's world.",
    content: `
      On February 5, 2023, I woke up to the news of "Musharraf - from one man army to the forgotten
politician is no more".
...
    `,
    image: "/image/musharraf.png",
  },
  {
    id: 2,
    title: "The ‘P’ in patriarchy stands for poor education ",
    excerpt: "Pakistani woman is born free but is everywhere in chains designed by men due to a poorly educated patriarchal mindset",
    content: `
      https://tribune.com.pk/article/97705/the-p-in-patriarchy-stands-for-poor-education.
    `,
    image: "/image/patriarchy.jpg",
  },
  {
    id: 3,
    title: "Cultural Cataclysm Among Pakistani Youth",
    excerpt: "Explore how Generation Z faces unique challenges in today's world.",
    content: `
      The edifying cultural values distinguish a civilized individual from a barbaric one. Any civilian
instilled with the values of ethics and morality will shout out loud to the Vulgarity that is struggling to
strengthen its roots in our local culture.
...
    `,
    image: "/image/youth1.jpg",
  },
];

const Article: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const handleReadMore = (article: any) => {
    setSelectedArticle(article);
  };

  const handleBack = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle) {
    return (
      <ArticleContent
        title={selectedArticle.title}
        content={selectedArticle.content}
        image={selectedArticle.image}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl  font-bold text-center mb-8">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            excerpt={article.excerpt}
            image={article.image}
            onReadMore={() => handleReadMore(article)}
          />
        ))}
      </div>
    </div>
  );
};

export default Article;
