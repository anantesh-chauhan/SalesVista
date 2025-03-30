// Color design tokens export
export const tokensDark = {
  grey: {
    0: '#ffffff',      // Pure white
    10: '#fafafa',     // Softer off-white
    50: '#f1f3f5',     // Light grey with better contrast
    100: '#e4e7eb',    // Subtle grey
    200: '#d5d9e0',    // Neutral mid-tone
    300: '#b0b8c4',    // Soft slate
    400: '#868e96',    // Muted grey
    500: '#5c636a',    // Strong neutral
    600: '#495057',    // Darker grey
    700: '#343a40',    // Deep charcoal
    800: '#212529',    // Near black
    900: '#17191c',    // Rich black
    1000: '#000000',   // Pure black
  },
  primary: {
    100: '#d9f0e5',    // Lighter green for freshness
    200: '#b3e0cb',    // Soft mint
    300: '#8ccfb0',    // Balanced green
    400: '#66bf96',    // Vibrant yet calm
    500: '#40ae7c',    // Rich primary green
    600: '#339163',    // Deeper green
    700: '#26734a',    // Bold forest green
    800: '#1a5532',    // Darker shade
    900: '#0d3619',    // Deepest green
  },
  secondary: {
    50: '#fff7ed',     // Very light peach
    100: '#ffedd5',    // Warm cream
    200: '#fed7aa',    // Soft apricot
    300: '#fdba74',    // Gentle orange
    400: '#fb923c',    // Vibrant coral
    500: '#f97316',    // Bold secondary orange
    600: '#e8590c',    // Warm sunset
    700: '#c2410c',    // Rich terracotta
    800: '#9a3412',    // Deep rust
    900: '#7f2d0f',    // Darker accent
  },
};

// Reverse color palette function (unchanged)
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// MUI theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[500], // Richer green for prominence
              light: tokensDark.primary[400],
              dark: tokensDark.primary[700],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[600], // Warmer orange for contrast
              light: tokensDark.secondary[400],
              dark: tokensDark.secondary[800],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[600],
              dark: tokensDark.grey[900],
            },
            background: {
              default: tokensDark.grey[900], // Rich black for depth
              alt: tokensDark.grey[800],     // Subtle contrast
              paper: tokensDark.grey[700],   // Added for elevated surfaces
            },
            text: {
              primary: tokensDark.grey[50],  // High contrast text
              secondary: tokensDark.grey[300], // Softer secondary text
            },
          }
        : {
            primary: {
              ...tokensLight.primary,
              main: tokensLight.primary[500], // Bold green for light mode
              light: tokensLight.primary[300],
              dark: tokensLight.primary[700],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensLight.secondary[400], // Bright coral for vibrancy
              light: tokensLight.secondary[200],
              dark: tokensLight.secondary[600],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensLight.grey[600],
              dark: tokensLight.grey[900],
            },
            background: {
              default: tokensLight.grey[10], // Soft off-white for cleanliness
              alt: tokensLight.grey[50],     // Light grey for layering
              paper: tokensLight.grey[0],    // Pure white for cards
            },
            text: {
              primary: tokensLight.grey[900], // Dark text for readability
              secondary: tokensLight.grey[600], // Muted secondary text
            },
          }),
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','), // Modern, clean font
      fontSize: 16, // Slightly larger base size for readability
      h1: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 48, // Larger for emphasis
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 36,
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 28,
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h4: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 22,
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h5: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.6,
      },
      h6: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.6,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none', // Avoid all-caps for a modern look
            borderRadius: 8,       // Softer corners
            padding: '8px 16px',   // Comfortable padding
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,      // Rounded cards for elegance
            boxShadow: mode === 'dark' 
              ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
              : '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
          },
        },
      },
    },
  };
};