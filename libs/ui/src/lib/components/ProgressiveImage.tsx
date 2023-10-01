import NextImage from 'next/image';
import { resolve } from 'path';
import React, { useEffect, useState } from 'react';

interface Props {
  imgSrc: string;
  alt?: string;
}

const ProgressiveImage: React.FC<Props> = ({ imgSrc }) => {
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onerror = () => {
      setLoader(false);
      setError(true);
    };
    img.onload = () => {
      setLoader(false);
    };
  }, [imgSrc]);

  return !loader ? (
    !error ? (
      <NextImage
        src={imgSrc}
        alt="gg"
        width={250}
        height={160}
        style={{ maxWidth: '250px',height:"auto"}}
      />
    ) : (
      <NextImage
        src={
          'https://res.cloudinary.com/dqqehaaqo/image/upload/v1689867669/default_g8zfom.jpg'
        }
        className="rounded-t-xl"
        alt="gg"
        fill
      />
    )
  ) : (
    <div className="w-[250px] h-[160px] bg-gray-300 animate-pulse"></div>
  );
};

export default ProgressiveImage;
