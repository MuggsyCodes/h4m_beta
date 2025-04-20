import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const phrases = [
  "Testosterone",
  "Erectile Dysfunction",
  "Heart Health",
  "Fertility",
  "Look Younger, Think Sharper",
  "Perform Better",
  "Weight Loss",
  "Stop Hair Loss",
  "Sleep Better",
];

const PhraseCard = ({ text }: { text: string }) => {
  return (
    <div className="px-2">
      <figure
        className={cn(
          "relative h-full w-64 cursor-pointer overflow-hidden rounded-full border-2 p-4",
          "bg-gray-900 border-blue-500",
          "hover:bg-gray-800 transition-colors duration-200"
        )}
      >
        <blockquote className="text-sm text-white text-center">
          {text}
        </blockquote>
      </figure>
    </div>
  );
};

export function ScrollButtons() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {phrases.map((phrase) => (
          <PhraseCard key={phrase} text={phrase} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
