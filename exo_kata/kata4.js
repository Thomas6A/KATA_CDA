function min(i, j) {
    if (i<j) {
        return i
    }else if(j<i){
        return j
    }else{
        return "C'est le meme nombre"
    }
}

console.log(min(0, -10));