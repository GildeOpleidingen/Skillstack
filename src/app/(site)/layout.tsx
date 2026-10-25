import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function SiteLayout({children}: {children: React.ReactNode}) {
        return (
                  <div className="flex min-h-dvh flex-col">
                      <Header />
                      <main className="flex-1 pt-8">{children}</main>
                      <Footer />
                    </div>
        )
}
