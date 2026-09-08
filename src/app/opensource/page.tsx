'use client'

import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, Moon, Sun } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode"
import Image from 'next/image'

interface OpenSourceEntry {
  date: string
  name: string
  location: string
  description: string
  tags: string[]
  sourceUrl?: string
  imageUrl?: string
}

const hackathons: OpenSourceEntry[] = [
  {
    date: "October 4th - 10th, 2024",
    name: "Global Hack Week: Open Source",
    location: "Remote",
    description: "I participated in the Global Hack Week: Open Source 2024, completing all of Auth0's challenges, including setting up an Auth0 account, starring an open-source project, implementing login/logout functionality, customizing the login box, and sharing my progress on social media. It was an incredible opportunity to dive deeper into Auth0's tools and contribute to open source, all while learning and building with a global community.",
    tags: [],
    sourceUrl: "https://github.com/Amitmasram/auth0-vite-app",
    imageUrl : "https://tse1.mm.bing.net/th?id=OIP.Z9sMcPgkxX1bt9VIbN9xSAAAAA&pid=Api&P=0&h=180"
},

  {
    date: "October 11th - 13th, 2024",
    name: "Open Source Hackfest",
    location: "Online",
    description: "Built a Web3 mobile app utilizing decentralized smart contracts for secure real-time data communication.",
    tags: [],
    sourceUrl: "https://github.com/example/hack-the-north",
    imageUrl:"https://tse1.mm.bing.net/th?id=OIP.Z9sMcPgkxX1bt9VIbN9xSAAAAA&pid=Api&P=0&h=180"
  },
  {
    date: "October 1st - 10th Nov, 2024",
    name: "GSSoC 2024Extd",
    location: "Online",
    description: "participated and contributing to the various projects.",
    tags: [],
    sourceUrl: "https://github.com/example/hack-the-north",
    imageUrl:"https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
  },


]

export default function OpenSourcePage() {
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-700'} transition-colors duration-300 p-8`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-5">
          <h1 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Open Source Contributions</h1>
        </div>
        <p className={`text-[0.93rem] md:text-[1.035rem] mb-5 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        Here are my contributions to various open source projects and events:
        </p>
        <hr className="w-full border-t border-gray-300 my-2" />

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


// 'use client'

// import { Button } from "@/components/ui/button"
// import { Avatar } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Github, Moon, Sun } from "lucide-react"
// import { useRouter } from 'next/navigation'
// import { useDarkMode } from "@/lib/useDarkMode"

// interface OpenSourceEntry {
//   date: string
//   name: string
//   location: string
//   description: string
//   tags: string[]
//   sourceUrl?: string
//   imageUrl?: string
// }

// const hackathons: OpenSourceEntry[] = [
//   {
//     date: "October 4th - 10th, 2024",
//     name: "Open Source Hackfest",
//     location: "Remote",
//     description: "Developed an AI application that delivered real-time access to patients using augmented reality.",
//     tags: [],
//     sourceUrl: "https://github.com/example/hack-western-5",
//     imageUrl: "https://s3.amazonaws.com/my.mlh.io/applications/logos/000/000/638/thumb/MyMLH_Icon.png?1638895540"
//   },
//   {
//     date: "October 11th - 13th, 2024",
//     name: "Open Source Hackfest",
//     location: "Online",
//     description: "Built a Web3 mobile app utilizing decentralized smart contracts for secure real-time data communication.",
//     tags: [],
//     sourceUrl: "https://github.com/example/hack-the-north",
//     imageUrl:"https://s3.amazonaws.com/my.mlh.io/applications/logos/000/000/638/thumb/MyMLH_Icon.png?1638895540"
//   },

// ]

// export default function OpenSourcePage() {
//   const router = useRouter()
//   const { isDarkMode, toggleDarkMode } = useDarkMode()

//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-700'} transition-colors duration-300 p-8`}>
//       <style jsx>{`
//         @keyframes growLine {
//           from { height: 0; }
//           to { height: calc(100% + 2rem); }
//         }
//         .animated-line {
//           animation: growLine 1s ease-out forwards;
//         }
//       `}</style>
//       <div className="max-w-2xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Open Source Contributions</h1>
//         </div>
//         <p className="text-white-600 mb-8">
//           Here are my contributions to open source, where I collaborate with diverse teams to solve challenges and build innovative projects.
//         </p>

//         <div className="space-y-8">
//           {hackathons.map((hackathon, index) => (
//             <div key={index} className="flex">
//               <div className="flex-shrink-0 mr-4 relative">
//                 <Avatar className="w-9 h-9 flex items-center justify-center overflow-hidden">
//                   {hackathon.imageUrl ? (
//                     <img
//                       src={hackathon.imageUrl}
//                       alt={hackathon.name}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <span className="text-xl">{hackathon.name[0]}</span>
//                   )}
//                 </Avatar>
//                 <div
//                   className={`absolute right-0 top-0 w-px animated-line ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
//                 ></div>
//               </div>
//               <div className="flex-grow relative pt-1">
//                 <div
//                   className={`absolute left-[-12px] top-[10px] w-3 h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
//                 ></div>
//                 <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{hackathon.date}</p>
//                 <h2 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{hackathon.name}</h2>
//                 <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{hackathon.location}</p>
//                 <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{hackathon.description}</p>
//                 <div className="mt-2 flex items-center space-x-2">
//                   {hackathon.tags.map((tag, tagIndex) => (
//                     <Badge key={tagIndex} variant="secondary">{tag}</Badge>
//                   ))}
//                   {hackathon.sourceUrl && (
//                     <Button variant="outline" size="xs" asChild>
//                       <a href={hackathon.sourceUrl} target="_blank" rel="noopener noreferrer">
//                         <Github className="mr-2 h- w-4" />
//                         Source
//                       </a>
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
