import ScribbleSvg2 from '../atoms/ScribbleSvg2'

function SectionGetAssistance() {
  return (
    <section
      id="free-assistance"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
      aria-label="Free Assistance"
    >
      <div className="overflow-hidden lg:relative">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8 relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32">
          <ScribbleSvg2 />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get the free sample chapters
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-200">
              Enter your email address and I shall send you a sample from the book containing two of my favorite chapters.
            </p>
          </div>
          <form className="lg:pl-16">
            <h3 className="text-base font-medium tracking-tight text-white">
              Get two free chapters straight to your inbox
              <span aria-hidden="true">→</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input type="email" id="email-address" required="" aria-label="Email address" placeholder="Email address" className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3" />
                
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl">
                </div>
              </div>
              <button className="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none" type="submit">
                Get free callback
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default SectionGetAssistance;