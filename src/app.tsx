import { memo } from "preact/compat";

const App = () => {
  return (
    <div className="loader">
      
    <div className="div"></div>
      <style>
        {`:root {
        --bg1: #09334f;
        --bg2: #072a40;
        --wrm: #d1faff;
        --deg: -12deg;
        --sz: 15vmin;
        --spd: 2.05s;
      }
      body {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg1);
      }
      .div{
        display:none;
      }
      @property --deg {
        initial-value: -12deg;
        inherits: false;
        syntax: "<angle>";
      }
      @keyframes spinner {
        0% {
          --deg: -12deg;
        }
        100% {
          --deg: 348deg;
        }
      }

      .loader {
        width: var(--sz);
        height: var(--sz);
        background: conic-gradient(
          from var(--deg) at 50% 50%,
          var(--bg1) 0,
          var(--wrm) 25deg 50deg,
          var(--bg1) 51deg 100%
        );
        clip-path: polygon(
          0% 0%,
          40% 0%,
          50% 10%,
          60% 0%,
          100% 0%,
          100% 40%,
          90% 50%,
          100% 60%,
          100% 100%,
          60% 100%,
          50% 90%,
          40% 100%,
          0% 100%,
          0% 60%,
          10% 50%,
          0% 40%
        );
        animation: spinner 3s linear 0s infinite;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: calc(var(--sz) / 10);
      }
      .loader:hover {
        animation: spinner 2s linear 0s infinite, rotation 4s linear 0s infinite;
      }

      .loader:before {
        content: "";
        position: absolute;
        width: calc(100% - calc(var(--sz) / 10));
        height: calc(100% - calc(var(--sz) / 10));
        /* width: 5px;
        height: 5px; */
        border-radius: calc(var(--sz) / 20);
        background: var(--bg2);
        clip-path: polygon(
          0% 0%,
          38% 0%,
          50% 12%,
          62% 0%,
          100% 0%,
          100% 38%,
          88% 50%,
          100% 62%,
          100% 100%,
          62% 100%,
          50% 88%,
          38% 100%,
          0% 100%,
          0% 62%,
          12% 50%,
          0% 38%
        );
      }
      @-moz-document url-prefix() {
        .loader {
          background: var(--bg2) !important;
          clip-path: none !important;
          border-radius: 50% !important;
        }
        .loader:before {
          border-radius: 50% !important;
        }
        .div {
          display:flex;
  border: 0px solid #a9e4de;
  transition: all 0ms ease-in;
  border-top-width: 6px;
  border-top-color: #0d9488;
  position: absolute;
  animation: liner 15s linear infinite;
  transition: all 0 !important;
  transition-delay: 0 !important;
  border-radius: 50%;
  width: 100%;
  aspect-ratio: 1/1;
}
      }
      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }
      @keyframes liner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(3600deg);
  }
}`}
      </style>
    </div>
  );
};
export default memo(App);
