import PropTypes from "prop-types";

function Loader({ size = "sm" }) {
  if (size === "md") {
    return <MediumLoader />;
  } else if (size === "sm") {
    return <SmallLoader />;
  }
}
function SmallLoader() {
  return (
    <>
      <style>{`
          .loader {
            width: 45px;
            aspect-ratio: 1;
            display: grid;
          }
  
          .loader::before,
          .loader::after {
            content: "";
            grid-area: 1 / 1;
            --c: no-repeat radial-gradient(farthest-side, rgb(59 130 246) 92%, transparent);
            background: 
              var(--c) 50%  0,
              var(--c) 50%  100%,
              var(--c) 100% 50%,
              var(--c) 0    50%;
            background-size: 11px 11px;
            animation: l12 1s infinite;
          }
  
          .loader::before {
            margin: 4px;
            filter: hue-rotate(45deg);
            background-size: 7px 7px;
            animation-timing-function: linear;
          }
  
          @keyframes l12 {
            100% {
              transform: rotate(0.5turn);
            }
          }
        `}</style>

      <div className="loader" />
    </>
  );
}

function MediumLoader() {
  return (
    <>
      <style>{`
          .loader {
            width: 50px;
            aspect-ratio: 1;
            display: grid;
          }
  
          .loader::before,
          .loader::after {
            content: "";
            grid-area: 1 / 1;
            --c: no-repeat radial-gradient(farthest-side, rgb(59 130 246) 92%, transparent);
            background: 
              var(--c) 50%  0,
              var(--c) 50%  100%,
              var(--c) 100% 50%,
              var(--c) 0    50%;
            background-size: 12px 12px;
            animation: l12 1s infinite;
          }
  
          .loader::before {
            margin: 4px;
            filter: hue-rotate(45deg);
            background-size: 8px 8px;
            animation-timing-function: linear;
          }
  
          @keyframes l12 {
            100% {
              transform: rotate(0.5turn);
            }
          }
        `}</style>
      <div className="loader" />
    </>
  );
}

function FloatCircularIndicator({ loading, children }) {
  return (
    <>
      {loading && (
        <div className="w-screen h-full z-[99999] fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-15">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="flex items-center justify-center">
              <Loader size="md" />
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}

FloatCircularIndicator.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export { Loader, FloatCircularIndicator };
