'use strict';

var visibility = true;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    renderIt();
};

var appRoot = document.getElementById('app');

function renderIt() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'You can see me' : 'Now you cant'
        ),
        React.createElement(
            'p',
            null,
            visibility && 'Yes you can'
        )
    );
    ReactDOM.render(template, appRoot);
};

renderIt();
