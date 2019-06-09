const makeImage = (url, width = 100, height = 150) => {
  const image = document.createElement("img");

  image.src = url;
  image.width = width;
  image.height = height;
  return image;
};

export default makeImage;
