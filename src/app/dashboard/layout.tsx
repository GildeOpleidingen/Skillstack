import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'
import DashboardSidebar from '@/components/dashboard/dashboard-sidebar'
import { cookies } from 'next/headers'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default async function DashboardLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'

  return (
    <div className="flex min-h-dvh flex-col">
  <Header />

  <SidebarProvider
    defaultOpen={defaultOpen}
    className="relative min-h-0 flex-1"
  >
    <DashboardSidebar />

    <SidebarInset className="min-h-0 flex-1">
      <main className="flex min-h-0 flex-1 flex-col pt-8">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarInset>
  </SidebarProvider>

  <Footer />
</div>
  )
}