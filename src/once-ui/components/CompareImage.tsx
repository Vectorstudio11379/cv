"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Flex, SmartImage, IconButton } from ".";
import styles from "./CompareImage.module.scss";

interface SideContent {
  src: string | React.ReactNode;
  alt?: string;
}

interface CompareImageProps extends React.ComponentProps<typeof Flex> {
  leftContent: SideContent;
  rightContent: SideContent;
}

const renderContent = (content: SideContent, clipPath: string) => {
  if (typeof content.src === "string") {
    return (
      <SmartImage
        src={content.src}
        alt={content.alt || ""}
        fill
        position="absolute"
        style={{ clipPath }}
      />
    );
  }

  return (
    <Flex fill position="absolute" style={{ clipPath }}>
      {content.src}
    </Flex>
  );
};

export const CompareImage = ({ leftContent, rightContent, ...rest }: CompareImageProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.min(Math.max(percentage, 0), 100));
  }, [isDragging]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.min(Math.max(percentage, 0), 100));
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchend', () => setIsDragging(false));
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <Flex
      ref={containerRef}
      aspectRatio="16/9"
      fillWidth
      style={{ touchAction: "none" }}
      {...rest}
    >
      {renderContent(leftContent, `inset(0 ${100 - position}% 0 0)`)}
      {renderContent(rightContent, `inset(0 0 0 ${position}%)`)}

      {/* Hit area and visible line */}
      <Flex
        position="absolute"
        horizontal="center"
        width={3}
        className={styles.hitArea}
        top="0"
        bottom="0"
        style={{
          left: `${position}%`,
        }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <Flex width="1" fillHeight background="neutral-strong" zIndex={2} />
      </Flex>
      <IconButton
        icon="chevronsLeftRight"
        variant="secondary"
        className={styles.dragIcon}
        style={{
          left: `${position}%`,
        }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      />
    </Flex>
  );
};

CompareImage.displayName = "CompareImage";
