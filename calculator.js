const inputVal = document.getElementById('inputVal');
const subVal = document.getElementById('subVal');
const allhistory = document.querySelectorAll(".history")[0];

function getvalue(val)
{
    if(inputVal.value === '0')
        inputVal.value = val;
    else
        inputVal.value += val;
}

function clearall()
{
    inputVal.value=0;
    subVal.value="";
}

function solve()
{
    var equation = inputVal.value;
    console.log(equation);
    subVal.value = equation + "=";
    inputVal.value = eval(equation);
    showhistory();
}

function removeld()
{
    if(inputVal.value.length > 1)
        inputVal.value = inputVal.value.slice(0, -1);
    else
        inputVal.value = 0;
}

function showhistory()
{
    console.log();
    allhistory.innerHTML += `<div class="his">
                                <p>${subVal.value}</p>
                                <p>${inputVal.value}</p>
                            </div>`;
}
function clearhistory(){
    allhistory.innerHTML="";
}

// function calculatePercentage() {
//     var equation = inputVal.value.split('-');
//     if (equation.length === 2) {
//         var amt = parseFloat(equation[0]);
//         var per = parseFloat(equation[1]);
//         var result = (amt / 100) * per;
//         inputVal.value = result;
//         subVal.value = `${amt}% of ${per} =`;
//         subVal.value=result;
//         showhistory();
//     }
// }

// function percentage(num , percent){
//     return(num/100*percent);
// }
// console.log(percentage(100,25));