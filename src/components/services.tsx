

      import React from 'react'
      
      function services() {
        return (
      <section className="max-w-4xl mx-auto mb-24 text-center bg-black md:p-0 p-2.5">
        <h2 className="md:text-3xl text-xl font-bold mb-8">What I Offer</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {['Shopify Store Setup', 'Custom React Apps', 'Responsive UI with Tailwind', 'Performance Optimization'].map(service => (
            <div key={service} className="bg-gray-900 p-5 rounded-xl shadow-xl md:w-[full] w-[80%] mx-[auto]">
             <p className="md:text-lg text-sm font-semibold services-gradient-text-animated ">
  {service}
</p>


            </div>
          ))}
        </div>
      </section>
        )
      }
      
      export default services
      