import { useRef, useEffect } from 'react';
import { useCamera } from '@/hooks/useCamera';

interface CameraFeedProps {
  onReady?: () => void;
}

export const CameraFeed: React.FC<CameraFeedProps> = ({ onReady }) => {
  const { videoRef, isActive, error, startCamera } = useCamera();

  useEffect(() => {
    startCamera().then(() => onReady?.());
  }, []);

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full h-full object-cover"
      />
      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-white">Initializing camera...</p>
        </div>
      )}
    </div>
  );
};
