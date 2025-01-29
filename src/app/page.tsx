

// import React from 'react'
import Hero from './components/Hero'
// import About from './components/About'
import Products from './Products/page'
import Top_Sell from './Products/sell'
// import Product from './components/Product'
// import Catagory from './Catagory/page'
// import Cart from './Cart/page'
import Dress from '@/components/Dress'
import CustomerCarousel from "@/components/couresel";



const page = () => {
  return (
    <div>
      <Hero/>
      <Products/>
      <Top_Sell/>
      <Dress/>
      <CustomerCarousel/>
      
      
      

      {/* <About/> */}
      {/* <Product/> */}
      {/* <Catagory/> */}
      {/* <Cart/> */}
    </div>
  )
}

export default page
// 'use client'
// import React, { useState } from 'react';
// import Hero from './components/Hero';
// // import About from './components/About';
// import Products from './Products/page';
// import Top_Sell from './Products/sell';
// // import Product from './components/Product';
// // import Catagory from './Catagory/page';
// // import Cart from './Cart/page';
// import Dress from '@/components/Dress';
// import CustomerCarousel from "@/components/couresel";
// // import SearchBar from '../components/searchBar'; // Import the SearchBar component

// interface Result {
//   title: string;
//   description: string;
// }

// const Page: React.FC = () => {
//   const [results, setResults] = useState<Result[]>([]);

//   const handleSearch = async (query: string) => {
//     try {
//       // Fetch search results from an API
//       const res = await fetch(`/api/search?query=${query}`);
//       const data = await res.json();
//       setResults(data.results);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   return (
//     <div>
//       <Hero />
//       <Products />
//       <Top_Sell />
//       <Dress />
//       <CustomerCarousel />

//       {/* Add the SearchBar Component */}
//       <div>
//         <h1>Search Products</h1>
//         <SearchBar onSearch={handleSearch} />
//         <div>
//           {results.map((result, index) => (
//             <div key={index}>
//               <h2>{result.title}</h2>
//               <p>{result.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Existing components can remain here */}
//       {/* <About /> */}
//       {/* <Product /> */}
//       {/* <Catagory /> */}
//       {/* <Cart /> */}
//     </div>
//   );
// };

// export default Page;



