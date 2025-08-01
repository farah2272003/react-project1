import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#111827] py-6 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} Space Y. All rights reserved.
    </footer>
  );
}
