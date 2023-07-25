import NextImage from 'next/image';
import React, { useEffect, useState } from 'react';

interface Props {
  imgSrc: string;
  alt?: string;
}

const ProgressiveLoader: React.FC<Props> = ({ imgSrc }) => {
  const [src, setSrc] = useState(imgSrc);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onerror = () => {
      setLoader(false)
      setError(true);
    };
    img.onload = () => {
      setSrc(imgSrc);
      setLoader(false);
    };
  }, [imgSrc]);

  return !loader ? (
    !error ? (
      <NextImage src={imgSrc} alt="gg" className="rounded-t-xl" fill />
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
    <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl"></div>
  );
};

export default ProgressiveLoader;
