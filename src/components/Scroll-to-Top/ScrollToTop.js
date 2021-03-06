import React, { Component } from "react";
import '../Scroll-to-Top/ScrollToTop.css';

export default class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        this._isMounted = true;
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    toggleVisibility() {
        if (window.pageYOffset > 10) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <div className="scroll-to-top">
                {is_visible && (
                    <div className="scrollUpArrow" onClick={() => this.scrollToTop()}>
                        <i className="fas fa-caret-square-up"></i>
                    </div>
                )}
            </div>
        );
    }
}
