import imageCompression from 'browser-image-compression';

import ImageBtn from './../assets/image.svg';

interface ImageUploadFormProps {
  image: File | null;
  setImage: (image: File) => void;
}

const ImageUploadForm = ({ image, setImage }: ImageUploadFormProps) => {
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 1,
          maxWidthOrHeight: 500,
        });
        setImage(compressedFile);
      } catch (error) {
        console.error('Image compression error:', error);
        alert('이미지 압축 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className="relative w-56 h-56">
      <label
        htmlFor="image-upload"
        className="cursor-pointer w-full h-full bg-neutral-200 rounded-full flex items-center justify-center overflow-hidden"
      >
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={ImageBtn} alt="이미지를 첨부하세요." />
        )}
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
};

export default ImageUploadForm;
