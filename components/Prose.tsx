import React from "react";

interface ProseProps {
  children?: React.ReactNode;
}

export const Prose: React.FC<ProseProps> = ({ children }) => {
  return (
    <div className="max-w-none prose prose-a:text-pink-600 dark:prose-invert">
      {children}
    </div>
  );
};
