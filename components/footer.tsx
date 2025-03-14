"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold text-primary">
              Tarun<span className="text-destructive">06</span>
            </p>
          </div>
          <div className="text-center md:text-right flex flex-col md:flex-row items-center gap-4">
            <p className="text-muted-foreground">© {currentYear} Tarun06. All rights reserved.</p>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary/10"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

