import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..','uploads'),
    filename : (request, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`;

      //primeiro param eh um erro mas n vai da erro na linha 8
      cb(null, filename);
    }
  })
}