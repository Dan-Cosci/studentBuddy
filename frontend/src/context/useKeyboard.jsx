import { useEffect, useState } from "react";

export default function useKeyboard(keys, callback) {
  useEffect(() => {
    const handler = (e) => {
      // prevent firing while typing
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      ) return;

      const match =
        e.ctrlKey === !!keys.ctrl &&
        e.shiftKey === !!keys.shift &&
        e.altKey === !!keys.alt &&
        e.key.toLowerCase() === keys.key.toLowerCase();

      if (match) {
        e.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [callback, keys]);
}
