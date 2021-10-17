import React, { useState } from 'react';
import styled from 'styled-components';

function Todo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const input = e.target.elements['task-name'];
    const value = input.value.trim();
    value &&
      setTasks([
        ...tasks,
        {
          id: generateId(tasks),
          completed: false,
          edit: false,
          value,
        },
      ]);
    input.value = '';
    input.focus();
  };

  const removeTask = (e, id) => {
    e.stopPropagation();
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const setToEditTask = (e, id) => {
    e.stopPropagation();
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              edit: !task.edit,
            }
          : task,
      ),
    );
  };

  const editTask = (e, id) => {
    e.preventDefault();
    const input = e.target.elements['task-name'];
    const value = input.value.trim();
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              edit: !task.edit,
              value,
            }
          : task,
      ),
    );
  };
  const generateId = (tasks) =>
    tasks.reduce((max, curr) => Math.max(max, curr.id), -1) + 1;

  return (
    <Wrapper>
      <Form onSubmit={addTask}>
        <input type='text' name='task-name' autoComplete='off'></input>
        <Button>Add</Button>
      </Form>
      <List>
        {tasks.map((task) => (
          <Task
            key={task.id}
            completed={task.completed}
            onClick={() => toggleCompleted(task.id)}
          >
            {task.edit ? (
              <Form onSubmit={(e) => editTask(e, task.id)}>
                <input type='text' name='task-name' autoComplete='off'></input>
                <Button>Save</Button>
              </Form>
            ) : (
              task.value
            )}
            <div>
              <Button onClick={(e) => removeTask(e, task.id)}>Remove</Button>
              <Button onClick={(e) => setToEditTask(e, task.id)}>
                {task.edit ? 'No_Edit' : 'Edit'}
              </Button>
            </div>
          </Task>
        ))}
      </List>
    </Wrapper>
  );
}

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
  background-color: ${(props) => (props.completed ? 'lime' : 'tomato')};

  div {
    display: flex;
    margin-left: 8px;
  }
`;

export default Todo;
