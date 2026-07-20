"use server";

export interface SendEmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  error?: string;
  mailtoUrl?: string;
}

export async function sendEmailAction(payload: SendEmailPayload): Promise<SendEmailResult> {
  const { name, email, subject, message } = payload;

  if (!name || !email || !message) {
    return {
      success: false,
      error: "Missing required fields: name, email, or message.",
    };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Invalid email address format.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["marticastanorodriguez@gmail.com"],
          replyTo: email,
          subject: `[Portfolio] ${subject || "New Message"} from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Resend API error:", errorData);
        return {
          success: false,
          error: errorData.message || "Failed to send email via server.",
        };
      }

      return { success: true };
    } catch (err) {
      console.error("Failed to send email:", err);
      return {
        success: false,
        error: "Network error occurred while sending email.",
      };
    }
  }

  // Fallback if RESEND_API_KEY is not configured
  const mailtoSubject = encodeURIComponent(`[Portfolio] ${subject || "Contact"} - ${name}`);
  const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoUrl = `mailto:marticastanorodriguez@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  return {
    success: true,
    mailtoUrl,
  };
}
