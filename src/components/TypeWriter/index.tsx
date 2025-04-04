'use client';

import React, { useEffect, useState } from 'react';
import styles from './typewriter.module.scss';

interface TypeWriterProps {
  strings: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenStrings?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  strings,
  loop = true,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenStrings = 1500,
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  
  // Use a ref to store the current string being typed
  const currentString = strings[currentIndex];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      // If waiting, do nothing
      if (isWaiting) return;
      
      // Typing
      if (!isDeleting && text.length < currentString.length) {
        setText(currentString.substring(0, text.length + 1));
      } 
      // Waiting after typing complete
      else if (!isDeleting && text === currentString) {
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, delayBetweenStrings);
      } 
      // Deleting
      else if (isDeleting && text.length > 0) {
        setText(currentString.substring(0, text.length - 1));
      } 
      // After deleting, move to next string
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => {
          // If looping is enabled, cycle through the strings
          if (loop) {
            return (prev + 1) % strings.length;
          }
          // Otherwise, stop at the end
          return prev < strings.length - 1 ? prev + 1 : prev;
        });
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, currentString, typeSpeed, deleteSpeed, delayBetweenStrings, isWaiting, loop, strings]);
  
  return (
    <span className={styles.typewriter}>
      <span className={styles.text}>{text}</span>
      <span className={styles.cursor}>|</span>
    </span>
  );
};

export default TypeWriter;