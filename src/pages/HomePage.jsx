import React, { useState } from "react";
import Step from "../components/Step";
import Lottie from "lottie-react";
import codingAnimation from "../assets/coding.json";
import "./HomePage.css"; // Make sure to create this CSS file

const HomePage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="section hero">
        <div className="hero-content">
          <div className="hero-left">
            <Lottie
              animationData={codingAnimation}
              loop
              className="hero-animation"
            />
          </div>

          <div className="hero-right">
            <h2>Welcome to ProblemSolvingSource</h2>
            <p>
              Your structured path to mastering DSA with categorized problems,
              visual steps, and clean solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section id="learn" className="section learn">
        <h4 className="section-title" style={{marginBottom:0}}>Learn</h4>
        <Step />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2 className="contact-heading">Contact Us</h2>

        {submitted && (
          <div className="success-message">
            ✅ Thank you! Your message has been sent.
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;


// import React, { useState } from "react";
// import Step from "../components/Step";
// import Lottie from "lottie-react";
// import codingAnimation from "../assets/coding.json";
// import "./Contact.css";

// const HomePage = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     e.target.reset();

//     setTimeout(() => setSubmitted(false), 3000); // hide after 3 seconds
//   };

//   return (
//     <div>
//       {/* Home section with animation and intro */}
//       <div
//         id="home"
//         className="pt-24 px-6 min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center gap-10"
//       >
//         <div className="w-full md:w-1/2 flex justify-center">
//           <Lottie
//             animationData={codingAnimation}
//             loop={true}
//             style={{ width: 400 }}
//             className="w-[90%]"
//           />
//         </div>

//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h2 className="text-4xl font-bold mb-4">
//             Welcome to ProblemSolvingSource
//           </h2>
//           <p className="text-lg text-gray-700">
//             Your structured path to mastering DSA with categorized problems,
//             visual steps, and clean solutions.
//           </p>
//         </div>
//       </div>

//       {/* Learn Section */}
//       <div id="learn" className="pt-24 px-6 min-h-screen bg-white">
//         <h2 className="text-3xl font-semibold mb-4">Learn</h2>
//         <Step />
//       </div>

//       {/* Contact Section */}
//       <div id="contact" className="contact-section">
//         <h2 className="contact-heading">Contact Us</h2>

//         {submitted && (
//           <div
//             style={{
//               backgroundColor: "#d1fae5",
//               color: "#065f46",
//               padding: "10px 15px",
//               borderRadius: "8px",
//               textAlign: "center",
//               marginBottom: "20px",
//               fontWeight: "500",
//             }}
//           >
//             ✅ Thank you! Your message has been sent.
//           </div>
//         )}

//         <form className="contact-form" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" placeholder="Your name" />
//           </div>

//           <div>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" placeholder="you@example.com" />
//           </div>

//           <div>
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               rows="4"
//               placeholder="Your message..."
//             ></textarea>
//           </div>

//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
