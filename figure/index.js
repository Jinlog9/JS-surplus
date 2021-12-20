const PI = 3.14;
const paramErrorMessage = "Check the number of Params."
const isTypeNumberErrorMessage = "Number type error."
const callFunc = [];
// 원주 = 2 * 반지름 * PI

// 원의 넓이 = 반지름 * (원주 / 2) or 반지름제곱 * PI
function getCircle(radius) {
    if(!isTypeNumCheck(radius)) errorMessage(isTypeNumberErrorMessage);
    return radius * radius * PI;
}

// 사각형의 넓이 = 가로 x 세로
function getRect(width, vertical) {
    if(!isTypeNumCheck(width, vertical)) errorMessage(isTypeNumberErrorMessage);
    return width * vertical;
}

// 사다리꼴의 넓이 = (가로 + 세로) / 2 * h
function getTrapezoid(width, vertical, height) {
    if(!isTypeNumCheck(width, vertical, height)) errorMessage(isTypeNumberErrorMessage);
    return (width + vertical) / 2 * height;
}


// 원기둥의 넓이 = 원의 넓이 2개  +  (옆면의 넓이 = 2 * PI * r * h)
function getCylinder(radius, height) {
    if(!isTypeNumCheck(radius, height)) errorMessage(isTypeNumberErrorMessage);
    return 2 * getCircle(radius) + getCylinderSide(radius, height);
}

function getCylinderSide(radius, height) {
    if(!isTypeNumCheck(radius, height)) errorMessage(isTypeNumberErrorMessage);
    return 2 * PI * radius * height;
}

function isTypeNumCheck() {
    let flag = true;
    Array.from(arguments).forEach(element => {
        if(typeof element !== 'number') flag = false;
    });
    return flag;
}

function isParamNumCheck(params, count) {
    if(params.length === count) return true;
    return false;
}

function errorMessage(message) {
    throw new Error(message);
}

function getArea(figure, ...args) {
    let result;
    if(figure === 'circle') {
        if(args.length === 2) {
            const n = args[1];
            let sum = 0;
            for(let i = args[0]; i <= n; i++) {
                sum += getCircle(i)
            }
            result = sum;
        } else {
            if(!isParamNumCheck(args, 1)) errorMessage(paramErrorMessage);
            result = getCircle(args[0]);
        }
    }
    else if(figure === 'rect') {
        if(!isParamNumCheck(args, 2)) errorMessage(paramErrorMessage);
        result = getRect(args[0], args[1]);
    }
    else if(figure === 'trapezoid') {
        if(!isParamNumCheck(args, 3)) errorMessage(paramErrorMessage);
        result = getTrapezoid(args[0], args[1], args[2]);
    }
    else if(figure === 'cylinder') {
        if(!isParamNumCheck(args, 2)) errorMessage(paramErrorMessage);
        result = getCylinder(args[0], args[1]);
    }
    const obj = {};
    obj[figure] = result;
    callFunc.push(obj);
    return result;
}

function printExecutionSequence() {
    let result = "";
    callFunc.forEach((element, index) => {
        const key = Object.keys(element);
        const value = Object.values(element);
        if(index === callFunc.length - 1) result += `${key}: ${value}`
        else result += `${key}: ${value}, `
    });
    return result;
}

getArea('circle', 2)
getArea('rect', 2, 3)

console.log(printExecutionSequence());