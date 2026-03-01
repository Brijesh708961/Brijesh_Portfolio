import React from "react";

const Footer = () => {
  return (
    <div className="py-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <span className="uppercase text-2xl font-bold">THE-Brijesh</span>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/Brijesh708961"
              className="text-teal-800 hover:text-teal-900 transition"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>

            <a
              href="https://x.com/Brijesh91173661"
              className="text-teal-800 hover:text-teal-900 transition"
            >
              <i class="fa-brands fa-twitter text-2xl"></i>
            </a>

            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              className="text-teal-800 hover:text-teal-900 transition"
            >
              <i class="fa-brands fa-linkedin text-2xl"></i>
            </a>
          </div>
          <div className="text-zinc-900 text-sm">
            @2026 The-Brijesh Developer, All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
