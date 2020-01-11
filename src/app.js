console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderIt();
};

const removeAll = () => {
    app.options = [];
    renderIt();
};

const appRoot = document.getElementById('app');

function renderIt() {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
                {/*{printOptions(app.options)}*/}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderIt();