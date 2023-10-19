for (let i = 1; i < 9; i++) {
    let chess = ""
    for (let j = 1; j < 9; j++) {
        if (i%2==0) {
            if(j%2==0){
                chess += " ";
            }else{
                chess += "#";
            }
        }else{
            if(j%2==0){
                chess += "#";
            }else{
                chess += " ";
            }
        }
    }
    console.log(chess);
}