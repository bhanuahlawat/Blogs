import React, { useState } from "react";
import { Link } from "react-router-dom";

// ✅ Dummy posts with categories like sports, music, technology, entertainment
const posts = [
  // 🎯 SPORTS
  {
    id: 1,
    user: "ESPN",
    handle: "@espn",
    text: "Cristiano Ronaldo scores a hat-trick in Saudi Pro League ⚽🔥",
    date: "29 Sept 2025",
    likes: 1200,
    comments: 300,
    retweets: 500,
    tag: "Sports Update",
    category: "Sports",
    image: "https://imgs.search.brave.com/3I0Ac5Ka7Rsyqoj9ad-Aoid0nrEvjbpOOFDaueOo-AQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQyL0Zv/b3RiYWxsX2luX0Js/b29taW5ndG9uJTJD/X0luZGlhbmElMkNf/MTk5NS5qcGcvNTEy/cHgtRm9vdGJhbGxf/aW5fQmxvb21pbmd0/b24lMkNfSW5kaWFu/YSUyQ18xOTk1Lmpw/Zw",
  },
  {
    id: 2,
    user: "BBC Sport",
    handle: "@bbcsport",
    text: "India beats Australia by 5 wickets in World Cup semi-final 🏏",
    date: "27 Sept 2025",
    likes: 2100,
    comments: 640,
    retweets: 900,
    tag: "Cricket",
    category: "Sports",
    image: "https://imgs.search.brave.com/j9KrowumRlEnGL21u7tCb0SuFArMDqiBT3PKtGW8Pas/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYmF0c21hbi1w/bGF5aW5nLWNyaWNr/ZXQtc3BvcnQtaWxs/dXN0cmF0aW9uLXdp/dGgtYmF0LWJhbGxz/LWZpZWxkLWNhcnRv/b24taGFuZC1kcmF3/bl8yMTc1LTEwODUw/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA",
  },
  {
    id: 3,
    user: "NBA",
    handle: "@NBA",
    text: "LeBron James becomes the first player to cross 45,000 career points 🏀🔥",
    date: "20 Sept 2025",
    likes: 5200,
    comments: 850,
    retweets: 1800,
    tag: "Basketball",
    category: "Sports",
    image: "https://imgs.search.brave.com/kwmxAxNzDZzBDZIksPIuzrrzELkHRo3oDI3dan-36pE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zbmwubm8vbWVk/aWEvNDE1NzEvc3Rh/bmRhcmRfY29tcHJl/c3NlZF9iYXNrZXRi/YWxsLmpwZw",
  },

  // 🎶 MUSIC
  {
    id: 4,
    user: "Rolling Stone",
    handle: "@RollingStone",
    text: "Taylor Swift announces new album dropping next month 🎶",
    date: "20 Sept 2025",
    likes: 2000,
    comments: 420,
    retweets: 800,
    tag: "Music",
    category: "Music",
    image: "https://source.unsplash.com/random/800x600/?concert",
  },
  {
    id: 5,
    user: "Billboard",
    handle: "@billboard",
    text: "BTS to reunite for a world tour in 2026 💜🔥",
    date: "28 Sept 2025",
    likes: 6500,
    comments: 1500,
    retweets: 3100,
    tag: "K-Pop",
    category: "Music",
    image: "https://source.unsplash.com/random/800x600/?kpop",
  },
  {
    id: 6,
    user: "Spotify",
    handle: "@Spotify",
    text: "Drake hits 100M monthly listeners for the first time ever 🎧",
    date: "18 Sept 2025",
    likes: 4100,
    comments: 920,
    retweets: 2100,
    tag: "Streaming",
    category: "Music",
    image: "https://source.unsplash.com/random/800x600/?music",
  },

  // 💻 TECHNOLOGY
  {
    id: 7,
    user: "Tech Insider",
    handle: "@techinsider",
    text: "Apple reveals iPhone 17 Pro Max with holographic display 🚀📱",
    date: "25 Sept 2025",
    likes: 5000,
    comments: 1200,
    retweets: 2300,
    tag: "Tech Update",
    category: "Technology",
    image: "https://source.unsplash.com/random/800x600/?iphone",
  },
  {
    id: 8,
    user: "Elon Musk",
    handle: "@elonmusk",
    text: "Tesla to launch the world’s first fully autonomous flying car 🚗✈️",
    date: "24 Sept 2025",
    likes: 9000,
    comments: 3000,
    retweets: 4500,
    tag: "Innovation",
    category: "Technology",
    image: "https://source.unsplash.com/random/800x600/?tesla",
  },
  {
    id: 9,
    user: "Google AI",
    handle: "@GoogleAI",
    text: "Gemini Ultra 2.0 released: Now reasoning like a human with faster processing ⚡",
    date: "22 Sept 2025",
    likes: 8000,
    comments: 2100,
    retweets: 3700,
    tag: "AI Update",
    category: "Technology",
    image: "https://source.unsplash.com/random/800x600/?artificialintelligence",
  },
  {
    id: 10,
    user: "Microsoft",
    handle: "@Microsoft",
    text: "Introducing Windows 13 – built entirely on AI optimization 🖥️",
    date: "21 Sept 2025",
    likes: 7200,
    comments: 1750,
    retweets: 2600,
    tag: "Software",
    category: "Technology",
    image: "https://source.unsplash.com/random/800x600/?microsoft",
  },

  // 🎥 ENTERTAINMENT
  {
    id: 11,
    user: "Netflix",
    handle: "@netflix",
    text: "Money Heist Season 6 officially confirmed 🎬🔥",
    date: "28 Sept 2025",
    likes: 3200,
    comments: 800,
    retweets: 1500,
    tag: "Entertainment",
    category: "Entertainment",
    image: "https://source.unsplash.com/random/800x600/?netflix",
  },
  {
    id: 12,
    user: "Marvel Studios",
    handle: "@MarvelStudios",
    text: "Avengers: Legacy trailer drops tomorrow at 9PM EST 💥",
    date: "26 Sept 2025",
    likes: 15000,
    comments: 5200,
    retweets: 8400,
    tag: "Movies",
    category: "Entertainment",
    image: "https://source.unsplash.com/random/800x600/?marvel",
  },
  {
    id: 13,
    user: "HBO Max",
    handle: "@hbomax",
    text: "Game of Thrones spinoff ‘Targaryen Rise’ premieres in 2026 🐉🔥",
    date: "20 Sept 2025",
    likes: 6800,
    comments: 1300,
    retweets: 2900,
    tag: "Series",
    category: "Entertainment",
    image: "https://source.unsplash.com/random/800x600/?dragon",
  },
  {
    id: 14,
    user: "Disney",
    handle: "@disney",
    text: "Frozen 3 confirmed! Anna and Elsa return to theaters in 2026 ❄️✨",
    date: "18 Sept 2025",
    likes: 4300,
    comments: 890,
    retweets: 1900,
    tag: "Kids",
    category: "Entertainment",
    image: "https://source.unsplash.com/random/800x600/?disney",
  },

  // MIXED
  {
    id: 15,
    user: "CNBC TV18",
    handle: "@CNBCTV18News",
    text: "Sensex hits 85,000 for the first time 🚀",
    date: "29 Sept 2025",
    likes: 1021,
    comments: 230,
    retweets: 440,
    tag: "Markets",
    category: "Technology", // Financial Tech
    image: "https://source.unsplash.com/random/800x600/?stockmarket",
  },
  {
    id: 16,
    user: "Spotify India",
    handle: "@spotifyindia",
    text: "Arijit Singh becomes the most streamed Indian artist of 2025 🎤",
    date: "19 Sept 2025",
    likes: 2200,
    comments: 500,
    retweets: 740,
    tag: "Music",
    category: "Music",
    image: "https://source.unsplash.com/random/800x600/?arijitsingh",
  },
  {
    id: 17,
    user: "FIFA",
    handle: "@FIFAcom",
    text: "2026 World Cup venues officially revealed 🌍⚽",
    date: "22 Sept 2025",
    likes: 3000,
    comments: 900,
    retweets: 1200,
    tag: "World Cup",
    category: "Sports",
    image: "https://source.unsplash.com/random/800x600/?worldcup",
  },
  {
    id: 18,
    user: "Bill Gates",
    handle: "@BillGates",
    text: "AI will play a crucial role in solving climate change 🌱",
    date: "21 Sept 2025",
    likes: 4500,
    comments: 1100,
    retweets: 2000,
    tag: "Opinion",
    category: "Technology",
    image: "https://source.unsplash.com/random/800x600/?climatechange",
  },
  {
    id: 19,
    user: "Hollywood Reporter",
    handle: "@THR",
    text: "Oscar 2026 host officially announced: Ryan Reynolds 🎭",
    date: "20 Sept 2025",
    likes: 2800,
    comments: 670,
    retweets: 1000,
    tag: "Awards",
    category: "Entertainment",
    image: "https://source.unsplash.com/random/800x600/?oscars",
  },
  {
    id: 20,
    user: "WWE",
    handle: "@WWE",
    text: "Roman Reigns vs The Rock confirmed for WrestleMania 42 💥🔥",
    date: "19 Sept 2025",
    likes: 7500,
    comments: 2200,
    retweets: 3500,
    tag: "Wrestling",
    category: "Sports",
    image: "https://source.unsplash.com/random/800x600/?wrestling",
  },
];


const categories = ["All", "Sports", "Music", "Technology", "Entertainment"];

const SocialMedia = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Filter posts by category
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="pr-50 pl-20 pt-10 rounded-lg bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Trending on Social Media</h2>
        <Link
          to="/AllPosts"
          className="text-blue-600 pr-10 text-sm font-medium hover:underline">
          View all →
        </Link>
      </div>

      <p className="text-gray-500 text-sm mb-4">Updates every 15 mins</p>

      {/* ✅ Category Filter Buttons */}
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

      {/* ✅ Horizontal Carousel */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 py-2 max-w-full">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="min-w-[250px] border rounded-lg p-4 bg-white flex-shrink-0 flex flex-col justify-between hover:shadow-lg transition cursor-pointer no-underline"
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
                  // className="rounded-md mb-2 border"
                  className="w-full h-40 object-cover rounded-md mb-2 border"
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
                <span className="text-gray-500 font-medium">
                  {post.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
