'use client';

import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link with form data
    const mailtoLink = `mailto:yubing.lim.2024@computing.smu.edu.sg?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-[--container-max-width] mx-auto px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="mb-4">Get In Touch</h1>
        <p className="text-xl text-[--color-text-secondary] max-w-2xl">
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[--color-text-primary] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] rounded-lg text-[--color-text-primary] placeholder-[--color-text-secondary] focus:border-[--color-accent] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[--color-text-primary] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] rounded-lg text-[--color-text-primary] placeholder-[--color-text-secondary] focus:border-[--color-accent] focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-[--color-text-primary] mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] rounded-lg text-[--color-text-primary] placeholder-[--color-text-secondary] focus:border-[--color-accent] focus:outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[--color-text-primary] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] rounded-lg text-[--color-text-primary] placeholder-[--color-text-secondary] focus:border-[--color-accent] focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[--color-accent] text-white rounded-lg hover:bg-[--color-accent-hover] transition-colors"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-[--color-surface] border border-[--color-border] rounded-2xl p-6">
            <h3 className="mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:yubing.lim.2024@computing.smu.edu.sg"
                className="flex items-start gap-3 text-[--color-text-secondary] hover:text-[--color-accent] transition-colors"
              >
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[--color-text-secondary] mb-1">Primary Email</p>
                  <p className="text-[--color-text-primary]">yubing.lim.2024@computing.smu.edu.sg</p>
                </div>
              </a>
              <a
                href="mailto:yyubingg@gmail.com"
                className="flex items-start gap-3 text-[--color-text-secondary] hover:text-[--color-accent] transition-colors"
              >
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[--color-text-secondary] mb-1">Secondary Email</p>
                  <p className="text-[--color-text-primary]">yyubingg@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+6593700757"
                className="flex items-start gap-3 text-[--color-text-secondary] hover:text-[--color-accent] transition-colors"
              >
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[--color-text-secondary] mb-1">Phone</p>
                  <p className="text-[--color-text-primary]">(+65) 93700757</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[--color-surface] border border-[--color-border] rounded-2xl p-6">
            <h3 className="mb-4">Social Links</h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/limyubing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[--color-text-secondary] hover:text-[--color-accent] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/peppastanky"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[--color-text-secondary] hover:text-[--color-accent] transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="bg-[--color-surface] border border-[--color-border] rounded-2xl p-6">
            <h3 className="mb-4">Response Time</h3>
            <p className="text-[--color-text-secondary]">
              I typically respond to emails within 24-48 hours. Looking forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
