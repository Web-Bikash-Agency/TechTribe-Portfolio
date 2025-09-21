import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
  platform?: string;
  posterImage: string;
  registration?: "Open" | "Coming Soon";
  host?: string;
  topics?: string[];
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Event data
const events: { upcoming: Event[]; past: Event[] } = {
  upcoming: [],
  past: [
    {
      id: 1,
      title: "GitHub & LinkedIn Workshop",
      date: "July 19th, 2025",
      time: "7:30 PM IST",
      location: "Virtual / Google Meet",
      description:
        "From Zero to Pro workshop covering: Account Setup (for beginners), Profile Optimization Tips, GitHub Repositories & Contributions, LinkedIn Networking Tricks, and Personal Branding & Consistency.",
      type: "Workshop",
      platform: "Google Meet",
      posterImage: "/images/events/gitXlinkdin.jpg",
      topics: [
        "Account Setup (for beginners)",
        "Profile Optimization Tips",
        "GitHub Repositories & Contributions",
        "LinkedIn Networking Tricks",
        "Personal Branding & Consistency",
      ],
    },
    {
      id: 2,
      title: "Hackathon Preparation Session",
      date: "August 10th, 2025",
      time: "8:00 PM",
      location: "Virtual / Google Meet",
      description:
        "Hey Coders! 🎯 🚀 We're hosting a special session where we'll walk you through how to prepare for hackathons step by step. Whether it's your first hackathon or your tenth, this session will make sure you're all set to compete.",
      type: "Workshop",
      platform: "Zoom Workplace",
      posterImage: "/images/events/HackathonRegister.jpg",
      host: "Yoosuf Mallik",
    },
  ],
};

const Events = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent"
          >
            Events & Workshops
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Join our community events, workshops, and learning sessions to
            enhance your skills and connect with fellow developers.
          </motion.p>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Upcoming Events
          </h3>
          {events.upcoming.length === 0 ? (
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-sm"
            >
              <h4 className="text-xl text-gray-800 mb-2">
                No upcoming events scheduled.
              </h4>
              <p className="text-gray-600">Check back soon!</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.upcoming.map((event) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {event.title}
                        </h4>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200"
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="mt-auto space-y-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                        {event.platform && (
                          <div className="text-green-600 font-medium">
                            Platform: {event.platform}
                          </div>
                        )}
                        {event.host && (
                          <div className="text-green-600 font-medium">
                            Host: {event.host}
                          </div>
                        )}
                      </div>
                      {event.topics && (
                        <div className="mt-4">
                          <div className="font-medium text-gray-700 mb-2">
                            What you'll learn:
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {event.topics.map((topic, index) => (
                              <li key={index}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="mt-6">
                        <button className="w-full rounded-lg px-4 py-2 bg-green-600 text-white hover:bg-green-700 transition-colors">
                          {event.registration === "Open"
                            ? "Register Now"
                            : "Notify Me"}
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Past Events */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.past.map((event) => (
              <motion.div key={event.id} variants={itemVariants}>
                <Card className="p-6 h-full bg-gray-50 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {event.title}
                      </h4>
                      <Badge
                        variant="outline"
                        className="bg-gray-100 text-gray-600 border-gray-200"
                      >
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="mt-auto space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={() => setPreviewImage(event.posterImage)}
                        className="block w-full rounded-lg px-4 py-2 text-center border bg-white text-purple-600 border-purple-600 hover:bg-purple-50 transition-colors"
                      >
                        See Poster
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Poster Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)} // backdrop click closes modal
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-white rounded-xl shadow-lg max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close button */}
            <button
  onClick={() => setPreviewImage(null)}
  className="absolute -top-3 -right-3 bg-gray-800 text-white rounded-full shadow-lg p-2 hover:bg-red-600 transition-colors"
>
  ✕
</button>

            {/* Poster image */}
            <img
              src={previewImage}
              alt="Event Poster"
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Events;
