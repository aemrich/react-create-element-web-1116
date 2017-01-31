const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'white' }, 'Vanilla'),
        React.createElement('li', { className: 'yellow' }, 'Banana')
      ]
    ));

// ReactDOM.render(list, document.getElementById('main'));

const title = React.createElement('h1', {}, 'My First React Code');
const paragraph = React.createElement('p', {}, "Cool React stuff!")
const container = React.createElement('div', {}, [title, paragraph, list]);

ReactDOM.render(
  container,
  document.getElementById('main')
);
