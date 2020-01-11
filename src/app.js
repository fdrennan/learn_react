let visibility = true;

const toggleVisibility = () => {
    visibility = !visibility;
    renderIt();
};

const appRoot = document.getElementById('app');

function renderIt() {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>{
                visibility ? 'You can see me' : 'Now you cant'
            }</button>
            <p>
                {visibility && 'Yes you can'}
            </p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderIt();