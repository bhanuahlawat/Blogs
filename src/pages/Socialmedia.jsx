// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react"; 

// const posts = [
//   // 🎯 SPORTS
//   { 
//     id: 1,
//     user: "ESPN",
//     handle: "@espn",
//     text: "Cristiano Ronaldo scores a hat-trick in Saudi Pro League ⚽🔥",
//     date: "29 Sept 2025",
//     likes: 1200,
//     comments: 300,
//     retweets: 500,
//     tag: "Sports Update",
//     category: "Sports",
//     image: "https://imgs.search.brave.com/3I0Ac5Ka7Rsyqoj9ad-Aoid0nrEvjbpOOFDaueOo-AQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQyL0Zv/b3RiYWxsX2luX0Js/b29taW5ndG9uJTJD/X0luZGlhbmElMkNf/MTk5NS5qcGcvNTEy/cHgtRm9vdGJhbGxf/aW5fQmxvb21pbmd0/b24lMkNfSW5kaWFu/YSUyQ18xOTk1Lmpw/Zw",
//   },
//   {
//     id: 2,
//     user: "BBC Sport",
//     handle: "@bbcsport",
//     text: "India beats Australia by 5 wickets in World Cup semi-final 🏏",
//     date: "27 Sept 2025",
//     likes: 2100,
//     comments: 640,
//     retweets: 900,
//     tag: "Cricket",
//     category: "Sports",
//     image: "https://imgs.search.brave.com/j9KrowumRlEnGL21u7tCb0SuFArMDqiBT3PKtGW8Pas/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYmF0c21hbi1w/bGF5aW5nLWNyaWNr/ZXQtc3BvcnQtaWxs/dXN0cmF0aW9uLXdp/dGgtYmF0LWJhbGxz/LWZpZWxkLWNhcnRv/b24taGFuZC1kcmF3/bl8yMTc1LTEwODUw/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA",
//   },
//   {
//     id: 3,
//     user: "NBA",
//     handle: "@NBA",
//     text: "LeBron James becomes the first player to cross 45,000 career points 🏀🔥",
//     date: "20 Sept 2025",
//     likes: 5200,
//     comments: 850,
//     retweets: 1800,
//     tag: "Basketball",
//     category: "Sports",
//     image: "https://imgs.search.brave.com/kwmxAxNzDZzBDZIksPIuzrrzELkHRo3oDI3dan-36pE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zbmwubm8vbWVk/aWEvNDE1NzEvc3Rh/bmRhcmRfY29tcHJl/c3NlZF9iYXNrZXRi/YWxsLmpwZw",
//   },

//   // 🎶 MUSIC
//   {
//     id: 4,
//     user: "Rolling Stone",
//     handle: "@RollingStone",
//     text: "Taylor Swift announces new album dropping next month 🎶",
//     date: "20 Sept 2025",
//     likes: 2000,
//     comments: 420,
//     retweets: 800,
//     tag: "Music",
//     category: "Music",
//     image: "https://source.unsplash.com/random/800x600/?concert",
//   },
//   {
//     id: 5,
//     user: "Billboard",
//     handle: "@billboard",
//     text: "BTS to reunite for a world tour in 2026 💜🔥",
//     date: "28 Sept 2025",
//     likes: 6500,
//     comments: 1500,
//     retweets: 3100,
//     tag: "K-Pop",
//     category: "Music",
//     image: "https://source.unsplash.com/random/800x600/?kpop",
//   },
//   {
//     id: 6,
//     user: "Spotify",
//     handle: "@Spotify",
//     text: "Drake hits 100M monthly listeners for the first time ever 🎧",
//     date: "18 Sept 2025",
//     likes: 4100,
//     comments: 920,
//     retweets: 2100,
//     tag: "Streaming",
//     category: "Music",
//     image: "https://source.unsplash.com/random/800x600/?music",
//   },

//   // 💻 TECHNOLOGY
//   {
//     id: 7,
//     user: "Tech Insider",
//     handle: "@techinsider",
//     text: "Apple reveals iPhone 17 Pro Max with holographic display 🚀📱",
//     date: "25 Sept 2025",
//     likes: 5000,
//     comments: 1200,
//     retweets: 2300,
//     tag: "Tech Update",
//     category: "Technology",
//     image: "https://source.unsplash.com/random/800x600/?iphone",
//   },
//   {
//     id: 8,
//     user: "Elon Musk",
//     handle: "@elonmusk",
//     text: "Tesla to launch the world’s first fully autonomous flying car 🚗✈️",
//     date: "24 Sept 2025",
//     likes: 9000,
//     comments: 3000,
//     retweets: 4500,
//     tag: "Innovation",
//     category: "Technology",
//     image: "https://source.unsplash.com/random/800x600/?tesla",
//   },
//   {
//     id: 9,
//     user: "Google AI",
//     handle: "@GoogleAI",
//     text: "Gemini Ultra 2.0 released: Now reasoning like a human with faster processing ⚡",
//     date: "22 Sept 2025",
//     likes: 8000,
//     comments: 2100,
//     retweets: 3700,
//     tag: "AI Update",
//     category: "Technology",
//     image: "https://source.unsplash.com/random/800x600/?artificialintelligence",
//   },
//   {
//     id: 10,
//     user: "Microsoft",
//     handle: "@Microsoft",
//     text: "Introducing Windows 13 – built entirely on AI optimization 🖥️",
//     date: "21 Sept 2025",
//     likes: 7200,
//     comments: 1750,
//     retweets: 2600,
//     tag: "Software",
//     category: "Technology",
//     image: "https://source.unsplash.com/random/800x600/?microsoft",
//   },

//   // 🎥 ENTERTAINMENT
//   {
//     id: 11,
//     user: "Netflix",
//     handle: "@netflix",
//     text: "Money Heist Season 6 officially confirmed 🎬🔥",
//     date: "28 Sept 2025",
//     likes: 3200,
//     comments: 800,
//     retweets: 1500,
//     tag: "Entertainment",
//     category: "Entertainment",
//     image: "https://source.unsplash.com/random/800x600/?netflix",
//   },
//   {
//     id: 12,
//     user: "Marvel Studios",
//     handle: "@MarvelStudios",
//     text: "Avengers: Legacy trailer drops tomorrow at 9PM EST 💥",
//     date: "26 Sept 2025",
//     likes: 15000,
//     comments: 5200,
//     retweets: 8400,
//     tag: "Movies",
//     category: "Entertainment",
//     image: "https://source.unsplash.com/random/800x600/?marvel",
//   },
//   {
//     id: 13,
//     user: "HBO Max",
//     handle: "@hbomax",
//     text: "Game of Thrones spinoff ‘Targaryen Rise’ premieres in 2026 🐉🔥",
//     date: "20 Sept 2025",
//     likes: 6800,
//     comments: 1300,
//     retweets: 2900,
//     tag: "Series",
//     category: "Entertainment",
//     image: "https://source.unsplash.com/random/800x600/?dragon",
//   },
//   {
//     id: 14,
//     user: "Disney",
//     handle: "@disney",
//     text: "Frozen 3 confirmed! Anna and Elsa return to theaters in 2026 ❄️✨",
//     date: "18 Sept 2025",
//     likes: 4300,
//     comments: 890,
//     retweets: 1900,
//     tag: "Kids",
//     category: "Entertainment",
//     image: "https://source.unsplash.com/random/800x600/?disney",
//   },

