const display = document.getElementById("display");
let flag = 0,ans=0;

function cls()
{
    display.value = "";
    flag = 0;
}

function disp(val)
{
    display.value = display.value + val;
    if(flag == 1)
    {

            display.value = "";
            flag = 0;
            display.value = display.value + val;
    }
}

function solve()
{
    try 
    {
        ans = eval(display.value);
        display.value = ans;
        flag = 1;
    } 
    catch (error) 
    {
        display.value = "Error";
    }
}

function del()
{
    display.value = String(display.value).slice(0,-1);
}