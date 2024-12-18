import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindcssAnimationDelay from 'tailwindcss-animation-delay';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '430px',
      md: '768px',
      lg: '1080px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1080px',
      },
    },
    extend: {
      colors: {
        y: {
          wall: {
            DEFAULT: '#bb000d',
            bo: '#75000A',
          },
          card: {
            DEFAULT: '#FFFAF4',
            header: '#AB1700',
          },
          tab: {
            bo: '#513411',
            bg: '#ffc2c2',
            t: '#513510',
            active: {
              bg: '#d73b39',
              bo: '#feaa48',
              t: '#ffffff',
            },
          },
          footer: {
            bg: '#393939',
            bg2: '#585858',
          },
          slider: {
            'nav-bg': '#8D1D26',
          },
          't-base': '#4D4B4B',
          border: '#472600',
          secondary: '#E03232',
          bg: '#ffeedb',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #FFFFE4, #FFB75D, #FFFFE4)',
        'gradient-main': 'linear-gradient(to bottom, #D84029, #FF792F)',
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssAnimationDelay],
} satisfies Config;
