"use client";
import { useRef, useState } from "react";
import style from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();
  const handlePickImage = () => {
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
  };

  return (
    <div className={style.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={style.controls}>
        <div className={style.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="This image   selected  by ht user"
              fill
            />
          )}
        </div>
        <input
          className={style.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          onClick={handlePickImage}
          className={style.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
