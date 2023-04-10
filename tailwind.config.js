/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        CentraNo2Medium: "CentraNo2-Medium",
        CentraNo2MediumItalic: "CentraNo2-MediumItalic",
        CentraNo2Black: "CentraNo2-Black",
        CentraNo2BlackItalic: "CentraNo2-BlackItalic",
        CentraNo2Bold: "CentraNo2-Bold",
        CentraNo2BoldItalic: "CentraNo2-BoldItalic",
        CentraNo2Book: "CentraNo2-Book",
        CentraNo2BookItalic: "CentraNo2-BookItalic",
        CentraNo2Extrabold: "CentraNo2-Extrabold",
        CentraNo2ExtraboldItalic: "CentraNo2-ExtraboldItalic",
        CentraNo2Hairline: "CentraNo2-Hairline",
        CentraNo2Hairline: "CentraNo2-Hairline",
        CentraNo2Light: "CentraNo2-Light",
        CentraNo2LightItalic: "CentraNo2-LightItalic",
        CentraNo2Thin: "CentraNo2-Thin",
        CentraNo2ThinItalic: "CentraNo2-ThinItalic",
      },
      colors: {
        "ac-primary-1": "#00A8A4",
        "ac-primary-2": "#008790",
        "ac-primary-3": "#006678",

        "ac-white": "#FFFFFF",
        "ac-gray-1": "#F4F4F6",
        "ac-gray-2": "#E9E9ED",
        "ac-gray-3": "#DDDDE3",
        "ac-gray-4": "#D2D2DA",
        "ac-gray-5": "#C7C7D1",
        "ac-gray-6": "#BCBCC8",
        "ac-gray-8": "#A5A5B6",
        "ac-gray-12": "#71738B",
        "ac-gray-22": "#0D0F35",

        "ac-primary-text": "#0D0F35",
        "ac-secondary-text": "#71738B",
        "ac-tertiary-text": "#BCBCC8",
        "ac-disabled-text": "#BCBCC8",
      },
    },
  },
  plugins: [],
};
