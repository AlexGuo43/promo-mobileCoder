import React from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  FileText, 
  GitBranch, 
  Terminal, 
  Palette, 
  Share2,
  Lock,
  Zap
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "Smart Code Editor",
      description: "Syntax highlighting, code snippets.",
      color: "blue"
    },
    {
      icon: Terminal,
      title: "Built-in Terminal",
      description: "Execute commands and run scripts directly from your phone.",
      color: "green"
    },
    // {
    //   icon: Cloud,
    //   title: "Cloud Sync",
    //   description: "Your projects are automatically synced across all your devices with real-time backup.",
    //   color: "purple"
    // },
    // {
    //   icon: GitBranch,
    //   title: "Git Integration",
    //   description: "Full Git support with commit, push, pull, and branch management capabilities.",
    //   color: "orange"
    // },
    {
      icon: FileText,
      title: "Project Templates",
      description: "Start quickly with pre-built templates for React, Python, Node.js, and more.",
      color: "teal"
    },
    // {
    //   icon: Palette,
    //   title: "Custom Themes",
    //   description: "Choose from dark mode, light mode, or customize your own coding theme.",
    //   color: "pink"
    // },
    // {
    //   icon: Share2,
    //   title: "Code Sharing",
    //   description: "Share your code snippets and collaborate with other developers instantly.",
    //   color: "indigo"
    // },
    {
      icon: Share2,
      title: "Daily Coding Challenge",
      description: "Hone your programming skills with the LeetCode daily question.",
      color: "indigo"
    },
    {
      icon: Lock,
      title: "Secure Environment",
      description: "Your code is encrypted and secure with enterprise-grade security measures.",
      color: "red"
    },
    {
      icon: Zap,
      title: "Fast Compilation",
      description: "Optimized compilation and execution times for seamless mobile development.",
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      teal: "text-teal-600",
      pink: "text-pink-600",
      indigo: "text-indigo-600",
      red: "text-red-600",
      yellow: "text-yellow-600"
    };
    return colorMap[color] || "text-gray-600";
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Code on Mobile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MobileCoder brings desktop-class development tools to your mobile device, 
            making coding more accessible and convenient than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className={`h-10 w-10 ${getColorClasses(feature.color)} mb-4`} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;