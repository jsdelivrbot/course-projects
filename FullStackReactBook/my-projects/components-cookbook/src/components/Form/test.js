onFormSubmit = (evt) => {
  const name = this.refs.name.value;
  const names = [ ...this.state.names, name ];
  this.setState({ names: names });
  this.refs.name.value = '';
  evt.preventDefault();
}


onFormSubmit = (evt) => {
  const names = [ ...this.state.names, this.state.name ];
  this.setState({ names: names, name: '' });
  evt.preventDefault();
}

render() {
  return (
    <div>
      <h1>Sign Up Sheet</h1>

      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder='Name'
          ref='name'
        />
        <input type='submit' />
      </form>

      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder='Name'
          value={this.state.name}
          onChange={this.onNameChange}
          <input type='submit' />
      </form>


      <div>
        <h3>Names</h3>

        <ul>
          { this.state.names.map((name, i) => <li key={i}>{name}</li>)}
        </ul>
      </div>

    </div>
  )
}
