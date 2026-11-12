"use client"

import * as React from "react"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/libs/utils"

export interface EditorNavbarProps extends React.ComponentProps<"header"> {
  isSidebarOpen?: boolean
  onToggleSidebar?: () => void
  centerContent?: React.ReactNode
  rightContent?: React.ReactNode
  toggleButtonRef?: React.RefObject<HTMLButtonElement | null>
}

export function EditorNavbar({
  isSidebarOpen = false,
  onToggleSidebar,
  centerContent,
  rightContent,
  toggleButtonRef,
  className,
  ...props
}: EditorNavbarProps) {
  return (
    <header
      data-slot="editor-navbar"
      className={cn(
        "flex h-14 w-full shrink-0 items-center justify-between border-b border-border bg-background px-4 text-foreground",
        className
      )}
      {...props}
    >
      {/* Left Section: Sidebar toggle button */}
      <div className="flex items-center gap-2" data-slot="editor-navbar-left">
        <Button
          ref={toggleButtonRef}
          data-slot="sidebar-toggle"
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          title={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="size-5" />
          ) : (
            <PanelLeftOpen className="size-5" />
          )}
        </Button>
      </div>

      {/* Center Section */}
      <div
        className="flex flex-1 items-center justify-center px-4"
        data-slot="editor-navbar-center"
      >
        {centerContent ?? null}
      </div>

      {/* Right Section: Stays empty for now */}
      <div
        className="flex min-w-9 items-center justify-end"
        data-slot="editor-navbar-right"
      >
        {rightContent ?? null}
      </div>
    </header>
  )
}

export default EditorNavbar

