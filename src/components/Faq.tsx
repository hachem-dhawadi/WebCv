import { motion } from "framer-motion";
import { GlobeAltIcon, HeartIcon } from "@heroicons/react/24/outline";

export default function SkillsInterests() {
  const items = [
    {
      title: "Languages",
      icon: GlobeAltIcon,
      items: ["Arabic", "English", "French"],
      color: "from-blue-600 to-blue-400", // Gradient colors
      textColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/50"
    },
    {
      title: "Hobbies",
      icon: HeartIcon,
      items: ["Coding", "Technology", "Sports"],
      color: "from-blue-600 to-blue-400", // Gradient colors
      textColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/50"
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="interests">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center mb-8">Languages & Hobbies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {items.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-neutral-800 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient accent bar */}
              <div className={`absolute inset-x-0 top-0 h-2 rounded-t-3xl bg-gradient-to-r ${section.color}`} />
              
              {/* Header with animated icon */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`p-3 rounded-lg ${section.bgColor}`}
                >
                  <section.icon className={`w-8 h-8 ${section.textColor} transition-colors duration-300`} />
                </motion.div>
                <h3 className="text-2xl font-semibold dark:text-white">{section.title}</h3>
              </div>

              {/* Interactive items */}
              <div className="flex flex-wrap gap-3">
                {section.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-full ${section.bgColor} ${section.textColor} 
                      text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md 
                      border border-opacity-10 dark:border-opacity-20`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}