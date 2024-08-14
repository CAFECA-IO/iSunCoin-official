import fs from 'fs';
import path from 'path';

export const getLastModifiedDate = async () => {
  const checkFilePath = path.join(process.cwd(), 'package.json');
  const fileStats = fs.statSync(checkFilePath);
  const lastModifiedDate = fileStats.mtime.toISOString().split('T')[0];
  return lastModifiedDate;
};
