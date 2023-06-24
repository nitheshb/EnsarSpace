import React, { ChangeEvent, useState } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useAuth } from 'src/context/firebase-auth-context';

const ProfileHeader = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useAuth();
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  const handleHover = (isHovered: boolean) => {
    setIsHovered(isHovered);
  };

  const getInitials = (name) => {
    if (!name) {
      return ''; // Handle the case when name is null or undefined
    }

    const names = name.split(' ');
    const initials = names.map((n) => n.charAt(0));
    return initials.join('');
  };


  const initials = user ? getInitials(user.displayName) : '';

  function handleImageClick(): void {
    throw new Error('Function not implemented.');
  }
  return (
    <div
      className="profileHeaderCursor page-container flex flex-col overflow-auto bg-blue-300 from-blue-500 to-white"
      style={{ height: '180px' }}
    >
      <div>
        <div data-testid="profile-header-hover-overlay">
          <input
            id="file-input"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleImageUpload}
          />
          <label htmlFor="file-input">
            <div
              className="flex flex-col items-center justify-center"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
              style={{ cursor: 'pointer', height: '100%' }} // Added height style
            >
              <div
                className="w-32 h-32 bg-blue-700 rounded-full flex items-center justify-center absolute left-1/4"
                style={{ top: '100px', border: '4px solid white' }}
              >
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="sr-only"
                />
                {!selectedImage && (
                  <span className="text-white text-5xl font-bold">
                    {isHovered ? (
                      <CloudUploadIcon style={{ fontSize: 60 }} />
                    ) : (
                      <>{initials}</>
                    )}
                  </span>
                )}
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
