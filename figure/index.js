const PI = 3.14;
const paramErrorMessage = "Check the number of Params."
const isTypeNumberErrorMessage = "Number type error."
// 원주 = 2 * 반지름 * PI

// 원의 넓이 = 반지름 * (원주 / 2) or 반지름제곱 * PI
function cirecleArea(radius) {
    if(!isTypeNumCheck(radius)) errorMessage(isTypeNumberErrorMessage);
    return radius * radius * PI;
}

// 사각형의 넓이 = 가로 x 세로
function squareArea(width, vertical) {
    if(!isTypeNumCheck(width, vertical)) errorMessage(isTypeNumberErrorMessage);
    return width * vertical;
}

// 사다리꼴의 넓이 = (가로 + 세로) / 2 * h
function trapezoidArea(width, vertical, height) {
    if(!isTypeNumCheck(width, vertical, height)) errorMessage(isTypeNumberErrorMessage);
    return (width + vertical) / 2 * height;
}


// 원기둥의 넓이 = 원의 넓이 2개  +  (옆면의 넓이 = 2 * PI * r * h)
function cylinderArea(radius, height) {
    if(!isTypeNumCheck(radius, height)) errorMessage(isTypeNumberErrorMessage);
    return 2 * cirecleArea(radius) + cylinderSideArea(radius, height);
}

function cylinderSideArea(radius, height) {
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
    if(figure === 'circle') {
        if(args.length === 2) {
            const n = args[1];
            let sum = 0;
            for(let i = args[0]; i <= n; i++) {
                sum += cirecleArea(i)
            }
            return sum;
        } else {
            if(!isParamNumCheck(args, 1)) errorMessage(paramErrorMessage);
            return cirecleArea(args[0]);
        }
    }
    else if(figure === 'rect') {
        if(!isParamNumCheck(args, 2)) errorMessage(paramErrorMessage);
        return squareArea(args[0], args[1]);
    }
    else if(figure === 'trapezoid') {
        if(!isParamNumCheck(args, 3)) errorMessage(paramErrorMessage);
        return trapezoidArea(args[0], args[1], args[2]);
    }
    else if(figure === 'cylinder') {
        if(!isParamNumCheck(args, 2)) errorMessage(paramErrorMessage);
        return cylinderArea(args[0], args[1]);
    }
}

console.log(getArea('circle', 1, 3));