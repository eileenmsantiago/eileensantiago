import React from "react"
import cx from 'classnames';
import css from "./Blob.module.scss"

const Blob = (props) => {
  return (
    <div className={css.container}>
      <svg
        className={css.blob}
        viewBox="0 0 826 796"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f)">
          <ellipse
            cx="412.51"
            cy="391.993"
            rx="253.813"
            ry="244.993"
            fill="url(#paint0_linear)"
          />
        </g>
        <g filter="url(#filter1_f)">
          <ellipse
            cx="521.368"
            cy="326.262"
            rx="185.717"
            ry="179.264"
            fill="url(#paint1_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="0.0167236"
            y="-11.6802"
            width="824.986"
            height="807.347"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="79.3399"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter1_f"
            x="256.311"
            y="67.6589"
            width="530.114"
            height="517.207"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="39.67"
              result="effect1_foregroundBlur"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="412.51"
            y1="147"
            x2="412.51"
            y2="636.987"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFDAF0" />
            <stop offset="1" stop-color="#FFD464" stop-opacity="0.46" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="521.368"
            y1="146.999"
            x2="521.368"
            y2="505.526"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFCDF1" />
            <stop offset="1" stop-color="#F58A25" stop-opacity="0" />
            <stop offset="1" stop-color="#6248B9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Blob
