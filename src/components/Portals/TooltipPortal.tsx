'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type TooltipPortalProps = {
  children: React.ReactNode;
}

const TooltipPortal: React.FC<TooltipPortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Check if document is available (client-side only)
  if (!mounted || typeof document === 'undefined') return null;
  
  // Create portal for tooltip to be mounted directly to body
  let tooltipRoot = document.getElementById('tooltip-root');
  if (!tooltipRoot) {
    tooltipRoot = document.createElement('div');
    tooltipRoot.id = 'tooltip-root';
    tooltipRoot.style.position = 'fixed';
    tooltipRoot.style.top = '0';
    tooltipRoot.style.left = '0';
    tooltipRoot.style.width = '100%';
    tooltipRoot.style.height = '0';
    tooltipRoot.style.overflow = 'visible';
    tooltipRoot.style.pointerEvents = 'none';
    tooltipRoot.style.zIndex = '9999';
    document.body.appendChild(tooltipRoot);
    
  }

  return createPortal(children, tooltipRoot);
};

export default TooltipPortal;