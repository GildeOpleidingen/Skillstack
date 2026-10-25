"use client"
 
import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { Toaster } from "@/components/ui/sonner"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
  <NextThemesProvider {...props} scriptProps={{ type: "application/json" }}>
    {children}
    <ToasterProvider />
  </NextThemesProvider>
  )

}

function ToasterProvider() {
        const { resolvedTheme } = useTheme();

        return (
                <Toaster
                        richColors
                        closeButton
                        position = 'top-center'
                        theme={resolvedTheme === 'dark' ? 'dark' : 'light' }
                        />
        )
}
