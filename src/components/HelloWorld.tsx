"use client"

import { useState } from 'react'

export default function HelloWorld() {
  const [clickCount, setClickCount] = useState(0)
  const [greeting, setGreeting] = useState('Hello, World!')

  const greetings = [
    'Hello, World!',
    'Welcome to Next.js!',
    'Greetings, Developer!',
    'Hi there, Coder!',
    'Hey, Nice to meet you!',
    'Hello from BLACKBOX.AI!'
  ]

  const handleClick = () => {
    setClickCount(prev => prev + 1)
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
    setGreeting(randomGreeting)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {greeting}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Welcome to your modern Hello World application built with Next.js 15, React 19, and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handleClick}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Click me for a new greeting!
          </button>
          
          {clickCount > 0 && (
            <div className="animate-fadeIn">
              <p className="text-sm text-gray-500">
                You've clicked {clickCount} time{clickCount !== 1 ? 's' : ''}
              </p>
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800">Next.js 15</h3>
              <p className="text-sm text-blue-600">Latest React Framework</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800">TypeScript</h3>
              <p className="text-sm text-purple-600">Type-Safe Development</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-800">Tailwind CSS</h3>
              <p className="text-sm text-indigo-600">Utility-First Styling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}