//   // MIXED
//   {
//     id: 15,
//     user: "CNBC TV18",
//     handle: "@CNBCTV18News",
//     text: "Sensex hits 85,000 for the first time 🚀",
//     date: "29 Sept 2025",
//     likes: 1021,
//     comments: 230,
//     retweets: 440,
//     tag: "Markets",
//     category: "Technology", // Financial Tech
//     image: "https://source.unsplash.com/random/800x600/?stockmarket",
//   },
//   {
//     id: 16,
//     user: "Spotify India",
//     handle: "@spotifyindia",
//     text: "Arijit Singh becomes the most streamed Indian artist of 2025 🎤",
//     date: "19 Sept 2025",
//     likes: 2200,
//     comments: 500,
//     retweets: 740,
//     tag: "Music",
//     category: "Music",
//     image: "https://source.unsplash.com/random/800x600/?arijitsingh",
//   },
//   {
//     id: 17,
//     user: "FIFA",
//     handle: "@FIFAcom",
//     text: "2026 World Cup venues officially revealed 🌍⚽",
//     date: "22 Sept 2025",
//     likes: 3000,
//     comments: 900,
//     retweets: 1200,
//     tag: "World Cup",
//     category: "Sports",
//     image: "https://source.unsplash.com/random/800x600/?worldcup",
//   },
//   {
//     id: 18,
//     user: "Bill Gates",
//     handle: "@BillGates",
//     text: "AI will play a crucial role in solving climate change 🌱",
//     date: "21 Sept 2025",
//     likes: 4500,
//     comments: 1100,
//     retweets: 2000,
//     tag: "Opinion",
//     category: "Technology",
//     image: "https://source.unsplash.com/random/800x600/?climatechange",
//   },
//   {
//     id: 19,
//     user: "Hollywood Reporter",
//     handle: "@THR",
//     text: "Oscar 2026 host officially announced: Ryan Reynolds 🎭",
//     date: "20 Sept 2025",
//     likes: 2800,
//     comments: 670,
//     retweets: 1000,
//     tag: "Awards",
//     category: "Entertainment",
//     image: "https://source.unsplash.com/random/800x600/?oscars",
//   },
//   {
//     id: 20,
//     user: "WWE",
//     handle: "@WWE",
//     text: "Roman Reigns vs The Rock confirmed for WrestleMania 42 💥🔥",
//     date: "19 Sept 2025",
//     likes: 7500,
//     comments: 2200,
//     retweets: 3500,
//     tag: "Wrestling",
//     category: "Sports",
//     image: "https://source.unsplash.com/random/800x600/?wrestling",
//   },
// ];

// const categories = ["All", "Sports", "Music", "Technology", "Entertainment"];

// const SocialMedia = () => {
//   const categoriesToShow = categories.filter(cat => cat !== "All");
  
//   // 1. Create an object to hold refs for each carousel
//   const carouselRefs = useRef({});

//   // 2. Scroll function (used by buttons)
//   const scrollCarousel = (category, direction) => {
//     const carouselElement = carouselRefs.current[category];
//     if (carouselElement) {
//       // Scroll by 90% of the visible width for a smooth snap to the next card
//       const scrollAmount = direction === 'left' 
//         ? -carouselElement.offsetWidth * 0.9 
//         : carouselElement.offsetWidth * 0.9;
        
//       carouselElement.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };
  
//   return (
//     // Responsive Padding and Sidebar Clearance
//     <div className="px-10 pt-4 md:pt-10 rounded-lg bg-gray-50">
//       <div 
//         // Inner div handles the right padding to clear the fixed sidebar
//         className="pr-0 sm:pr-16 md:pr-10"
//       >
        
//         {/* Main Component Header */}
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">
//           Trending Social Updates by Category
//         </h2>
        
//         {/* Updates message */}
//         <p className="text-gray-500 text-xs sm:text-sm mb-8">
//           Updates every 15 mins
//         </p>

//         {/* --- CAROUSEL SECTION LOOP --- */}
        
//         {categoriesToShow.map((category) => {
//           const categoryPosts = posts.filter(post => post.category === category);

//           if (categoryPosts.length === 0) return null;

//           return (
//             <section key={category} className="mb-12">
              
//               {/* Category Header with "View All" Link */}
//               <div className="flex justify-between items-center mb-4 border-b border-indigo-200 pb-2">
                
//                 <h3 className="text-xl font-semibold text-indigo-700">
//                   {category}
//                 </h3>
                
//                 {/* View All Link */}
//                 <Link
//                   to={`/allposts?category=${category.toUpperCase()}`}
//                   className="text-indigo-600 text-sm font-medium hover:underline flex-shrink-0"
//                 >
//                   View all →
//                 </Link>
//               </div>

//               {/* --- CAROUSEL WRAPPER WITH BUTTONS --- */}
//               <div className="relative">
                
//                 {/* Left Scroll Button (Absolute) */}
//                 <button
//                     onClick={() => scrollCarousel(category, 'left')}
//                     className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 bg-white border rounded-full text-indigo-600 hover:bg-indigo-50 transition duration-150 shadow-lg opacity-90 hover:opacity-100 hidden sm:block"
//                     aria-label={`Scroll left for ${category}`}
//                 >
//                     <ChevronLeft size={24} />
//                 </button>

