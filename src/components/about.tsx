const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              I'm a passionate developer with a strong foundation in web technologies
              and a keen eye for design. With several years of experience in
              building modern web applications, I love turning complex problems
              into simple, beautiful solutions.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              technical writing and mentoring.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className="bg-blue-600 w-full h-full rounded-lg transform hover:scale-105 transition duration-300">
              {/* Add your image here */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-indigo-700/50 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 