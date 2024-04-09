import React, { useState } from 'react';
import Food1 from '../../assets/images/food-1.jpeg';
import Food2 from '../../assets/images/food-2.jpeg';
import Food3 from '../../assets/images/food-3.jpeg';
import Food4 from '../../assets/images/food-4.jpeg';
import Food5 from '../../assets/images/food-5.jpeg';

const Hobbies: React.FC = () => {
  const profilePictures: string[] = [Food1, Food2, Food3, Food4, Food5];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const introHeader: string = "My Hobbies 🥐";
  const introMessage1: string = "I take great pleasure in diving into different hobbies, always on the lookout for fresh experiences to add depth to my life. Cooking stands out as one of my oldest and most beloved passions; it's a calming and therapeutic journey. What's truly rewarding is being able to enjoy those delicious creations and share them with friends, turning ordinary meals into unforgettable get-togethers.";  

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === profilePictures.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? profilePictures.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center md:justify-between gap-10 lg:gap-32 md:gap-10 px-10">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-6">{introHeader}</h2>
          <p className="text-lg">{introMessage1}</p>
        </div>
        <div className="shrink-0 flex items-center">
          <button className="hover:bg-black hover:text-white font-bold py-2 px-4 rounded" onClick={handlePrevious}>&lt;</button>
          <img src={profilePictures[currentPhotoIndex]} alt="ProfilePic" className="rounded-full h-40 w-60 md:h-60 md:w-80 mx-2 object-cover" />
          <button className="hover:bg-black hover:text-white font-bold py-2 px-4 rounded" onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
