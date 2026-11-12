"use client"

import * as React from "react"
import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const toggleButtonRef = React.useRef<HTMLButtonElement | null>(null)

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <EditorNavbar
        toggleButtonRef={toggleButtonRef}
        isSidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />

      <div className="relative flex flex-1 overflow-hidden">
        {/* Floating Project Sidebar */}
        <ProjectSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          toggleButtonRef={toggleButtonRef}
        />

        {/* Editor Canvas */}
        <main className="flex flex-1 items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-xl font-medium">ghost ai</h1>
            <p className="mt-1 text-sm text-muted-foreground">Editor Canvas</p>
          </div>
        </main>
      </div>
    </div>
  )
}
