console.log("HelloWorld");
for(let i=1;i<=10;i++){
    let tablica = [];
    for(let j=1;j<=10;j++) {
        tablica[j-1]=j*i;
    }
    console.log(tablica);
}