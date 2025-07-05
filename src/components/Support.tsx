import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  FileText, 
  Video, 
  Send, 
  CheckCircle,
  Book,
  Users,
  HelpCircle
} from 'lucide-react';

const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    console.log('Support request submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        priority: 'medium'
      });
    }, 3000);
  };

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      color: "green"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Browse our comprehensive guides",
      action: "View Docs",
      color: "purple"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Learn with step-by-step videos",
      action: "Watch Now",
      color: "orange"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other developers",
      action: "Join Forum",
      color: "teal"
    },
    {
      icon: Book,
      title: "User Guide",
      description: "Complete app usage instructions",
      action: "Read Guide",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { icon: string; button: string; hover: string } } = {
      blue: { icon: "text-blue-600", button: "bg-blue-600 hover:bg-blue-700", hover: "hover:bg-blue-50" },
      green: { icon: "text-green-600", button: "bg-green-600 hover:bg-green-700", hover: "hover:bg-green-50" },
      purple: { icon: "text-purple-600", button: "bg-purple-600 hover:bg-purple-700", hover: "hover:bg-purple-50" },
      orange: { icon: "text-orange-600", button: "bg-orange-600 hover:bg-orange-700", hover: "hover:bg-orange-50" },
      teal: { icon: "text-teal-600", button: "bg-teal-600 hover:bg-teal-700", hover: "hover:bg-teal-50" },
      pink: { icon: "text-pink-600", button: "bg-pink-600 hover:bg-pink-700", hover: "hover:bg-pink-50" }
    };
    return colorMap[color] || { icon: "text-gray-600", button: "bg-gray-600 hover:bg-gray-700", hover: "hover:bg-gray-50" };
  };

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Help When You Need It
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help you get the most out of MobileCoder.
          </p>
        </div>

        

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Contact Our Support Team
              </h3>
              <p className="text-gray-600">
                Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-600">
                  We've received your support request and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Brief description of your issue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                      Priority Level
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Please provide as much detail as possible about your issue or question..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg font-semibold"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Support Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;