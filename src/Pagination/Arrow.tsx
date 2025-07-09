import { Size } from '../types';

export type ArrowProps = {
  action?: 'prev' | 'next';
  size?: Size;
};

// size map for the arrow SVG
const svgSize: Record<Size, number> = {
  small: 10,
  default: 14,
  large: 24,
};

/**
 * Arrow component for pagination navigation.
 */
export const Arrow = ({ action, size = 'default' }: ArrowProps) => {
  // small: 10px, default: 14px, large: 24px
  const arrowSize = svgSize[size] || svgSize.default;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width={arrowSize}
      height={arrowSize}
      viewBox="0 0 24 24"
    >
      {action === 'next' ? (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      ) : (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
    </svg>
  );
};
