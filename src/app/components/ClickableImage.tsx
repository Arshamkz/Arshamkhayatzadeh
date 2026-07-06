import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { ImageModal } from './ImageModal';

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export function ClickableImage({ src, alt, className, containerClassName }: ClickableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`relative group cursor-zoom-in ${containerClassName || ''}`}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto transition-transform duration-300 group-hover:scale-[1.02] ${className || ''}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center rounded-lg">
          <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={src}
        imageAlt={alt}
      />
    </>
  );
}
