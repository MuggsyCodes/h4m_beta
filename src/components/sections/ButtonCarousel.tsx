import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const phrases = [
  "Testosterone",
  "Erectile Dysfunction",
  "Heart Health",
  "Fertility",
  "Look Younger",
  "Think Sharper",
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
          "relative h-full w-[19rem] cursor-pointer overflow-hidden rounded-full border-2 p-4",
          "bg-transparent border-white",
          "hover:bg-white/10 transition-colors duration-200"
        )}
      >
        <blockquote className="text-xl text-white text-center">
          {text}
        </blockquote>
      </figure>
    </div>
  );
};

export function ScrollButtons() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee reverse pauseOnHover className="[--duration:60s]">
        {phrases.map((phrase) => (
          <PhraseCard key={phrase} text={phrase} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-black via-black/95 to-transparent"></div>
    </div>
  );
}
