import ImageBtn from './../assets/image.svg';

interface ImageUploadFormProps {
  image: string | null;
  setImage: (image: string) => void;
}

const ImageUploadForm = ({ image, setImage }: ImageUploadFormProps) => {

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="relative w-56 h-56">
      <label htmlFor="image-upload" className="cursor-pointer w-full h-full bg-neutral-200 rounded-full flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt="Uploaded preview" className="w-full h-full object-cover" />
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
