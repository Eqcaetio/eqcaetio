import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";

function BackToTop({ visible }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => scrollToSection("top")}
        className="btn bg-purple-700 border-purple-700 text-white hover:bg-purple-50 hover:text-purple-700"
      >
        ↑
      </button>
    </div>
  );
}

export default BackToTop;
