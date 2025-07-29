"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("English")

  const languages = [
    { code: "en", name: "English" },
    { code: "sw", name: "Kiswahili" },
    { code: "ki", name: "Kikuyu" },
    { code: "lu", name: "Luo" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white hover:bg-green-700">
          <Globe className="w-4 h-4 mr-2" />
          {selectedLanguage}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} onClick={() => setSelectedLanguage(language.name)}>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
