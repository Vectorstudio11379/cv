"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { Flex } from "@/once-ui/components";

interface SplineModelProps {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SplineModel = ({ scene, className, style }: SplineModelProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset loading state when scene changes
    setIsLoading(true);
  }, [scene]);

  return (
    <Flex
      fillWidth
      fillHeight
      className={className}
      style={{ 
        minHeight: "400px",
        position: "relative",
        ...style 
      }}
    >
      <Spline
        scene={scene}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <Flex
          position="absolute"
          fill
          horizontal="center"
          vertical="center"
          style={{
            background: "var(--surface-background)",
          }}
        >
          Loading 3D Model...
        </Flex>
      )}
    </Flex>
  );
};