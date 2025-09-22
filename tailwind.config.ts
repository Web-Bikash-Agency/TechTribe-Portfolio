/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollDot: { /* ... */ },
        trailEffect: { /* ... */ },
        pulseRing: { /* ... */ },
        floatParticle: { /* ... */ },
        textPulse: { /* ... */ },
      },
      animation: {
        scrollDot: "scrollDot 2s ease-in-out infinite",
        trailEffect: "trailEffect 2s ease-in-out infinite",
        pulseRing: "pulseRing 2s ease-out infinite",
        floatParticle: "floatParticle 3s ease-in-out infinite",
        textPulse: "textPulse 2s ease-in-out infinite",
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
