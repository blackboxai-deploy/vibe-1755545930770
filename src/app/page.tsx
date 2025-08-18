import HelloWorld from '@/components/HelloWorld'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
      {/* Header Section */}
      <header className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Live Demo</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 tracking-tight">
          Hello World
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Experience the power of modern web development
        </p>
      </header>

      {/* Main Hello World Component */}
      <HelloWorld />

      {/* Footer Section */}
      <footer className="mt-16 text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>React 19</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Next.js 15</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span>TypeScript</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span>Tailwind CSS</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm">
          Built with ❤️ using modern web technologies
        </p>
      </footer>
    </div>
  )
}