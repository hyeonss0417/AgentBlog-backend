import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: "agent-blog",
    metadata: function(req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString() + "_" + file.originalname);
    },
  }),
});
const uploadMiddleware = upload.single("file");

export const uploadController = (req, res, next) => {
  uploadMiddleware(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return next(err);
    } else if (err) {
      return next(err);
    }
    console.log("저장파일명 : " + req.file.originalname);
    console.log("크기 : " + req.file.size);
    console.log("경로 : " + req.file.location);
    return res.json({success: 1, location: req.file.location});
  });
};
