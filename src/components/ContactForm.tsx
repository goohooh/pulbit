"use client";

import { useState } from "react";

interface ContactFormProps {
  title?: string;
  description?: string;
  compact?: boolean;
}

export default function ContactForm({ 
  title = "문의하기", 
  description = "프로젝트 문의나 데모 요청을 남겨 주세요.",
  compact = false 
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("메시지가 전송되었습니다. 빠르게 연락드리겠습니다.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <div>
      {!compact && (
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-semibold">{title}</h2>
          <p className="text-muted mt-2">{description}</p>
        </div>
      )}
      <form onSubmit={onSubmit} className={`card p-6 space-y-4 ${compact ? 'max-w-md' : ''}`}>
        <div>
          <label className="block text-sm text-muted mb-1" htmlFor="name">이름</label>
          <input 
            id="name" 
            name="name" 
            required 
            className="w-full h-11 px-3 rounded-md border outline-none focus:ring-2 focus:ring-[var(--ring)] bg-background" 
          />
        </div>
        <div>
          <label className="block text-sm text-muted mb-1" htmlFor="email">이메일</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            required 
            className="w-full h-11 px-3 rounded-md border outline-none focus:ring-2 focus:ring-[var(--ring)] bg-background" 
          />
        </div>
        <div>
          <label className="block text-sm text-muted mb-1" htmlFor="message">메시지</label>
          <textarea 
            id="message" 
            name="message" 
            rows={compact ? 3 : 5} 
            required 
            className="w-full px-3 py-2 rounded-md border outline-none focus:ring-2 focus:ring-[var(--ring)] bg-background" 
          />
        </div>
        <button 
          disabled={status === "submitting"} 
          className="inline-flex h-11 px-5 rounded-md bg-brand text-white font-medium hover:opacity-95 disabled:opacity-50"
        >
          {status === "submitting" ? "전송 중..." : "보내기"}
        </button>
        {message && (
          <div className={status === "success" ? "text-green-600" : "text-red-600"}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}