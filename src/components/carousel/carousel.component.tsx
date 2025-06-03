import Image from "next/image";
import { useEffect, useState } from "react";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full max-w-[1440px] mx-auto">
      <div className="relative w-full pb-[75%] overflow-hidden rounded-2xl shadow-lg">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              idx === current ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 800px"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow transition-opacity duration-300"
      >
        &#8592;
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow transition-opacity duration-300"
      >
        &#8594;
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              idx === current ? "bg-gray-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
