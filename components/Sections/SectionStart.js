import ScribbleSvg from '../atoms/ScribbleSvg'

function SectionStart() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Accounting
        <span className="relative whitespace-nowrap text-blue-600">
          <ScribbleSvg />
          <span className="relative">&nbsp;made simple </span>
        </span>
        for small businesses.
      </h1>
      <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700'>
        Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you do not get audited.
      </p>
      <div className='mt-10 flex justify-center gap-x-6'>
        <a className='group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900' href='#'>
          Get one month free
        </a>
        <a className='group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300'>Pricing</a>
      </div>
    </div>
  )
}

export default SectionStart;