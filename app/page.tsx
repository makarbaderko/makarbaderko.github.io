'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTelegram, FaWhatsapp, FaFileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#f4f1eb]">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="text-center">
            <div className="w-64 h-64 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full shadow-lg overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Makar Baderko"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                  quality={100}
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-[#2c3e50] mb-4">
              Hey, I'm Makar Baderko!
            </h1>
            <p className="text-xl text-[#34495e] mb-4">
              Макар Бадерко
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            {/* Resume and CV Links */}
            <div className="flex justify-center space-x-4">
              <Link 
                href="/resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#e8e4dd] text-[#2c3e50] rounded-full hover:bg-[#d8d4cd] transition-colors border border-[#b4b0a9]"
              >
                <FaFileAlt className="w-5 h-5" />
                <span>Résumé</span>
              </Link>
              <Link 
                href="/cv.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#e8e4dd] text-[#2c3e50] rounded-full hover:bg-[#d8d4cd] transition-colors border border-[#b4b0a9]"
              >
                <FaFileAlt className="w-5 h-5" />
                <span>CV</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Link href="https://t.me/makarbaderko" className="text-[#34495e] hover:text-[#2c3e50] transition-colors">
                <FaTelegram className="w-8 h-8" />
              </Link>
              <Link href="mailto:makarbaderko@gmail.com" className="text-[#34495e] hover:text-[#2c3e50] transition-colors">
                <MdEmail className="w-8 h-8" />
              </Link>
              <Link href="http://wa.me/+79853462382" className="text-[#34495e] hover:text-[#2c3e50] transition-colors">
                <FaWhatsapp className="w-8 h-8" />
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-[#34495e]">
              I'm a 17-year-old Software Engineer specializing in Data Science and Machine Learning.
            </p>
            <p className="text-[#34495e]">
              I mostly write code in Python and C++, however I'm also familiar with languages like C and JavaScript. 
              I work with Scikit-learn, Gradient Boosting, Tensorflow, Pytorch, Pandas, Matplotlib, Git, Docker, SQL, 
              Arduino, Fusion 360, LATEX and many other tools.
            </p>
            <p className="text-[#34495e]">
              I study foreign languages as a hobby. I have a C1 level in English (certified), and I approximate my 
              German level as B1, however it has not yet been proved by any certificate. Recently, I've started 
              learning Italian.
            </p>
            <p className="text-[#34495e]">
              More detailed information about my skills and achievements can be found in my résumé.
            </p>
            <p className="text-sm text-[#5f6c7b] mt-8">
              Last updated on July 10, 2025
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 
