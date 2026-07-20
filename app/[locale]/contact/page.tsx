import Contact from "@/sections/Contact";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Contact");

  return (
    <main className="min-h-screen">
      <PageHeader title={t("sendMessageTitle")} />

      <div className="w-full mt-8 mb-32">
        <ContactForm />
      </div>

      <Contact hideCtaBanner={true} />
    </main>
  );
}
