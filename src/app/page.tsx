'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, ChevronDown, ChevronUp, ArrowUpRight, Globe } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode"
import Image from 'next/image'
import AmitImage from '@/assets/amitmasram1.jpeg'
import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
      subsets: ['latin'],
      display: 'swap',
})

interface WorkItem {
      company: string;
      role: string;
      details: string;
      image?: string;
      link?: string;
}
interface ProjectItem {
      name: string;
      description: string;
      link: string;
      image: string;
      demo?: string;
}

interface WritingItem {
      title: string;
      description: string;
      link?: string;
      onClick?: () => void;
}
// Define the Thoughts interface
interface ThoughtItem {
      content: string;
      //  date: string;
}


const workItems: WorkItem[] = [

      {
            company: "Delaplex",
            role: "Software Developer Intern",
            details: "Working on mobile app development team, specializing in Flutter and Firebase. Building cross-platform applications and implementing real-time features & services.",
            image: "https://s3-symbol-logo.tradingview.com/delaplex-ltd--600.png",
            link: "https://delaplex.com/"
      }
];


// Sample thought items
const thoughtItems: ThoughtItem[] = [
      { content: " \"We're here for a limited time, but the possibilities are endless.\" – Let's talk!" },

];

const projectItems: ProjectItem[] = [

      // {
      //       name: "Tourease",
      //       description: "Plans personalized trip itineraries and adjusts recommendations in real time as you travel.",
      //       link: "https://tourease.netlify.app/",
      //       image: "https://avatars.githubusercontent.com/u/183259969?s=200&v=4"
      // },
      // {
      //       name: "Inova8",
      //       description: "Helps founders & businesses go from a rough idea to a working AI prototype, fast.",
      //       link: "https://inova8.in/",
      //       image: "https://scontent.cdninstagram.com/v/t51.82787-19/518133280_17850285762509742_2841479434577457000_n.jpg?_nc_cat=110&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=u0asY7NWM6QQ7kNvwHKPIUP&_nc_oc=Adp2OH3vk7VZ5BLIgT9_NwNumkOGHnhwe5ymX663CfBmhtttcx0K3Asqv98MCerNX_KJsQxGCGv5EkvEDaLkUQPj&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=NkmMniVmx5p8KJDRSwi5SA&_nc_ss=7b6a8&oh=00_Af-oh1lbZN1zoCKgngfZYf9FKIXHJP21gpOrBUI4nMxlHQ&oe=6A440C46"
      // },
      {
            name: "Baba Construction",
            description: "Construction company specializing in residential and commercial projects.",
            link: "https://babaconstructions.co.in",
            image: "https://babaconstruction.netlify.app/logo.png",
            demo: "https://youtu.be/dSys_oPTrs0?si=F_U8xiLk3VeXCoXe"
      },
      {
            name: "QuickWorker",
            description: "Quickly connects you with trusted local workers for all your needs.",
            link: "https://github.com/amitmasram/QuickWorker",
            image: "https://i.pinimg.com/1200x/c4/35/6c/c4356cd5454d06585e0a46066b555172.jpg"
      },
      {
            name: "Hometro",
            description: "Find homes and rentals in your city with exclusive deals.",
            link: "https://hometro.in/",
            image: "https://instagram.fnag1-7.fna.fbcdn.net/v/t51.82787-19/782362373_17938028766355074_6500120592106939637_n.jpg?_nc_cat=109&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=RlKd7NpP1bkQ7kNvwEyCCbs&_nc_oc=AdrRDQjkn3yxzopOgaTXsgpGG6alPauodp3kevSinYG7B4sB2bpz8tm-yYmWCL8tiF7ie1zqbdm4CAyriUCDEBQo&_nc_zt=24&_nc_ht=instagram.fnag1-7.fna&_nc_gid=7kT6SHYgz25CXvBvK3FB_A&_nc_ss=7b6a8&oh=00_AQKHN2VAzxr6gmBm4RZZpS9Ln2VmxOtjdhyMKi-FZeJ5jg&oe=6AA5846A"
      },
      {
            name: "Legaly AI",
            description: "Upload documents and get a clear AI-powered summary of what they mean.",
            link: "https://legalyai.lovable.app/",
            image: "https://cdn4.vectorstock.com/i/1000x1000/96/33/modern-letter-l-with-overlapping-line-logo-design-vector-43539633.jpg"
      },
      {
            name: "OpenLaunch",
            description: "Launch and discover brands, software, and products online.",
            link: "https://openlaunch.lovable.app",
            image: "https://i.pinimg.com/736x/50/29/69/5029694bfb2ceca6026b036a4769b71f.jpg"
      },




];


