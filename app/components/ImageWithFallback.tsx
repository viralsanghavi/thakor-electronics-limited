import {useState} from "react";

const ImageWithFallback = ({src, fallback, alt, ...props}: any) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      {...props}
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
};

export default ImageWithFallback;
