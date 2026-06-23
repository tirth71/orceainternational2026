import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition hover:scale-105"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
