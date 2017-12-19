import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './AppTodo.scss';

const Title = ({ todoCount }) => (
  <div>
    <div className="todo-container">
      <h1> Make life easy</h1>
    </div>
  </div>
);

const TodoForm = ({ addTodo }) => {
  let input;
  return (
    <form
      className="add-to-list"
      onSubmit={e => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}
    >
      <input
        ref={node => {
          input = node;
        }}
      />
      <br />
    </form>
  );
};

const Todo = ({ todo, remove }) => (
  <a
    href="#"
    className="sheela-list"
    onClick={() => {
      remove(todo.id);
    }}
  >
    {todo.text}
  </a>
);

const TodoList = ({ todos, remove }) => {
  const todoNode = todos.map(todo => <Todo todo={todo} key={todo.id} remove={remove} />);
  return <div>{todoNode}</div>;
};

class AppTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.apiUrl = '//57b1924b46b57d1100a3c3f8.mockapi.io/api/todos';
  }

  componentDidMount() {
    axios.get(this.apiUrl).then(res => {
      this.setState({ data: res.data });
    });
  }

  addTodo(val) {
    const todo = { text: val };
    axios.post(this.apiUrl, todo).then(res => {
      this.state.data.push(res.data);
      this.setState({ data: this.state.data });
    });
  }

  handleRemove(id) {
    const remainder = this.state.data.filter(todo => {
      if (todo.id !== id) return todo;
    });
    axios.delete(`${this.apiUrl}/${id}`).then(res => {
      this.setState({ data: remainder });
    });
  }

  render() {
    return (
      <div className="sheela-app-todo">
        <Title todoCount={this.state.data.length} />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList todos={this.state.data} remove={this.handleRemove.bind(this)} />
      </div>
    );
  }
}

export default AppTodo;
