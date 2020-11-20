import AwsS3Integration from '../integrations/aws-s3-integration';
import { S3_BUCKET_NAME } from '../config/env';

class ImageService {
  public static async upload(
    imageFile: Buffer,
    name: string,
    mimetype = 'image/png',
  ) {
    const awsResponse = await AwsS3Integration.uploadToBucket({
      Bucket: S3_BUCKET_NAME,
      Body: imageFile,
      Key: name,
      ACL: 'public-read',
      ContentType: mimetype,
    });
    return awsResponse.Location;
  }
}

export default ImageService;
