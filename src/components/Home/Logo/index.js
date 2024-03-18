import { useEffect, useRef } from 'react'
import './index.scss'
import LogoN from '../../../assets/images/logo-n.png'
import { motion } from 'framer-motion'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 10,
      },
    },
  }

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoN}
        alt="JavaScript,  Developer"
      />

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="300.000000pt"
        height="300.000000pt"
        viewBox="0 0 300.000000 300.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <motion.path
            d="M560 2095 l0 -54 48 -6 c84 -12 150 -34 167 -57 33 -49 18 -156 -141
            -958 -87 -438 -117 -551 -154 -585 -11 -10 -59 -23 -116 -33 l-98 -17 -11 -50
            -11 -50 333 0 334 0 10 40 c5 22 12 45 14 52 4 13 -3 15 -145 38 -52 9 -99 21
            -105 26 -5 6 -9 38 -7 72 2 50 84 515 167 942 7 39 21 113 30 165 28 158 19
            157 112 18 45 -68 148 -220 230 -338 82 -118 179 -260 217 -315 38 -55 166
            -241 284 -413 l215 -312 83 0 83 0 10 52 c5 29 19 103 30 163 12 61 23 121 26
            135 5 24 17 88 85 465 16 88 43 237 60 330 17 94 39 218 50 277 24 137 59 265
            76 283 22 22 112 52 197 65 l77 13 0 54 0 54 -87 -8 c-117 -10 -422 -10 -499
            0 l-62 8 -4 -46 -3 -45 55 -16 c121 -35 140 -44 147 -72 3 -15 1 -76 -6 -137
            -18 -167 -38 -291 -152 -928 -17 -93 -28 -174 -26 -180 12 -35 52 126 107 438
            36 206 61 350 70 410 5 39 12 81 14 95 30 173 30 292 -1 334 -17 23 -97 66
            -123 66 -10 0 -47 29 -38 30 2 1 130 2 286 3 225 2 282 0 282 -11 0 -14 -8
            -17 -132 -57 -95 -30 -129 -57 -146 -115 -5 -19 -19 -64 -30 -100 -11 -36 -28
            -105 -37 -155 -9 -49 -20 -110 -25 -135 -5 -25 -19 -97 -30 -160 -26 -147 -65
            -359 -97 -525 -13 -71 -27 -159 -29 -195 -5 -55 -20 -153 -38 -246 -2 -12 -7
            -39 -10 -60 -4 -21 -11 -43 -16 -48 -12 -12 -97 -9 -121 4 -9 5 -48 53 -86
            107 -81 115 -67 96 -213 309 -300 438 -564 816 -638 914 -23 30 -42 60 -42 66
            0 5 -16 28 -36 49 l-36 40 -23 -27 c-15 -17 -27 -51 -34 -95 -7 -37 -27 -149
            -46 -248 -19 -99 -46 -243 -60 -320 -15 -77 -42 -221 -61 -320 -19 -99 -35
            -212 -35 -250 -1 -65 1 -71 29 -97 17 -15 48 -30 69 -33 108 -19 138 -30 141
            -52 5 -33 -23 -40 -138 -32 -58 4 -182 7 -277 8 -215 1 -241 20 -73 55 80 17
            110 38 140 96 16 31 71 254 100 400 5 30 22 114 36 185 14 72 27 141 30 155 3
            14 14 70 24 125 11 55 24 123 30 150 63 325 71 451 32 504 -23 32 -92 67 -149
            76 -34 5 -43 11 -43 26 0 18 8 19 148 18 81 -1 185 -4 231 -7 l85 -7 69 -90
            c81 -107 240 -333 483 -690 53 -77 111 -162 131 -190 19 -27 86 -124 148 -215
            62 -91 123 -174 135 -185 l23 -20 -13 25 c-7 14 -126 189 -264 390 -137 201
            -346 505 -462 675 -117 171 -218 317 -225 327 -12 14 -49 17 -271 22 l-258 5
            0 -54z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M2703 2007 c-66 -6 -101 -13 -96 -19 4 -7 38 -9 93 -5 92 6 114 0
