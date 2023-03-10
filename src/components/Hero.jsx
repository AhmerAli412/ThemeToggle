import React from 'react'

const Hero = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Want to add dark mode?
        <br class="hidden lg:inline-block"/>here is the solution
      </h1>
      <p class="mb-8 leading-relaxed">Theme toggle code generator is a tool that automates the process of creating a theme switch functionality in your website or application.
With just a few clicks, you can generate the necessary code for your project to dynamically switch between light and dark modes.
This saves developers valuable time and allows for a seamless implementation of a popular design trend, providing users with a personalized and visually appealing experience.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://blog.hootsuite.com/wp-content/uploads/2021/02/Instagram-grid-layouts_1080x1080.jpg"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero