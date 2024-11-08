
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function CustomLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <div className="absolute w-[100%] top-0 z-50 bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
