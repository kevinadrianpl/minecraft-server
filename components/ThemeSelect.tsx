import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Command, Sun, Moon, Code } from "react-feather";
import { cx } from "@/lib/utils";

const THEME_MAP: { [key: string]: { label: string; icon: React.ReactNode } } = {
  dark: {
    label: "Dark",
    icon: <Moon width=".9em" />,
  },
  light: {
    label: "Light",
    icon: <Sun width=".9em" />,
  },
  system: {
    label: "System",
    icon: <Command width=".9em" />,
  },
};

export const ThemeSelect: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme: activeTheme, setTheme, themes } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setTheme(e.target.value);

  const themeList = Array.isArray(themes)
    ? themes.filter((t) => Object.prototype.hasOwnProperty.call(THEME_MAP, t))
    : Object.keys(THEME_MAP);

  const current = activeTheme ?? "system";

  return (
    <div className="relative inline-block">
      <label htmlFor="theme-menu" className="sr-only">
        Toggle theme
      </label>
      <span
        aria-hidden={true}
        className={cx(
          "absolute top-1/2 -translate-y-1/2 left-2 pointer-events-none",
          "opacity-50"
        )}
      >
        {THEME_MAP[current].icon}
      </span>
      <span
        aria-hidden={true}
        className="absolute top-1/2 -translate-y-1/2 right-2 pointer-events-none"
      >
        <Code width=".9em" className="rotate-90 opacity-50" />
      </span>
      <select
        id="theme-menu"
        className={cx(
          "appearance-none rounded-md sm:w-full pl-8 pr-12 border",
          "bg-gray-100 border-gray-200",
          "dark:bg-gray-800 dark:border-gray-700"
        )}
        onChange={handleChange}
        value={current}
      >
        {themeList.map((theme) => {
          return (
            <option key={theme} value={theme}>
              {THEME_MAP[theme].label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
