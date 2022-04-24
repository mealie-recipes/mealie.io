<template>
  <div class="bg-white py-12">
    <div class="relative sm:py-16">
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative overflow-hidden rounded-2xl bg-accent-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
          <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
            <svg
              class="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                class="text-accent-500 text-opacity-40"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                class="text-accent-700 text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          <div class="relative">
            <div class="sm:text-center">
              <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Get notified when we&rsquo;re launching.
              </h2>
              <p class="mx-auto mt-6 max-w-2xl text-lg text-indigo-200">
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                pellentesque.
              </p>
            </div>
            <form action="#" class="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
              <div class="min-w-0 flex-1">
                <label for="cta-email" class="sr-only">Email address</label>
                <input
                  id="cta-email"
                  type="email"
                  class="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary-600"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  class="block w-full rounded-md border border-transparent bg-primary-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 sm:px-10"
                >
                  Notify me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
