import { Metadata } from "next";

export function constructMetaData({
  title = "Jason Zubiate 🤙",
  description = "Frontend Engineer specializing in React and Next.js. Explore a collection of my projects showcasing mastery in modern web development and discover how I bring ideas to life with code.",
  image = "/assets/img/portfolio.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@jasonzubiate",
    },
    icons,
    metadataBase: new URL("https://www.jasonzubiate.com/"),
    themeColor: "#efefef",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
