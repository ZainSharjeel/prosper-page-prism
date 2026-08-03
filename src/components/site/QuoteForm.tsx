import { useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sending, setSending] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
          setSending(false);
          (e.target as HTMLFormElement).reset();
          toast.success("Thanks! We'll call you back shortly.");
        }, 500);
      }}
      className="rounded-lg bg-navy p-6 shadow-panel md:p-8"
    >
      {!compact && (
        <img
          src={logo}
          alt=""
          width={1024}
          height={1024}
          loading="lazy"
          className="mx-auto mb-4 h-28 w-auto"
        />
      )}
      <h2 className="text-center text-3xl font-extrabold uppercase text-navy-foreground">
        Get a Free Quote
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-navy-foreground">Full Name *</span>
          <input
            required
            name="name"
            placeholder="John Smith"
            className="mt-2 w-full rounded-md border-0 bg-background px-3 py-3 text-foreground outline-none ring-gold focus:ring-2"
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-navy-foreground">Phone *</span>
          <input
            required
            name="phone"
            type="tel"
            placeholder="(412) 555-1234"
            className="mt-2 w-full rounded-md border-0 bg-background px-3 py-3 text-foreground outline-none ring-gold focus:ring-2"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-bold text-navy-foreground">
          Short message about your needs *
        </span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Tell us what's going on — wet basement, foundation crack, sump pump..."
          className="mt-2 w-full rounded-md border-0 bg-background px-3 py-3 text-foreground outline-none ring-gold focus:ring-2"
        />
      </label>

      <label className="mt-4 flex items-start gap-3">
        <input required type="checkbox" className="mt-1 h-4 w-4 accent-[var(--gold)]" />
        <span className="text-xs font-semibold leading-relaxed text-navy-foreground">
          I agree to the terms &amp; conditions provided by the company. By providing my phone
          number, I agree to receive text messages from the business.
        </span>
      </label>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-md bg-gold px-6 py-4 text-lg font-extrabold uppercase tracking-wide text-gold-foreground transition hover:brightness-95 disabled:opacity-70"
      >
        {sending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
