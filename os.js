
// User info...............!

// const os = require('os');

// const user = os.userInfo();

// const username = user.username;
// const homeDir = user.homedir;
// const shell = user.shell;

// console.log(`Hello ${username}, welcome to your system`);
// console.log(`Username: ${username}`);
// console.log(`Home Directory: ${homeDir}`);
// console.log(`Shell: ${shell}`);


// os details printing....................!


// const os=require("os")
// console.log("os type",os.type())
// console.log("Platform:", os.platform());
// console.log("Architecture:", os.arch());
// console.log("Hostname:", os.hostname());

// const uptimeInSeconds = os.uptime();
// const hours = Math.floor(uptimeInSeconds / 3600);
// const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
// console.log(`System Uptime: ${hours} hours ${minutes} minutes`);

// memory printing..................!

// const os = require("os");
// const totalMemory = os.totalmem() / (1024 ** 3)
// const freeMemory = os.freemem() / (1024 ** 3)
// const usedMemory = ((totalMemory - freeMemory) / totalMemory) * 100;
// console.log(`total memory = ${totalMemory.toFixed(1)}GB`)
// console.log(`free memory = ${freeMemory.toFixed(1)}GB`)
// console.log(`used memory = ${usedMemory.toFixed(1)}%`)


// cpu details..................!

// const os=require('os');
// const cpus=os.cpus();
// console.log("Number of cpu cores",cpus.length);
// cpus.forEach((cpu,index)=>{
//     console.log(`core ${index+1}:`);
//     console.log("model:",cpu.model);
//     console.log("speed:",cpu.speed);
    
// });
// let totalSpeed=0;
// cpus.forEach(cpu=>{
//    totalSpeed+=cpu.speed;
// })

// let avgSpeed=totalSpeed/cpus.length;
// console.log("Average speed :",avgSpeed);


// printing the network details...............!

// const os = require("os");

// const network= os.networkInterfaces();

// const internal =[]
// const extern=[]

// for(const name in network){
// network[name].forEach(element => {
//     const info={
//         interfaces:name,
//         ip:element.address,
//         mac:element.mac,
//         family:element.family  
//     }
//     if(element.internal){
//         internal.push(info);

//     }
//     else{
//         extern.push(info);
//     }
// });

// }
// console.table(internal)
// console.table(extern)