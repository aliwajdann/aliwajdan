

      import React from 'react'
      
      function services() {
        return (
      <section className="max-w-4xl mx-auto mb-24 text-center">
        <h2 className="text-3xl font-bold mb-8">What I Offer</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {['Shopify Store Setup', 'Custom React Apps', 'Responsive UI with Tailwind', 'Performance Optimization'].map(service => (
            <div key={service} className="bg-gray-900 p-6 rounded-xl shadow-xl">
             <p className="text-lg font-semibold services-gradient-text-animated">
  {service}
</p>


            </div>
          ))}
        </div>
      </section>
        )
      }
      
      export default services
      