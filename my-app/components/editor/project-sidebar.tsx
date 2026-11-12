"use client"

import * as React from "react"
import { Folder, Plus, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/libs/utils"

export interface ProjectSidebarProps extends React.ComponentProps<"aside"> {
  isOpen: boolean
  onClose?: () => void
  onNewProject?: () => void
  toggleButtonRef?: React.RefObject<HTMLButtonElement | null>
}

export function ProjectSidebar({
  isOpen,
  onClose,
  onNewProject,
  toggleButtonRef,
  className,
  onKeyDown,
  ...props
}: ProjectSidebarProps) {
  const returnFocusToToggle = React.useCallback(() => {
    if (toggleButtonRef?.current) {
      toggleButtonRef.current.focus()
    } else {
      const toggle = document.querySelector<HTMLButtonElement>(
        '[data-slot="sidebar-toggle"], [data-slot="editor-navbar-left"] button'
      )
      toggle?.focus()
    }
  }, [toggleButtonRef])

  const handleClose = React.useCallback(() => {
    onClose?.()
    returnFocusToToggle()
  }, [onClose, returnFocusToToggle])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "Escape" && isOpen) {
        e.preventDefault()
        handleClose()
      }
      onKeyDown?.(e)
    },
    [handleClose, isOpen, onKeyDown]
  )

  return (
    <aside
      data-slot="project-sidebar"
      aria-hidden={!isOpen}
      inert={!isOpen ? true : undefined}
      onKeyDown={handleKeyDown}
      className={cn(
        "fixed top-14 left-0 bottom-0 z-40 flex w-80 flex-col border-r border-border bg-card text-card-foreground shadow-2xl transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none",
        className
      )}
      {...props}
    >
      {/* Header with Projects title + close button */}
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
        <h2 className="text-sm font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          aria-label="Close sidebar"
          title="Close sidebar"
          className="size-8"
        >
          <X className="size-4" />
        </Button>
      </div>

      {/* Tabs: My projects / Shared */}
      <div className="flex flex-1 flex-col overflow-hidden p-4">
        <Tabs defaultValue="my-projects" className="flex flex-1 flex-col">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="my-projects">My projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>

          {/* Empty placeholder state for My projects */}
          <TabsContent value="my-projects" className="flex-1 mt-4">
            <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed border-border p-6 text-center">
              <Folder className="mb-2 size-8 text-muted-foreground/60" />
              <p className="text-sm font-medium text-foreground">
                No projects yet
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Create a new project to get started
              </p>
            </div>
          </TabsContent>

          {/* Empty placeholder state for Shared */}
          <TabsContent value="shared" className="flex-1 mt-4">
            <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed border-border p-6 text-center">
              <Users className="mb-2 size-8 text-muted-foreground/60" />
              <p className="text-sm font-medium text-foreground">
                No shared projects
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Projects shared with you will appear here
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom action: Full-width New Project button */}
      <div className="mt-auto shrink-0 border-t border-border p-4 bg-card">
        <Button
          className="w-full gap-2"
          size="default"
          onClick={onNewProject}
        >
          <Plus className="size-4" />
          <span>New Project</span>
        </Button>
      </div>
    </aside>
  )
}

export default ProjectSidebar
