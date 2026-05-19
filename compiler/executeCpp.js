const fs = require("fs");

const path = require("path");

const {
  v4: uuid,
} = require("uuid");

const {
  exec,
} = require("child_process");

const outputPath =
  path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {

  fs.mkdirSync(outputPath, {
    recursive: true,
  });
}

const executeCpp = async (
  filepath,
  inputFilePath
) => {

  const jobID =
    path.basename(filepath)
      .split(".")[1];

  const outpath =
    path.join(
      outputPath,
      `${jobID}.exe`
    );

  return new Promise(
    (resolve, reject) => {

      exec(

`g++ "${filepath}" -o "${outpath}" && "${outpath}" < "${inputFilePath}"`,

        (
          error,
          stdout,
          stderr
        ) => {

          if (error) {
            reject(error);
          }

          if (stderr) {
            reject(stderr);
          }

          resolve(stdout);
        }
      );
    }
  );
};

module.exports = {
  executeCpp,
};