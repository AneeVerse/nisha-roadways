"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Play, X } from "lucide-react";
import Image from 'next/image';

interface VideoCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string; // Add thumbnail URL
  timestamp: string;
  transcript: string;
  reviewerName: string;
  rating: number;
}

const videos: VideoCard[] = [
  {
    id: 1,
    title: "Nationwide Warehouse Integration",
    subtitle: "MANUFACTURING PARTNER",
    description: "A comprehensive look at how our strategic logistics planning transformed their distribution network, reducing turnaround times by 30% across major industrial hubs.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%203.57.12%20PM.mp4",
    thumbnailUrl: "/images/testomonials/1046116e11d08bad323ce200edb88c0bcfa1ccb5.png",
    timestamp: "0:15",
    transcript: "Working with Nisha Roadways has been a game-changer for our national distribution. Their ability to handle complex ODC movements while maintaining strict schedules is exactly what our industry needs. The level of professionalism and real-time tracking they provide gives us complete peace of mind.",
    reviewerName: "Alex Jouit",
    rating: 4
  },
  {
    id: 2,
    title: "Nationwide Warehouse Integration",
    subtitle: "IMPORT/EXPORT DIRECTOR",
    description: "Highlighting our specialized container solutions and ExIm transport expertise that cleared a massive backlog and optimized port-to-factory logistics during peak season.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%203.57.37%20PM.mp4",
    thumbnailUrl: "/images/testomonials/5f44ea5f9ef25bb4ce6c670ef6ebdae54c9ba774.png",
    timestamp: "0:18",
    transcript: "The transition to Nisha Roadways for our cargo movements was seamless. Their team's expertise in handling delicate solar panel components and over-dimension cargo is unparalleled. We've seen a significant reduction in transit damage and a much smoother customs clearance process through their network.",
    reviewerName: "Jimmi Singh",
    rating: 5
  },
  {
    id: 3,
    title: "Nationwide Warehouse Integration",
    subtitle: "OPERATIONS MANAGER",
    description: "A deep dive into how our multimodal transport strategies provided a cost-effective and reliable alternative to traditional road-only transport for long-haul shipments.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%203.58.00%20PM.mp4",
    thumbnailUrl: "/images/testomonials/865fd375bbd7f29cea5efaa5e31fb4da9b660311.png",
    timestamp: "0:20",
    transcript: "What sets Nisha Roadways apart is their proactive approach to problem-solving. When we faced major rail disruptions, they immediately pivoted to a multimodal solution that kept our production line running. Their 24/7 support and dedication to our success make them more than just a vendor; they are a true partner.",
    reviewerName: "Rahul Bhatiya",
    rating: 4
  },
  {
    id: 4,
    title: "Nationwide Warehouse Integration",
    subtitle: "LOGISTICS COORDINATOR",
    description: "Showcasing how our Empty Container Transportation (ECT) optimization helped a major exporter save significant costs on container repositioning through our intelligent network.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%204.02.02%20PM.mp4",
    thumbnailUrl: "/images/testomonials/87487f33c11f3edb4e43d263b46a7ef859fad5aa.png",
    timestamp: "0:16",
    transcript: "The efficiency of their ECT service is remarkable. We used to struggle with container availability and high repositioning costs, but Nisha's managed network solved that for us nearly overnight. Their digital tracking system is intuitive and gives us the data we need to make informed decisions.",
    reviewerName: "Manoj Kumavat",
    rating: 5
  },
  {
    id: 5,
    title: "Nationwide Warehouse Integration",
    subtitle: "SUPPLY CHAIN HEAD",
    description: "Exploring the seamless integration between our storage solutions and transportation network, creating a highly responsive and localized supply chain for their FMCG products.",
    videoUrl: "/images/review-video/video/WhatsApp%20Video%202025-07-09%20at%204.04.36%20PM.mp4",
    thumbnailUrl: "/images/testomonials/e327490679c414d3809869797b63a2810170d340.png",
    timestamp: "0:30",
    transcript: "Our partnership with Nisha has allowed us to scale our operations into five new states in just under a year. Their integrated warehousing and transport solutions provided us with the local presence we needed without the heavy capital investment. Their commitment to safety and quality is visible in every aspect of their operation.",
    reviewerName: "Gaurav Singh",
    rating: 5
  }
];

