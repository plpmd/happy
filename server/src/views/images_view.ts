import Image from "../models/Image";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url : `http://192.168.15.30:3333/uploads/${image.path}`
      
    };
  },

  renderMany(images: Image[]) {
    console.log(images)
    return images.map(image => this.render(image));
  }
}