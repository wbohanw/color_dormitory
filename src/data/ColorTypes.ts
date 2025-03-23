export interface ColorType {
  id: number;
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  description?: string;
  category?: string;
  gradientColors?: string[]; // Array of hex colors for gradient
}

// Convert hex to RGB
export const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return 'rgb(0, 0, 0)';
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `rgb(${r}, ${g}, ${b})`;
};

// Generate a random color
export const generateRandomColor = (): ColorType => {
  const randomHex = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  return {
    id: Date.now(),
    name: 'Random Color',
    hex: randomHex,
    rgb: hexToRgb(randomHex),
    hsl: 'hsl(0, 0%, 0%)' // Placeholder
  };
};

// Get a random array element
export const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Get n random unique elements from an array
export const getRandomUniqueElements = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, array.length));
};

// Fix invalid hex codes
export const fixHexCode = (hex: string): string => {
  const formattedHex = hex.startsWith('#') ? hex : `#${hex}`;
  // Fix 'O' instead of '0', 'r' instead of 'f', etc.
  return formattedHex.replace(/[O]/g, '0').replace(/[r]/g, 'f');
};

// Create CSS gradient from an array of colors
export const createGradient = (colors: string[]): string => {
  if (colors.length === 0) return 'transparent';
  if (colors.length === 1) return colors[0];
  
  return `linear-gradient(to right, ${colors.join(', ')})`;
};

// Mix colors
export const mixColors = (colors: ColorType[]): string => {
  if (colors.length === 0) return 'transparent';
  const avg = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const hexToRgbValues = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };
  const rgbToHex = (r: number, g: number, b: number) => 
    `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  const rgbs = colors.map(color => hexToRgbValues(color.hex));
  const mixedRgb = {
    r: Math.round(avg(rgbs.map(rgb => rgb.r))),
    g: Math.round(avg(rgbs.map(rgb => rgb.g))),
    b: Math.round(avg(rgbs.map(rgb => rgb.b)))
  };
  return rgbToHex(mixedRgb.r, mixedRgb.g, mixedRgb.b);
}; 