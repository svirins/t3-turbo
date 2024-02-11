"use client";

import useLightbox from "~/lib/hooks/useLightbox";

export function ShowPhotoButton({
  imageSrcs,
  alt,
}: {
  imageSrcs: string[];
  alt: string;
}) {
  // TODO: get dimensions from cloudinary
  const { openLightbox, renderLightbox } = useLightbox();
  const slides = imageSrcs.map((src) => {
    const image = {
      src,
      alt,
      width: 640,
      height: 640,
    };
    return image;
  });

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        className="btn btn-sm btn-ghost"
      >
        см. фото
      </button>
      {renderLightbox({ slides })}
    </>
  );
}
