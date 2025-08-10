import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer.prompt([{
  message: "Enter url to generate the QR code:",
  name: "url"},

]).then((answers) => {
  const url = answers.url;
  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream("qr_code.png"));
  fs.writeFile("url.txt", url, (err) => {
    if (err) throw err;
  })
  console.log("QR code generated and saved as qr_code.png");
}).catch((error) => {
  if (error.isTtyError) {
    console.error("Prompt couldn't be rendered in the current environment.");
  } else {
    console.error("An error occurred:", error);
  }
});



