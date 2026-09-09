import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,md,mdx}', './docs/**/*.{md,mdx}'],
  // Docusaurus ya gestiona el dark mode con el atributo data-theme
  darkMode: ['selector', '[data-theme="dark"]'],
  corePlugins: {
    // Evita choques con los estilos base de Infima (Docusaurus)
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        cp: {
          navy: '#0F2C59',
          cyan: '#00D2FF',
          purple: '#8B5CF6',
          blue: '#3B82F6',
          dark: '#0B0F19',
          surface: '#111827',
          card: '#1E293B',
          border: '#1E293B',
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ["'JetBrains Mono'", "'Fira Code'", 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'ai-glow': 'linear-gradient(135deg, #00D2FF 0%, #3B82F6 50%, #8B5CF6 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
