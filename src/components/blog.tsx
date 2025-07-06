import React from 'react'

function blog() {
  return (
      <section id="blog" className="p-8 md:p-16 bg-gray-50 dark:bg-gray-950">
        <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
        <div className="space-y-6">
          <article className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold">⚡ Why I Love React + Firebase</h3>
            <p className="text-sm text-muted">Learn how I built full apps lightning-fast...</p>
          </article>
          <article className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold">🎨 Designing UIs That Pop</h3>
            <p className="text-sm text-muted">Tips I use to make sites scroll-stopping good.</p>
          </article>
        </div>
      </section>
  )
}

export default blog
