var item:any[] = ["Apple","Banana","Orange"];
function asc()
{
    console.log("In ASC Order Function One");
    for(var i=0; i<item.length; i++)
    {
        console.log(item[i]);
    }
}

function desc()
{
    console.log("In Desc Order Function Two");
    for(var i=item.length-1; i>=0; i--)
    {
        console.log(item[i]);
    }
}

asc();
console.log("**************");
desc();