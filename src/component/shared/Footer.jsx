import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 1. Brand */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">pixgen</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Create production-ready AI visuals in seconds. Built for speed,
              scale, and creativity.
            </p>
          </div>

          {/* 2. Product */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/generate" className="hover:text-white">
                  Generate
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-white">
                  Company
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. CTA */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-white">
              Start creating
            </h3>
            <p className="text-sm text-gray-400">
              Generate your first AI image today.
            </p>
            <Link href="/generate">
              <button className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p className="text-center sm:text-left">
            © 2026 pixgen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
