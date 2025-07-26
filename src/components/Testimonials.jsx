import { useState } from "react";
import {

  FaChevronUp,
  FaStar,
} from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import image1 from "../assets/images/01.png";
import image2 from "../assets/images/02.png";
import image3 from "../assets/images/03.png";
import image4 from "../assets/images/04.png";
import image5 from "../assets/images/05.png";
import image6 from "../assets/images/07.png";
import image7 from "../assets/images/10.png";
import image8 from "../assets/images/11.png";
import image9 from "../assets/images/12.png";
import image10 from "../assets/images/13.png";
import image11 from "../assets/images/img5.png";
import image12 from "../assets/images/14.png";
import image13 from "../assets/images/img1.png";
import image14 from "../assets/images/img2.png";
import image15 from "../assets/images/img3.png";
import image16 from "../assets/images/img4.png";
import LoginModal from "./LoginModal";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    {
      name: "Emily Thompson",
      title: "Senior Marketing Manager",
      description:
        "NoteFlow has completely transformed the way I manage my work notes. The AI-powered organization feature makes it so easy to find what I need, even weeks after the fact. I can't imagine going back to manual note-taking!",
      rating: 4,
      image: image1,
    },
    {
      name: "Michael Carter",
      title: "Product Designer",
      description:
        "As a designer, I need a tool that helps me keep track of brainstorming sessions and project notes. NoteFlow’s voice-to-text transcription is a game-changer, allowing me to capture ideas while on the go. It has boosted my productivity tenfold!",
      rating: 5,
      image: image2,
    },
    {
      name: "Sarah Lee",
      title: "Business Analyst",
      description:
        "I love how NoteFlow integrates with tools like Google Drive and Slack. It makes collaboration with my team so much smoother. The contextual reminders have helped me stay on top of critical deadlines.",
      rating: 5,
      image: image3,
    },
    {
      name: "Jonathan Moore",
      title: "Software Engineer",
      description:
        "The smart organization of my notes is impressive. I used to waste time searching for information, but now NoteFlow does the heavy lifting, automatically categorizing everything. It’s an indispensable part of my workflow.",
      rating: 5,
      image: image4,
    },
    {
      name: "Rachel Foster",
      title: "Project Manager",
      description:
        "NoteFlow has made managing multiple projects so much easier. I can quickly access and organize my notes, and the contextual reminders keep me on track. It’s the best tool I’ve found for staying organized.",
      rating: 5,
      image: image5,
    },
    {
      name: "Daniel Harris",
      title: "Entrepreneur",
      description:
        "As a startup founder, my days are packed with meetings and ideas. NoteFlow’s voice-to-text feature lets me capture thoughts while I’m on the move. Plus, the cloud storage sync keeps everything safe and easily accessible.",
      rating: 5,
      image: image6,
    },
    {
      name: "Olivia Carter",
      title: "Content Strategist",
      description:
        "I’ve tried many note-taking apps, but none compare to NoteFlow. The AI-driven categorization helps me keep my content ideas organized and searchable, saving me hours every week. Highly recommended!",
      rating: 5,
      image: image15,
    },
    {
      name: "Thomas Williams",
      title: "UX/UI Designer",
      description:
        "The voice-to-text transcription is incredibly accurate and saves me so much time when documenting meetings. Plus, I love how seamlessly it integrates with tools like Trello and Slack. NoteFlow is a must-have for anyone in design.",
      rating: 5,
      image: image7,
    },
    {
      name: "Jessica Gonzalez",
      title: "Sales Executive",
      description:
        "I rely heavily on my notes during client calls and follow-ups. The ability to automatically receive reminders based on my notes has made my follow-up process much smoother and more efficient. NoteFlow has been a game-changer!",
      rating: 5,
      image: image8,
    },
    {
      name: "Aaron Mitchell",
      title: "Customer Support Lead",
      description:
        "I can’t say enough about how helpful NoteFlow’s integrations are. Syncing my notes with Google Drive and other apps has streamlined my work processes. It’s helped me stay organized and efficient in an ever-changing environment.",
      rating: 5,
      image: image9,
    },
    {
      name: "Grace Stevens",
      title: "HR Manager",
      description:
        "NoteFlow has been a lifesaver for organizing employee notes and meeting summaries. The AI-driven organization automatically categorizes everything, so I no longer have to worry about sorting through piles of documents. It's incredibly intuitive!",
      rating: 5,
      image: image10,
    },
    {
      name: "Ben Turner",
      title: "Freelance Writer",
      description:
        "I’m always jotting down ideas and notes for various writing projects. The voice-to-text feature lets me capture my thoughts while I’m out and about. I love that everything syncs in real-time and is always available when I need it.",
      rating: 5,
      image: image11,
    },
    {
      name: "Katherine Evans",
      title: "Marketing Director",
      description:
        "With NoteFlow, I’m able to keep track of ideas, strategies, and feedback effortlessly. The contextual reminders are perfect for ensuring I follow up on key tasks and deadlines. It’s become an essential part of my daily routine.",
      rating: 5,
      image: image12,
    },
    {
      name: "Lucas King",
      title: "CEO",
      description:
        "As someone who juggles multiple responsibilities, NoteFlow keeps me organized without any hassle. The seamless integrations with tools like Slack and Google Drive allow my team and I to stay in sync and work more efficiently.",
      rating: 5,
      image: image13,
    },
    {
      name: "Natalie James",
      title: "Graphic Designer",
      description:
        "NoteFlow's ability to capture and organize my notes in such a detailed yet easy-to-use way has made a huge difference in my creative process. Whether I'm brainstorming or taking project notes, it’s my go-to app for staying organized.",
      rating: 5,
      image: image14,
    },
  ];

  const displayedTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 6);

  const renderStars = (rating) => (
    <div className="flex gap-1 lg:mb-10 mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`lg:w-6 lg:h-6 w-4 h-4 ${
            i < rating ? "text-white" : "text-gray-700"
          }`}
        />
      ))}
    </div>
  );

  const translateIndx = 0;
  const translateIndexes = Array.from(
    { length: Math.ceil(testimonials.length / 3) },
    (_, i) => 1 + i * 3
  );

  console.log(translateIndexes);

  return (
    <section className="bg-gradient-to-b from-[#0E2E2E] to-[#061212]">
      <div className="max-w-[1240px] px-4 lg:px-0 py-24 mx-auto container">
        <button className="rounded-full flex mb-6 lg:mb-12 mx-auto cursor-pointer gap-4 items-center shadow-[0_0_25px_#44E5E74D] text-[#0E2E2E] font-light text-base lg:text-lg bg-[#44E5E7] px-6 lg:px-8 py-3 lg:py-4">
          Testimonials
        </button>

        <h2 className="lg:text-6xl mx-auto max-w-[1000px] text-center text-[#ECFCFD] md:text-4xl text-3xl font-semibold">
          What our AI-powered notetakers have to say
        </h2>

        <p className="lg:text-xl lg:max-w-[600px] max-w-[400px] mx-auto text-center text-base mt-4  lg:mt-10 font-light mb-6 text-[#C7F7F8]">
          NoteFlow has helped 1000’s supercharge their productivity with cutting
          edge AI note taking tools
        </p>  
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 lg:grid-cols-3 h-fit gap-6 ">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between  bg-[#0E2E2E] rounded-lg p-4 lg:p-8 ${
                index == 1 ? "lg:h-[120%]" : ""
              } ${
                index  !== 1 &&
                translateIndexes.includes(index) &&
                "lg:translate-y-[20%]"
              }`}
            >
              {
                console.log(index, translateIndexes.includes(index))
              }
              {renderStars(testimonial.rating)}

              <p className="text-[#ECFCFD] lg:text-lg text-sm  mb-6 lg:mb-12 font-light">
                {testimonial.description}
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[#7CEDEE] font-bold lg:text-xl text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-[#DAFAFA] lg:text-base text-xs">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {testimonials.length > 6 && (
          <div className="text-center mt-8  md:mt-[200px]">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="border-2 px-4 p-3 text-[#DAFAFA] flex cursor-pointer mx-auto items-center rounded-full"
              >
                Show More <FaChevronDown className="ml-2" />
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="border-2 px-4 p-3 text-[#DAFAFA] flex cursor-pointer mx-auto items-center rounded-full"
              >
                Show Less <FaChevronUp className="ml-2" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
