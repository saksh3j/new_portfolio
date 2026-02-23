"use client";

import { FormEvent, useState } from "react";

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to send message.");
      }

      setStatus("success");
      setFeedback("Message sent successfully.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Unable to send message.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-foreground">
          Name
          <input
            type="text"
            required
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-0 transition-colors focus:border-ring"
            placeholder="Your full name"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Email
          <input
            type="email"
            required
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-0 transition-colors focus:border-ring"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-foreground">
        Subject
        <input
          type="text"
          required
          value={form.subject}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, subject: event.target.value }))
          }
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-0 transition-colors focus:border-ring"
          placeholder="Project inquiry"
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-foreground">
        Message
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          className="w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-0 transition-colors focus:border-ring"
          placeholder="Tell me about your project, timeline, and requirements."
        />
      </label>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {feedback ? (
          <p
            className={`text-sm ${
              status === "success" ? "text-foreground" : "text-destructive"
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
