import React, { useState } from 'react';
import { ImageField } from './ImageUploadField.styled';
import imageEditIcon from 'assets/img/image-edit.svg';
import defaultProfile from 'assets/img/default-profile.svg';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ImageUploadFieldProps {
  register: UseFormRegisterReturn;
  img?: string;
}

const ImageUploadField = ({ register, img }: ImageUploadFieldProps) => {
  const [preview, setPreview] = useState<string | null | undefined>(img);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  React.useEffect(() => {
    setPreview(img);
  }, [img]);

  return (
    <ImageField>
      <img className="profile-image" src={preview || defaultProfile} alt="프로필 이미지" />
      <label htmlFor="imageFile">
        <span className="hidden">이미지 파일</span>
        <img src={imageEditIcon} alt="" />
      </label>
      <input
        type="file"
        id="imageFile"
        onChange={handleImageChange}
        className="hidden"
        ref={register.ref}
        name={register.name}
        onBlur={register.onBlur}
      />
    </ImageField>
  );
};
export default ImageUploadField;
