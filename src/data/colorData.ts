// Color data for the application
export interface ColorType {
  id: number;
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
}

export const colorData: ColorType[] = [
  { id: 1, name: 'Crimson', hex: '#DC143C', rgb: 'rgb(220, 20, 60)', hsl: 'hsl(348, 83%, 47%)' },
  { id: 2, name: 'Teal', hex: '#008080', rgb: 'rgb(0, 128, 128)', hsl: 'hsl(180, 100%, 25%)' },
  { id: 3, name: 'Gold', hex: '#FFD700', rgb: 'rgb(255, 215, 0)', hsl: 'hsl(51, 100%, 50%)' },
  { id: 4, name: 'Indigo', hex: '#4B0082', rgb: 'rgb(75, 0, 130)', hsl: 'hsl(275, 100%, 25%)' },
  { id: 5, name: 'Coral', hex: '#FF7F50', rgb: 'rgb(255, 127, 80)', hsl: 'hsl(16, 100%, 66%)' },
  { id: 6, name: 'Forest Green', hex: '#228B22', rgb: 'rgb(34, 139, 34)', hsl: 'hsl(120, 61%, 34%)' },
  { id: 7, name: 'Slate Blue', hex: '#6A5ACD', rgb: 'rgb(106, 90, 205)', hsl: 'hsl(248, 53%, 58%)' },
  { id: 8, name: 'Tomato', hex: '#FF6347', rgb: 'rgb(255, 99, 71)', hsl: 'hsl(9, 100%, 64%)' },
  { id: 9, name: 'Violet', hex: '#EE82EE', rgb: 'rgb(238, 130, 238)', hsl: 'hsl(300, 76%, 72%)' },
  { id: 10, name: 'Steel Blue', hex: '#4682B4', rgb: 'rgb(70, 130, 180)', hsl: 'hsl(207, 44%, 49%)' },
  { id: 11, name: 'Orchid', hex: '#DA70D6', rgb: 'rgb(218, 112, 214)', hsl: 'hsl(302, 59%, 65%)' },
  { id: 12, name: 'Sienna', hex: '#A0522D', rgb: 'rgb(160, 82, 45)', hsl: 'hsl(19, 56%, 40%)' },
];

// Function to get code snippets for a color
export const getCodeSnippets = (color: ColorType) => {
  return {
    css: `.element {\n  color: ${color.hex};\n  /* OR */\n  color: ${color.rgb};\n  /* OR */\n  color: ${color.hsl};\n}`,
    
    react: `// Using inline styles\n<div style={{ color: '${color.hex}' }}>\n  Colored text\n</div>`,
    
    tailwind: `// First, add the color to your tailwind.config.js\n// module.exports = {\n//   theme: {\n//     extend: {\n//       colors: {\n//         '${color.name.toLowerCase().replace(' ', '-')}': '${color.hex}',\n//       }\n//     }\n//   }\n// }\n\n// Then use it in your component\n<div className="text-${color.name.toLowerCase().replace(' ', '-')}">\n  Colored text\n</div>`,
    
    scss: `$${color.name.toLowerCase().replace(' ', '-')}: ${color.hex};\n\n.element {\n  color: $${color.name.toLowerCase().replace(' ', '-')};\n}`,
  };
}; 