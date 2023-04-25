import React from 'react'

export default function about() {
  return (
    <div class="bg-white">

  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center gap-x-4 gap-y-4 py-6 md:flex-row">
      <div class="space-y-6">
        <p class="text-base font-semibold text-purple-700">Join our team</p>
        <p class="text-4xl font-semibold text-gray-900">
          We’re just getting started
        </p>
        <p class="text-xl text-gray-600">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
        <button
          class="rounded-lg border border-purple-500 bg-purple-500 px-5 py-3 text-base font-semibold text-white shadow">
          We’re hiring!
        </button>
      </div>
      <div class="w-full">
        <img
          src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80"
          alt="Getting Started" />
      </div>
    </div>
  </div>

</div>

  )
}
