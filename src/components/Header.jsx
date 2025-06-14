import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo"><h2>DSA Pathway</h2></div>
      <nav className="nav-links">
        <a href="#home"><h3>Home</h3></a>
        <a href="#learn"><h3>Learn</h3></a>
        <a href="#contact"><h3>Contact</h3></a>
      </nav>
    </header>
  );
};

export default Header;



// import React, { useState, useEffect } from "react";

// const Header = () => {
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       const sections = ["home", "learn", "contact"];
//       for (let section of sections) {
//         const el = document.getElementById(section);
//         if (el) {
//           const offsetTop = el.offsetTop - 100;
//           const offsetHeight = el.offsetHeight;

//           if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
//             setActiveSection(section);
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection("home")}>
//           ProblemSolvingSource
//         </h1>
//         <nav className="flex space-x-6">
//           {["home", "learn", "contact"].map((section) => (
//             <button
//               key={section}
//               onClick={() => scrollToSection(section)}
//               className={`capitalize font-medium hover:text-blue-600 transition ${
//                 activeSection === section ? "text-blue-600 underline" : "text-gray-700"
//               }`}
//             >
//               {section}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
