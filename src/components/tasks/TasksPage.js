import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TasksPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="starter-template">
          <h1>Tasks</h1>
          <p className="lead">Here are your tasks.</p>
          <Link to="/task" className="btn btn-primary" title="Add New Task">
            <span className="glyphicon glyphicon-plus" /> Add New Task
          </Link>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Owner</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tasks.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.owner}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state
  };
};

export default connect(mapStateToProps)(TasksPage);
