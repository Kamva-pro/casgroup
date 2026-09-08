import { useRef, useLayoutEffect, useMemo, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ViewAllCard } from './ViewAllCard';
import { FlatModelRow } from '../data/productsData';

// Distinct differentiated product images across 5 categories
import rs75_2s_vsd from '@/assets/Oil Injected Compressors/Two Stage VSD/RS75-2S-VSD/RS75-2S-VSD.png';
import rs11ff from '@/assets/Oil Injected Compressors/Full Feature/RS11 VSD FF/RS11VSDFF.png';
import dz10 from '@/assets/Oil Injected Compressors/Drill Rigs/DZ10/DZ10.png';
import airReceiverVertical from '@/assets/Air Receivers/Air Receiver2.png';
import airDryerImg from '@/assets/air-dryer.jpg';

gsap.registerPlugin(ScrollTrigger);

export interface FeaturedProductItem {
  model: string;
  series: string;
  tagline: string;
  power: string;
  pressure: string;
  image: string;
}

interface ProductFilmstripScrollProps {
  products?: FlatModelRow[];
  onQuote?: (modelName: string) => void;
}

export function ProductFilmstripScroll({
  onQuote
}: ProductFilmstripScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const shouldPin = isDesktop && !prefersReducedMotion;

  // 5 completely differentiated products across 5 distinct categories
  const featured = useMemo<FeaturedProductItem[]>(() => {
    return [
      {
        model: 'RS75-2S-VSD',
        series: 'Two-Stage Rotary Screw',
        tagline: 'Heavy-duty dual-stage variable speed compressor for continuous mining and industrial plant air.',
        power: '75 kW (100 HP)',
        pressure: '8 – 13 Bar',
        image: rs75_2s_vsd
      },
      {
        model: 'RS11-VSD-FF',
        series: 'Full-Feature 3-in-1 Station',
        tagline: 'All-in-one plug-and-play station: rotary screw compressor, 500L storage receiver, and integrated air dryer.',
        power: '11 kW (15 HP)',
        pressure: '8 – 13 Bar',
        image: rs11ff
      },
      {
        model: 'DZ10 Drill Rig',
        series: 'High-Pressure Drill Rig',
        tagline: 'Skid-mounted high-pressure compressor built for harsh open-cast mining exploration and drilling.',
        power: '18.5 kW',
        pressure: 'Up to 25 Bar',
        image: dz10
      },
      {
        model: '1000L Air Receiver',
        series: 'Certified Air Storage Vessel',
        tagline: 'Vertical ASME & SANS 347 certified air vessel with safety valves, pressure gauge, and auto drain.',
        power: '1000 Litres',
        pressure: '11 – 16 Bar',
        image: airReceiverVertical
      },
      {
        model: 'Refrigerated Air Dryer',
        series: 'Compressed Air Treatment',
        tagline: 'High-efficiency refrigerated moisture and particulate removal station protecting downstream machinery.',
        power: '10 m³/min',
        pressure: '16 Bar Max',
        image: airDryerImg
      }
    ];
  }, []);

  useLayoutEffect(() => {
    if (!shouldPin || !trackRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const section = sectionRef.current!;
      const pageBg = document.getElementById('page-background') || document.body;
      const navEl = document.getElementById('main-nav') || document.querySelector('nav');

      const hideNavbar = () => {
        if (navEl) {
          gsap.to(navEl, {
            yPercent: -140,
            autoAlpha: 0,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      };

      const showNavbar = () => {
        if (navEl) {
          gsap.to(navEl, {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      };

      // Exact overflow distance needed to traverse all 6 cards smoothly
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      // 1. Approach Darkening: As user scrolls towards section, smoothly fade page background to dark
      // and hide navbar as section approaches top
      gsap.fromTo(
        pageBg,
        { backgroundColor: '#ffffff' },
        {
          backgroundColor: '#0a0e1a',
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top top',
            scrub: 0.6,
            invalidateOnRefresh: true,
            onEnter: () => hideNavbar(),
            onLeaveBack: () => showNavbar()
          }
        }
      );

      // 2. Continuous, Non-Freezing Pinned Horizontal Scroll
      // Every unit of scroll translates the cards continuously with zero frozen delay
      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          anticipatePin: 1,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onEnter: () => {
            hideNavbar();
            gsap.to(pageBg, { backgroundColor: '#0a0e1a', duration: 0.25, overwrite: 'auto' });
          },
          onLeave: () => {
            showNavbar();
            gsap.to(pageBg, { backgroundColor: '#ffffff', duration: 0.35, overwrite: 'auto' });
          },
          onEnterBack: () => {
            hideNavbar();
            gsap.to(pageBg, { backgroundColor: '#0a0e1a', duration: 0.25, overwrite: 'auto' });
          },
          onLeaveBack: () => {
            showNavbar();
            gsap.to(pageBg, { backgroundColor: '#ffffff', duration: 0.35, overwrite: 'auto' });
          }
        }
      });

      // Recalculate ScrollTrigger on next tick after images render
      const refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);

      return () => clearTimeout(refreshTimer);
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldPin, featured.length]);

  if (!shouldPin) {
    return <ProductFilmstripMobile products={featured} onQuote={onQuote} />;
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-transparent select-none"
    >
      {/* Section Header overlay pinned at top left */}
      <div className="absolute top-8 left-[6vw] z-20 pointer-events-none">
        <p className="text-xs font-bold uppercase tracking-widest text-red-500">
          Featured Equipment
        </p>
        <h3 className="mt-1 text-2xl lg:text-3xl font-black text-white tracking-tight">
          Heavy-Duty Compressed Air Systems
        </h3>
      </div>

      {/* Horizontal Track */}
      <div
        ref={trackRef}
        className="flex h-full items-center gap-8 pl-[6vw] pr-[16vw] will-change-transform pt-12"
      >
        {featured.map((p) => (
          <FeaturedProductCard
            key={p.model}
            product={p}
            onQuote={onQuote}
          />
        ))}
        <ViewAllCard href="/products/catalog" />
      </div>
    </section>
  );
}

function FeaturedProductCard({
  product,
  onQuote,
  className = ''
}: {
  product: FeaturedProductItem;
  onQuote?: (modelName: string) => void;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex h-[70vh] w-[78vw] shrink-0 flex-col justify-end overflow-hidden rounded-3xl bg-slate-900 sm:w-[55vw] lg:w-[42vw] shadow-2xl border border-slate-800/90 select-none transition-all duration-300 hover:scale-[1.015] hover:border-red-500/60 ${className}`}
    >
      {/* Product Image Stage */}
      <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-14">
        {product.image ? (
          <img
            src={product.image}
            alt={product.model}
            className="max-h-[80%] max-w-[85%] object-contain opacity-95 transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-2xl"
          />
        ) : (
          <div className="h-40 w-40 rounded-full bg-slate-800" />
        )}
      </div>

      {/* Atmospheric Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none" />

      {/* Card Details */}
      <div className="relative z-10 p-8 lg:p-10">
        <p className="text-xs font-bold uppercase tracking-widest text-red-400">
          {product.series}
        </p>
        <h3 className="mt-1 text-3xl font-black text-white lg:text-4xl tracking-tight">
          {product.model}
        </h3>
        <p className="mt-2.5 max-w-md text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
          {product.tagline}
        </p>

        {/* Specs */}
        <div className="mt-6 flex gap-8 text-white border-t border-white/10 pt-4">
          <div>
            <p className="text-2xl font-black text-white">{product.power}</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Specification</p>
          </div>
          <div>
            <p className="text-2xl font-black text-white">{product.pressure}</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Pressure Rating</p>
          </div>
        </div>

        {/* Quote Action Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuote?.(product.model);
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:-translate-y-0.5 hover:bg-red-700 cursor-pointer"
        >
          Quote →
        </button>
      </div>
    </div>
  );
}

function ProductFilmstripMobile({
  products,
  onQuote
}: {
  products: FeaturedProductItem[];
  onQuote?: (modelName: string) => void;
}) {
  return (
    <div className="w-full bg-[#0a0e1a] py-12 px-6 sm:px-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-red-500">
          Featured Equipment
        </p>
        <h3 className="mt-1 text-2xl font-black text-white tracking-tight">
          Heavy-Duty Compressed Air Systems
        </h3>
      </div>
      <div className="overflow-x-auto snap-x snap-mandatory flex gap-6 pb-6 pt-2 scroll-smooth no-scrollbar">
        {products.map((p) => (
          <FeaturedProductCard key={p.model} product={p} onQuote={onQuote} className="snap-start shrink-0" />
        ))}
        <ViewAllCard href="/products/catalog" className="snap-start shrink-0" />
      </div>
    </div>
  );
}
