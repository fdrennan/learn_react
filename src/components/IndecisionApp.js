import React from 'react';
import Header from "./Header";
import Action from "./Action";
import AddOption from "./AddOption";
import Options from "./Options";

class IndecisionApp extends React.Component {

    state = {
        options: []
    };

    // LIFECYCLE FUNCTIONS

    componentDidMount() {
        // fetch('http://127.0.0.1:4808/data')
        //     .then(results => {
        //         return results.json();
        //     }).then(data => {
        //         // console.log(JSON.parse(data).map((x) => x.mpg));
        //         this.setState({data: JSON.parse(data)})
        // })
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options: options}))
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            console.log(json);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('Unmount')
    }

    // Personalized Functions

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    };

    handleDeleteOption = (optionToRemove) => {

        this.setState((prevState) => ({options: prevState.options.filter((option) => {
                return optionToRemove !== option})})
        );

    };

    handlePick = () => {
        const randomValue = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomValue];
        this.setState(() => ({option: option}));
    };

    handleAddOption = (option) => {
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
    };

    // RENDERING LOCATION
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

export default IndecisionApp;