108 -29 -2 -13 -21 -22 -68 -34 -36 -9 -76 -23 -90 -30 -14 -8 -43 -16 -64
-19 -24 -4 -40 -12 -42 -21 -6 -33 -30 -86 -43 -94 -11 -7 -11 -10 0 -17 11
-6 11 -16 1 -51 -17 -59 -54 -239 -92 -448 -17 -96 -42 -233 -56 -305 -13 -71
-26 -146 -30 -165 -3 -19 -12 -71 -20 -115 -8 -44 -14 -95 -14 -112 0 -35 -8
-41 -29 -20 -11 10 -11 8 -1 -12 13 -26 6 -116 -15 -191 -2 -8 -7 -37 -11 -65
-10 -81 -23 -100 -71 -103 -36 -3 -45 1 -79 35 -31 31 -35 33 -20 10 32 -51
11 -49 -27 4 -51 68 -60 55 -11 -16 l38 -56 84 3 85 3 33 185 c30 165 70 381
80 435 2 11 15 83 29 160 14 77 28 154 31 170 12 62 65 363 79 445 18 107 63
281 78 298 21 26 93 53 185 70 l92 17 0 52 c0 44 -3 53 -17 52 -10 -1 -64 -6
-120 -12z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M1201 1988 c18 -15 89 -115 89 -125 0 -4 8 -16 19 -27 18 -21 362
-519 576 -836 65 -96 127 -184 138 -195 33 -34 35 -37 -498 740 -125 182 -245
358 -268 392 -23 35 -48 63 -56 63 -13 0 -12 -2 0 -12z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M697 1984 c-4 -4 -7 -22 -7 -41 0 -25 4 -33 18 -33 9 0 27 -3 40 -6
28 -8 30 12 2 21 -11 4 -26 20 -33 37 -7 16 -15 26 -20 22z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M2197 1984 c-4 -4 -7 -20 -7 -36 0 -24 4 -28 26 -28 21 0 24 3 16 13
-6 7 -15 23 -19 35 -5 13 -12 20 -16 16z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M2870 1879 c-144 -13 -155 -17 -45 -17 55 -1 106 -1 113 -1 6 -1 12
-12 12 -25 0 -30 -16 -43 -65 -51 -98 -16 -185 -53 -207 -87 -9 -13 -25 -66
-37 -118 -12 -52 -26 -111 -31 -130 -5 -19 -12 -55 -15 -80 -4 -25 -16 -92
-26 -150 -11 -58 -32 -168 -45 -245 -14 -77 -54 -300 -90 -495 -81 -444 -86
-471 -80 -477 6 -7 13 21 36 147 58 319 83 454 109 603 17 89 35 187 41 217 6
30 13 69 16 85 19 113 27 158 39 220 14 73 18 93 30 160 16 90 48 222 61 247
20 38 52 52 177 79 l107 24 0 52 c0 29 -1 52 -2 52 -2 -1 -46 -5 -98 -10z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M916 1660 c-3 -8 -10 -42 -15 -75 -14 -89 -79 -436 -101 -540 -10
-49 -28 -142 -40 -205 -12 -63 -28 -147 -36 -187 -8 -40 -14 -78 -13 -85 1
-34 23 54 59 237 22 110 57 288 79 395 50 249 84 448 78 463 -3 8 -7 7 -11 -3z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M997 1543 c-7 -12 -58 -274 -122 -628 -8 -44 -30 -165 -50 -270 -19
-104 -31 -193 -26 -198 10 -10 16 19 91 423 65 349 97 520 105 560 17 81 18
140 2 113z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M1112 1305 c-7 -27 -15 -66 -17 -85 -6 -41 -13 -78 -25 -140 -32
-154 -42 -209 -65 -335 -14 -77 -27 -151 -30 -165 -3 -14 -8 -45 -12 -70 -3
-25 -9 -52 -13 -60 -4 -8 -4 -26 1 -40 l7 -25 1 24 c1 13 5 40 11 60 5 20 32
162 60 316 28 154 62 336 76 404 25 126 29 212 6 116z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M922 269 c2 -7 13 -13 24 -14 77 -7 95 -23 78 -69 -8 -21 -58 -21
-78 0 -9 8 -16 11 -16 5 0 -7 -25 -11 -64 -11 -73 0 -99 7 -89 24 4 6 -6 0
-23 -14 l-30 -25 155 -7 c86 -3 157 -5 159 -3 2 2 9 26 17 54 l13 50 -47 6
c-25 4 -59 9 -75 12 -20 4 -27 1 -24 -8z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M458 261 c-58 -8 -64 -14 -73 -70 l-7 -44 68 6 c38 4 113 7 167 7 58
0 97 4 97 10 0 6 -54 10 -143 10 -79 0 -146 3 -149 6 -16 15 7 45 43 54 21 6
41 15 44 20 3 6 5 9 3 9 -2 -1 -24 -5 -50 -8z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M1060 142 c0 -6 21 -14 48 -18 26 -4 50 -12 54 -18 14 -20 8 -55 -9
-59 -10 -3 -152 -6 -316 -6 l-298 0 3 31 c3 28 9 34 43 45 l40 13 -45 -6 c-54
-7 -56 -9 -63 -59 l-6 -40 333 0 333 0 9 52 10 51 -46 7 c-25 4 -55 9 -67 12
-13 3 -23 0 -23 -5z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M2139 83 c21 -39 61 -86 61 -72 0 21 -49 89 -65 89 -3 0 -1 -8 4 -17z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
