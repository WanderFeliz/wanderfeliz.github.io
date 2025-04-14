'use client';

import React, { useState, useRef, isValidElement } from 'react';
import styles from './tooltip.module.scss';
import TooltipPortal from '@/components/Portals/TooltipPortal';

type TooltipProps = {
  text: string;
  children?: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  transitionTime?: number;
  maxWidth?: number;
}

type existingPropsType = {
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  position = 'top',
  transitionTime = 1,
  maxWidth = 300
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const childRef = useRef<HTMLDivElement>(null);

  // Calculate tooltip position when it becomes visible
  const updateTooltipPosition = () => {
    if (!childRef.current) return;

    const rect = childRef.current.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;
    const width = rect.width;
    const height = rect.height;


    let tooltipTop = 0;
    let tooltipLeft = 0;

    switch (position) {
      case 'top':
        tooltipTop = top;
        tooltipLeft = left + width / 2;
        break;
      case 'bottom':
        tooltipTop = top + height;
        tooltipLeft = left + width / 2;
        break;
      case 'left':
        tooltipTop = top + height / 2;
        tooltipLeft = left - 10; 
        break;
      case 'right':
        tooltipTop = top + height / 2;
        tooltipLeft = left + width;
        break;
    }


    setTooltipPosition({ top: tooltipTop, left: tooltipLeft });
  };

  // Clone the child element to attach our event handlers directly to it
  const enhancedChild = React.Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    // Get existing props from the child
    const existingProps: existingPropsType = child.props || {};

    const childClassName = existingProps.className;


    // Create new event handlers that combine existing ones with ours
    const onMouseEnter = (e: React.MouseEvent) => {
      if (existingProps.onMouseEnter) {
        existingProps.onMouseEnter(e);
      }
      updateTooltipPosition();
      setIsVisible(true);
    };

    const onMouseLeave = (e: React.MouseEvent) => {
      if (existingProps.onMouseLeave) {
        existingProps.onMouseLeave(e);
      }
      setIsVisible(false);
    };

    const onFocus = (e: React.FocusEvent) => {
      if (existingProps.onFocus) {
        existingProps.onFocus(e);
      }
      updateTooltipPosition();
      setIsVisible(true);
    };

    const onBlur = (e: React.FocusEvent) => {
      if (existingProps.onBlur) {
        existingProps.onBlur(e);
      }
      setIsVisible(false);
    };


    // Return the cloned element with our combined handlers
    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={childRef}
        className={existingProps.className}
        style={existingProps.style}
      >
        {child}
      </div>
    );
  });

  return (
    <div className={styles.tooltipContainer}>
      {enhancedChild}

      {isVisible && (
        <TooltipPortal>
          <div data-name="tooltip-container-visible"
            className={`${styles.tooltip} ${styles.visible}`}
            data-position={position}
            style={{
              '--transition-time': `${transitionTime}s`,
              '--max-width': `${maxWidth}px`,
              position: 'absolute',
              top: tooltipPosition.top + 'px',
              left: tooltipPosition.left + 'px',
            } as React.CSSProperties}
          >
            <div className={styles.tooltipText}>{text}</div>
            <div className={styles.tooltipArrow}></div>
          </div>
        </TooltipPortal>
)}
    </div>
  );
};

export default Tooltip;