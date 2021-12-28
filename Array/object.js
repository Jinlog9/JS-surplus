// Mission1
// 숫자타입으로만 구성된 요소를 뽑아 배열만들기

const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

const newData = [];

function filterNumbers() {
        for (const [key, value] of Object.entries(data)) {
        // value object check
        if(isObject(value)) {
            for(const [innerKey, innerValue] of Object.entries(value)) {
                // value number check
                if(isNumber(innerValue)) newData.push(innerKey);
            }
        }
        else {
            // value number check
            if(isNumber(value)) newData.push(key);
        }
    }
}

function isObject(value) {
    if(typeof value === 'object') return true;
    return false;
}

function isNumber(value) {
    if(typeof value === 'number') return true;
    return false;
}

filterNumbers();

console.log(newData);