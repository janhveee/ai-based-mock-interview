import { AlertCircle } from 'lucide-react';

interface PersonDetectionAlertProps {
  faceCount: number;
}

export const PersonDetectionAlert: React.FC<PersonDetectionAlertProps> = ({
  faceCount,
}) => {
  if (faceCount === 1) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-green-800">✓ One person detected. Ready to start!</p>
      </div>
    );
  }

  if (faceCount > 1) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
        <AlertCircle className="text-red-600" />
        <div>
          <p className="font-semibold text-red-800">
            Multiple people detected ({faceCount})
          </p>
          <p className="text-red-700">
            Please ensure only you are in front of the camera
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <p className="text-yellow-800">⏳ Detecting face... Please stay in frame</p>
    </div>
  );
};
