import path from "path";
import fs from "fs";
import sharp from "sharp";

let imgPath = "./CS.jpg";
if (fs.existsSync(imgPath)) {
    if (path.extname(imgPath) == ".jpg") {
        sharp(imgPath).metadata().then((meta) => {
            const width = meta.width!;
            const height = meta.height!;
            sharp(imgPath).resize(Math.round (width / 3), Math.round (height / 3))
            .jpeg({ quality: 50 })
            .toFile("./fixed.jpg");
        });
}
} 

