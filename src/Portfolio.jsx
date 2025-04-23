import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Portfolio.css';

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeShowcase, setActiveShowcase] = useState(null);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  const showcaseDetails = {
    1: {
      title: 'Technical Report (ENG2003)',
      body: `The report I wrote on the impact of AI on human purpose, blended technical analysis with a deeper ethical reflection. It examined the risks of bias and skill erosion, and offered solutions of working in collaboration with the technology inspired by the ideas of Kurzweil and Mayer-Shönberger. The report pushed me to look farther than just my engineering insight using philosophy and stands out as my most interdisciplinary work.`
    },
    2: {
      title: 'Infographic Presentation (ENG2003)',
      body: `In my ENG2003 course I worked on an infographic to simplify AI’s impact on industries like education and healthcare while explaining the ethical concerns like job displacement and bias. It challenged me creatively as I worked to improve my visual communication skills and I see it as my most accessible piece that really demonstrates audience-centered thinking and design.`
    },
    3: {
      title: 'Cover Letter (ENG2003)',
      body: `This cover letter was developed using the strategies I learned in my ENG2003 class as well as real world examples to apply for a practice role. It taught me how to tailor, write and structure an effectively written cover letter to best present my technical skills and professionality.`
    },
    4: {
      title: 'Hackathon Pitch (External – UNHack 2023)',
      body: `The pitch and design I made for UnHack reflect my ability to effectively communicate technical ideas and designs. During the 48-hour hackathon, I led my team’s presentation under pressure and extreme time constraints. I learned to bring people together under a shared idea and create a professional effective presentation.`
    }
  };

  return (
    <div className="relative min-h-screen text-primary font-sans">
      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div className="w-full h-full bg-parallax bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 space-y-16">
        <header className="sticky top-4 bg-background/70 backdrop-blur-md rounded-xl px-6 py-4 shadow-md flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sidney Wood</h1>
          <div className="text-sm text-gray-400 text-right">
            <p><a href="mailto:Sidney.scott.wood@gmail.com" className="text-accent underline">Sidney.scott.wood@gmail.com</a></p>
            <p>📍 Toronto, ON · 📞 (647)-542-3540</p>
            <a href="https://www.linkedin.com/in/sidneywood" className="text-accent underline">Visit my LinkedIn</a>
          </div>
        </header>

        {/* 🧑‍💻 About Me Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/images/headshot.jpeg"
              className="w-40 h-40 object-cover rounded-full border-4 border-accent shadow-md"
            />
            <p className="text-gray-300">
              I'm a Computer Engineering student with a passion for building efficient systems and solving complex problems. I’ve gained hands-on experience through my internship at Spiri Robotics, where I developed autonomous drone software, analyzed sensor data, and built simulation environments using tools like ROS, Gazebo, and ArduPilot. I’ve also applied full-stack development skills in personal projects, including a win-tracking web app for the Commander format of Magic: The Gathering. My work focuses on combining technical precision with thoughtful user-centered design.
            </p>
          </div>
        </section>

        {/* 🎓 Showcase Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Showcase</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-200">
            {Object.entries(showcaseDetails).map(([key, item]) => (
              <div key={key} className="bg-surface p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition" onClick={() => setActiveShowcase(key)}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2">Click to read more</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🪞 Reflection Link */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <a href="/reflection" className="text-accent underline">Read Full Reflection</a>
        </section>
        {/* 🔧 Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6">
            <motion.div className="bg-surface p-6 rounded-xl shadow-xl hover:shadow-2xl transition group" whileHover={{ scale: 1.02 }}>
              <h3 className="text-xl font-semibold mb-2">MTG Win Tracker</h3>
              <p className="text-gray-400 mb-3">
                A full-stack Flask + MySQL app for tracking Commander (EDH) wins. Includes a dynamic Elo system for players and decks,
                hosted on a Raspberry Pi with Git automation + Nginx.
              </p>
              <div className="flex items-center gap-4 text-sm text-accent">
                <a href="http://107.179.174.106/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent/80">View Demo</a>
                <a href="https://github.com/SidneyCW/mtg-win-tracking" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent/80">View Repo</a>
              </div>
            </motion.div>

            <motion.div className="bg-surface p-6 rounded-xl shadow-xl hover:shadow-2xl transition group" whileHover={{ scale: 1.02 }}>
              <h3 className="text-xl font-semibold mb-2">Spiri Robotics Internship</h3>
              <p className="text-gray-400 mb-3">
                Contributed to autonomous drone platform by building ship detection algorithms using sound and AIS. Created simulation environments and refined SDK tools, bridging backend logic with UI feedback.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {showScrollTop && (
        <motion.button onClick={scrollToTop} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.3 }} className="fixed bottom-6 right-6 z-50 bg-accent text-black px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          ↑
        </motion.button>
      )}

      <AnimatePresence>
        {activeShowcase && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center">
            <div className="bg-surface max-w-lg p-8 rounded-xl shadow-xl relative text-gray-200">
              <h3 className="text-2xl font-semibold mb-4">{showcaseDetails[activeShowcase].title}</h3>
              <p className="mb-6 whitespace-pre-line">{showcaseDetails[activeShowcase].body}</p>
              <button onClick={() => setActiveShowcase(null)} className="absolute top-3 right-3 bg-accent text-black px-4 py-1 rounded hover:scale-105">Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

