import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const data = response.data as Todo;
    logTodo(data);
});

const logTodo = (data: Todo) => {
    console.log(`
        The Todo with ID: ${data.id}
        Has a title: ${data.title}
        Is it finished: ${data.completed}
    `)
}