'use client'

import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, Moon, Sun } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode"
import Image from 'next/image'

interface HackathonEntry {
  date: string
  name: string
  location: string
  description: string
  tags: string[]
  sourceUrl?: string
  imageUrl?: string // Add this line
}

const hackathons: HackathonEntry[] = [
  {
    date: "October 11th - 13th, 2024",
    name: "Build fast Ship fast with Replit & Cursor Hackathon",
    location: "Remote",
    description: "Developed an AI application which delivered real-time access to patients using augmented reality.",
    tags: [],
    sourceUrl: "https://github.com/example/hack-western-5",
    imageUrl: "https://miro.medium.com/v2/resize:fit:2400/1*Z2HkOhqHhYoaTTLPEsZMGg.png" // Add this line
  },
  // {
  //   date: "October 1st - 16th, 2024",
  //   name: "Aptos Code Collision Hackathon",
  //   location: "Online",
  //   description: "Built a Web3 mobile app utilizing decentralized smart contracts for secure real-time data communication.",
  //   tags: [],
  //   sourceUrl: "https://github.com/example/hack-the-north",
  //   imageUrl:"https://aptosfoundation.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcode-collision_hero-image.f43f60aa.webp&w=2160&q=85"
  // },
  {
    date: "October 1st - 31st, 2024",
    name: "Appwrite's Hacktoberfest",
    location: "Online",
    description: "Built EventSphere, App for discovering nearby events like concerts and conferences, offering personalized recommendations, easy registration, and map-based navigation.",
    tags: [],
    sourceUrl: "https://github.com/Amitmasram/EventSphere-Hacktoberfest-2024",
    imageUrl:"https://tse2.mm.bing.net/th?id=OIP.hBVeaWT9eAvx2-oKMtKmxwAAAA&pid=Api&P=0&h=180"

  },
  {
    date: "October 21th - December 17, 2024",
    name: "LLM Agents MOOC Hackathon",
    location: "Online",
    description: "Creating an AI message agent which will automate your messages across the platforms via SnipAI.",
    tags: [],
    sourceUrl: "https://trysnipai.co/",
    imageUrl:"https://tse4.mm.bing.net/th?id=OIP.SuN4hrD97rwJJu90dyuO_QHaEK&pid=Api&P=0&h=180"

  },


]

export default function HackathonsPage() {
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-700'} transition-colors duration-300 p-8`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-5">
          <h1 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Hackathons</h1>

          {/* <Button
            variant="outline"
            size="icon"
            className={`${isDarkMode ? 'text-gray-200 border-gray-200' : 'text-gray-700 border-gray-700'}`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button> */}
        </div>
        <p className={`text-[0.93rem] md:text-[1.035rem] mb-5 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        I like to participating in global hackathons, primarily online, where I collaborate with individuals and diverse teams to solve challenges and build projects.
      </p>
      <hr className="w-full border-t border-gray-300 my-2" />

        {/* <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => router.push('/')}
            className={`${isDarkMode ? 'text-gray-200 border-gray-200 hover:bg-gray-800' : 'text-gray-700 border-gray-700 hover:bg-gray-100'}`}
          >
            Back to Home
          </Button>
        </div> */}

   <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-4">
                <Avatar className="w-9 h-9 flex items-center justify-center overflow-hidden">
                  {hackathon.imageUrl ? (
                    <Image
                      src={hackathon.imageUrl}
                      alt={hackathon.name}
                      width={36}
                      height={36}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-xl">{hackathon.name[0]}</span>
                  )}
                </Avatar>
              </div>
              {/*
              <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-9 h-9 flex items-center justify-center overflow-hidden bg-gray-200 rounded-md">
                  {hackathon.imageUrl ? (
                    <img
                      src={hackathon.imageUrl}
                      alt={hackathon.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xl text-gray-600">{hackathon.name[0]}</span>
                  )}
                </div>
              </div>
               */}
              <div className="flex-grow">
                <p className={`text-[11px] md:text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{hackathon.date}</p>
                <h2 className={`text-[14px] md:text-[15px] font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{hackathon.name}</h2>
                <p className={`text-[11px] md:text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{hackathon.location}</p>
                <p className={`text-[0.83rem] md:text-[0.93rem] text-white-600 mb-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{hackathon.description}</p>
                <div className="mt-2 flex items-center space-x-2">
                  {hackathon.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                  {hackathon.sourceUrl && (
                    <Button variant="outline" size="xs" asChild>
                      <a href={hackathon.sourceUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h- w-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