//                 {/* Right Scroll Button (Absolute) */}
//                 <button
//                     onClick={() => scrollCarousel(category, 'right')}
//                     className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 bg-white border rounded-full text-indigo-600 hover:bg-indigo-50 transition duration-150 shadow-lg opacity-90 hover:opacity-100 hidden sm:block"
//                     aria-label={`Scroll right for ${category}`}
//                 >
//                     <ChevronRight size={24} />
//                 </button>


//                 {/* Horizontal Carousel Container (The scrollable element) */}
//                 <div 
//                     ref={el => carouselRefs.current[category] = el} // Assign the ref
//                     className="swiper-container swiper-container-virtual swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//                 >
                  
//                   {/* Flex container for the cards */}
//                   <div className="flex space-x-4 py-2">
//                     {categoryPosts.map((post) => (
//                       // Post Card Item
//                       <Link
//                         key={post.id}
//                         to={`/post/${post.id}`}
//                         // onDoubleClick handler is removed from here as well
//                         className="min-w-[80vw] sm:min-w-[300px] border rounded-xl p-4 bg-white flex-shrink-0 flex flex-col justify-between hover:shadow-xl transition cursor-pointer no-underline border-gray-200 snap-start"
//                       >
                        
//                         {/* User */}
//                         <div className="flex items-center space-x-2 mb-2">
//                           <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-200 flex-shrink-0"></div> 
//                           <div>
//                             <p className="text-sm font-semibold text-gray-800">
//                               {post.user}
//                             </p>
//                             <p className="text-xs text-gray-500">{post.handle}</p>
//                           </div>
//                         </div>

//                         {/* Content */}
//                         <p className="text-sm text-gray-800 whitespace-pre-line mb-3 line-clamp-2">
//                           {post.text}
//                         </p>
//                         {post.image && (
//                           <img
//                             src={post.image}
//                             alt="post"
//                             className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 border border-gray-100"
//                             onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/f0f4ff/6b46c1?text=Image+Error"; }}
//                           />
//                         )}

//                         {/* Actions */}
//                         <div className="flex items-center space-x-4 text-gray-500 text-xs mt-auto py-1">
//                           <span>💬 {post.comments}</span>
//                           <span>🔁 {post.retweets}</span>
//                           <span>❤️ {post.likes}</span>
//                           <span className="ml-auto text-gray-400">{post.date}</span>
//                         </div>

//                         {/* Footer Tags */}
//                         <div className="flex justify-between items-center mt-2 text-xs pt-1">
//                           <span className="bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium">
//                             {post.tag}
//                           </span>
//                           <span className="text-gray-500 font-medium text-[10px] sm:text-xs">
//                             {post.category}
//                           </span>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               {/* --- END CAROUSEL WRAPPER --- */}

//             </section>
//           );
//         })}
//         {/* --- END CAROUSEL SECTION LOOP --- */}

//       </div>
//     </div>
//   );
// };

// export default SocialMedia;



import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

