const fs = require("fs")
const path = require("path")
const glob = require("glob")

glob(path.join(__dirname, "./codecabulary/**/*.md"), function (er, files) {
  console.log("Running...")
  for(const file of files) {
    const linkRegex = /\[\[([^\[]*)\|([^\]\[]*)\]\]/g
    let fileContents = fs.readFileSync(file).toString()
    while(result = linkRegex.exec(fileContents)) {
      let link = result[2]
      if(result[2].startsWith("codecabulary")) {
        link = "/" + link
      }
      fileContents = fileContents.replace(result[0], `[${result[1]}](${link})`)
    }

    fs.writeFileSync(file, fileContents, {flag: "w"})
  }
})
