// this is made for simulating CI testing

//I used recursion functions just so testing them actually makes sense

function add(num1, num2)
{
    if (num2 == 0)
    {
        return num1;
    }

    num1++;
    num2--;
    return add(num1, num2);
}

function sub(num1, num2)
{
    if (num2 == 0)
    {
        return num1;
    }

    num1--;
    num2--;
    return sub(num1, num2);
}

function multi(num1, num2)
{
    // I am too stupid to deal with decimals so I'll just leave the main function to ints only
    if (parseInt(num2) != num2)
    {
        return num1 * num2;
    }
    return multiply(num1, num2, 0)
}

function multiply(num1, num2, result)
{
    if (num2 == 0)
    {
        return result;
    }

    result = add(result, num1);
    num2--;
    return multiply(num1, num2, result)
}

// This is too difficult to calculate so I just gave up 
function divide(num1, num2)
{
    return num1 / num2;
}


function calculate()
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1))
    {
        document.getElementById("num1").value = 0;
        return calculate();
    }
    if (isNaN(num2))
    {
        document.getElementById("num2").value = 0;
        return calculate();
    }

    let action = document.getElementById("selection").value;

    if (action == "Add")
    {
        return add(num1, num2);
    }
    if (action == "Subtract")
    {
        return sub(num1, num2);
    }
    if (action == "Multiply")
    {
        return multi(num1, num2);
    }
    if (action == "Divide")
    {
        return divide(num1, num2);
    }
}

function showResult()
{
    let display = document.getElementsByTagName("result")[0];

    display.textContent = calculate();
}


if (typeof module !== "undefined") 
{
    module.exports = {add, sub, multi, divide};
}