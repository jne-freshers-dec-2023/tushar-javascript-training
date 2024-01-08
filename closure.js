function outerFunction()
{
    let outerVariable = "I am present in outer function"

    function insideFunction()
    {
        let insideVariable = "I am present in inner function"

        console.log(outerVariable)
    }

    return insideFunction;
}


let closure = outerFunction();

closure();