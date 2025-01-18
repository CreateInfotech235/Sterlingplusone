export const fileToBase64 = (file, typefile = "image", maxVideoSizeMB = 50) => {
    return new Promise((resolve, reject) => {
      if (typefile === "video") {
        // Check file size for videos
        const fileSizeMB = file.size / (1024 * 1024); // Convert bytes to MB
        if (fileSizeMB > maxVideoSizeMB) {
          reject(new Error(`Video file size exceeds the limit of ${maxVideoSizeMB} MB`));
          return;
        }
      }
  
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  