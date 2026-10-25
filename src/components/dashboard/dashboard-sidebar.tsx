"use client"

import Link from "next/link"
import { useSidebar } from "@/components/ui/sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  ArrowLeft,
  Flag,
  History,
  Search,
  Settings,
  UserRoundCog,
} from "lucide-react"

const items = [
  { title: "Search", url: "/dashboard/search", icon: Search },
  { title: "Reports", url: "/dashboard/reports", icon: Flag },
  { title: "History", url: "/dashboard/history", icon: History },
  { title: "Profile", url: "/dashboard/profile", icon: UserRoundCog },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
]

export default function DashboardSidebar() {
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon" variant="inset" className="pt-8">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Back to site"
              render={<Link href="/" className="text-sky-700 hover:text-sky-600" />}
            >
              <ArrowLeft className="size-4 shrink-0" />
              {state !== "collapsed" && <span>Back to site</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(({ title, url, icon: Icon }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    tooltip={title}
                    render={<Link href={url} />}
                  >
                    <Icon className="size-4 shrink-0" />
                    {state !== "collapsed" && (
                      <span className="truncate whitespace-nowrap">{title}</span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
