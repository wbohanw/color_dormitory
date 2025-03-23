// Color data for the application
export interface ColorType {
  id: number;
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  description?: string;
  category?: string;
}

export interface ColorVariation {
  mainColor: ColorType;
  variations: ColorType[];
}

// Main colors with their variations
export const mainColorsWithVariations: ColorVariation[] = [
  {
    mainColor: { id: 1, name: 'Crimson', hex: '#DC143C', rgb: 'rgb(220, 20, 60)', hsl: 'hsl(348, 83%, 47%)', description: 'A strong, bright, deep red color that symbolizes love, passion, and heat.', category: 'red' },
    variations: [
      { id: 101, name: 'Crimson Light', hex: '#FF4D6D', rgb: 'rgb(255, 77, 109)', hsl: 'hsl(348, 100%, 65%)' },
      { id: 102, name: 'Crimson Dark', hex: '#B01030', rgb: 'rgb(176, 16, 48)', hsl: 'hsl(348, 83%, 37%)' },
      { id: 103, name: 'Crimson Pale', hex: '#F7ACBC', rgb: 'rgb(247, 172, 188)', hsl: 'hsl(348, 83%, 80%)' },
    ]
  },
  {
    mainColor: { id: 2, name: 'Teal', hex: '#008080', rgb: 'rgb(0, 128, 128)', hsl: 'hsl(180, 100%, 25%)', description: 'A medium blue-green color that symbolizes sophistication, depth and stability.', category: 'green' },
    variations: [
      { id: 201, name: 'Teal Light', hex: '#5FB5B5', rgb: 'rgb(95, 181, 181)', hsl: 'hsl(180, 40%, 54%)' },
      { id: 202, name: 'Teal Dark', hex: '#006666', rgb: 'rgb(0, 102, 102)', hsl: 'hsl(180, 100%, 20%)' },
      { id: 203, name: 'Teal Pale', hex: '#99E6E6', rgb: 'rgb(153, 230, 230)', hsl: 'hsl(180, 60%, 75%)' },
    ]
  },
  {
    mainColor: { id: 3, name: 'Gold', hex: '#FFD700', rgb: 'rgb(255, 215, 0)', hsl: 'hsl(51, 100%, 50%)', description: 'A bright, metallic yellow color that represents wealth, prosperity, and achievement.', category: 'yellow' },
    variations: [
      { id: 301, name: 'Gold Light', hex: '#FFE766', rgb: 'rgb(255, 231, 102)', hsl: 'hsl(51, 100%, 70%)' },
      { id: 302, name: 'Gold Dark', hex: '#CCA000', rgb: 'rgb(204, 160, 0)', hsl: 'hsl(49, 100%, 40%)' },
      { id: 303, name: 'Gold Pale', hex: '#FFF4B3', rgb: 'rgb(255, 244, 179)', hsl: 'hsl(51, 100%, 85%)' },
    ]
  },
  {
    mainColor: { id: 4, name: 'Indigo', hex: '#4B0082', rgb: 'rgb(75, 0, 130)', hsl: 'hsl(275, 100%, 25%)', description: 'A deep, rich purple-blue color that represents intuition, perception, and spiritual awareness.', category: 'purple' },
    variations: [
      { id: 401, name: 'Indigo Light', hex: '#7F38B5', rgb: 'rgb(127, 56, 181)', hsl: 'hsl(275, 53%, 46%)' },
      { id: 402, name: 'Indigo Dark', hex: '#36005E', rgb: 'rgb(54, 0, 94)', hsl: 'hsl(275, 100%, 18%)' },
      { id: 403, name: 'Indigo Pale', hex: '#C3A0E1', rgb: 'rgb(195, 160, 225)', hsl: 'hsl(275, 53%, 75%)' },
    ]
  },
  {
    mainColor: { id: 5, name: 'Coral', hex: '#FF7F50', rgb: 'rgb(255, 127, 80)', hsl: 'hsl(16, 100%, 66%)', description: 'A vibrant pinkish-orange that represents energy, enthusiasm, and warmth.', category: 'orange' },
    variations: [
      { id: 501, name: 'Coral Light', hex: '#FFAA8A', rgb: 'rgb(255, 170, 138)', hsl: 'hsl(16, 100%, 77%)' },
      { id: 502, name: 'Coral Dark', hex: '#CC5A2B', rgb: 'rgb(204, 90, 43)', hsl: 'hsl(16, 65%, 48%)' },
      { id: 503, name: 'Coral Pale', hex: '#FFD4C4', rgb: 'rgb(255, 212, 196)', hsl: 'hsl(16, 100%, 88%)' },
    ]
  },
  {
    mainColor: { id: 6, name: 'Forest Green', hex: '#228B22', rgb: 'rgb(34, 139, 34)', hsl: 'hsl(120, 61%, 34%)', description: 'A deep, natural green that represents growth, harmony, and the connection to nature.', category: 'green' },
    variations: [
      { id: 601, name: 'Forest Green Light', hex: '#4BB74B', rgb: 'rgb(75, 183, 75)', hsl: 'hsl(120, 42%, 50%)' },
      { id: 602, name: 'Forest Green Dark', hex: '#166A16', rgb: 'rgb(22, 106, 22)', hsl: 'hsl(120, 66%, 25%)' },
      { id: 603, name: 'Forest Green Pale', hex: '#A6DEA6', rgb: 'rgb(166, 222, 166)', hsl: 'hsl(120, 50%, 76%)' },
    ]
  },
  {
    mainColor: { id: 7, name: 'Slate Blue', hex: '#6A5ACD', rgb: 'rgb(106, 90, 205)', hsl: 'hsl(248, 53%, 58%)', description: 'A medium purplish-blue color that represents peace, reliability, and confidence.', category: 'blue' },
    variations: [
      { id: 701, name: 'Slate Blue Light', hex: '#9B8EE0', rgb: 'rgb(155, 142, 224)', hsl: 'hsl(248, 58%, 72%)' },
      { id: 702, name: 'Slate Blue Dark', hex: '#4A3FA5', rgb: 'rgb(74, 63, 165)', hsl: 'hsl(248, 45%, 45%)' },
      { id: 703, name: 'Slate Blue Pale', hex: '#C9C2F0', rgb: 'rgb(201, 194, 240)', hsl: 'hsl(248, 58%, 85%)' },
    ]
  },
  {
    mainColor: { id: 8, name: 'Tomato', hex: '#FF6347', rgb: 'rgb(255, 99, 71)', hsl: 'hsl(9, 100%, 64%)', description: 'A vibrant red-orange color that represents energy, strength, and determination.', category: 'red' },
    variations: [
      { id: 801, name: 'Tomato Light', hex: '#FF8C78', rgb: 'rgb(255, 140, 120)', hsl: 'hsl(9, 100%, 74%)' },
      { id: 802, name: 'Tomato Dark', hex: '#CC3F26', rgb: 'rgb(204, 63, 38)', hsl: 'hsl(9, 69%, 47%)' },
      { id: 803, name: 'Tomato Pale', hex: '#FFCCC2', rgb: 'rgb(255, 204, 194)', hsl: 'hsl(9, 100%, 88%)' },
    ]
  },
  {
    mainColor: { id: 9, name: 'Violet', hex: '#EE82EE', rgb: 'rgb(238, 130, 238)', hsl: 'hsl(300, 76%, 72%)', description: 'A light purple color that represents imagination, spirituality, and luxury.', category: 'purple' },
    variations: [
      { id: 901, name: 'Violet Light', hex: '#F3A9F3', rgb: 'rgb(243, 169, 243)', hsl: 'hsl(300, 76%, 81%)' },
      { id: 902, name: 'Violet Dark', hex: '#BF55BF', rgb: 'rgb(191, 85, 191)', hsl: 'hsl(300, 42%, 54%)' },
      { id: 903, name: 'Violet Pale', hex: '#F9D2F9', rgb: 'rgb(249, 210, 249)', hsl: 'hsl(300, 76%, 90%)' },
    ]
  },
  {
    mainColor: { id: 10, name: 'Steel Blue', hex: '#4682B4', rgb: 'rgb(70, 130, 180)', hsl: 'hsl(207, 44%, 49%)', description: 'A medium blue color that represents reliability, stability, and professionalism.', category: 'blue' },
    variations: [
      { id: 1001, name: 'Steel Blue Light', hex: '#7AA7D3', rgb: 'rgb(122, 167, 211)', hsl: 'hsl(207, 53%, 65%)' },
      { id: 1002, name: 'Steel Blue Dark', hex: '#2F5F8A', rgb: 'rgb(47, 95, 138)', hsl: 'hsl(207, 49%, 36%)' },
      { id: 1003, name: 'Steel Blue Pale', hex: '#B6D0E7', rgb: 'rgb(182, 208, 231)', hsl: 'hsl(207, 53%, 81%)' },
    ]
  }
];

