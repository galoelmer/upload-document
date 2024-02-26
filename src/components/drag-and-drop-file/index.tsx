import { useCallback, useState } from "react";

import Button from "../button";

import FileIcon from "../../icons/file-icon";
import ImageIcon from "../../icons/image-icon";

interface FileDropProps {
  onFileDrop: (file: File) => void;
  className?: string;
}

const FileDrop = ({ onFileDrop, className }: FileDropProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragOver(true);
    },
    []
  );

  const handleFileDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragOver(false);

      const dropFile = event.dataTransfer.files[0];

      if (dropFile) {
        setFile(dropFile);
        onFileDrop(dropFile);
      }
    },
    [onFileDrop]
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      setFile(selectedFile || null);
      onFileDrop(selectedFile as File);
    },
    [onFileDrop]
  );

  const handleFileRemove = () => setFile(null);

  return (
    <div>
      <div className="flex flex-col justify-center items-center border rounded-lg my-2 p-3">
        <div
          className={`border h-24 rounded-md w-full 
          ${isDragOver ? "border-blue-500" : "border-gray-300"} 
          ${file ? "border-none" : "border-dashed"} ${className}`}
          onDragOver={handleDragOver}
          onDrop={handleFileDrop}
        >
          {file ? (
            <div className="flex justify-center items-center h-full">
              <FileIcon />
              <p className="text-sm ml-2 mr-4">{file.name}</p>
              <span
                onClick={handleFileRemove}
                className="text-red-400 cursor-pointer"
              >
                ✘
              </span>
            </div>
          ) : (
            <div className="relative flex flex-col justify-center items-center h-full">
              <FileIcon />
              <p className="text-[11px] p-2">
                Drag and Drop Here or <strong>Browse</strong>
              </p>
              <input
                type="file"
                className="absolute border top-0 bottom-0 left-0 right-0 opacity-0"
                onChange={handleInputChange}
              />
            </div>
          )}
        </div>
        <Button
          label="Upload Manifest"
          size="sm"
          className="mt-3 min-w-44 sm:h-8"
        />
      </div>
      <div className="border-t border-b p-4 my-3">
        <div className="flex items-center">
          <ImageIcon />
          <div className="flex flex-col ml-4 w-full">
            <div className="flex items-center mb-1">
              <p className="text-xs w-full font-thin text-gray-400">
                {file?.name || ""}
              </p>
              <span className="text-[8px] font-thin text-gray-600 text-nowrap">
                {((file?.size || 0) / (1024 * 1024)).toFixed(2)} MB
              </span>
            </div>
            <div
              className={`relative h-[2px] w-full rounded-full bg-gray-200 overflow-hidden`}
            >
              <span
                className="absolute bg-orange h-full left-0"
                style={{
                  width: `${(
                    ((file?.size || 0) / 10000000) *
                    100
                  ).toString()}%`,
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileDrop;
