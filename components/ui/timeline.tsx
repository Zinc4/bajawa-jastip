import * as React from "react"
import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("space-y-4", className)} {...props} />,
)
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("relative pl-8 pb-4 last:pb-0", className)} {...props} />
  ),
)
TimelineItem.displayName = "TimelineItem"

const TimelineConnector = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("absolute left-3.5 top-5 bottom-0 -translate-x-1/2 w-0.5 bg-gray-200", className)}
      {...props}
    />
  ),
)
TimelineConnector.displayName = "TimelineConnector"

const TimelineHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center h-7 mb-2", className)} {...props} />
  ),
)
TimelineHeader.displayName = "TimelineHeader"

const TimelineIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("z-10 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white", className)}
      {...props}
    />
  ),
)
TimelineIcon.displayName = "TimelineIcon"

const TimelineTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("ml-3 text-base font-semibold", className)} {...props} />
  ),
)
TimelineTitle.displayName = "TimelineTitle"

const TimelineBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("mt-2 ml-10", className)} {...props} />,
)
TimelineBody.displayName = "TimelineBody"

export { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineTitle, TimelineBody }

