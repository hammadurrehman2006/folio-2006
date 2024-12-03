'use client';
import { TypewriterEffect } from "./typewriter";

export function TypeText({ data }: any) {
  // Define the specific words to be highlighted in blue
  const highlightWords = ["Muhammad", "Hammad", "ur", "Rehman,", "Karachi,", "Pakistan"];

  // Split the text into words
  const words = data.split(" ").map((word: any, index: any) => {
    const isHighlighted = highlightWords.includes(word) || index === data.split(" ").length - 1; // Check if it's a highlighted word or the last word
    return {
      text: word,
      className: isHighlighted ? "text-blue-500 dark:text-blue-500" : "text-white", // Apply blue class to highlighted words or the last word
    };
  });

  return (
    <div className="flex flex-wrap text-left justify-start gap-2 h-auto">
      <TypewriterEffect words={words} />
    </div>
  );
}
