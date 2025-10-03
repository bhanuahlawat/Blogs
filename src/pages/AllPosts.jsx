import React, { useState } from "react";
import { Link } from "react-router-dom";

// ------------------ 50 Dummy Posts ------------------
const posts = [
  {
    id: 1,
    user: "Mangalam Maloo",
    handle: "@blitzkreigm",
    text: "V2 RETAIL: Target ~50% revenue growth with 8-10% SSSg this year.",
    image: "/images/post1.jpg",
    date: "29 Sept 2025",
    likes: 120,
    comments: 10,
    retweets: 15,
    tag: "Guidance",
    category: "V2RETAIL",
  },
  {
    id: 2,
    user: "Tar ⚡",
    handle: "@itsTarH",
    text: "Near Term, Medium Term & Long Term Earning Triggers for Stallion India.",
    image: "/images/post2.jpg",
    date: "15 Aug 2025",
    likes: 444,
    comments: 52,
    retweets: 52,
    tag: "Business Update",
    category: "STALLION",
  },
  {
    id: 3,
    user: "Ajay Joshi Chemicals",
    handle: "@JoshiEien",
    text: "Among ref gas companies, watch out for Stallion India, transitioning to manufacturing.",
    image: "/images/post3.jpg",
    date: "25 Sept 2025",
    likes: 82,
    comments: 4,
    retweets: 4,
    tag: "Company Discovery",
    category: "STALLION",
  },
  {
    id: 4,
    user: "Soumeet Sarkar",
    handle: "@soumeet_sarkar",
    text: "Why EMS Stocks Are Down. Trump administration set to impose tariffs.",
    image: "/images/post4.jpg",
    date: "26 Sept 2025",
    likes: 3,
    comments: 1,
    retweets: 1,
    tag: "Business Update",
    category: "EMS",
  },
  {
    id: 5,
    user: "CNBC TV18",
    handle: "@CNBCTV18News",
    text: "BREAKING: Sensex hits 85,000 for the first time.",
    image: "/images/post5.jpg",
    date: "29 Sept 2025",
    likes: 1021,
    comments: 230,
    retweets: 440,
    tag: "Markets",
    category: "SENSEX",
  },
  {
    id: 6,
    user: "Tech Insider",
    handle: "@techinsider",
    text: "Elon Musk announces Tesla entering India, first factory in Gujarat.",
    image: "/images/post6.jpg",
    date: "27 Sept 2025",
    likes: 2200,
    comments: 312,
    retweets: 980,
    tag: "Tech Update",
    category: "TECH",
  },
  {
    id: 7,
    user: "Moneycontrol",
    handle: "@moneycontrolcom",
    text: "Stallion India files DRHP for ₹5,000 Cr IPO.",
    image: "/images/post7.jpg",
    date: "28 Sept 2025",
    likes: 522,
    comments: 90,
    retweets: 160,
    tag: "IPO Update",
    category: "STALLION",
  },
  {
    id: 8,
    user: "ET NOW",
    handle: "@ETNOWlive",
    text: "Gold prices jump 3% amid US Fed rate cut speculation.",
    image: "/images/post8.jpg",
    date: "29 Sept 2025",
    likes: 178,
    comments: 25,
    retweets: 46,
    tag: "Commodities",
    category: "SENSEX",
  },
  {
    id: 9,
    user: "StockTalk",
    handle: "@stocktalk",
    text: "Top Gainers Today: V2 Retail +12%, Adani Green +8%, IRCTC +6%",
    image: "/images/post9.jpg",
    date: "29 Sept 2025",
    likes: 392,
    comments: 43,
    retweets: 101,
    tag: "Market Buzz",
    category: "SENSEX",
  },
  {
    id: 10,
    user: "Kunal Shah",
    handle: "@kunalb11",
    text: "India is entering a golden decade of startups.",
    image: "/images/post10.jpg",
    date: "29 Sept 2025",
    likes: 680,
    comments: 120,
    retweets: 210,
    tag: "Opinion",
    category: "STARTUPS",
  },
  {
    id: 11,
    user: "Netflix",
    handle: "@netflix",
    text: "Money Heist Season 6 confirmed.",
    image: "/images/post11.jpg",
    date: "28 Sept 2025",
    likes: 3200,
    comments: 800,
    retweets: 1500,
    tag: "Entertainment",
    category: "ENTERTAINMENT",
  },
  {
    id: 12,
    user: "Marvel Studios",
    handle: "@MarvelStudios",
    text: "Avengers: Legacy trailer drops tomorrow.",
    image: "/images/post12.jpg",
    date: "26 Sept 2025",
    likes: 15000,
    comments: 5200,
    retweets: 8400,
    tag: "Movies",
    category: "ENTERTAINMENT",
  },
  {
    id: 13,
    user: "HBO Max",
    handle: "@hbomax",
    text: "Game of Thrones spinoff ‘Targaryen Rise’ premieres in 2026.",
    image: "/images/post13.jpg",
    date: "20 Sept 2025",
    likes: 6800,
    comments: 1300,
    retweets: 2900,
    tag: "Series",
    category: "ENTERTAINMENT",
  },
  {
    id: 14,
    user: "Disney",
    handle: "@disney",
    text: "Frozen 3 confirmed! Anna and Elsa return in 2026.",
    image: "/images/post14.jpg",
    date: "18 Sept 2025",
    likes: 4300,
    comments: 890,
    retweets: 1900,
    tag: "Kids",
    category: "ENTERTAINMENT",
  },
  {
    id: 15,
    user: "Apple",
    handle: "@Apple",
    text: "iPhone 17 Pro Max announced with holographic display.",
    image: "/images/post15.jpg",
    date: "25 Sept 2025",
    likes: 5000,
    comments: 1200,
    retweets: 2300,
    tag: "Tech Update",
    category: "TECH",
  },
  {
    id: 16,
    user: "Elon Musk",
    handle: "@elonmusk",
    text: "Tesla launches world’s first fully autonomous flying car.",
    image: "/images/post16.jpg",
    date: "24 Sept 2025",
    likes: 9000,
    comments: 3000,
    retweets: 4500,
    tag: "Innovation",
    category: "TECH",
  },
  {
    id: 17,
    user: "Google AI",
    handle: "@GoogleAI",
    text: "Gemini Ultra 2.0 released: reasoning like a human with faster processing.",
    image: "/images/post17.jpg",
    date: "22 Sept 2025",
    likes: 8000,
    comments: 2100,
    retweets: 3700,
    tag: "AI Update",
    category: "TECH",
  },
  {
    id: 18,
    user: "Microsoft",
    handle: "@Microsoft",
    text: "Introducing Windows 13 – built entirely on AI optimization.",
    image: "/images/post18.jpg",
    date: "21 Sept 2025",
    likes: 7200,
    comments: 1750,
    retweets: 2600,
    tag: "Software",
    category: "TECH",
  },
  {
    id: 19,
    user: "FIFA",
    handle: "@FIFAcom",
    text: "2026 World Cup venues officially revealed.",
    image: "/images/post19.jpg",
    date: "22 Sept 2025",
    likes: 3000,
    comments: 900,
    retweets: 1200,
    tag: "World Cup",
    category: "V2RETAIL",
  },
  {
    id: 20,
    user: "WWE",
    handle: "@WWE",
    text: "Roman Reigns vs The Rock confirmed for WrestleMania 42.",
    image: "/images/post20.jpg",
    date: "19 Sept 2025",
    likes: 7500,
    comments: 2200,
    retweets: 3500,
    tag: "Wrestling",
    category: "V2RETAIL",
  },
  // ------------------ 30 more posts ------------------
  // Repeat pattern with unique IDs, users, text, images, categories, tags
];

const categories = [
  "All",
  "V2RETAIL",
  "STALLION",
  "EMS",
  "SENSEX",
  "STARTUPS",
  "TECH",
  "ENTERTAINMENT",
];

const AllPosts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="pr-20 pl-20 pt-10 rounded-lg bg-gray-50 overflow-y-auto h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">All Trending Posts</h2>
        <Link
          to="/"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          ← Back to Home
        </Link>
      </div>

      <p className="text-gray-500 text-sm mb-4">Updates every 15 mins</p>

      {/* ------------------ Category Filter ------------------ */}
      <div className="flex space-x-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full border text-sm transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ------------------ Grid Layout ------------------ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            className="border rounded-lg p-4 bg-white flex flex-col justify-between hover:shadow-lg transition cursor-pointer no-underline"
          >
            {/* User */}
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {post.user}
                </p>
                <p className="text-xs text-gray-500">{post.handle}</p>
              </div>
            </div>

            {/* Content */}
            <p className="text-sm text-gray-800 whitespace-pre-line mb-2">
              {post.text}
            </p>
            {post.image && (
              <img
                src={post.image}
                alt="post"
                className="rounded-md mb-2 border w-full h-40 object-cover"
              />
            )}

            {/* Actions */}
            <div className="flex items-center space-x-4 text-gray-500 text-xs mt-auto">
              <span>💬 {post.comments}</span>
              <span>🔁 {post.retweets}</span>
              <span>❤️ {post.likes}</span>
              <span className="ml-auto">{post.date}</span>
            </div>

            {/* Footer Tags */}
            <div className="flex justify-between items-center mt-2 text-xs">
              <span className="bg-gray-100 px-2 py-1 rounded-full">
                {post.tag}
              </span>
              <span className="text-gray-500 font-medium">{post.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
