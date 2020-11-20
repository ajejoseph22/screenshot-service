import appRootPath from 'app-root-path';
import dotenv from 'dotenv';

import { throwIfUndefined } from '../helpers';

dotenv.config({ path: `${appRootPath.path}/.env` });

export const APP_PORT = throwIfUndefined(process.env.APP_PORT, 'APP_PORT');

export const AWS_ACCESS_KEY_ID = throwIfUndefined(
    process.env.AWS_ACCESS_KEY_ID,
    'AWS_ACCESS_KEY_ID',
);

export const AWS_SECRET_ACCESS_KEY = throwIfUndefined(
    process.env.AWS_SECRET_ACCESS_KEY,
    'AWS_SECRET_ACCESS_KEY',
);

export const S3_BUCKET_NAME = throwIfUndefined(
    process.env.S3_BUCKET_NAME,
    'S3_BUCKET_NAME',
);