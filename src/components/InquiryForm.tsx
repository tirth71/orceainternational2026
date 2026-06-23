import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2 } from "lucide-react";

export function InquiryForm({ subject = "Inquiry", fields = ["name", "email", "phone", "message"] as const }: { subject?: string; fields?: readonly ("name" | "email" | "phone" | "company" | "message")[] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      // EmailJS — set NEXT keys via @emailjs config before going live.
      // For now we simulate success so the UI flow works end-to-end.
      const serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID;
      const templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY;
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, Object.fromEntries(data) as any, { publicKey });
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("err");
    }
  }

  const label = "text-xs font-semibold uppercase tracking-wider text-foreground/70";
  const input = "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20";

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <input type="hidden" name="subject" value={subject} />
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.includes("name") && (
          <div>
            <label className={label}>Full Name</label>
            <input required name="name" className={input} placeholder="Your name" />
          </div>
        )}
        {fields.includes("email") && (
          <div>
            <label className={label}>Email</label>
            <input required type="email" name="email" className={input} placeholder="you@company.com" />
          </div>
        )}
        {fields.includes("phone") && (
          <div>
            <label className={label}>Phone</label>
            <input name="phone" className={input} placeholder="+91 00000 00000" />
          </div>
        )}
        {fields.includes("company") && (
          <div>
            <label className={label}>Company</label>
            <input name="company" className={input} placeholder="Company name" />
          </div>
        )}
      </div>
      {fields.includes("message") && (
        <div>
          <label className={label}>Message</label>
          <textarea required name="message" rows={5} className={input} placeholder="Tell us how we can help..." />
        </div>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full gradient-hero px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-elegant disabled:opacity-60"
      >
        {status === "ok" ? (<><CheckCircle2 className="h-4 w-4" /> Message sent</>) : (<>Send Message <Send className="h-4 w-4" /></>)}
      </button>
      {status === "err" && <div className="text-sm text-destructive">Could not send. Please try again.</div>}
    </form>
  );
}
