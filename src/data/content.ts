
export const siteContent = {
  colors: {
    primary: "#FF5722", // Vibrant Orange
    secondary: "#2962FF", // Electric Blue
    highlight: "#FFEB3B", // Bright Yellow
    textDark: "#1A1A1A",
    textLight: "#FFFFFF",
  },
  seo: {
    title: "Culinary Haven | SouthEast Asian Flavors",
    metaDescription: "Experience the essence of SouthEast Asian cuisine. Authentic flavors, delivered or dined in.",
  },
  navigation: [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Our Story", path: "/about" },
    { label: "Contact", path: "/#contact" }
  ],
  hero: {
    headline: "Experience the Finest SouthEast Asian Flavors",
    cta: { label: "View Menu", link: "/menu" },
    image: { 
      src: "https://images.unsplash.com/photo-1755742319537-449f661a3190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwYXNpYW4lMjBzdHJlZXQlMjBmb29kJTIwZmVhc3QlMjBmbGF0JTIwbGF5JTIwaGlnaCUyMGNvbnRyYXN0JTIwcG9wJTIwY29sb3JzfGVufDF8fHx8MTc2NDUwMDY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      alt: "Vibrant Asian street food feast" 
    }
  },
  featureBlock: {
    heading: "Discover the Essence",
    body: "Indulge in the diverse and vibrant flavors. From the bustling night markets of Bangkok to the serene rice paddies of Vietnam, our ingredients tell a story of tradition, passion, and uncompromised quality.",
    image: { 
      src: "https://images.unsplash.com/photo-1752654976426-f0de0cbf8bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGVmJTIwcG91cmluZyUyMGJyb3RoJTIwbm9vZGxlJTIwYm93bCUyMHN0ZWFtfGVufDF8fHx8MTc2NDUwMDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      alt: "Chef pouring broth into bowl" 
    }
  },
  storyBlock: {
    heading: "Embark on a Culinary Adventure",
    body: "Each bite tells a story of local ingredients. Immerse yourself in the vibrant tapestry of tastes that define our heritage. Every dish is a chapter in our story, written with spice, fire, and soul.",
    images: [
      { src: "https://images.unsplash.com/photo-1608131922243-00b9ae767eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcGljZXMlMjBpbiUyMHNwb29ucyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NDUwMDEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Spoons of spices" },
      { src: "https://images.unsplash.com/photo-1672172505672-babacdc28071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBc2lhbiUyMHN0cmVldCUyMGZvb2QlMjBtYXJrZXQlMjBuaWdodHxlbnwxfHx8fDE3NjQ1MDAxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Asian street market" },
      { src: "https://images.unsplash.com/photo-1749169337822-d875fd6f4c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDbG9zZSUyMHVwJTIwYXNpYW4lMjBub29kbGVzJTIwc3BpY3l8ZW58MXx8fHwxNzY0NTAwMTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Noodle soup" }
    ],
    cta: { label: "Discover More", link: "/about" }
  },
  menuPreview: {
    heading: "Savor a fusion of exquisite flavors",
    items: [
      { 
        name: "Crispy Tofu Pad Thai", 
        desc: "Classic stir fry with sweet chili peanut sauce.", 
        image: "https://images.unsplash.com/photo-1762305194201-077e7e23ccf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDcmlzcHklMjBUb2Z1JTIwYXNpYW4lMjBkaXNofGVufDF8fHx8MTc2NDUwMDEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
      },
      { 
        name: "Chicken Massaman Curry", 
        desc: "Rich coconut curry with potatoes and slow-cooked chicken.", 
        image: "https://images.unsplash.com/photo-1708782340377-882559d544fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGlja2VuJTIwTWFzc2FtYW4lMjBjdXJyeSUyMGJvd2x8ZW58MXx8fHwxNzY0NTAwMTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
      },
      { 
        name: "Sai Mai Red Curry", 
        desc: "Spicy and aromatic red curry with bamboo shoots and basil.", 
        image: "https://images.unsplash.com/photo-1735233024815-7986206a18a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaGFpJTIwUmVkJTIwQ3VycnklMjBib3dsfGVufDF8fHx8MTc2NDUwMDEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
      }
    ],
    cta: { label: "View Menu", link: "/menu" }
  },
  footer: {
    newsletterHeading: "Stay Up to Date",
    hours: "Mon-Sun: 11am - 10pm",
    address: "500 Terry Francine St, San Francisco, CA",
    socials: [
      { platform: "Instagram", url: "#" },
      { platform: "Facebook", url: "#" },
      { platform: "Twitter", url: "#" }
    ]
  }
};
