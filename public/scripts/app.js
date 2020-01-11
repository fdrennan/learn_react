'use strict';

var app = {
    title: 'Visibility Toggle',
    subtitle: 'hey, These are some details you can now see',
    buttonName: 'Hide it'
};

var onRemoveAll = function onRemoveAll() {
    if (app.subtitle) {
        app.subtitle = '';
        app.buttonName = 'Show it';
    } else {
        app.subtitle = 'hey, These are some details you can now see';
        app.buttonName = 'Hide it';
    }
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
            { onClick: onRemoveAll },
            app.buttonName
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        )
    );
    ReactDOM.render(template, appRoot);
};

renderIt();
