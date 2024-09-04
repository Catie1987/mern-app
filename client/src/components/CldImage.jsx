import { Cloudinary } from '@cloudinary/url-gen';
import { auto, scale, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { AdvancedImage, placeholder, lazyload } from '@cloudinary/react';

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
  },
});
// eslint-disable-next-line react/prop-types
const CldImage = ({ publicId }) => {
  const myImage = cld
    .image(publicId)
    .resize(thumbnail().width(350).gravity(autoGravity()))
    .delivery(format('auto'))
    .delivery(quality('auto'));
  return (
    <AdvancedImage
      cldImg={myImage}
      style={{ maxWidth: '100%' }}
      plugins={[lazyload(),placeholder()]}
      className="rounded-lg shadow-lg object-cover w-full"
    />
  );
};
export default CldImage;