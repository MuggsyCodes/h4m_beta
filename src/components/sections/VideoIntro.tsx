import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/fScYME6hYts"
        thumbnailSrc="/thumb.jpg"
        thumbnailAlt="Hormones for Me Ryan Intro Video"
      />
    </div>
  );
}
