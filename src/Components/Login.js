import 'react-router-modal/css/react-router-modal.css';

function RouterOverlay() {
    return (
        <Router>
            <button path="/CardExpanded.js" component={Overlay}>Expand</button>
        </Router>
    );
}