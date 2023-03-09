import React from 'react';

function Portfolio() {
    return (
        <div className='container2 projects'>
            <div className="project-1">
                <h3>Project 1</h3>
                    <img src='https://i.ytimg.com/vi/4ZNixy_AD34/maxresdefault.jpg' alt="filler"></img>
                    <br></br>
                    <a href="https://github.com/kn7767/tech-blog">
                        Project Link 
                    </a>
            </div>
            <div className="project-2">
                <h3>Project 2</h3>
                <img src='https://i.ytimg.com/vi/4ZNixy_AD34/maxresdefault.jpg' alt="filler"></img>
                    <br></br>
                    <a href="">
                        Project Link 
                    </a>            
            </div>
            <div className="project-3">
                <h3>Project 3</h3>
                <img src='https://i.ytimg.com/vi/4ZNixy_AD34/maxresdefault.jpg' alt="filler"></img>
                    <br></br>
                    <a href="">
                        Project Link 
                    </a>
            </div>
            <div className="project-4">
                <h3>Project 4</h3>
                <img src='https://i.ytimg.com/vi/4ZNixy_AD34/maxresdefault.jpg' alt="filler"></img>
                    <br></br>
                    <a href="">
                        Project Link 
                    </a>                    
            </div>
        </div>
    )

}

// make this new component avail for other files
export default Portfolio;