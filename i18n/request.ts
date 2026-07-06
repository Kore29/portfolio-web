import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {notFound} from 'next/navigation';

export default getRequestConfig(async ({requestLocale}) => {
  // This corresponds to the [locale] segment in your app directory
  let locale = await requestLocale;

  // Validate that the incoming locale is supported
  if (!locale || !routing.locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale,
    // Dynamically import your translation messages
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
