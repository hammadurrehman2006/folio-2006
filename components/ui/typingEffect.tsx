'use client';
import { TypewriterEffect } from "./typewriter";

interface Word {
  text: string;
  className: string;
}

interface TypeTextProps {
  data: string;
}

export function TypeText({ data }: TypeTextProps) {
  const highlightWords = ["Muhammad", "Hammad", "ur", "Rehman,", "Karachi,", "Pakistan"];

  // Map words with styles
  const words: Word[] = data.split(" ").map((word, index) => {
    const isHighlighted =
      highlightWords.includes(word) || index === data.split(" ").length - 1;
    return {
      text: word,
      className: isHighlighted
        ? "text-blue-500 dark:text-blue-500"
        : "text-white",
    };
  });

  return (
    <div className="flex flex-wrap text-left justify-start gap-2 min-h-24 h-auto">
      <TypewriterEffect words={words} />
    </div>
  );
}
