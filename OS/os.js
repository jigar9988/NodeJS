const os = require("os");
console.log(os.arch());
const freeMeomery = os.freemem();
console.log(`${freeMeomery/1024/1024/1024}`);
console.log(os.homedir());
console.log(os.platform());
console.log(os.release());
