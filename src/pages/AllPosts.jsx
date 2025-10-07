import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// ------------------ Dummy Posts ------------------
const posts = [
  
  { id: 1, user: "FIFA", handle: "@FIFAcom", text: "2026 World Cup venues officially revealed.", image: "/images/post19.jpg", date: "22 Sept 2025", likes: 3000, comments: 900, retweets: 1200, tag: "World Cup", category: "SPORTS", },
  { id: 2, user: "WWE", handle: "@WWE", text: "Roman Reigns vs The Rock confirmed for WrestleMania 42.", image: "/images/post20.jpg", date: "19 Sept 2025", likes: 7500, comments: 2200, retweets: 3500, tag: "Wrestling", category: "SPORTS", },
  { id: 3, user: "Apple", handle: "@Apple", text: "iPhone 17 Pro Max announced with holographic display.", image: "/images/post15.jpg", date: "25 Sept 2025", likes: 5000, comments: 1200, retweets: 2300, tag: "Tech Update", category: "TECHNOLOGY", },
  { id: 6, user: "Tech Insider", handle: "@techinsider", text: "Elon Musk announces Tesla entering India, first factory in Gujarat.", image: "/images/post6.jpg", date: "27 Sept 2025", likes: 2200, comments: 312, retweets: 980, tag: "Tech Update", category: "TECHNOLOGY", }, 
  { id: 15, user: "Apple", handle: "@Apple", text: "iPhone 17 Pro Max announced with holographic display.", image: "/images/post15.jpg", date: "25 Sept 2025", likes: 5000, comments: 1200, retweets: 2300, tag: "Tech Update", category: "TECHNOLOGY", },
  { id: 16, user: "Elon Musk", handle: "@elonmusk", text: "Tesla launches world’s first fully autonomous flying car.", image: "/images/post16.jpg", date: "24 Sept 2025", likes: 9000, comments: 3000, retweets: 4500, tag: "Innovation", category: "TECHNOLOGY", },
  { id: 17, user: "Google AI", handle: "@GoogleAI", text: "Gemini Ultra 2.0 released: reasoning like a human with faster processing.", image: "/images/post17.jpg", date: "22 Sept 2025", likes: 8000, comments: 2100, retweets: 3700, tag: "AI Update", category: "TECHNOLOGY", },
  { id: 18, user: "Microsoft", handle: "@Microsoft", text: "Introducing Windows 13 – built entirely on AI optimization.", image: "/images/post18.jpg", date: "21 Sept 2025", likes: 7200, comments: 1750, retweets: 2600, tag: "Software", category: "TECHNOLOGY", },
  { id: 21, user: "Rolling Stone", handle: "@RollingStone", text: "Taylor Swift announces new album dropping next month.", image: "/images/post21.jpg", date: "29 Sept 2025", likes: 2000, comments: 420, retweets: 800, tag: "Pop", category: "MUSIC", },
  { id: 22, user: "Billboard", handle: "@billboard", text: "BTS to reunite for a world tour in 2026.", image: "/images/post22.jpg", date: "28 Sept 2025", likes: 6500, comments: 1500, retweets: 3100, tag: "K-Pop", category: "MUSIC", },
  { id: 23, user: "Spotify", handle: "@Spotify", text: "Drake hits 100M monthly listeners for the first time ever.", image: "/images/post23.jpg", date: "18 Sept 2025", likes: 4100, comments: 920, retweets: 2100, tag: "Streaming", category: "MUSIC", },
  { id: 24, user: "Sony Music", handle: "@SonyMusicGlobal", text: "New classical track by Yo-Yo Ma hits streaming charts.", image: "/images/post24.jpg", date: "27 Sept 2025", likes: 800, comments: 150, retweets: 250, tag: "Classical", category: "MUSIC", },
  { id: 25, user: "HipHopDX", handle: "@HipHopDX", text: "Kendrick Lamar’s surprise EP dominates the week.", image: "/images/post25.jpg", date: "26 Sept 2025", likes: 3500, comments: 700, retweets: 1400, tag: "Hip Hop", category: "MUSIC", },
  { id: 26, user: "A.R. Rahman", handle: "@arrahman", text: "Working on the score for a new Hollywood sci-fi epic.", image: "/images/post26.jpg", date: "25 Sept 2025", likes: 5100, comments: 1100, retweets: 1900, tag: "Bollywood", category: "MUSIC", },
  { id: 4, user: "Marvel Studios", handle: "@MarvelStudios", text: "Avengers: Legacy trailer drops tomorrow.", image: "/images/post12.jpg", date: "26 Sept 2025", likes: 15000, comments: 5200, retweets: 8400, tag: "Movies", category: "ENTERTAINMENT", },
  { id: 5, user: "CNBC TV18", handle: "@CNBCTV18News", text: "BREAKING: Sensex hits 85,000 for the first time.", image: "/images/post5.jpg", date: "29 Sept 2025", likes: 1021, comments: 230, retweets: 440, tag: "Markets", category: "SENSEX", },
  { id: 7, user: "Moneycontrol", handle: "@moneycontrolcom", text: "Stallion India files DRHP for ₹5,000 Cr IPO.", image: "/images/post7.jpg", date: "28 Sept 2025", likes: 522, comments: 90, retweets: 160, tag: "IPO Update", category: "STALLION", },
  { id: 8, user: "ET NOW", handle: "@ETNOWlive", text: "Gold prices jump 3% amid US Fed rate cut speculation.", image: "/images/post8.jpg", date: "29 Sept 2025", likes: 178, comments: 25, retweets: 46, tag: "Commodities", category: "SENSEX", },
  { id: 9, user: "StockTalk", handle: "@stocktalk", text: "Top Gainers Today: V2 Retail +12%, Adani Green +8%, IRCTC +6%", image: "/images/post9.jpg", date: "29 Sept 2025", likes: 392, comments: 43, retweets: 101, tag: "Market Buzz", category: "SENSEX", },
  { id: 10, user: "Kunal Shah", handle: "@kunalb11", text: "India is entering a golden decade of startups.", image: "/images/post10.jpg", date: "29 Sept 2025", likes: 680, comments: 120, retweets: 210, tag: "Opinion", category: "STARTUPS", },
  { id: 11, user: "Netflix", handle: "@netflix", text: "Money Heist Season 6 confirmed.", image: "/images/post11.jpg", date: "28 Sept 2025", likes: 3200, comments: 800, retweets: 1500, tag: "Entertainment", category: "ENTERTAINMENT", },
  { id: 12, user: "Marvel Studios", handle: "@MarvelStudios", text: "Avengers: Legacy trailer drops tomorrow.", image: "/images/post12.jpg", date: "26 Sept 2025", likes: 15000, comments: 5200, retweets: 8400, tag: "Movies", category: "ENTERTAINMENT", },
  { id: 13, user: "HBO Max", handle: "@hbomax", text: "Game of Thrones spinoff ‘Targaryen Rise’ premieres in 2026.", image: "/images/post13.jpg", date: "20 Sept 2025", likes: 6800, comments: 1300, retweets: 2900, tag: "Series", category: "ENTERTAINMENT", },
  { id: 14, user: "Disney", handle: "@disney", text: "Frozen 3 confirmed! Anna and Elsa return in 2026.", image: "/images/post14.jpg", date: "18 Sept 2025", likes: 4300, comments: 890, retweets: 1900, tag: "Kids", category: "ENTERTAINMENT", },
  { id: 19, user: "FIFA", handle: "@FIFAcom", text: "2026 World Cup venues officially revealed.", image: "/images/post19.jpg", date: "22 Sept 2025", likes: 3000, comments: 900, retweets: 1200, tag: "World Cup", category: "V2RETAIL", },
  { id: 20, user: "WWE", handle: "@WWE", text: "Roman Reigns vs The Rock confirmed for WrestleMania 42.", image: "/images/post20.jpg", date: "19 Sept 2025", likes: 7500, comments: 2200, retweets: 3500, tag: "Wrestling", category: "V2RETAIL", },

];

const categories = [
  "All",
  "V2RETAIL",
  "STALLION",
  "EMS",
  "SENSEX",
  "STARTUPS",
  "TECHNOLOGY", 
  "ENTERTAINMENT",
  "SPORTS",
  "MUSIC",
];

export default function AllPosts() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
// console.log(params)
  const categoryFromURL = params.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);

  // Scroll to top on navigation 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, categoryFromURL]);
  
  useEffect(() => {
    setSelectedCategory(categoryFromURL);
  }, [categoryFromURL]);

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="bg-gray-50 pt-10 pb-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pr-5 sm:pr-16 md:pr-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {selectedCategory === "All"
              ? "All Trending Posts"
              : `All ${selectedCategory} Posts`}
          </h2>
          <Link
            to="/"
            className="text-blue-600 text-sm font-medium hover:underline flex-shrink-0 pr-10"
          >
            ← Back to Home
          </Link>
        </div>

        <p className="text-gray-500 text-sm mb-4">
          Showing latest posts for{" "}
          <span className="font-medium">{selectedCategory}</span>
        </p>

        {/* Filter Dropdown (Removed as per previous request, commenting out the block) */}
        
        <div className="mb-6">
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full sm:w-auto px-4 py-2 border rounded-lg bg-white text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "All" ? "All Categories" : cat}
              </option>
            ))}
          </select>
        </div>
       

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="border rounded-lg p-4 bg-white flex flex-col justify-between hover:shadow-lg transition"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {post.user}
                    </p>
                    <p className="text-xs text-gray-500">{post.handle}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-800 mb-2">{post.text}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="post"
                    className="rounded-md mb-2 border w-full h-36 object-cover"
                  />
                )}

                <div className="flex items-center space-x-4 text-gray-500 text-xs mt-auto">
                  <span>💬 {post.comments}</span>
                  <span>🔁 {post.retweets}</span>
                  <span>❤️ {post.likes}</span>
                  <span className="ml-auto">{post.date}</span>
                </div>

                <div className="flex justify-between items-center mt-2 text-xs">
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No posts found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}