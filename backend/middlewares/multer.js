import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/'); // or any folder you want
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname); // safer, avoids collisions
  }
});

const upload = multer({storage})
/*app.post('/api/your-route', upload.single('image'), async (req, res) => {
  console.log(req.body);
  console.log(req.file); // This should not be undefined
});*/
export default upload