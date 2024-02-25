for(let i = 0; i< 5;i++)
{
    console.log(i);
}

let rev:number[] = [0,0,0];

for(let i = 0; i<4;i++)
{
    rev.push(i);
    console.log(rev.length);
}

for(let i of rev)
{
    console.log(i);
}