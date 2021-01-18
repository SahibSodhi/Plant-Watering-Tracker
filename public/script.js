var myWidget = cloudinary.createUploadWidget({
  cloudName: 'water123',
  uploadPreset: 'Default'}, (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);