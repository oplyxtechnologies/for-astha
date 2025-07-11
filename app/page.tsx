"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function HomePage() {
  const [page, setPage] = useState(0);
  const [sending, setSending] = useState(false); // ← NEW

  const messages = [
    "This is the space where I pour my heart out to you.",
    "I am sorry baby, for all the times I made you feel less than you are.",
    "I made a very big mistake, and I know it hurt you deeply.",
    "I never meant to cause you pain, and I regret it every day.",
    "You are the light of my life, and I can't imagine a day without you.",
    "I cherish every moment we spend together, and I want to make it right.",
    "Your smile brightens my darkest days, and your laughter is music to my soul.",
    "I promise to be better, to listen more, and to love you harder.",
    "You deserve all the happiness in the world, and I want to be the one to give it to you.",
    "Thank you for being patient with me, for loving me even when I falter.",
    "I am grateful for your love, your kindness, and your unwavering support.",
    "I know I have a lot to prove, but I am committed to earning your trust back.",
    "You are my everything, and I will do whatever it takes to make you happy.",
    "I love you more than words can express, and I hope you can find it in your heart to forgive me.",
    "I promise to cherish you, to love you fiercely, and to never take you for granted again.",
    "You are my forever, and I am so lucky to have you in my life.",
    "Thank you for being you, for being the amazing person that you are.",
    "I love you to the moon and back, and I will always fight for us.",
    "Together, we can overcome anything. I believe in us.",
    "Let's create beautiful memories together, starting today.",
    "With all my love, always and forever.",
    "Thank you for being the love of my life. 💖",
  ];

  const handleNext = () => {
    if (page < messages.length) setPage((prev) => prev + 1);
  };

  const handleForgive = async () => {
    if (sending) return; // prevent double-clicks
    setSending(true); // show loading state

    const res = await fetch("/api/notify", { method: "POST" });

    setSending(false);

    if (res.ok) {
      alert("Emails sent. Thank you for forgiving me 💖");
    } else {
      alert("Oops… something went wrong.");
    }
  };

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex flex-col items-center justify-start px-4 pt-40">
      {/* Floating Images */}
      <Image
        src="/heart.svg"
        alt="Floating Heart"
        width={40}
        height={40}
        className="absolute top-10 left-8 animate-float-slow opacity-50"
      />
      <Image
        src="/flower.svg"
        alt="Floating Flower"
        width={60}
        height={60}
        className="absolute bottom-12 right-10 animate-float-medium opacity-40"
      />
      <Image
        src="/butterfly.svg"
        alt="Floating Butterfly"
        width={50}
        height={50}
        className="absolute top-1/3 right-20 animate-float-fast opacity-40"
      />

      {/* Floating image of you two */}
      <Image
        src="/us.jpg"
        alt="Us Together"
        width={150}
        height={150}
        className="absolute left-1/2 top-24 -translate-x-1/2 rounded-full border-4 border-white shadow-lg animate-float-medium"
      />

      {/* Message Card */}
      <motion.div
        key={page}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center bg-white/70 backdrop-blur-md p-8 mt-52 rounded-2xl shadow-lg border border-rose-200 z-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-rose-600 mb-4">
          <TypeAnimation
            sequence={[
              "For My Love 🌸",
              2000,
              "Just a little something...",
              2000,
              "To make you smile 💫",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        {page < messages.length ? (
          <>
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-6">
              {messages[page]}
            </p>
            <button
              onClick={handleNext}
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full shadow transition"
            >
              Next 💌
            </button>
          </>
        ) : (
          <>
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-6">
              If you've made it through all of this... please forgive me.
            </p>
            <button
              onClick={handleForgive}
              disabled={sending}
              className="bg-rose-600 hover:bg-rose-700 disabled:opacity-60 text-white px-6 py-2 rounded-full shadow transition"
            >
              {sending ? "Sending…" : "I Forgive You 💖"}
            </button>
          </>
        )}
      </motion.div>
    </main>
  );
}
