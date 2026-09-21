import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

/**
 * Privacy-friendly YouTube embed (two-click solution):
 * Nothing is loaded from YouTube until the visitor actively clicks play.
 * After that, the video runs via youtube-nocookie.com (no tracking cookies).
 */
export const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Video abspielen: ${title}`}
      className="group relative block w-full aspect-video rounded-2xl overflow-hidden shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        width={480}
        height={360}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent text-accent-foreground shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
          <Play className="h-7 w-7 md:h-9 md:w-9 fill-current ml-1" />
        </span>
      </span>
      <span className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-left">
        <span className="block text-sm md:text-base font-display font-semibold text-white drop-shadow-md">
          {title}
        </span>
        <span className="block text-xs md:text-sm text-white/80 mt-0.5">
          Bei Klick wird das Video von YouTube geladen (datenschutzfreundlich, ohne Cookies).
        </span>
      </span>
    </button>
  );
};
