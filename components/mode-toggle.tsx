"use client";

import * as React from "react";
import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            className="size-9 p-0 text-muted-foreground hover:text-foreground hover:bg-accent cursor-pointer rounded-lg"
            aria-label="Chuyển đổi giao diện sáng/tối"
            title="Chuyển đổi giao diện sáng/tối"
          />
        }
      >
        <span className="relative flex size-4.5 items-center justify-center">
          <Sun className="size-4.5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-amber-500" />
          <Moon className="absolute size-4.5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-blue-400" />
        </span>
        <span className="sr-only">Chuyển đổi giao diện</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 ring-1 ring-border text-sm"
      >
        <DropdownMenuLabel className="text-sm text-muted-foreground">
          Giao diện
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex cursor-pointer items-center justify-between py-2 text-sm hover:bg-accent"
          onClick={() => setTheme("light")}
        >
          <span className="flex items-center gap-2">
            <Sun className="size-4 text-amber-500" />
            <span>Sáng</span>
          </span>
          {mounted && theme === "light" && (
            <Check className="size-4 text-primary" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex cursor-pointer items-center justify-between py-2 text-sm hover:bg-accent"
          onClick={() => setTheme("dark")}
        >
          <span className="flex items-center gap-2">
            <Moon className="size-4 text-blue-400" />
            <span>Tối</span>
          </span>
          {mounted && theme === "dark" && (
            <Check className="size-4 text-primary" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex cursor-pointer items-center justify-between py-2 text-sm hover:bg-accent"
          onClick={() => setTheme("system")}
        >
          <span className="flex items-center gap-2">
            <Monitor className="size-4 text-muted-foreground" />
            <span>Hệ thống</span>
          </span>
          {mounted && theme === "system" && (
            <Check className="size-4 text-primary" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ModeToggle;
