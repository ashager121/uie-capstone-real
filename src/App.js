import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="boardTitle">
        <img src="#" className="boardTitle__hamburger" />
        <h3 class="boardTitle__h3">Board Title</h3>
      </header>
      <img src="./assetts/user.png" id="userPhoto" />
      <img src="./assetts/user.png" id="userPhoto" />
      <img src="./assetts/user.png" id="userPhoto" />

      <section class="inProgress">
        <p>In-Progress</p>
        <div class="inProgress__cardBg">
          <div class="inProgress__card">
            <h3>Task Title</h3>

          </div>
        </div>
      </section>

      <section class="scheduled">

      </section>
      <section class="newTask">
      </section>
    </div>
  );
}

export default App;
