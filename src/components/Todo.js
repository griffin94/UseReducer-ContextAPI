import styled from 'styled-components';
import { useStateActions, useStateSelector } from '../state/StateProvider';

const Todo = () => {
  const tasks = useStateSelector((state) => state.tasks);
  const { addTask, removeTask, changeTask } = useStateActions();

  const addTodo = (e) => {
    e.preventDefault();
    const input = e.target.elements['task-name'];
    const value = input.value.trim();
    value &&
      addTask({
        id: generateId(tasks),
        completed: false,
        edit: false,
        value,
      });
    input.value = '';
    input.focus();
  };

  const toggleCompleted = (e, id) => {
    e.target === e.currentTarget &&
      changeTask({
        id,
        key: 'completed',
        value: !tasks.find((task) => task.id === id).completed,
      });
  };

  const setTaskToEdit = (id) =>
    changeTask({
      id,
      key: 'edit',
      value: !tasks.find((task) => task.id === id).edit,
    });

  // const editTask = (e, id) => {
  //   e.preventDefault();
  //   const input = e.target.elements['task-name'];
  //   const value = input.value.trim();
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id
  //         ? {
  //             ...task,
  //             edit: !task.edit,
  //             value,
  //           }
  //         : task,
  //     ),
  //   );
  // };
  const generateId = (tasks) =>
    tasks.reduce((max, curr) => Math.max(max, curr.id), -1) + 1;

  return (
    <Wrapper>
      <Form onSubmit={addTodo}>
        <input type='text' name='task-name' autoComplete='off'></input>
        <Button>Add</Button>
      </Form>
      <List>
        {tasks.map((task) => (
          <Task
            key={task.id}
            completed={task.completed}
            onClick={(e) => toggleCompleted(e, task.id)}
          >
            {task.edit ? (
              <Form
                onSubmit={
                  undefined
                  // (e) => editTask(e, task.id)
                }
              >
                <input type='text' name='task-name' autoComplete='off'></input>
                <Button>Save</Button>
              </Form>
            ) : (
              task.value
            )}
            <div>
              <Button onClick={() => removeTask(task.id)}>Remove</Button>
              <Button onClick={() => setTaskToEdit(task.id)}>
                {task.edit ? 'No_Edit' : 'Edit'}
              </Button>
            </div>
          </Task>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 400px;
  margin: 20px auto;
`;
const Form = styled.form`
  display: flex;
  width: 100%;

  input {
    width: 100%;
    margin-right: 10px;
    padding: 0 8px;
    border: 1px solid black;
    border-radius: 8px;
    outline: none;
    height: 35px;
  }
`;

const Button = styled.button`
  padding: 0 8px;
  border: 1px solid black;
  border-radius: 6px;
  margin-left: 8px;
  height: 35px;
  &:first-of-type {
    margin-left: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  margin-top: 10px;
`;
const Task = styled.li`
  border: 1px solid black;
  border-radius: 8px;
  padding: 4px 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ completed }) => (completed ? 'lime' : 'tomato')};

  div {
    display: flex;
    margin-left: 8px;
  }
`;

export default Todo;
