

let hcap = 18;
let index = 1;
let holePar = 3;
let shots = 3;

function scoreCalc(holePar, shots) {
    let score = 0;
    if (shots == holePar + 2) {
        score += 0
    } else if (shots == holePar + 1) {
        score += 1
    } else if (shots == holePar) {
        score += 2
    } else if (shots == holePar -1) {
        score += 3
    } else if (shots == holePar - 2) {
        score += 4
    } else if (shots == holePar - 3) {
        score += 5
    } else if (shots == holePar - 4) {
        score += 6
    }
    console.log(score)
}


// put in # strokes hole, and hole par
// generate score w/o hcap
// 