import { useState } from 'react';
import { Upload } from 'lucide-react';

interface ResumeUploadProps {
  onUpload: (file: File) => void;
  isLoading?: boolean;
}

export const ResumeUpload: React.FC<ResumeUploadProps> = ({
  onUpload,
  isLoading = false,
}) => {
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onUpload(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        disabled={isLoading}
        className="hidden"
        id="resume-upload"
      />
      <label
        htmlFor="resume-upload"
        className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
      >
        {fileName || 'Click to upload your resume'}
      </label>
      <p className="text-gray-500 text-sm mt-2">
        Supported formats: PDF, DOC, DOCX (Max 5MB)
      </p>
    </div>
  );
};
