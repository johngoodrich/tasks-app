import React from 'react';
import { addTask } from '../../actions/taskActions';
import { connect } from 'react-redux';

class ManageTaskPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      owner: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let newTask = {
      title: this.state.title,
      owner: this.state.owner
    };
    this.props.addNewTask(newTask);
    this.props.history.push('/tasks');
  }
  render() {
    return (
      <div className="container">
        <div className="template-pad">
          <h1 className="text-center">Manage Task</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter Title"
                onChange={this.handleInputChange}
                value={this.state.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="owner">Owner</label>
              <input
                type="text"
                className="form-control"
                id="owner"
                name="owner"
                placeholder="Enter Owner"
                onChange={this.handleInputChange}
                value={this.state.owner}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!(this.state.title && this.state.owner)}
            >
              {this.state.title && this.state.owner ? (
                <span>
                  <span className="glyphicon glyphicon-floppy-disk" /> Save
                </span>
              ) : (
                'Please complete form.'
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewTask: task => {
      dispatch(addTask(task));
    }
  };
};

export default connect(null, mapDispatchToProps)(ManageTaskPage);
