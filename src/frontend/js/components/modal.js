import React from 'react';
import classNames from 'classnames';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: {
                modal: true,
            },

            style: {
                display: 'none',
            },
        }
    }

    updateVisibility = (show, display) => {
        const classes = {...this.state.classes};
        classes.show = show;
        const style = {...this.state.style};
        style.display = display;
        this.setState({...this.state, classes, style});
    };

    open = () => {
        this.updateVisibility(true, 'block');
    }

    close = () => {
        this.updateVisibility(false, 'none');
    }

    render() {
        return (
            <div className={classNames(this.state.classes)} style={this.state.style} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{this.props.title}</h5>
                    <button onClick={this.close} type="button" className="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {this.props.children}
                  </div>
                  <div className="modal-footer">
                    <button onClick={this.close} type="button" className="btn btn-secondary">Close</button>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Modal;
