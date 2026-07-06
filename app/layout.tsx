import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since we have moved our pages under `app/[locale]`, Next.js still needs
// a root layout file at the top level of the app directory.
export default function RootLayout({ children }: Props) {
  return children;
}
