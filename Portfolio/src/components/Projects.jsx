import VVhomepage from '../assets/images/VVhomepage.png'
import PWGen from '../assets/images/PWGenerator.png'
import Quiz from '../assets/images/Quiz1.png'
import ET from '../assets/images/EmployeeTrackerSS.png'

function Projects() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
    <a href="https://kthao21.github.io/Vibrant_Vocab/">
        <img src= {VVhomepage} div className="card-img-top " alt="Vibrant Vocab App" style={{minHeight: 350}}/></a>
      <div className="card-body">
        <h5 className="card-title">Vibrant Vocab</h5>
        <p className="card-text">Use this decorative dictory app to learn definitions and expand your vocabulary
        Visit the github repository here <a href="https://github.com/kthao21/Vibrant_Vocab">https://github.com/kthao21/Vibrant_Vocab</a></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <a href="https://roziert.github.io/PasswordGenerator/">
      <img src= {PWGen} className="card-img-top" alt="PW Generator App" style={{maxHeight: 350}}/></a>
      <div className="card-body">
        <h5 className="card-title">Password Generator</h5>
        <p className="card-text">Use this app to create secure unique passwords for all your applications
        Visit the github repository here <a href="https://github.com/RozierT/PasswordGenerator">https://github.com/RozierT/PasswordGenerator</a></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <a href="https://roziert.github.io/Quiz/">
        <img src={Quiz} className="card-img-top" alt="Quiz App" style={{maxHeight: 350}}/></a>
      <div className="card-body">
        <h5 className="card-title">Quiz</h5>
        <p className="card-text">This is a simple quiz app that you can use as a study aid to help remember important information
        Visit the github repository here <a href="https://github.com/RozierT/Quiz">https://github.com/RozierT/Quiz</a></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <a href="https://github.com/RozierT/EmployeeTracker">
      <img src={ET} className="card-img-top" alt="Employee Tracker App" style={{maxHeight: 350}}/></a>
      <div className="card-body">
        <h5 className="card-title">Employee Tracker</h5>
        <p className="card-text">This is a command line application that can be used to store employee role, manager, and salary data. 
        Visit the github repository here <a href="https://github.com/RozierT/EmployeeTracker">https://github.com/RozierT/EmployeeTracker</a></p>
      </div>
    </div>
  </div>
</div>
    )
}

export default Projects