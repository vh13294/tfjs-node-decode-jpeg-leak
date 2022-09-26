# Minimal repo to show memory leak in decodeJpeg of tfjs-node module

The code is running in 200ms interval to simulate Mjpeg stream then the image is converted to tensor object via decodeJpeg.

# To compile

npm run build

# To start server

npm run start

# Tested On Intel Mac i9

Memory usage jump to 3-4 GB after a few seconds
