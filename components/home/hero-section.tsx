import { cn } from "@/lib/classnames";
import Frame from "../app/frame";
import Logo from "../logo";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden" id="home">
      <div
        aria-hidden
        className="opacity-0 dark:opacity-25 absolute [background-image:radial-gradient(theme(colors.gray.500),transparent_50%)] top-0 w-[1000px] z-10 h-[800px] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      ></div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-32 sm:pt-44 ml-auto">
          <div className="w-full z-20 flex items-center justify-center mb-5 relative">
            <Logo className="size-24" />
          </div>
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-4xl sm:text-5xl md:text-6xl">
              The best new
              <span className="bg-gradient-to-r from-fuchsia-500 to-teal-500 bg-clip-text text-transparent">
                {` `}Zetups{` `}
              </span>
              in tech.
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-gray-700 dark:text-gray-300">
              Get exclusive access to the latest and greatest Zetups in tech.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Frame>
                <div className="relative z-10 px-3 py-1">Coming Soon</div>
              </Frame>
            </div>
            <div className="py-8 mt-16 gap-4 border-y dark:border-gray-800 grid grid-cols-1 md:grid-cols-3">
              <div className="text-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>

                <h2 className="my-2 text-base font-semibold text-gray-700 dark:text-white">
                  Share Zetup
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Share your Zetup with the world.
                </p>
              </div>
              <div className="text-left">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  className="size-6"
                >
                  <path d="M8 16.016a7.5 7.5 0 001.962-14.74A1 1 0 009 0H7a1 1 0 00-.962 1.276A7.5 7.5 0 008 16.016zm6.5-7.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
                  <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                </svg>

                <h2 className="my-2 text-base font-semibold text-gray-700 dark:text-white">
                  Explore Zetups
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Discover new Zetups in tech.
                </p>
              </div>

              <div className="text-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>

                <h2 className="my-2 text-base font-semibold text-gray-700 dark:text-white">
                  Personalized Zetups
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Zetups based on your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