// Featured color collections
export const featuredColorCollections = [
  {
    id: 1,
    name: 'Earth Tones',
    description: 'Natural colors inspired by soil, wood, and stone',
    colors: [
      { id: 1101, name: 'Sienna', hex: '#A0522D', rgb: 'rgb(160, 82, 45)', hsl: 'hsl(19, 56%, 40%)' },
      { id: 1102, name: 'Sage', hex: '#B9C2B7', rgb: 'rgb(185, 194, 183)', hsl: 'hsl(108, 8%, 74%)' },
      { id: 1103, name: 'Umber', hex: '#635147', rgb: 'rgb(99, 81, 71)', hsl: 'hsl(20, 16%, 33%)' },
      { id: 1104, name: 'Terracotta', hex: '#D2691E', rgb: 'rgb(210, 105, 30)', hsl: 'hsl(25, 75%, 47%)' },
      { id: 1105, name: 'Taupe', hex: '#8B7E74', rgb: 'rgb(139, 126, 116)', hsl: 'hsl(26, 9%, 50%)' }
    ]
  },
  {
    id: 2,
    name: 'Ocean Palette',
    description: 'Refreshing colors inspired by the sea',
    colors: [
      { id: 1201, name: 'Deep Blue', hex: '#0D4C92', rgb: 'rgb(13, 76, 146)', hsl: 'hsl(210, 83%, 31%)' },
      { id: 1202, name: 'Aqua', hex: '#59C1BD', rgb: 'rgb(89, 193, 189)', hsl: 'hsl(178, 48%, 55%)' },
      { id: 1203, name: 'Seafoam', hex: '#CFF5E7', rgb: 'rgb(207, 245, 231)', hsl: 'hsl(163, 67%, 88%)' },
      { id: 1204, name: 'Navy', hex: '#0D1282', rgb: 'rgb(13, 18, 130)', hsl: 'hsl(238, 82%, 28%)' },
      { id: 1205, name: 'Coral Reef', hex: '#F96666', rgb: 'rgb(249, 102, 102)', hsl: 'hsl(0, 93%, 69%)' }
    ]
  },
  {
    id: 3,
    name: 'Pastel Dreams',
    description: 'Soft, muted colors for a gentle aesthetic',
    colors: [
      { id: 1301, name: 'Baby Blue', hex: '#A8D8EA', rgb: 'rgb(168, 216, 234)', hsl: 'hsl(197, 59%, 79%)' },
      { id: 1302, name: 'Lavender', hex: '#DFCCFB', rgb: 'rgb(223, 204, 251)', hsl: 'hsl(265, 83%, 89%)' },
      { id: 1303, name: 'Mint', hex: '#D0F5BE', rgb: 'rgb(208, 245, 190)', hsl: 'hsl(102, 71%, 85%)' },
      { id: 1304, name: 'Peach', hex: '#FDCEDF', rgb: 'rgb(253, 206, 223)', hsl: 'hsl(337, 93%, 90%)' },
      { id: 1305, name: 'Cream', hex: '#FFF8EA', rgb: 'rgb(255, 248, 234)', hsl: 'hsl(43, 100%, 96%)' }
    ]
  },
  {
    id: 4,
    name: 'Bold Statement',
    description: 'Vivid colors that stand out and make an impact',
    colors: [
      { id: 1401, name: 'Electric Blue', hex: '#0081C9', rgb: 'rgb(0, 129, 201)', hsl: 'hsl(201, 100%, 39%)' },
      { id: 1402, name: 'Magenta', hex: '#D63484', rgb: 'rgb(214, 52, 132)', hsl: 'hsl(330, 64%, 52%)' },
      { id: 1403, name: 'Lime', hex: '#5BB318', rgb: 'rgb(91, 179, 24)', hsl: 'hsl(98, 76%, 40%)' },
      { id: 1404, name: 'Amber', hex: '#FF9F29', rgb: 'rgb(255, 159, 41)', hsl: 'hsl(33, 100%, 58%)' },
      { id: 1405, name: 'Fuchsia', hex: '#FF0080', rgb: 'rgb(255, 0, 128)', hsl: 'hsl(330, 100%, 50%)' }
    ]
  }
];