// Duplicate data for seamless looping (multi-copy for bi-directional loop)
const COPIES = 4;
const duplicatedVideos = Array.from({ length: COPIES }).flatMap(() => videos);

export default function ReviewVideo({ hideHeader = false }: { hideHeader?: boolean }) {
  // Add CSS for line-clamp utility
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [isPaused, setIsPaused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const animationRef = useRef<number | null>(null);
  const translateX = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const totalWidth = useRef(0);
  const scrollSpeed = 0.5; // Adjust speed as needed

  // Calculate width of one logical set and position to middle copy for bi-directional scroll
  const calculateWidth = useCallback(() => {
    if (!containerRef.current) return;
    const fullScrollWidth = containerRef.current.scrollWidth;
    totalWidth.current = fullScrollWidth / COPIES;
    // Start at second copy so we can go both directions seamlessly
    translateX.current = -totalWidth.current;
    containerRef.current.style.transform = `translateX(${translateX.current}px)`;
  }, []);

  // Keep translateX within bounds across both directions
  const wrapTranslateX = useCallback(() => {
    if (!containerRef.current) return;
    if (translateX.current >= 0) {
      translateX.current -= totalWidth.current;
    }
    if (translateX.current <= -totalWidth.current * (COPIES - 1)) {
      translateX.current += totalWidth.current;
    } else if (translateX.current <= -totalWidth.current) {
      while (translateX.current <= -totalWidth.current * 2) {
        translateX.current += totalWidth.current;
      }
    }
  }, []);

  // Animation Loop
  const animate = useCallback(() => {
    if (!isPaused && !isDragging.current && containerRef.current) {
      translateX.current -= scrollSpeed;
      wrapTranslateX();
      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, wrapTranslateX]);

  // Handle Pointer Events (Mouse & Touch)
  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    setIsPaused(true);
    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    startX.current = clientX;
    scrollLeft.current = translateX.current;
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    const walk = (clientX - startX.current) * 2; // Adjust sensitivity
    translateX.current = scrollLeft.current + walk;
    wrapTranslateX();
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;

  };

  // Handle wheel events for trackpad/trackball horizontal scrolling
  const handleWheel = (e: React.WheelEvent) => {
    // Check if it's a horizontal scroll (deltaX) or vertical scroll (deltaY)
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);

    if (isHorizontalScroll) {
      // Only handle horizontal scroll - prevent default and scroll
      e.preventDefault();
      e.stopPropagation();

      const scrollAmount = e.deltaX * 0.5; // Adjust sensitivity
      translateX.current -= scrollAmount;

      // Infinite scroll - seamless looping in both directions
      wrapTranslateX();

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${translateX.current}px)`;
      }
    }
    // Ignore vertical scrolling - let it work normally for page scrolling
  };


  // Handle play button click
  const handlePlayClick = (video: VideoCard) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };


  // Start Animation & Recalculate on Resize
  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    animationRef.current = requestAnimationFrame(animate);

    // Add wheel event listener to prevent browser navigation only for horizontal scroll
    const handleWheelCapture = (e: WheelEvent) => {
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        // Only prevent default for horizontal scrolling
        const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
        if (isHorizontalScroll) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };

    // Use passive: false to allow preventDefault
    document.addEventListener('wheel', handleWheelCapture, { passive: false });

    return () => {
      window.removeEventListener("resize", calculateWidth);
      document.removeEventListener('wheel', handleWheelCapture);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, calculateWidth]);


  return (
    <>
      <section className="w-full bg-white py-6 sm:py-10 md:py-16 lg:py-20 xl:py-10 xl:pt-20 overflow-hidden md:-mt-25 md:-mb-16 -mt-4 -mb-6 relative">


        <div className="w-full relative z-10">
          {/* Section Heading */}
          {!hideHeader && (
            <div className="text-center mb-10 sm:mb-16 px-4">
              {/* PREVIOUS CODE START
              <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-gray-900 tracking-tight mb-4 sm:mb-6">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">India's Leading Companies</span>
              </h2>
              <div className="w-16 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mx-auto rounded-full mb-4 sm:mb-6"></div>
              PREVIOUS CODE END */}

              <h2 className="text-[34px] font-semibold text-gray-900 leading-[40px] mb-[16px] max-w-[1145px] mx-auto">
                Trusted by India's Leading Companies
              </h2>
              <p className="text-[18px] font-medium text-[#9F9F9F] leading-[27px] max-w-[567px] mx-auto">
                Here's what industry leaders say about working with us.
              </p>
            </div>
          )}
          {/* Scrolling Video Container */}
          <div
            className="mt-12 overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onWheel={handleWheel}
          >
            <div
              ref={containerRef}
              className="flex w-max will-change-transform cursor-grab active:cursor-grabbing gap-6"
            >
              {duplicatedVideos.map((video, index) => {
                const videoId = `${index}-${video.id}`;

                return (
                  <VideoCard
                    key={videoId}
                    video={video}
                    videoId={videoId}
                    onPlayClick={handlePlayClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Video Content */}
              <div className="lg:col-span-2 relative">
                <video
                  ref={modalVideoRef}
                  className="w-full h-auto max-h-[90vh] object-contain"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  onLoadedData={() => {
                    // Unmute and play when video loads
                    if (modalVideoRef.current) {
                      modalVideoRef.current.muted = false;
                      modalVideoRef.current.play().catch(() => {
                        // If autoplay fails, user will need to click play manually
                        console.log('Autoplay prevented by browser');
                      });
                    }
                  }}
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                </video>
              </div>

              {/* Review Details Sidebar */}
              <div className="lg:col-span-1 bg-white p-6 overflow-y-auto max-h-[90vh] flex flex-col">
                <div className="space-y-6 flex-1 pt-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < selectedVideo.rating ? 'text-yellow-400 fill-current' : 'text-gray-200 fill-current'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Reviewer Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedVideo.reviewerName}</h3>
                    <p className="text-base text-blue-600 font-bold uppercase tracking-wide">{selectedVideo.title}</p>
                    <p className="text-sm text-gray-500 font-semibold">{selectedVideo.subtitle}</p>
                  </div>

                  {/* Full Transcript */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-gray-900">What They Said</h4>
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                      <p className="text-sm text-gray-600 leading-relaxed font-semibold italic">
                        &quot;{selectedVideo.transcript}&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fixed Call to Action Button at Bottom */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex-shrink-0">
                  <button
                    onClick={() => {
                      handleCloseModal();
                      // Navigate to contact page
                      setTimeout(() => {
                        window.location.href = '/contact';
                      }, 100);
                    }}
                    className="w-full bg-[#1A56F0] hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-bold text-[16px] transition-all duration-300 shadow-lg shadow-blue-500/20"
                  >
                    Connect with Experts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// VideoCard component - Now using thumbnails instead of autoplay videos
const VideoCard: React.FC<{
  video: VideoCard;
  videoId: string;
  onPlayClick: (video: VideoCard) => void;
}> = ({ video, onPlayClick }) => {

  return (
    <div
      className="flex-shrink-0 relative rounded-2xl overflow-hidden h-[358px] w-[258px] group mx-2 duration-300 transition-all shadow-md select-none cursor-pointer"
      data-card="true"
      draggable={false}
      onClick={() => onPlayClick(video)}
    >
      {/* Thumbnail Background */}
      <Image
        src={video.thumbnailUrl}
        alt={`${video.reviewerName} testimonial thumbnail`}
        fill
        className="object-cover transition-transform duration-500"
        draggable={false}
        unoptimized
      />

      {/* Modern Overlay Gradient - Matching Figma 144px height */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[144px] bg-gradient-to-t from-[#000000] to-[#454545]/0 z-10"
      />

      {/* Card Content - Bottom aligned */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pb-6 text-white z-20 flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-[15px] leading-tight">{video.reviewerName}</h4>
          <p className="text-[10px] font-normal text-white/90 leading-tight">
            {video.title}
          </p>

          {/* Rating Stars */}
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < video.rating ? 'text-yellow-400 fill-current' : 'text-gray-400/50 fill-current'}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Play Button */}
        <div className="mb-4">
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black shadow-lg transition-transform duration-300">
            <Play className="w-2.5 h-2.5 ml-0.5 fill-current" />
          </div>
        </div>
      </div>

      {/* Hover Light Effect */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};
