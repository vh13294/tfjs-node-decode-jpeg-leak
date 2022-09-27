import * as tf from "@tensorflow/tfjs-node";
import { readFile } from "fs/promises";

async function start() {
  setInterval(async () => {
    console.time("frame");
    await loadImage();
    console.timeEnd("frame");
  }, 200);
}

async function loadImage() {
  const file = await readFile("1.jpg");
  console.log(file.buffer.byteLength);
  const tensor = tf.node.decodeJpeg(file);
  console.log(tensor.size);
  tensor.dispose();
}

start();
