let arr=prompt("enter a max no")


let random=Math.floor((Math.random()*arr))+1

let guess=prompt("enter the guess ")
while(true)
{
    if(guess=='quit')
    {
        console.log("you quit the game")
        break
    }
    if(guess==random)
    {
        console.log('Congrats! you are right',random)
        break
    }
    else{
        guess=prompt("your guess wrong !plz try again.. ")
    }
}