// Original set of colors for backward compatibility
export const colorData: ColorType[] = mainColorsWithVariations.map(item => item.mainColor);

// Utility functions for color manipulation

// Convert hex to RGB
export const hexToRgb = (hex: string): { r: number, g: number, b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

// Convert RGB to HSL
export const rgbToHsl = (r: number, g: number, b: number): { h: number, s: number, l: number } => {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    
    h /= 6;
  }

  return { 
    h: Math.round(h * 360), 
    s: Math.round(s * 100), 
    l: Math.round(l * 100) 
  };
};

// Generate a random color
export const generateRandomColor = (): ColorType => {
  const randomHex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  const rgb = hexToRgb(randomHex);
  
  if (!rgb) {
    return generateRandomColor(); // Recursively try again if conversion failed
  }
  
  const { r, g, b } = rgb;
  const hsl = rgbToHsl(r, g, b);
  
  return {
    id: Math.floor(Math.random() * 10000),
    name: `Random Color ${Math.floor(Math.random() * 100)}`,
    hex: randomHex,
    rgb: `rgb(${r}, ${g}, ${b})`,
    hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
  };
};

// Mix multiple colors to create a gradient
export const mixColors = (colors: ColorType[]): string => {
  if (colors.length === 0) return 'transparent';
  if (colors.length === 1) return colors[0].hex;
  
  const colorStops = colors.map((color, index) => {
    const percentage = (index / (colors.length - 1)) * 100;
    return `${color.hex} ${percentage}%`;
  }).join(', ');
  
  return `linear-gradient(to right, ${colorStops})`;
};

// Function to get code snippets for a color
export const getCodeSnippets = (color: ColorType) => {
  return {
    css: `.element {\n  color: ${color.hex};\n  /* OR */\n  color: ${color.rgb};\n  /* OR */\n  color: ${color.hsl};\n}`,
    
    react: `// Using inline styles\n<div style={{ color: '${color.hex}' }}>\n  Colored text\n</div>`,
    
    tailwind: `// First, add the color to your tailwind.config.js\n// module.exports = {\n//   theme: {\n//     extend: {\n//       colors: {\n//         '${color.name.toLowerCase().replace(' ', '-')}': '${color.hex}',\n//       }\n//     }\n//   }\n// }\n\n// Then use it in your component\n<div className="text-${color.name.toLowerCase().replace(' ', '-')}">\n  Colored text\n</div>`,
    
    scss: `$${color.name.toLowerCase().replace(' ', '-')}: ${color.hex};\n\n.element {\n  color: $${color.name.toLowerCase().replace(' ', '-')};\n}`,
  };
}; 