import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"
import { Playfair_Display } from 'next/font/google'
import { TooltipProvider } from "@/components/ui/tooltip"

import "./globals.css";

// ????
const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
        variable: "--font-geist-sans",
        subsets: ["latin"],
});

const geistMono = Geist_Mono({
        variable: "--font-geist-mono",
        subsets: ["latin"],
});

const playfair = Playfair_Display({
        subsets: ['latin'],
        variable: '--font-serif'
})

export const metadata: Metadata = {
        title: "SkillStack",
        description: "Competitief coderingsplatform met directe feedback.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
        return (
                <>
                 <html lang="en" suppressHydrationWarning>
                        <head />
                        <body className={cn(
                                'flex min-h-screen flex-col',
                                geistSans.variable,
                                geistMono.variable,
                                playfair.variable
                                )}>
                          <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                          >
                                <TooltipProvider>
                                        {children}
                                </TooltipProvider>
                          </ThemeProvider>
                        </body>
                </html>
                </>
        );
}
