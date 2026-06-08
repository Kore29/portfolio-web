"use client";

import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import { MailIcon, GithubIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const info = containerRef.current?.querySelector(".contact-info");
    const form = containerRef.current?.querySelector(".contact-form");
    if (!info || !form) return;

    gsap.fromTo(
      info,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      form,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="w-full py-16 scroll-mt-28">
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start overflow-hidden py-4">
        {/* Info Column */}
        <div className="contact-info flex flex-col gap-y-6 opacity-0">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Let&apos;s Build Together
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed">
              Have an idea, project, or opportunity you&apos;d like to discuss? Drop me a message, or reach out directly via email or GitHub.
            </p>
          </div>

          <div className="flex flex-col gap-y-4 mt-4">
            <a
              href="mailto:marticastanorodriguez@gmail.com"
              className="flex items-center gap-x-3 p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-yellow-500 dark:hover:border-green-400 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 group-hover:text-yellow-600 dark:group-hover:text-green-400 transition-colors">
                <MailIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-neutral-400 font-medium">Email</span>
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                  marticastanorodriguez@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://github.com/Kore29"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-3 p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-yellow-500 dark:hover:border-green-400 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 group-hover:text-yellow-600 dark:group-hover:text-green-400 transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-neutral-400 font-medium">GitHub</span>
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                  github.com/Kore29
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="contact-form p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/40 backdrop-blur-md shadow-sm opacity-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="name" className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-green-400 transition-all text-sm"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-green-400 transition-all text-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="message" className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-green-400 transition-all text-sm resize-none"
                placeholder="Let's build something awesome..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full gap-2 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 py-6"
            >
              {isSubmitting ? (
                "Sending..."
              ) : submitted ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
