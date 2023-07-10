export default function DateyyyyMMdd(){
    let date = new Date();
    let yyyy = date.getFullYear();
    let MM = date.getMonth();
    let dd = date.getDay();
    let H = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let syyyy = String(date.getFullYear())
    let sMM = String(date.getMonth());
    let sdd = String(date.getDay());
    let sH = String(date.getHours());
    let smm = String(date.getMinutes());
    let sss = String(date.getSeconds());


    let postTime = yyyy + ' ' + MM + ' ' + dd + ' ' + H + ':' +mm + ':' +ss  ;
    return postTime;
    
}

