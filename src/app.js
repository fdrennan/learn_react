const app = {
    title: 'Visibility Toggle',
    subtitle: 'hey, These are some details you can now see',
    buttonName: 'Hide it'
};


const onRemoveAll = () => {
    if (app.subtitle) {
        app.subtitle = '';
        app.buttonName = 'Show it';
    } else {
        app.subtitle = 'hey, These are some details you can now see';
        app.buttonName = 'Hide it';
    }
    renderIt();
};

const appRoot = document.getElementById('app');

function renderIt() {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onRemoveAll}>{app.buttonName}</button>
            {app.subtitle && <p>{app.subtitle}</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderIt();