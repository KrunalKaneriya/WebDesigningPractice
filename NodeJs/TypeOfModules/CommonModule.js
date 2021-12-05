const simple =() => console.log("This is Simple Function");
const name =() => console.log("THis function is called from Common Module");

exports.simple = simple;
exports.name = name;