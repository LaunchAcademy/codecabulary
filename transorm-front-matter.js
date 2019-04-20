const fs = require("fs")
const path = require("path")
const glob = require("glob")
const yaml = require("js-yaml")

glob(path.join(__dirname, "./codecabulary/**/*.md"), function (er, files) {
  console.log("Running...")
  for(const file of files) {
    const slug = file.replace(path.join(__dirname), "").replace(".md", "")
    let frontMatter = {}
    Object.assign(frontMatter, {path: slug})
    const fileContents = fs.readFileSync(file).toString()
    const matchData = fileContents.match(/\<\!\-\- \-\-\-title: (.*) \-\-\>/)
    if(matchData && matchData.length > 1) {
      Object.assign(frontMatter, {title: matchData[1]})
    }

    fs.writeFileSync(file, ("---\n" + yaml.dump(frontMatter).trim() + "\n---\n") + fileContents, {flag: "w"})
  }
})