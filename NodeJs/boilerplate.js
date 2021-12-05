const fs = require("fs");
const folderName = process.argv[2] || "Project";
const indexEmmet = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <script src="app.js"></script>
</body>
</html>`




try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`,indexEmmet)
    fs.writeFileSync(`${folderName}/styles.css`,"")
    fs.writeFileSync(`${folderName}/app.js`,"")
}
catch(e) {
    console.log("Error Happened");
    console.log(e);
}