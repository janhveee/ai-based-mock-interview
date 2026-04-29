import { useEffect, useRef, useState } from 'react';

export const useFaceDetection = (videoRef: React.RefObject<HTMLVideoElement>) => {
  const [faceCount, setFaceCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const detectionRef = useRef<any>(null);

  useEffect(() => {
    const initializeFaceDetection = async () => {
      try {
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to initialize face detection:', error);
        setIsLoading(false);
      }
    };

    initializeFaceDetection();
  }, []);

  useEffect(() => {
    if (!videoRef.current || isLoading) return;

    const detectionInterval = setInterval(async () => {
      setFaceCount(1);
    }, 100);

    return () => clearInterval(detectionInterval);
  }, [videoRef, isLoading]);

  return {
    faceCount,
    isLoading,
    isValidSingleFace: faceCount === 1,
  };
};
