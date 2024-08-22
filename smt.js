const questions = {
    "1" : {"question": "You are stranded?", "image" : "images/Screenshot 2024-06-28 at 6.42.02 PM.png"},
    "2" : {"question": "a?", "image" : "images/Screenshot 2024-06-28 at 6.42.02 PM.png"},
    "3" : {"question": "b?", "image" : "images/Screenshot 2024-06-28 at 6.42.02 PM.png"},
    "4" : {"question": "c?", "image" : "images/Screenshot 2024-06-28 at 6.42.02 PM.png"},
    "5" : {"question": "d?", "image" : "images/Screenshot 2024-06-28 at 6.42.02 PM.png"},
    "6" : {"question": "e?", "image" : "images/Screenshot 2024-06-28 at 6.42.02 PM.png"},
    "7" : {"question": "f?", "image" : "images/Screenshot 2024-06-28 at 6.42.02 PM.png"},
    "8" : {"question": "g?", "image" : "images/Screenshot 2024-06-28 at 6.42.02 PM.png"},
    "9" : {"question": "h?", "image" : "images/Screenshot 2024-06-28 at 6.42.02 PM.png"},
}



let currentState = 1;

personality = [0.5, 0.5, 0.5, 0.5, 0]

function renderState(state) {
    const q = document.getElementById('q');
    const i = document.getElementById('i');
    t = document.getElementById('t');
    

    const img = new Image();
    img.src = questions[currentState]["image"];

    img.onload = () => {
        q.src = img.src;
        i.textContent = questions[currentState]["question"];

        

        var t = document.createElement("input");
        input.setAttribute('type', 'text');
        choicesContainer.appendChild(t);


        const button = document.createElement('button');
        button.textContent = "onward";
        button.className = 'choice-button';
        // let nextState = info[0];
        // button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
        choicesContainer.appendChild(button);
    };
}


function changeState(newState, selectedPersonalities) { 
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}