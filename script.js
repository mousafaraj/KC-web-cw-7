function BIM( width = 80, height = 1.8 ) {
let result = width / (height * height)
return result;
}
console.log(BIM());

function statust(bodymass) {
    if (bodymass < 18.5) {
    return"لديك نقص في الوزن";
    } else if (bodymass => 18.5 && bodymass < 25) {
   return "وزنك صحي"
    } if(bodymass > 25){
    return"لديك زيادة في الوزن"
    }
}
function calculate(){
    let width = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi_value = BIM( width, height );
    let desc = statust(bmi_value);

    let box = document.getElementById('result');
    box.innerText = bmi_value + " == " + desc
}