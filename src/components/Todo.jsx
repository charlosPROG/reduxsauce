import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as actions } from '../redux/ducks/todos'

class Todo extends Component {
   handleSubmit = e => {
      e.preventDefault();

      this.props.addTodo(this.input.value);

      this.input.value = "";
   };

   render() {
      const { todos, toggleTodo, removeTodo } = this.props;

      return (
         <section>
            <form onSubmit={this.handleSubmit}>
               <input ref={el => (this.input = el)} />
               <button type="submit">Novo</button>
            </form>

            <ul>
               { todos && todos.map(todo => (
                  <li key={todo.id}>
                  { todo.complete ? <s>{ todo.text }</s> : todo.text }
                  <div>
                     <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                     <button onClick={() => removeTodo(todo.id)}>Remove</button>
                  </div>
                  </li>
               )) }
            </ul>
         </section>
      );
   }
}

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todo);