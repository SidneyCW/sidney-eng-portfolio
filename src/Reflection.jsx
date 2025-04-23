// Reflection.jsx — Full Page with Portfolio Background + Back Button

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Reflection() {
  return (
    <div className="relative min-h-screen text-gray-200 font-sans">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-20">
        <div className="w-full h-full bg-parallax bg-cover bg-center animate-backgroundScroll" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 space-y-16">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold mb-2">ENG2003 Reflection</h1>
          <p className="text-accent">Written by Sidney Wood</p>
        </motion.header>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Part A – Reflection on ENG2003 Course</h2>
            <p>
              ENG2003 was an engaging and transformative experience for me. I was prepared for a course which primarily focused on grammar, technical writing and formatting. I was instead offered a much more insightful and useful exploration of what effective communication as an engineer looks like. The course really emphasised audience awareness and real world application. The course really helped reshape how I think of written and spoken communication in professional settings and I think will be invaluable to my future. During this term I was challenged to convey technical information in real-world industry based formats through assignments. These included infographics, emails and mock interviews. These assignments helped me become more intentional and adaptable in how I deliver information.
            </p>
            <p>
              This course taught me how to use and understand the 7 C’s of communication: clear, concise, concrete, correct, coherent, complete, and courteous. These principles acted as a consistent guide for me in my work. I use them while revising, writing, and presenting. A standout assignment for me in the course was my Engineering Report on the future and ethics of AI. It challenged me to write effectively and creatively to convey the solution I had researched for a real world problem. ENG2003 pushed me far out of my comfort zone and helped me grow into a truly audience-aware and strategic communicator.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Part B – Reflection on Communication Development</h2>
            <p>
              Before I took ENG2003, I think my communication skills could aptly be described as serviceable but possibly over technical. I had a tendency to default to complex term heavy phrasing as I’ve spent a lot of time around experienced people in my industry. Through this course I started to learn to address my vocabulary as well as tone and structure to the audience I’m presenting to. Whether I’m writing an email to a potential employer or presenting a project I’ve been working on, I now communicate with much greater intention and clarity. The area I have grown the most in is my technical writing skills. Throughout ENG2003 I’ve developed my skills in logically organizing ideas, using visuals to support my arguments, and formatting documents for readability. The formal report I worked on in this course helped me solidify and develop these skills, as I learned how to write concisely and clearly. These improvements in my communication are currently directly translating to my work as a computer engineering intern at Spiri Robotics as well as my other courses.
            </p>
            <p>
              ENG2003 didn’t just help me improve in writing, it also helped me work on my vocal communication. The mock interview helped give me practice in articulating ideas aloud, receiving critiques and responding while under pressure. More importantly, the course taught me that effective communication isn’t just about transferring information, it’s about helping others to understand and engage with that knowledge. In the future I’m going to continue to apply what I’ve learned in this course to my studies as well as my future internships and career.
            </p>
          </div>
        </section>

        <div className="mt-16">
          <Link
            to="/"
            className="inline-block bg-accent text-black font-semibold px-6 py-2 rounded hover:scale-105 transition shadow-lg"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}