const { exec } =
  require("child_process");

const path = require("path");

const executeJava = async (
  filepath,
  inputFilePath
) => {

  const dir =
    path.dirname(filepath);

  return new Promise(
    (resolve, reject) => {

      exec(

`cd "${dir}" && javac Main.java && java Main < "${inputFilePath}"`,

        (error, stdout, stderr) => {

          if (error)
            return reject(error);

          if (stderr)
            return reject(stderr);

          resolve(stdout);
        }
      );
    }
  );
};

module.exports = {
  executeJava,
};