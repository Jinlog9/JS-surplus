const todos =  [ 
    {
        'name' : '자바스크립트 공부하기', 
        'tags' : ['programming', 'javascript'],
        'status' : 'todo',
        'id' : 12123123
    },
    {
        'name' : ' 그림 그리기', 
        'tags' : ['picture', 'favorite'],
        'status' : 'doing',
        'id' : 312323
    },
    {
        'name' : ' iOS 공부하기', 
        'tags' : ['picture', 'favorite'],
        'status' : 'todo',
        'id' : 312112
    }
]

const getTodoStatusData = () => {
    const statusArray = [0, 0, 0]; // todo, doing, done Array
    todos.forEach(todo => {
        if(todo.status === 'todo') statusArray[0]++;
        else if(todo.status === 'doing') statusArray[1]++;
        else if(todo.status === 'done') statusArray[2]++;
    });
    return `현재상태 : todo: ${statusArray[0]}개, doing:${statusArray[1]}개, done:${statusArray[2]}개`;
}

const getTodoNamesData = (obj) => {
    const objNames = [];
    todos.forEach(todo => {
        if(todo.status === obj) objNames.push(todo.name);
    })
    return `todo리스트 : 총${objNames.length}건 : ${objNames.join(" ,")}`;
}

const show = (obj) => {
    let result = "";
    if(obj === 'all') {
        result = getTodoStatusData();
    } else {
        result = getTodoNamesData(obj);
    }
    console.log(result);
}

show("all");
show("todo");