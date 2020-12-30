import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.idx = 0;
        this.list_of_projects = [<this.MazeProject/>, <this.Research_Assistent/>, <this.SchoolProject/>];

        this.state = {
            currentDisplay: <this.MazeProject/>
        }

        this.buttonHandler = this.buttonHandler.bind(this);
        this.MazeProject = this.MazeProject.bind(this);
        this.Research_Assistent = this.Research_Assistent.bind(this);
        this.SchoolProject = this.SchoolProject.bind(this);
    }

    MazeProject() {
        return (
            <div className="projectDescription">
                <div className="aboutProject">
                    <h3>Langauge: Java</h3>
                    <h4>Solving: O(V + E)</h4>
                    <h4>Space: O(n)</h4>
                    <p>
                        Creating a random maze and having a BFS algorithm to solve the 
                        shortest path between the source node and the target node. I used a Binary Search Tree
                        to find the minimal key value which was the source node and a maximum key value which was
                        the target node. To transverse the maze six equations was needed in order to move around.
                        There was 4 transitional equations. Current node position is x, <br/><br/>
                        1) f(x) = x + 1 <br/>
                        2) f(x) = x + &#8730;(length of list)<br/>
                        3) f(x) = x - 1 <br/>
                        4) f(x) = x - &#8730;(length of list) <br/>
                    </p>
                </div>
                <div className="projectImages">
                    <img src="./Images/mazeScreenshot.png" width="175" height="175"/>
                    <img src="./Images/mazeScreenshot_two.png" width="175" height="175"/>
                    <img src="./Images/mazeScreenshot_three.png" width="175" height="175"/>
                    <img src="./Images/mazeScreenshot_four.png" width="175" height="175"/>
                </div>
            </div>
        );
    }

    Research_Assistent() {
        return (
            <div className="projectDescription">
                <div className="aboutProject">
                    <h3>Language: Python</h3>
                    <p>
                        I was working with a doctor of Computer Science Dr. Boxang Dong researching a method called Unlearning
                        for a threat detection project. This project was in python and my job was to create predictions using
                        machine learning methods such as DNN and CNN. The begining of the project I knew nothing of machine learning,
                        he gave me a book and I read the textbook in 3 months while creating example projects. To give me a little test
                        at each section he would give me a dataset to pass into the algorithm. When I got the dataset if needed I would
                        write scripts to prepare data to be entered into the algorithm. These scrpts needed to be as fast as possible becuase
                        I was dealing with large sums of data. While I would show pictures I due to keeping the information and data safe
                        for my professor I will now show anything.
                    </p>
                </div>
            </div>
        );
    }

    SchoolProject() {
        return (
            <div className="projectDescription">
                <div className="aboutProject">
                    <h3>Language: PHP, HTML, CSS, SQL</h3>
                    <h4>Search Time: O(n)</h4>
                    <h4>Space: O(1)</h4>
                    <p>
                        This project was for a in class assignment for having a website communicate with a database.
                        Database design was takin into heavy consideration to make sure the structure of the database was dynamic.
                        I created some pages shown to the right and was incharge of the backend (PHP) commincating to the database.
                        The project was based on a College Football shop site and the primary goal was database manipulation and 
                        communication of data. The sole focus of this was to display and buy item for a client to purchuse.
                    </p>
                </div>
                <div className="projectImages">
                    <img src="./Images/schoolProject.png" width="250" height="175"/>
                    <img src="./Images/schoolProject_two.png" width="250" height="175"/>
                    <img src="./Images/schoolProject_three.png" width="175" height="175"/>
                    <img src="./Images/schoolProject_four.png" width="175" height="175"/>
                </div>
            </div>
        );
    }


    buttonHandler(event) {
        if(event.name == "Back") {
            if(this.idx - 1 < 0) {
                this.idx = this.list_of_projects.length - 1;
            } else {
                this.idx = this.idx - 1;
            }
        } else {
            if(this.idx - 1 < 0) {
                this.idx = this.list_of_projects.length - 1;
            } else {
                this.idx = this.idx - 1;
            }
        }

        this.setState(state => ({
            currentDisplay: this.list_of_projects[this.idx]
        }));
    }



    render() {
        return (
            <div className="projects">
                <div className="backButton-container">
                    <button onClick={this.buttonHandler} name="Back" className="backButton">Back</button>
                </div>
                <div className="displayProject">
                    {this.state.currentDisplay}
                </div>
                <div className="nextButton-container">
                    <button onClick={this.buttonHandler} name="Next" className="nextButton">Next</button>
                </div>
            </div>
        );
    }
}



ReactDOM.render(
    <Projects/>,
    document.getElementById('project-card')
);