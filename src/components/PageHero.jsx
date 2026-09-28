import { Link } from 'react-router-dom'

// Header used at the top of inner pages.
// variant="image" (default): photo in the background with the title on it
// variant="plain": white header with the photo underneath (used on About us)
export default function PageHero({ title, intro, image, alt = '', position = 'center', variant = 'image' }) {
  if (variant === 'plain') {
    return (
      <section aria-labelledby="page-title" className="pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
          <nav aria-label="Breadcrumb" className="mb-8 flex justify-center gap-2.5 text-sm text-muted">
            <Link to="/" className="transition-colors hover:text-ml-blue">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-ml-blue">{title}</span>
          </nav>
          <h1
            id="page-title"
            className="text-center text-[clamp(32px,4vw,56px)] font-bold uppercase leading-[1.1] tracking-[0.02em] text-ml-blue"
          >
            {title}
          </h1>
          {intro && (
            <p className="mx-auto mt-5 max-w-[56ch] text-center text-[17px] font-light text-muted md:text-lg">
              {intro}
            </p>
          )}
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

  // Default: background image style
  return (
    <section
      aria-labelledby="page-title"
      className="relative flex min-h-[380px] items-center overflow-hidden bg-ml-navy md:min-h-[520px]"
    >
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          style={{ objectPosition: position }}
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ml-navy/75 via-ml-navy/60 to-ml-navy/80"
      />
      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-16 text-center md:px-8 xl:px-10">
        <nav aria-label="Breadcrumb" className="mb-6 flex justify-center gap-2.5 text-sm text-white/70">
          <Link to="/" className="transition-colors hover:text-white">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white">{title}</span>
        </nav>
        <h1
          id="page-title"
          className="text-[clamp(34px,5vw,64px)] font-bold uppercase leading-[1.1] tracking-[0.02em] text-white"
        >
          {title}
        </h1>
        <span className="mx-auto mt-6 block h-[3px] w-12 rounded-full bg-ml-orange" aria-hidden="true" />
        {intro && (
          <p className="mx-auto mt-6 max-w-[52ch] text-[17px] font-light text-white/85 md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}git