export default function PortfolioLanding() {
      const [expandedItem, setExpandedItem] = useState<number | null>(null)
      const router = useRouter()
      const { isDarkMode, toggleDarkMode } = useDarkMode()

      const navigateToHackathons = () => {
            router.push('/hackathons')
      }
      const navigateToWrintings = () => {
            router.push('/writings')
      }
      const navigateToEvolutionOfInformation = () => {
            router.push('/evolution')
      }
      const navigateToOpenSource = () => {
            router.push('/opensource')
      }
      const toggleExpand = (index: number) => {
            setExpandedItem(expandedItem === index ? null : index)
      }

      // Define writing items with navigation functions
      const writingItems: WritingItem[] = [
            {
                  title: "Translating Animal Language: Science Fiction or Future Science? (In Progress)",
                  description: "Exploring my plans and aspirations.",
                  link: "#"
            },
            {
                  title: "How Humans Have Stored Information: From Stone Marks to the Internet Age",
                  description: "A history of humanity's journey in storing and sharing information.",
                  onClick: navigateToEvolutionOfInformation
            }
      ];

      return (
            <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-700'} transition-colors duration-300`}>
                  <div className="flex flex-col items-center justify-center p-4 min-h-screen">

                        <Button
                              size="icon"
                              className={`absolute top-4 right-4 md:top-8 md:right-8 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
                              onClick={toggleDarkMode}
                        >
                              {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                              <span className="sr-only">Toggle theme</span>
                        </Button>

                        <main className="max-w-2xl w-full p-4 sm:p-6">

                              <div className="flex flex-nowrap items-center gap-2 sm:gap-4 md:gap-6 mb-6">
                                    <div className="flex-shrink-0 flex items-start pt-4 md:pt-8">
                                          <Image
                                                src={AmitImage}
                                                alt="Amit Masram"
                                                width={80}
                                                height={80}
                                                className="rounded-full object-cover w-[80px] h-[80px]"
                                          />
                                    </div>
                                    <div className="flex flex-col items-start pl-2 sm:pl-4 justify-start min-w-0 flex-1" style={{ marginTop: '-0.5rem' }}>
                                          <h1
                                                className={`text-[1.625rem] sm:text-3xl md:text-4xl font-bold font-signifier ${isDarkMode ? 'text-white' : 'text-black'}`}
                                                style={{ marginBottom: '0.25rem' }}
                                          >
                                                Amit Masram
                                          </h1>
                                          {/* Location with minimal globe icon */}
                                          <div className={`flex items-center text-xs ${isDarkMode ? "text-white-100" : "text-gray-500"} mb-1`}>
                                                {/* Globe Icon and Color - #AD6242 */}
                                                <Globe className="w-[14px] h-[14px] mr-[6px] opacity-70" style={{ color: '#E86F4A' }} strokeWidth={1.5} />
                                                <span>Tech Valley, Mars</span>
                                          </div>
                                          {/* Social links */}
                                          <div className="text-sm mt-0 flex items-center">
                                                <a
                                                      href="https://x.com/iamitmasram"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="hover:underline text-blue-600"
                                                >
                                                      X
                                                </a>
                                                <span className="text-gray-400 mx-1">|</span>
                                                <a
                                                      href="https://www.linkedin.com/in/amitmasram/"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="hover:underline text-blue-600"
                                                >
                                                      LinkedIn
                                                </a>
                                                <span className="text-gray-400 mx-1">|</span>
                                                <a
                                                      href="https://github.com/iamitmasram"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="hover:underline text-blue-600"
                                                >
                                                      GitHub
                                                </a>
                                          </div>
                                    </div>
                              </div>



                              <div className="mb-5 space-y-2 text-left">
                                    <p className={`text-[0.90rem] md:text-[1.030rem] ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                          I try to put my work out into the world in a way that contributes to others and makes things useful.
                                    </p>

                                    <p className={`text-[0.90rem] md:text-[1.030rem] ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                          Getting better as an engineer and thinker excites me. I enjoy building things and understanding the world, and specialize in building applications.
                                    </p>
                                    <p className={`text-[0.90rem] md:text-[1.030rem] ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                          I like to read, try and experience new things. Beyond that, I’ve taken part in <span onClick={navigateToHackathons} className="text-blue-600 hover:underline cursor-pointer">hackathons</span> and contributed to <span onClick={navigateToOpenSource} className="text-blue-600 hover:underline cursor-pointer">open-source</span>.
                                    </p>
                              </div>



                              <div className="mb-3">
                                    <h2 className={`text-base md:text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
                                    <div className="flex flex-col">
                                          {projectItems.map((item, index) => {
                                                const isExpanded = expandedItem === index;
                                                return (
                                                      <div key={index} className={`${!isExpanded ? `border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}` : ''} last:border-b-0 transition-colors duration-300`}>
                                                            <div className={`flex flex-col transition-all duration-300 ${isExpanded ? `mt-0.5 mb-1 px-3 pt-0 pb-2.5 sm:px-4 sm:pt-0 sm:pb-3.5 -mx-3 sm:-mx-4 rounded-xl border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}` : '-mt-1.5 pb-2.5'}`}>
                                                                  {/* Header */}
                                                                  <div
                                                                        className="flex flex-col gap-0.5 cursor-pointer group"
                                                                        onClick={() => toggleExpand(index)}
                                                                  >
                                                                        {/* Top Row: Logo, Title, Arrow */}
                                                                        <div className="flex items-center justify-between w-full">
                                                                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                                                                    <div className="flex-shrink-0 mt-[2px] pt-[14px]">
                                                                                          <Image
                                                                                                src={item.image || "https://via.placeholder.com/60"}
                                                                                                alt={item.name}
                                                                                                width={24}
                                                                                                height={24}
                                                                                                className="object-cover rounded-md w-[24px] h-[24px]"
                                                                                          />
                                                                                    </div>
                                                                                    <h3 className="text-[14px] md:text-[15px] font-semibold leading-none group-hover:underline pr-2">
                                                                                          {item.name}
                                                                                    </h3>
                                                                              </div>
                                                                              <div className="flex-shrink-0 mt-[2px] flex items-center justify-center">
                                                                                    {isExpanded ? <ChevronUp size={16} className={isDarkMode ? "text-gray-300" : "text-gray-500"} /> : <ChevronDown size={16} className={isDarkMode ? "text-gray-300" : "text-gray-500"} />}
                                                                              </div>
                                                                        </div>

                                                                        {/* Bottom Row: Spacer + Subtitle */}
                                                                        <div className="flex items-start gap-3 w-full -mt-2.5">
                                                                              <div className="w-[24px] flex-shrink-0"></div>
                                                                              <p className={`text-[0.85rem] md:text-[0.95rem] ${isDarkMode ? "text-gray-300" : "text-gray-500"} flex-1`}>
                                                                                    {item.description}
                                                                              </p>
                                                                        </div>
                                                                  </div>

                                                                  {/* Expanded Content */}
                                                                  <div
                                                                        className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
                                                                  >
                                                                        <div className="overflow-hidden">
                                                                              <div className="flex flex-col md:flex-row gap-4">
                                                                                    <div className="md:w-[55%] flex-shrink-0">
                                                                                          {item.demo ? (
                                                                                                item.demo.endsWith('.mp4') || item.demo.endsWith('.webm') ? (
                                                                                                      <video
                                                                                                            src={item.demo}
                                                                                                            controls
                                                                                                            className={`object-cover rounded-lg w-full h-auto aspect-video border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
                                                                                                      />
                                                                                                ) : (
                                                                                                      <iframe
                                                                                                            src={item.demo.includes('youtu.be/') ? item.demo.replace('youtu.be/', 'www.youtube.com/embed/') : item.demo.replace('watch?v=', 'embed/')}
                                                                                                            title={`${item.name} demo`}
                                                                                                            className={`object-cover rounded-lg w-full h-auto aspect-video border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
                                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                                            allowFullScreen
                                                                                                      />
                                                                                                )
                                                                                          ) : (
                                                                                                <Image
                                                                                                      src={item.image || "https://via.placeholder.com/400x300"}
                                                                                                      alt={item.name}
                                                                                                      width={400}
                                                                                                      height={300}
                                                                                                      className={`object-cover rounded-lg w-full h-auto aspect-video border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
                                                                                                />
                                                                                          )}
                                                                                    </div>
                                                                                    <div className="md:w-[45%] flex flex-col justify-between py-1">
                                                                                          <p className={`text-[13px] md:text-[14px] ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                                                                                                {item.description}
                                                                                          </p>
                                                                                          <div className="mt-4 flex items-center gap-4">
                                                                                                <a
                                                                                                      href={item.link}
                                                                                                      target="_blank"
                                                                                                      rel="noopener noreferrer"
                                                                                                      className="inline-flex items-center gap-1 text-[13px] hover:underline font-medium text-blue-600"
                                                                                                >
                                                                                                      <ArrowUpRight size={14} />
                                                                                                      Live
                                                                                                </a>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                );
                                          })}
                                    </div>
                              </div>




                              <div className="mb-4 -mt-2">
                                    <div className="flex items-center justify-between mb-2">
                                          <h2 className={`text-base md:text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Writings</h2>
                                          <span className="text-blue-600 text-xs md:text-sm font-medium hover:underline cursor-pointer"><span onClick={navigateToWrintings}>View all</span> </span>
                                    </div>
                                    <ul className="space-y-3 list-none pl-0 -mt-2">
                                          {writingItems.map((item, index) => (
                                                <li key={index} className="flex flex-col gap-0">
                                                      <div className="flex items-start gap-3">
                                                            {item.onClick ? (
                                                                  <div
                                                                        onClick={item.onClick}
                                                                        className="flex items-start gap-3 group cursor-pointer flex-1"
                                                                  >
                                                                        <span
                                                                              className={`mt-2 md:mt-3 text-[1rem] md:text-[1.1rem] select-none ${isDarkMode ? 'text-gray-400' : 'text-black-400'}`}
                                                                              style={{ lineHeight: '1.5' }}
                                                                        >
                                                                              ▪
                                                                        </span>
                                                                        <div className="min-w-0 flex-1">
                                                                              <h3 className="text-[14px] md:text-[15px] font-semibold leading-tight group-hover:underline">{item.title}</h3>
                                                                              <p className={`text-[0.85rem] md:text-[0.95rem] ${isDarkMode ? "text-gray-300" : "text-gray-500"} mt-1`}>{item.description}</p>
                                                                        </div>
                                                                  </div>
                                                            ) : (
                                                                  <a
                                                                        href={item.link}
                                                                        className="flex items-start gap-3 group flex-1"
                                                                  >
                                                                        <span
                                                                              className={`mt-2 md:mt-3 text-[1rem] md:text-[1.1rem] select-none ${isDarkMode ? 'text-gray-400' : 'text-black-400'}`}
                                                                              style={{ lineHeight: '1.5' }}
                                                                        >
                                                                              ▪
                                                                        </span>
                                                                        <div className="min-w-0 flex-1">
                                                                              <h3 className="text-[14px] md:text-[15px] font-semibold leading-tight group-hover:underline">{item.title}</h3>
                                                                              <p className={`text-[0.85rem] md:text-[0.95rem] ${isDarkMode ? "text-gray-300" : "text-gray-500"} mt-1`}>{item.description}</p>
                                                                        </div>
                                                                  </a>
                                                            )}
                                                      </div>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              <div className="mb-6 flex flex-col">
                                    <h2 className={`text-base md:text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Inner Code</h2>
                                    {thoughtItems.map((item, index) => (
                                          <div key={index} className="mb-3 w-full md:w-[90%] lg:w-[80%] mx-auto">
                                                <p className="text-sm md:text-[0.95rem] lg:text-[0.92rem] italic font-thin text-center" style={{ fontFamily: 'Georgia, serif' }}>{item.content}</p>
                                          </div>
                                    ))}
                              </div>
                              <div className="flex flex-col items-center gap-4 mb-8">
                                    <hr className="w-full border-t border-gray-300 mt-1 mb-2" />
                                    <p className="text-[14px] md:text-[15px] text-center">
                                          My DMs are always open — <a href="https://x.com/messages/compose?recipient_id=1332622199786598403" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">reach out on X</a> anytime.
                                    </p>
                                    <p className="text-[14px] md:text-[15px] text-center">
                                          Email: <a href="mailto:amitxmasram@gmail.com" className="text-blue-500 underline">amitxmasram@gmail.com</a>
                                    </p>
                                    <hr className="w-full border-t border-gray-300 my-2" />
                              </div>


                        </main>



                  </div>
            </div>
      )
}
