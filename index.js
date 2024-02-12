import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

const prompt = inquirer.createPromptModule();

inquirer
    .prompt([{
        "message": "Type in your URL:",
        name: "URL"
    }])
    .then((answers) => {
        const url = answers.URL;
        var urlImage = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr-image.png"));

        fs.writeFile("UserUrl.txt", url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }); 
    })
    .catch((error) => {
    if (error.isTtyError) {
        //"Prompt couldn't be rendered in the current environment";
    } else {
        //"Something else went wrong";
    }
    });