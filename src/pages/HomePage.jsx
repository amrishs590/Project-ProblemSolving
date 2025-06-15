// import React, { useState } from "react";
// import Step from "../components/Step";
// import Lottie from "lottie-react";
// import codingAnimation from "../assets/coding.json";
// import contactAnimation from "../assets/contact.json"; // 👈 Import your new animation JSON here
// import { Phone, Mail } from "lucide-react";
// import "./HomePage.css";

// const HomePage = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     e.target.reset();
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <div className="Holder">
//       {/* Hero Section */}
//       <section id="home" className="section hero">
//         <div className="hero-content">
//           <div className="hero-left">
//             <Lottie
//               animationData={codingAnimation}
//               loop
//               className="hero-animation"
//             />
//           </div>
//           <div className="hero-right">
//             <h2>Welcome to DSA Pathway</h2>
//             <p>
//               A curated journey to mastering Data Structures and Algorithms.
//               <br />
//               <br />
//               Embark on a thoughtfully structured path where each step brings
//               clarity and confidence. DSA Pathway offers a refined learning
//               experience through categorized problems, intuitive visual steps,
//               and clean, well-crafted solutions.
//               <br />
//               <br />
//               Whether you're laying the foundation or advancing your expertise,
//               our platform transforms problem-solving into a focused and
//               rewarding pursuit.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Learn Section */}
//       <section id="learn" className="section learn">
//         <Step />
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="section contact-wrapper">
//         <div className="contact-header">
//           <h1>Contact Us</h1>
//           <p>
//             We're here to help! Reach out to us with any questions or concerns.
//           </p>
//         </div>

//         <div className="contact-grid">
//           {/* Left: Animation */}
//           <div className="contact-box animation-box">
//             <Lottie
//               animationData={contactAnimation}
//               loop
//               className="contact-animation"
//             />
//           </div>

//           {/* Right: Form */}
//           <div className="contact-box">
//             <h2>Send us a Message</h2>
//             {submitted && (
//               <div className="success-message">
//                 ✅ Thank you! Your message has been sent.
//               </div>
//             )}
//             <form onSubmit={handleSubmit} className="contact-form">
//               <div>
//                 <label>Name</label>
//                 <input type="text" placeholder="Your name" required />
//               </div>
//               <div>
//                 <label>Email</label>
//                 <input type="email" placeholder="you@example.com" required />
//               </div>
//               <div>
//                 <label>Subject</label>
//                 <input type="text" placeholder="Subject" />
//               </div>
//               <div>
//                 <label>Message</label>
//                 <textarea
//                   rows={4}
//                   placeholder="Your message..."
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;


import React, { useState } from "react";
import Step from "../components/Step";
import Lottie from "lottie-react";
import codingAnimation from "../assets/coding.json";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import "./HomePage.css";

const HomePage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="Holder">
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
            <h2>Welcome to DSA Pathway</h2>
            <p>
              A curated journey to mastering Data Structures and Algorithms.{" "}
              <br />
              <br />
              Embark on a thoughtfully structured path where each step brings
              clarity and confidence. DSA Pathway offers a refined learning
              experience through categorized problems, intuitive visual steps,
              and clean, well-crafted solutions. <br />
              <br />
              Whether you're laying the foundation or advancing your expertise,
              our platform transforms problem-solving into a focused and
              rewarding pursuit.
            </p>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section id="learn" className="section learn">
        <Step />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-wrapper">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We're here to help! Reach out to us with any questions or concerns.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-box">
            <h2>Get in Touch</h2>
            <div className="contact-info">
              <div className="info-item">
                <Phone className="icon" />
                <div>
                  <p className="label">Phone</p>
                  <p>9514376059</p>
                </div>
              </div>
              <div className="info-item">
                <Mail className="icon" />
                <div>
                  <p className="label">Email</p>
                  <p>amrishs590@gmail.com</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-box">
            <h2>Send us a Message</h2>
            {submitted && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label>Subject</label>
                <input type="text" placeholder="Subject" />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
