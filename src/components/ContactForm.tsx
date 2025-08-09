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
    <div className={compact ? "w-full" : ""}>
      {!compact && (
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-semibold text-center">{title}</h2>
          <p className="text-muted mt-3 text-center text-lg">{description}</p>
        </div>
      )}
      <div className="card p-8 w-full">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-muted mb-2" htmlFor="name">
                이름 *
              </label>
              <input 
                id="name" 
                name="name" 
                required 
                className="w-full h-12 px-4 rounded-lg border border-ring/40 outline-none focus:ring-2 focus:ring-brand focus:border-brand bg-background transition-colors text-base" 
                placeholder="성함을 입력해 주세요"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <label className="block text-sm font-medium text-muted mb-2" htmlFor="email">
                이메일 *
              </label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="w-full h-12 px-4 rounded-lg border border-ring/40 outline-none focus:ring-2 focus:ring-brand focus:border-brand bg-background transition-colors text-base" 
                placeholder="이메일 주소를 입력해 주세요"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted mb-2" htmlFor="inquiry-type">
              문의 유형 *
            </label>
            <select 
              id="inquiry-type" 
              name="inquiryType" 
              required 
              className="w-full h-12 px-4 rounded-lg border border-ring/40 outline-none focus:ring-2 focus:ring-brand focus:border-brand bg-background transition-colors text-base"
            >
              <option value="">문의 유형을 선택해 주세요</option>
              <option value="투자">투자</option>
              <option value="창농">창농</option>
              <option value="협업">협업</option>
              <option value="농작물 공급망">농작물 공급망</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted mb-2" htmlFor="message">
              메시지 *
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows={compact ? 4 : 6} 
              required 
              className="w-full px-4 py-3 rounded-lg border border-ring/40 outline-none focus:ring-2 focus:ring-brand focus:border-brand bg-background transition-colors text-base resize-none" 
              placeholder="문의하실 내용이나 요청사항을 자세히 적어주세요..."
            />
          </div>
          <div className="flex justify-center pt-2">
            <button 
              disabled={status === "submitting"} 
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-brand text-white font-medium hover:opacity-95 disabled:opacity-50 transition-opacity min-w-[120px] text-base"
            >
              {status === "submitting" ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  전송 중...
                </>
              ) : (
                "메시지 전송"
              )}
            </button>
          </div>
          {message && (
            <div className={`text-center p-4 rounded-lg ${
              status === "success" 
                ? "text-green-700 bg-green-50 border border-green-200" 
                : "text-red-700 bg-red-50 border border-red-200"
            }`}>
              <div className="font-medium">{message}</div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}