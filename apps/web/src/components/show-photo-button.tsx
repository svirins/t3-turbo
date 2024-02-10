"use client";

import useLightbox from "~/lib/hooks/useLightbox";

export function ShowPhotoButton({
  imageSrc,
  alt,
}: {
  imageSrc: string;
  alt: string;
}) {
  const { openLightbox, renderLightbox } = useLightbox();
  const slides = [
    {
      src: imageSrc,
      alt,
      width: 640,
      height: 640,
    },
  ];
  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        className="btn btn-outline btn-info"
      >
        Как нас найти?
      </button>
      {renderLightbox({ slides })}
    </>
  );
}
