class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options,
            option: ''
        };
    }
    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({options: prevState.options.filter((option) => {
                    return optionToRemove !== option})})
        )
    };
    handlePick() {
        const randomValue = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomValue];
        this.setState(() => ({option: option}));
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item is already available '
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}/>
                <Options
                    options={this.state.options}
                    option={this.state.option}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};



// HEADER
const Header = (props) => {
    return (
        <div>
            <h1>{props.title} </h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};


// ACTION
const Action = (props) => {
        return (
            <div>
                <button
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >What should I do?
                </button>
            </div>
        )
};

// OPTIONS
const Options = (props) => {
    return (
        <div>
            <p>{(props.option && props.options.length > 0) && `You picked  ${props.option}`}</p>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.map((option) => <Option handleDeleteOption={props.handleDeleteOption}
                                                   key={option}
                                                   optionText={option}/>)}

        </div>
    )
};

// OPTION
const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >Delete Me</button>
        </div>
    )
};


// ADDOPTION
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAdd(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error: error}));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAdd}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']}/>, document.getElementById("app"))
ReactDOM.render(<IndecisionApp />, document.getElementById("app"))