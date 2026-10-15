import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nawacraft Pvt. Ltd.",
    short_name: "Nawacraft",
    description: "We craft software that runs businesses. A founding team of 9 specialists in Lalitpur, Nepal.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF9",
    theme_color: "#953553",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
