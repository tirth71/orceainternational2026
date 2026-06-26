import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

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
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105 active:scale-95"
      >
        {/* Official WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="h-8 w-8"
          fill="white"
        >
          <path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6-.8-8.6-2.3l-.6-.4-6.2 1.6 1.6-6-.4-.6C8.8 30 8 27.1 8 24 8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16zm8.7-11.8c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2s-1.2 1.5-1.4 1.8c-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.8-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.4-.8.2-.3.1-.6 0-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.8-.7-1-.7h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.5-1.6 3.8s1.6 4.4 1.9 4.7c.2.3 3.2 5 7.9 7 1.1.5 2 .8 2.7 1 1.1.3 2.2.3 3 .2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.2-.2-.5-.3-1-.5z" />
        </svg>
      </a>
    </div>
  );
}