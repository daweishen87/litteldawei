"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

type Slide = {
  id: string;
  label: string;
  img: string;
  alt: string;
  w: number;
  h: number;
  caption: string;
};

const slides: Slide[] = [
  {
    id: "pair",
    label: "一雙實拍",
    img: "/images/dw-product-pair.webp",
    alt: "DW Founder Edition 一雙全黑護腕實拍，呈現全黑織紋與霧面 TPU Logo",
    w: 1755,
    h: 1800,
    caption: "一雙護腕的實際外觀，包含全黑織紋與霧面 TPU Logo。螢幕顯示與實物色彩可能略有差異。",
  },
  {
    id: "tpu",
    label: "霧面 TPU Logo",
    img: "/images/logo-closeup.jpg",
    alt: "DW 黑色護腕霧面 TPU Logo 特寫",
    w: 900,
    h: 1338,
    caption: "霧面 TPU Logo 特寫。",
  },
  {
    id: "thumb",
    label: "拇指環的取捨",
    img: "/images/thumb-loop.jpg",
    alt: "DW 黑色護腕的拇指環實拍",
    w: 900,
    h: 1200,
    caption: "拇指環較輕薄，佩戴存在感較低；固定感可能不如較緊的設計。",
  },
  {
    id: "daily",
    label: "日常訓練實拍",
    img: "/images/dw-training-shoulder-press.webp",
    alt: "佩戴 DW 黑色護腕進行肩推訓練的實拍",
    w: 1600,
    h: 2133,
    caption: "肩推訓練實拍，照片完整呈現不裁切。",
  },
];

export function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedIndexRef = useRef(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const suppressScrollUntilRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  const getScrollBehavior = (): ScrollBehavior => {
    if (typeof window === "undefined") return "auto";
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  };

  const centerTab = (index: number, behavior: ScrollBehavior) => {
    const tabList = tabListRef.current;
    const tab = tabRefs.current[index];
    if (!tabList || !tab) return;

    const listRect = tabList.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const left =
      tabList.scrollLeft +
      tabRect.left -
      listRect.left -
      (tabList.clientWidth - tab.clientWidth) / 2;
    tabList.scrollTo({ left, behavior });
  };

  const centerSlide = (index: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];
    if (!track || !slide) return;

    const trackRect = track.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    const left =
      track.scrollLeft +
      slideRect.left -
      trackRect.left -
      (track.clientWidth - slide.clientWidth) / 2;
    track.scrollTo({ left, behavior });
  };

  const goToSlide = (index: number, focusTab = false) => {
    const nextIndex = Math.max(0, Math.min(slides.length - 1, index));
    const behavior = getScrollBehavior();
    suppressScrollUntilRef.current = Date.now() + 700;
    selectedIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
    centerTab(nextIndex, behavior);
    centerSlide(nextIndex, behavior);
    if (focusTab) tabRefs.current[nextIndex]?.focus({ preventScroll: true });
  };

  const handleArrowKey = (event: KeyboardEvent<HTMLElement>, moveTabFocus: boolean) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    goToSlide(selectedIndexRef.current + direction, moveTabFocus);
  };

  const handleTrackScroll = () => {
    if (Date.now() < suppressScrollUntilRef.current) return;
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      const track = trackRef.current;
      if (!track) return;

      const center = track.getBoundingClientRect().left + track.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;
        const rect = slide.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - center);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (selectedIndexRef.current !== closestIndex) {
        selectedIndexRef.current = closestIndex;
        setActiveIndex(closestIndex);
        centerTab(closestIndex, getScrollBehavior());
      }
    });
  };

  useEffect(
    () => () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  return (
    <div className="product-carousel">
      <div
        className="tablist product-carousel-tabs"
        role="tablist"
        aria-label="產品照片分頁"
        ref={tabListRef}
        onKeyDown={(event) => handleArrowKey(event, true)}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            role="tab"
            id={`tab-${slide.id}`}
            aria-selected={index === activeIndex}
            aria-controls={`slide-${slide.id}`}
            tabIndex={index === activeIndex ? 0 : -1}
            type="button"
            onClick={() => goToSlide(index)}
          >
            {slide.label}
          </button>
        ))}
      </div>

      <div className="product-carousel-shell">
        <div
          className="product-carousel-track"
          role="region"
          aria-label="產品照片，可左右滑動"
          aria-roledescription="carousel"
          tabIndex={0}
          ref={trackRef}
          onScroll={handleTrackScroll}
          onKeyDown={(event) => handleArrowKey(event, false)}
        >
          {slides.map((slide, index) => (
            <figure
              key={slide.id}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
              className="product-carousel-slide"
              id={`slide-${slide.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${slide.id}`}
              aria-label={`${slide.label}，第 ${index + 1} 張，共 ${slides.length} 張`}
              aria-hidden={index !== activeIndex}
            >
              <div className="product-carousel-image-frame">
                <Image
                  src={slide.img}
                  width={slide.w}
                  height={slide.h}
                  sizes="(min-width: 820px) 800px, 86vw"
                  alt={slide.alt}
                  className="product-carousel-image"
                />
              </div>
              <figcaption className="product-carousel-caption">{slide.caption}</figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="product-carousel-arrow product-carousel-arrow-prev"
          aria-label="上一張產品照片"
          disabled={activeIndex === 0}
          onClick={() => goToSlide(activeIndex - 1)}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          className="product-carousel-arrow product-carousel-arrow-next"
          aria-label="下一張產品照片"
          disabled={activeIndex === slides.length - 1}
          onClick={() => goToSlide(activeIndex + 1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <p className="product-carousel-count" role="status" aria-label={`第 ${activeIndex + 1} 張，共 ${slides.length} 張`}>
        {activeIndex + 1} / {slides.length}
      </p>
    </div>
  );
}
