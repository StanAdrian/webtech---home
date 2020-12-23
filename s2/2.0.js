//Sirul lui Fibonacci
// f(n) = f(n-1) + f(n-2)

const FibonacciRow = (n) => {
    let f2 = 0; 
    let f1 = 1;
    let aux;
    console.log(f2);
    console.log(f1);

    for(let i = 1; i < n-1; i++)
    {    
        console.log(f2+f1);
        aux = f2+f1;
        f2=f1;
        f1=aux;
    }
}

FibonacciRow(20);




