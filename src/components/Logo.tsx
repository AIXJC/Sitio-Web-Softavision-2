import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animated?: boolean;
}

/**
 * Logo SoftAvision: onda/cinta vectorial azul.
 * - animated=true (preloader): SVG inline con dibujo de cintas (pathLength + fade)
 *   y resplandor pulsante detrás.
 * - animated=false (navbar/footer): <img> del SVG estático en /public — máxima
 *   compatibilidad en móvil y sin duplicar gradientes inline en el DOM.
 */
export default function Logo({ className = 'h-9 w-16', animated = false }: LogoProps) {
  const Ribbon = animated ? motion.path : 'path';

  const ribbonAnim = (delay: number) =>
    animated
      ? {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.2, delay, ease: 'easeInOut' as const },
        }
      : {};

  const artwork = (
    <svg
      viewBox="60 230 1360 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block ${animated ? 'h-full w-full' : `logo-glow ${className}`}`}
      aria-hidden="true"
    >
        <Ribbon
          d="M126 632 C222 532 326 390 421 285 C488 211 577 209 638 283 C703 363 772 478 847 548 C879 578 908 591 940 559 L1007 487 C973 536 937 576 903 594 C865 615 828 608 794 581 C725 526 662 438 609 366 C572 316 520 313 478 350 C398 419 311 535 245 623 L193 691 Z"
          fill="url(#logoTopBlue)"
          stroke="#35a7ff"
          strokeWidth={animated ? 6 : 0}
          strokeLinejoin="round"
          {...ribbonAnim(0.1)}
        />
        <Ribbon
          d="M126 632 C205 553 304 445 389 384 C443 344 485 325 523 331 C565 337 598 368 624 407 C640 432 650 454 664 475 C625 450 599 447 573 459 C531 478 492 522 450 574 L383 659 C339 713 293 752 242 748 C184 744 133 697 126 652 C124 645 124 638 126 632 Z"
          fill="url(#logoFold)"
          {...ribbonAnim(0.45)}
        />
        <Ribbon
          d="M627 432 C663 456 694 485 730 515 C775 554 810 590 848 600 C884 610 917 588 946 552 L1060 402 C1089 363 1123 337 1166 337 L1358 337 L1113 693 C1070 755 1022 824 979 867 C930 916 868 905 831 850 L650 557 C628 521 608 490 589 471 C600 455 613 442 627 432 Z"
          fill="url(#logoFrontBlue)"
          {...ribbonAnim(0.8)}
        />
        <Ribbon
          d="M946 552 L1060 402 C1089 363 1123 337 1166 337 L1358 337 L1327 382 L1173 382 C1141 382 1118 399 1095 430 L982 582 C969 596 957 607 944 614 C951 595 950 572 946 552 Z"
          fill="url(#logoCyanEdge)"
          {...ribbonAnim(1.15)}
        />
        <defs>
          <linearGradient id="logoTopBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0878ff" />
            <stop offset="0.42" stopColor="#064fe0" />
            <stop offset="1" stopColor="#061b78" />
          </linearGradient>
          <linearGradient id="logoFrontBlue" x1="0" y1="0" x2="0.9" y2="1">
            <stop offset="0" stopColor="#0788ff" />
            <stop offset="0.48" stopColor="#0755e9" />
            <stop offset="1" stopColor="#061d8c" />
          </linearGradient>
          <linearGradient id="logoCyanEdge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#08bfff" />
            <stop offset="0.45" stopColor="#0876f5" />
            <stop offset="1" stopColor="#0738bd" />
          </linearGradient>
          <linearGradient id="logoFold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#020d3e" />
            <stop offset="1" stopColor="#062b9d" />
          </linearGradient>
        </defs>
    </svg>
  );

  if (!animated) {
    return (
      <img
        src="/logo-softavision.svg"
        alt=""
        aria-hidden="true"
        width={64}
        height={36}
        className={`block ${className} logo-glow`}
      />
    );
  }

  return (
    <span className={`relative flex shrink-0 ${className}`} aria-hidden="true">
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-brand/40 blur-xl"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
      />
      <span className="relative block h-full w-full">{artwork}</span>
    </span>
  );
}

