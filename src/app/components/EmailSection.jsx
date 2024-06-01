"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sentEmail, setSentEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=naziakarim@iut-dhaka.edu&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    window.open(mailtoLink, "_blank");
    setEmail("");
    setSubject("");
    setMessage("");
    setSentEmail(true);
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md inline-flex">
          My inbox is always open to connect and grow.
          <br></br>Contact me via{" "}
        </p>
        <div className="socials flex flex-row gap-4 mb-4">
          <Link
            href="https://www.facebook.com/profile.php?id=100069241624137&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/images/fb.png"
              alt="Facebook Icon"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href="https://github.com/Nazia-Karim-Khan-Oishee/Nazia-Karim-Khan-Oishee/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/images/githublogo.png"
              alt="Github Icon"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href="https://instagram.com/_nazia_oishee_"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/images/insta.jpeg"
              alt="Instagram Icon"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nazia-karim-khan-oishee-032a8a222"
            target="_blank"
            rel="noopener noreferrer">
            <img
              width={50}
              height={50}
              alt="LinkedIn icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/64px-LinkedIn_icon.svg.png?20210220164014"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {sentEmail && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-xl">
              Send Email
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
