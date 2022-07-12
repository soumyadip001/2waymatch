import StartSvg from '../atoms/StartSvg';

export default function SectionTestimonials() {
  return (
    <aside
      id="testimonial-from-gerardo-stark"
      aria-label="Testimonial from Gerardo Stark"
      className="relative bg-slate-100 py-16 sm:py-32"
    >
      <div className="text-slate-900/10">
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
          <defs>
            <pattern id=":Rc6:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" patternTransform="translate(0 80)">
              <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:Rc6:)"></rect>
        </svg>
      </div>
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2 relative">
        <figure>
          <div className="flex text-slate-900 sm:justify-center">
            <div className="flex gap-1">
              <StartSvg />
              <StartSvg />
              <StartSvg />
              <StartSvg />
              <StartSvg />
            </div>
          </div>
          <blockquote
            className="mt-10 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center"
          >
            <p>“I’ve tried to create my own icons in the past but quickly got frustrated and gave up. Now I sell my own custom icon sets online.”</p>
          </blockquote>
          <figcaption className="mt-10 flex items-center sm:justify-center">
            <div className="overflow-hidden rounded-full bg-slate-200">
              <img
                alt=""
                src="/img/avatar-1.png"
                width="48"
                height="48"
                decoding="async"
                data-nimg="future"
                className="h-12 w-12 object-cover"
                loading="lazy"
              />
            </div>
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                Gerardo Stark
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Creator of Pandemicons
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </aside>
  )
}