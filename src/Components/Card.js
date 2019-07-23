import React, { Component } from './node_modules/react';
// import Comment from './assets/comment.png';
// import Priority from './assets/priority.png';
import '../sass/App.scss';

export default class Card extends Component {

    getCardColor() {
        if (this.props.task.category === 'code') {
            return 'board__card--code'
        } else if (this.props.task.category === 'research') {
            return 'board__card--research'
        } else if (this.props.task.category === 'design') {
            return 'board__card--design'
        } else if (this.props.task.category === 'testing') {
            return 'board__card--testing'
        } else if (this.props.task.category === 'resources') {
            return 'board__card--resources'
        }
    }
    render() {
        const task = this.props.task;
        return (
            <div className={"board__card " + this.getCardColor()}>
                <h3>{task.title}</h3>
                <h4>Due: 01/01/01</h4>
                {/* <img src={Comment} alt="Comment" /> */}
                {/* <img src={Priority} alt="Priority" /> */}
            </div>
        )
    }
}

// // Modal Starts Here?
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="board">
                    <div className="board__overlay">
                        <h3>Assigned</h3>
                        <h4>Due: 01/01/01</h4>
                        <p>Task description goes here. Scott honks are the new greatest meme and this is just placeholder text for the lulz.</p>
                        <div className="profilePhotos">
                            <img src={Photo} alt="Photo" />
                            <img src={Photo} alt="Photo" />
                            <img src={Photo} alt="Photo" />
                            <img src={Photo} alt="Photo" />
                            <img src={Photo} alt="Photo" />
                            <img src={Photo} alt="Photo" />
                        </div>
                        <div className="comments">
                            <div className="comments">
                                <img src={Photo} alt="Photo" />
                                <h6>User Name</h6>
                                <p>User comment about project status or issue. Whatever they need it to be.</p>
                            </div>
                        </div>
                        <input>
                        </input>
                        {/* <div className="board__section"> </div> */}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
        </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </ButtonToolbar>
    );
}

render(<App />);