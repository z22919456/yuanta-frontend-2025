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
      fontFamily: {
        title: 'var(--font-title)',
        default: 'var(--font-default)',
      },
      borderWidth: {
        '5': '5px',
        '6': '6px',
      },
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
            t: '#513411',
            bg: '#ffc2c2',
            bo: '#513510',
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
          t: { base: '#4D4B4B', main: '#472600', light: '#FFD400' },
          bo: '#472600',
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
        'gradient-band': 'linear-gradient(to right, #FFB75D, #FFFFE4, #FFB75D)',
        'gradient-main': 'linear-gradient(to bottom, #D84029, #FF792F)',
        'gradient-main2': 'linear-gradient(to bottom, #D84029, #FF792F)',
        'gradient-home-blue': 'linear-gradient(to right, #005ABC, #002956)',
        'gradient-home-red': 'linear-gradient(to right, #D84029, #F2732C)',
        'gradient-triangle':
          'linear-gradient(135deg, #910612 50%, transparent 50%)',
      },
    },
    keyframes: {
      swing: {
        '0%': { transform: 'rotate(-8deg)' },
        '50%': { transform: 'rotate(8deg)' },
        '100%': { transform: 'rotate(-8deg)' },
      },
      pulse: {
        '0%, 100%': { backgroundColor: '#D84029' },
        '50%': { backgroundColor: '#910612' },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      floating: {
        '0%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
        '100%': { transform: 'translateY(0px)' },
      },
      sliding: {
        '0%': { transform: 'translateX(-5px)', opacity: '0.5' },
        '50%': { transform: 'translateX(5px)', opacity: '1' },
        '100%': { transform: 'translateX(-5px)', opacity: '0.5' },
      },
      opacity: {
        '0%': { opacity: '0.8' },
        '100%': { opacity: '1' },
      },
    },
    // 添加自定義動畫
    animation: {
      swing: 'swing 5s ease-in-out infinite',
      pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      spin: 'spin 20s linear infinite',
      floating: 'floating 3s ease-in-out infinite',
      sliding: 'sliding 4s ease-in-out infinite',
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssAnimationDelay],
} satisfies Config;
