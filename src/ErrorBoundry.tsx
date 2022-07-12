import { Component, ErrorInfo } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true, redirect: false };
  }
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error.oh no. What are we going to do. JK.
          <Link to="/">Click here</Link> to go back to the homepage. or wait 5s
          .
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
