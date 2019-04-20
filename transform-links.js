const fs = require("fs")
const path = require("path")
const glob = require("glob")

glob(path.join(__dirname, "./codecabulary/**/*.md"), function (er, files) {
  console.log("Running...")
  for(const file of files) {
    const linkRegex = /\[\[([^\[]*)\|([^\]\[]*)\]\]/g
    let fileContents = fs.readFileSync(file).toString()
    while(result = linkRegex.exec(fileContents)) {
      fileContents = fileContents.replace(result[0], `[${result[1]}](${result[2]})`)
    }

    console.log(fileContents)
    // if(results) {
    //   for(const result of results) {
    //     console.log(typeof result)
    //     
    //   }
    //   // console.log(fileContents)
    // }
  }
})
