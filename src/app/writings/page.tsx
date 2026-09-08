'use client'

import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/navigation'
import { useDarkMode } from "@/lib/useDarkMode"
import { useEffect, useRef, useState } from "react"

interface WritingsEntry {
    date: string
    name: string
    location?: string
    description: string
    tags: string[]
    sourceUrl?: string
    onClick?: () => void
}

// Timeline colors
const LINE_COLOR = "#d4d8dd"
const MARKER_COLOR = "#111827"
const MARKER_COLOR_DARK = "#f9fafb"

function WritingCard({
    writing,
    index,
    isLast,
    isDarkMode,
}: {
    writing: WritingsEntry
    index: number
    isLast: boolean
    isDarkMode: boolean
}) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    const [markerActive, setMarkerActive] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    setMarkerActive(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className="flex"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transition: `opacity 0.55s ease ${index * 0.12}s, transform 0.55s ease ${index * 0.12}s`,
            }}
        >
            {/* ── Left: vertical line + square marker ── */}
            <div
                className="flex flex-col items-center"
                style={{ width: 24, flexShrink: 0, marginRight: 20 }}
            >
                {/* Square marker */}
                <div
                    style={{
                        width: 6,
                        height: 6,
                        background: isDarkMode ? MARKER_COLOR_DARK : MARKER_COLOR,
                        borderRadius: 2,
                        flexShrink: 0,
                        marginTop: 6,
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        transform: markerActive ? "scale(1.35)" : "scale(1)",
                        boxShadow: markerActive
                            ? `0 0 0 3px ${isDarkMode ? "rgba(249,250,251,0.18)" : "rgba(17,24,39,0.15)"}`
                            : "none",
                    }}
                />

                {/* Vertical connector line (hidden after last item) */}
                {!isLast && (
                    <div
                        style={{
                            width: 1,
                            flex: 1,
                            background: LINE_COLOR,
                            marginTop: 4,
                            minHeight: 40,
                            opacity: 1,
                        }}
                    />
                )}
            </div>

            {/* ── Right: writing content ── */}
            {writing.onClick ? (
                <div
                    role="button"
                    tabIndex={0}
                    onClick={writing.onClick}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault()
                            writing.onClick?.()
                        }
                    }}
                    className="flex-grow pb-10 block group cursor-pointer"
                    style={{ textDecoration: "none" }}
                >
                    <p
                        className={`text-[11px] md:text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                        {writing.date}
                    </p>
                    <h2
                        className={`text-[14px] md:text-[15px] font-semibold ${isDarkMode ? "text-white" : "text-black"} group-hover:underline transition-all`}
                    >
                        {writing.name}
                    </h2>
                    {writing.location && (
                        <p
                            className={`text-[11px] md:text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                        >
                            {writing.location}
                        </p>
                    )}
                    <p
                        className={`text-[0.85rem] md:text-[0.95rem] mt-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                        {writing.description}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        {writing.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            ) : (
                <a
                    href={writing.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow pb-10 block group"
                    style={{ textDecoration: "none", cursor: writing.sourceUrl ? "pointer" : "default" }}
                >
                    <p
                        className={`text-[11px] md:text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                        {writing.date}
                    </p>
                    <h2
                        className={`text-[14px] md:text-[15px] font-semibold ${isDarkMode ? "text-white" : "text-black"} group-hover:underline transition-all`}
                    >
                        {writing.name}
                    </h2>
                    {writing.location && (
                        <p
                            className={`text-[11px] md:text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                        >
                            {writing.location}
                        </p>
                    )}
                    <p
                        className={`text-[0.83rem] md:text-[0.93rem] mt-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                        {writing.description}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        {writing.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </a>
            )}
        </div>
    )
}

export default function WritingsPage() {
    const router = useRouter()
    const { isDarkMode, toggleDarkMode } = useDarkMode()

    const navigateToEvolutionOfInformation = () => {
        router.push('/evolution')
    }

    const writings: WritingsEntry[] = [
        {
            date: "October 11th - 13th, 2024",
            name: "Build fast Ship fast with Replit & Cursor Hackathon",
            description: "Developed an AI application which delivered real-time access to patients using augmented reality.",
            tags: [],
            sourceUrl: "https://github.com/example/hack-western-5",
        },
        {
            date: "October 21th - December 17, 2024",
            name: "Translating Animal Language: Science Fiction or Future Science? (In Progress)",
            description: "Exploring my plans and aspirations.",
            tags: [],
            sourceUrl: "https://trysnipai.co/",
        },
        {
            date: "October 1st - 31st, 2024",
            name: "How Humans Have Stored Information: From Stone Marks to the Internet Age",
            description: "A history of humanity's journey in storing and sharing information.",
            tags: [],
            onClick: navigateToEvolutionOfInformation,
        },
    ]

    return (
        <div
            className={`min-h-screen ${isDarkMode ? "bg-black text-gray-200" : "bg-white text-gray-700"} transition-colors duration-300 p-8`}
        >
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-5">
                    <h1
                        className={`text-xl md:text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                        Writings
                    </h1>
                </div>

                <p
                    className={`text-[0.93rem] md:text-[1.035rem] mb-5 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
                >
                    I Sometimes write and share about my experiences, projects, and thoughts on technology, AI, and the future. Here are some of my recent writings and contributions.
                </p>

                <hr className="w-full border-t border-gray-300 my-2" />

                {/* Vertical Timeline */}
                <div className="mt-8">
                    {writings.map((writing, index) => (
                        <WritingCard
                            key={index}
                            writing={writing}
                            index={index}
                            isLast={index === writings.length - 1}
                            isDarkMode={isDarkMode}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
