import logo from '../assets/images/logo.png'

// Shown while a page is loading: school logo with a spinning ring around it
export default function Loader() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
      <div className="relative size-24" aria-hidden="true">
        {/* Spinning ring */}
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-ml-blue-100 border-t-ml-orange motion-reduce:animate-none" />

        {/* Logo, coloured deep blue using the white logo as a stencil */}
        <span
          className="absolute inset-3 animate-pulse bg-ml-blue motion-reduce:animate-none"
          style={{
            WebkitMaskImage: `url(${logo})`,
            maskImage: `url(${logo})`,
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
        />
      </div>
      <span className="text-sm font-medium uppercase tracking-[0.12em] text-ml-blue">Loading…</span>
    </div>
  )
}