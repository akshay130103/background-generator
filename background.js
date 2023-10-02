document.getElementById("back").onclick = function() {
    let k = ["blue", "aqua", "blueviolet", "bisque", "azure"];
    let m = Math.random();
    m = Math.ceil(m * 100);
    let i = m % k.length;
    document.getElementById("sunny").style.backgroundColor = k[i];


}
document.getElementById("sunny").onclick = function() {
    let k = ["blue", "aqua", "blueviolet", "bisque", "azure"];
    let m = Math.random();
    m = Math.ceil(m * 100);
    let i = m % k.length;
    document.getElementById("sunny").style.backgroundColor = k[i];


}