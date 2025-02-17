import React from 'react';
import Image from 'next/image';

interface ImageAboutProps {
  src: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const ImageServicesDefault: React.FC<ImageAboutProps> = ({ src, title, description }) => {
  return (
    <div className="service" data-aos="fade-up" data-aos-duration="1000">
      <Image className="img-service" src={src} alt={title}/>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

