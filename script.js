let text=document.getElementById("text");

let a=[
    "Web-Developer ",
    "/ MERN-Stack Developer , ",
    "Learner , ",
    "Known Multi Computer Languages , ",
    "like C , ",
    "C++ , ",
    "C# , ",
    "Java"
]

let sleep=async(sec)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true)
            
        }, sec*1000);
    })
}

let showText=async(msg)=>{
    await sleep(1.4);
    text.innerHTML=text.innerHTML+msg;
}

(async()=>{
    for(let i=0;i<a.length;i++){
        await showText(a[i])
    }
})()