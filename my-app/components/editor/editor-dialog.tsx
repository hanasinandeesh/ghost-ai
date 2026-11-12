"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/libs/utils"

export interface EditorDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  footerActions?: React.ReactNode
  trigger?: React.ReactNode
  className?: string
}

/**
 * Reusable Dialog Pattern component configured with workspace color tokens.
 * Supports title, description, content body, and footer actions.
 */
export function EditorDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footerActions,
  trigger,
  className,
}: EditorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className={cn(
          "border-border bg-card text-card-foreground sm:max-w-md",
          className
        )}
      >
        <DialogHeader>
          <DialogTitle className="text-foreground">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-muted-foreground">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        {children && <div className="py-2">{children}</div>}
        {footerActions && <DialogFooter>{footerActions}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}

export default EditorDialog

