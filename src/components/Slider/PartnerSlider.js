import { useMediaQuery } from "react-responsive";

const PartnerSlider = (props) => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const Portrait = ({ children }) => {
    const isPortrait = useMediaQuery({ orientation: "portrait" });
    return isPortrait ? children : null;
  };

  return (
    <>
      <Desktop>
        <div className="relative outer-container bg-white">
          <div id="absolute-shadow" className="w-full h-full absolute left-0 top-0"></div>
          <div className="container mt-12 pr-6 pl-6 border-b border-gray-300 pb-8 pt-6">
            {props.comps.map((el) => {
              return (
                <div className="">
                  <img className="w-full h-full" src={`${el}`} alt="abc" />
                </div>
              );
            })}
          </div>
        </div>
        <style jsx>
          {`
            #absolute-shadow {
              box-shadow: 0 0 14px 14px white inset;
              z-index: 1;
            }
            .outer-container {
              height: auto;
              max-width: 1700px;
            }
            .container {
              overflow: hidden;
              display: flex;
              height: full;
              width: full;
              margin: 0 auto;
              z-index: -10;
            }
            .container div {
              height: 100px;
              min-width: 140px;
              margin-left: 100px;
              animation: slide 15s linear infinite;
            }
            @keyframes slide {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-1440px, 0, 0); /* The image width */
              }
            }
          `}
        </style>
      </Desktop>
      <Portrait>
        <div className="relative outer-container bg-white">
          <div id="absolute-shadow" className="w-full h-full absolute left-0 top-0"></div>
          <div className="container mt-12 pr-6 pl-6 border-b border-gray-300 pb-8 pt-6">
            {props.comps.map((el) => {
              return (
                <div className="">
                  <img className="w-full h-full" src={`${el}`} alt="abc" />
                </div>
              );
            })}
          </div>
        </div>
        <style jsx>
          {`
            #absolute-shadow {
              box-shadow: 0 0 14px 14px white inset;
              z-index: 1;
            }
            .outer-container {
              height: auto;
              max-width: 1700px;
            }
            .container {
              overflow: hidden;
              display: flex;
              height: full;
              width: full;
              margin: 0 auto;
              z-index: -10;
            }
            .container div {
              height: 80px;
              min-width: 110px;
              margin-left: 40px;
              animation: slide 9s linear infinite;
            }
            @keyframes slide {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-900px, 0, 0); /* The image width */
              }
            }
          `}
        </style>
      </Portrait>
    </>
  );
};

export default PartnerSlider;
