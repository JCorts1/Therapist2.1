// src/components/ui/carousel.jsx
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

export function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins = [],
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }, [scrollPrev, scrollNext])

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)
    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={`relative ${className}`}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

export function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden h-full">
      <div
        className={`flex h-full ${
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
        } ${className}`}
        {...props}
      />
    </div>
  )
}

export function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={`min-w-0 shrink-0 grow-0 basis-full ${
        orientation === "horizontal" ? "pl-4" : "pt-4"
      } ${className}`}
      {...props}
    />
  )
}

export function CarouselPrevious({ className, variant = "outline", size = "icon", ...props }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      className={`absolute h-8 w-8 rounded-full flex items-center justify-center border border-neutral-200 bg-white/80 backdrop-blur-sm hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed ${
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90"
      } ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
      </svg>
      <span className="sr-only">Previous slide</span>
    </button>
  )
}

export function CarouselNext({ className, variant = "outline", size = "icon", ...props }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      className={`absolute h-8 w-8 rounded-full flex items-center justify-center border border-neutral-200 bg-white/80 backdrop-blur-sm hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed ${
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90"
      } ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.15826 3.13514C5.95681 3.32401 5.9466 3.64042 6.13546 3.84188L9.56487 7.49991L6.13546 11.1579C5.9466 11.3594 5.95681 11.6758 6.15826 11.8647C6.35972 12.0535 6.67614 12.0433 6.86499 11.8419L10.615 7.84188C10.7953 7.64955 10.7953 7.35027 10.615 7.15794L6.86499 3.15794C6.67614 2.95648 6.35972 2.94628 6.15826 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
      </svg>
      <span className="sr-only">Next slide</span>
    </button>
  )
}
