const multer = require("multer");
const path = require("path");
const upload = multer({
  storage: multer.diskStorage({
    //폴더위치 지정
    destination: (req, file, done) => {
      done(null, "./views/static/images");
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname);
      const fileName = path.basename(file.originalname, ext) + Date.now() + ext;
      done(null, fileName);
    },
  }),
  limits: { fileSize: 30 * 1024 * 1024 },
});

module.exports = { upload };