// ------------------ Dummy Posts Data ------------------
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
    image: "https://imgs.search.brave.com/j9KrowumRlEnGL21u7tCb0SuFArMDqiBT3PKtGW8Pas/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYmF0c21hbi1w/bGF5aW5nLWNyaWNr/ZXQtc3BvcnQtaWxs/dXN0cmFhdGlvbi13/aXRoLWJhdC1iYWxsc/y1maWVsZC1jYXJ0b29u/LWhhbmQtZHJhd25f/MjE3NS0xMDg1MC5q/cGc/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA",
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
  const categoriesToShow = categories.filter(cat => cat !== "All");
  
  // 1. Create an object to hold refs for each carousel
  const carouselRefs = useRef({});

  // 2. Scroll function (used by buttons)
  const scrollCarousel = (category, direction) => {
    const carouselElement = carouselRefs.current[category];
    if (carouselElement) {
      // Scroll by 90% of the visible width for a smooth snap to the next card
      const scrollAmount = direction === 'left' 
        ? -carouselElement.offsetWidth * 0.9 
        : carouselElement.offsetWidth * 0.9;
        
      carouselElement.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    // Responsive Padding and Sidebar Clearance
    <div className="px-10 pt-4 md:pt-10 rounded-lg bg-gray-50">
      <div 
        // Inner div handles the right padding to clear the fixed sidebar
        className="pr-0 sm:pr-16 md:pr-10"
      >
        
        {/* Main Component Header */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Trending Social Updates by Category
        </h2>
        
        {/* Updates message */}
        <p className="text-gray-500 text-xs sm:text-sm mb-8">
          Updates every 15 mins
        </p>

        {/* --- CAROUSEL SECTION LOOP --- */}
        
        {categoriesToShow.map((category) => {
          const categoryPosts = posts.filter(post => post.category === category);

          if (categoryPosts.length === 0) return null;

          return (
            <section key={category} className="mb-12">
              
              {/* Category Header with "View All" Link */}
              <div className="flex justify-between items-center mb-4 border-b border-indigo-200 pb-2">
                
                <h3 className="text-xl font-semibold text-indigo-700">
                  {category}
                </h3>
                
                {/* View All Link */}
                <Link
                  to={`/allposts?category=${category.toUpperCase()}`}
                  className="text-indigo-600 text-sm font-medium hover:underline flex-shrink-0"
                >
                  View all →
                </Link>
              </div>

              {/* --- CAROUSEL WRAPPER WITH BUTTONS --- */}
              <div className="relative">
                
                {/* Left Scroll Button (Absolute) */}
                <button
                    onClick={() => scrollCarousel(category, 'left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 bg-white border rounded-full text-indigo-600 hover:bg-indigo-50 transition duration-150 shadow-lg opacity-90 hover:opacity-100 hidden sm:block"
                    aria-label={`Scroll left for ${category}`}
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Right Scroll Button (Absolute) */}
                <button
                    onClick={() => scrollCarousel(category, 'right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 bg-white border rounded-full text-indigo-600 hover:bg-indigo-50 transition duration-150 shadow-lg opacity-90 hover:opacity-100 hidden sm:block"
                    aria-label={`Scroll right for ${category}`}
                >
                    <ChevronRight size={24} />
                </button>


                {/* Horizontal Carousel Container (The scrollable element) */}
                <div 
                    ref={el => carouselRefs.current[category] = el} // Assign the ref
                    className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                >
                  
                  {/* Flex container for the cards */}
                  <div className="flex space-x-4 py-2">
                    {categoryPosts.map((post) => (
                      // Post Card Item
                      <Link
                        key={post.id}
                        to={`/post/${post.id}`}
                        // ADDED select-none to prevent text selection on double-click/drag
                        className="min-w-[80vw] sm:min-w-[300px] border rounded-xl p-4 bg-white flex-shrink-0 flex flex-col justify-between hover:shadow-xl transition cursor-pointer no-underline border-gray-200 snap-start select-none"
                      >
                        
                        {/* User */}
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-200 flex-shrink-0"></div> 
                          <div>
                            <p className="text-sm font-semibold text-gray-800">
                              {post.user}
                            </p>
                            <p className="text-xs text-gray-500">{post.handle}</p>
                          </div>
                        </div>

                        {/* Content */}
                        <p className="text-sm text-gray-800 whitespace-pre-line mb-3 line-clamp-2">
                          {post.text}
                        </p>
                        {post.image && (
                          <img
                            src={post.image}
                            alt="post"
                            className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 border border-gray-100"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/f0f4ff/6b46c1?text=Image+Error"; }}
                          />
                        )}

                        {/* Actions */}
                        <div className="flex items-center space-x-4 text-gray-500 text-xs mt-auto py-1">
                          <span>💬 {post.comments}</span>
                          <span>🔁 {post.retweets}</span>
                          <span>❤️ {post.likes}</span>
                          <span className="ml-auto text-gray-400">{post.date}</span>
                        </div>

                        {/* Footer Tags */}
                        <div className="flex justify-between items-center mt-2 text-xs pt-1">
                          <span className="bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium">
                            {post.tag}
                          </span>
                          <span className="text-gray-500 font-medium text-[10px] sm:text-xs">
                            {post.category}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* --- END CAROUSEL WRAPPER --- */}

            </section>
          );
        })}
        {/* --- END CAROUSEL SECTION LOOP --- */}

      </div>
    </div>
  );
};

export default SocialMedia;
