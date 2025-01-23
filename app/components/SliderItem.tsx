import {MouseEventHandler} from "react";

const SliderItem = ({
  className,
  url = "https://static4.arrow.com/-/media/arrow/images/corphome/1electronic-components-banner.jpg",
  title,
  description,
  onClick,
  active,
}: {
  className: string;
  url?: string;
  title?: string;
  description?: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  active: boolean;
}) => {
  return (
    <div className={`h-full ${className} relative transition-all duration-300 ease-out`} onClick={onClick}>
      <img src={url} className="object-cover h-full w-full" />
      <div
        className={`absolute left-0 top-[20%] bottom-0 z-20 px-12 ${
          !active && "hidden"
        }`}
      >
        <div className={`flex flex-col gap-2 max-w-lg`}>
          <h1 className="text-white text-5xl font-bold leading-snug">
            Committed to helping you connect
          </h1>
          <p className="text-white mt-12 text-sm">
            Your ingenuity is what turns imagination into innovation. We give
            you access to the components you need to breathe life into your
            vision.
          </p>
          <button className="text-white bg-blue-600 py-2 max-w-sm mt-8">
            Find and buy electronic components
          </button>
        </div>
      </div>
      <div className="absolute z-0 inset-0 bg-gradient-to-r from-black bg-opacity-65" />
    </div>
  );
};

export default SliderItem;
