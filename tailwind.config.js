/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./.src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          bgPrimary: 'var(--background-primary)',
          bgSecondary: 'var(--workos-card-bg, var(--background-secondary))',
          bgSecondaryAlt: 'var(--background-secondary-alt)',
          border: 'var(--workos-border, rgba(128, 128, 128, 0.15))',
          borderSubtle: 'var(--workos-border-subtle, rgba(128, 128, 128, 0.08))',
          hover: 'var(--background-modifier-hover)',
          textNormal: 'var(--text-normal)',
          textMuted: 'var(--text-muted)',
          textAccent: 'var(--text-accent)',
          accent: 'var(--interactive-accent)',
          accentHover: 'var(--interactive-accent-hover)',
          interactive: 'var(--interactive-normal)',
          interactiveHover: 'var(--interactive-hover)',
        }
      }
    },
  },
  plugins: [],
}
