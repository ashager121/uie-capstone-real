import React from 'react';
// import profile from './assetts/user.png';
// import hamburger from './assetts/menu.png';

function App() {
  return (
    <div className="App">
      <header className="boardTitle">
        <h3 className="boardTitle__h3">Sprint Title</h3>
        {/* <img src={profile} alt="profileBtn" id="profileBtn"></img> */}
      </header>

      <section class="boards__section">
        <section className="board">
          <div className="board__wrap">
            <h3>Back Log</h3>
            <div className="board__section">
              <div className="board__card boardborder--blue">
                <h3>Task Title</h3>
                <p>
                  Task details and guidelines lorem ipsum lorem ipsum loreum ipsum.
             </p>
              </div>
            </div>
          </div>
        </section>

        <section className="board">
          <div className="board__wrap">
            <h3>Assigned</h3>
            <div className="board__section">
              <div className="board__card boardborder--lightblue">
                <h3>Task Title</h3>
                <p>
                  Task details and guidelines lorem ipsum lorem ipsum loreum ipsum.
             </p>
              </div>
            </div>
          </div>
        </section>

        <section className="board">
          <div className="board__wrap">
            <h3>In-Progress</h3>
            <div className="board__section">
              <div className="board__card boardborder--teal">
                <h3>Task Title</h3>
                <p>
                  Task details and guidelines lorem ipsum lorem ipsum loreum ipsum.
             </p>
              </div>
            </div>
          </div>
        </section>

        <section className="board">
          <div class="board__wrap">
            <h3>Completed</h3>
            <div className="board__section">
              <div className="board__card boardborder--lightgreen">
                <h3>Task Title</h3>
                <p>
                  Task details and guidelines lorem ipsum lorem ipsum loreum ipsum.
             </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div >
  );
}

export default App;
