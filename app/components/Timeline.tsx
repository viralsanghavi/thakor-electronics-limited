import * as React from "react";
import {cn} from "~/lib/utils";

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface TimelineItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({children, className, ...props}, ref) => {
    return (
      <div ref={ref} className={cn("space-y-6", className)} {...props}>
        {children}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({children, className, icon, ...props}, ref) => {
    return (
      <div ref={ref} className={cn("relative pl-8 my-8", className)} {...props}>
        <div className="absolute left-0 top-1 h-full w-0.5 bg-border" />
        <div className="absolute left-0 top-1 -translate-x-1/2 rounded-full border border-background bg-border p-1">
          {icon || <div className="h-2 w-2 rounded-full bg-background" />}
        </div>
        {children}
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

export {Timeline, TimelineItem};
