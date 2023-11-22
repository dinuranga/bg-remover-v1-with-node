import { Rembg } from "rembg-node";
import sharp from "sharp";

(async () => {
  const input = sharp("profile.jpg");

  const rembg = new Rembg({
    logging: true,
  });

  const output = await rembg.remove(input);

  await output.webp().toFile("output.webp");
  await output.trim().webp().toFile("output-trimmed.webp");
})();
