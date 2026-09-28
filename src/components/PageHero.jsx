import { Link } from 'react-router-dom'

// The header used at the top of every inner page
export default function PageHero({ title, intro, image, alt, position = 'center' }) {
  return (
    <section aria-labelledby="page-title" className="pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex justify-center gap-2.5 text-sm text-muted">
          <Link to="/" className="transition-colors hover:text-ml-blue">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ml-blue">{title}</span>
        </nav>

        {/* Heading + intro */}
        <h1
          id="page-title"
          className="text-center text-[clamp(32px,4vw,56px)] font-bold uppercase leading-[1.1] tracking-[0.02em] text-ml-blue"
        >
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-[56ch] text-center text-[17px] font-light text-muted md:text-lg">
          {intro}
        </p>

        {/* Wide photo (only shows if an image is given) */}
        {image && (
          <div className="relative mt-12 h-[280px] overflow-hidden rounded-md bg-soft md:mt-16 md:h-[480px]">
            <img
              src={image}
              alt={alt}
              className="absolute inset-0 size-full object-cover"
              style={{ objectPosition: position }}
            />
          </div>
        )}
      </div>
    </section>
  )
}