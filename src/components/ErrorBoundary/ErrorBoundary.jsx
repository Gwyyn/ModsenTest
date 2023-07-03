import {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Что-то пошло не так.</h2>
                    <p>{this.state.error && this.state.error.toString()}</p>
                    <div>{this.state.errorInfo && this.state.errorInfo.componentStack}</div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;