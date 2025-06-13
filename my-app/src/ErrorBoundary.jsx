import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError:false};
    }

    static getDerivedStateFromError(error){
        //update state so UI can show fallback
        return{hasError:true};
    }

    componentDidCatch(error, info){
        //you can log error to a service
        console.log('Caught by a error boundary:', error, info);
    }

    render(){
        if(this.state.hasError){
            return <h2 style={{color:'red'}}>Something went wrong! Try entering the site again</h2>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;

// ui errors