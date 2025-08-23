// components/Footer.tsx
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 py-5 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Footer text */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-5">
          <Link href="https://www.facebook.com/profile.php?id=61552904974369" target="_blank">
            <Facebook className="w-5 h-5 hover:text-blue-500 transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/sajalpatra2005/" target="_blank">
            <Instagram className="w-5 h-5 hover:text-pink-500 transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/sajal-patra-975007275/" target="_blank">
            <Linkedin className="w-5 h-5 hover:text-blue-400 transition-colors" />
          </Link>
          <Link href="https://github.com/sajalpatra" target="_blank">
            <Github className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
