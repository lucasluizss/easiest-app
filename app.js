import express, { json } from 'express';
const app = express();

let todoList = ['breakfast', 'lunch', 'dinner', 'sleep', 'code'];
let doneList = [];

app.use(json());

app.get('/', (request, response) => {
	response.send({
		todo: todoList,
		done: doneList
	});
});

app.get('/filter', (request, response) => {
	const { text } = request.query;

	response.send({
		todo: todoList.filter(task => task.includes(text)),
		done: doneList.filter(task => task.includes(text))
	});
});

app.post('/', (request, response) => {
	const { task } = request.body;

	todoList.push(task);

	response.sendStatus(201);
});


app.post('/:index/task-done', (request, response) => {
	const { index } = request.params;

	doneList.push(todoList[index]);
	todoList.splice(index, 1);

	response.sendStatus(200);
});

app.put('/:index', (request, response) => {
	const { index } = request.params;
	const { task } = request.body;

	todoList[index] = task;

	//:: Also could do like this bellow ::
	// todoList.splice(index, 1, task);
	// todoList = todoList.map((i, item) => i === index ? task : item);

	response.sendStatus(204);
});

app.delete('/:index', (request, response) => {
	const { index } = request.params;

	todoList.splice(index, 1);

	//:: Also could do like this bellow ::
	// todoList = todoList.filter((i, _) => i !== index);

	response.sendStatus(204)
});

app.delete('/:index/task-done', (request, response) => {
	const { index } = request.params;

	doneList.splice(index, 1);

	response.sendStatus(204)
});

app.listen(5000, () => console.log('Server is running'));