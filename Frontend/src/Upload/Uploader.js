import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';
import Loader from '../Notifications/Loader.js';
import { uploadImageservice } from '../Redux/APIs/uploadImagesservice.js';
const Uploader = ({ setImageUrl }) => {
  const [loading, setLoading] = useState(false);

  // uploadfile
  const onDrop = useCallback(
    async (acceptedFiles) => {
      // Create an array of FormData for each file
      const files = acceptedFiles.map((file) => {
        const formData = new FormData();
        formData.append('file', file);
        return formData;
      });

      // Upload all files using Promise.all
      try {
        setLoading(true);
        const responses = await Promise.all(
          files.map((file) => uploadImageservice(file, setLoading))
        );
        // Assuming your API returns an array of image URLs, merge them into one array.
        const imageUrls = responses.flatMap((data) => data);
        setImageUrl(imageUrls);
        console.log(imageUrls);
      } catch (error) {
        console.error('Error uploading images:', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    },
    [setImageUrl]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      multiple: true, // Allow multiple files to be uploaded
      onDrop,
    });

  return (
    <div className="w-full text-center flex-colo gap-6">
      {loading ? (
        <div className="px-6 w-full py-8 border-2 border-border bg-dry border-dash rounded-md">
          <Loader />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="px-6 py-8 w-full border-2 border-border border-dashed bg-main rounded-md cursor-pointer"
        >
          <input {...getInputProps()} />
          <span className="mx-auto flex-colo text-subMain text-3xl">
            <FiUploadCloud />
          </span>
          <p>Drag your images here</p>
          <em className="text-xs text-border">
            {isDragActive
              ? 'Drop them like they are hot'
              : isDragReject
              ? 'Unsupported file type....'
              : 'only .jpg and .png are supported'}
            (only .jpg and .png files will be accepted)
          </em>
        </div>
      )}
    </div>
  );
};

export default Uploader;
