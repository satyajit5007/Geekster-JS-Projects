document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();

    const firstName = e.target.children[0].value,
     lastName = e.target.children[1].value,
     country = e.target.children[2].value,
     score = e.target.children[3].value;
     errorPrompter = document.querySelector(".main_error-prompter");

     errorPrompter.style.display = "none";

     if(firstName === '' || lastName === '' || country === '' || score === '')
     return (errorPrompter.style.display = "block");

     const scoreboardContainer = document.querySelector(".main_scoreboard-wrapper")
     const scoreboardElement = document.createElement("div");

     scoreboardElement.classList.add("main_scoreboard");

     scoreboardElement.innerHTML = `
     <div>
        <p class="main_player-name">${firstName} ${lastName}</p>
        <p class="main_time-stamp">${generateDateAndTime()}</p>
    </div>
    <p class="main_player-country">${country}</p>
        <p class="main_player-score">${score}</p>
        <div class="main_scoreboard-btn-container">
            <button>&#x1f5d1;</button>
            <button>+5</button>
            <button>-5</button>
    </div>
     `
     scoreboardContainer.appendChild(scoreboardElement);
     sortScoreBoard()
     activateBtnEventListener()
})

function activateBtnEventListener(){
    document.querySelectorAll(".main_scoreboard-btn-container").forEach((el)=>{
        el.addEventListener("click", (e)=>{
            let textContent = e.target.textContent;
            console.log(textContent);
            let scorePlayer = e.target.parentElement.parentElement.children[2];
            console.log(scorePlayer);

            if(textContent.length > 2) return;

            console.log(e.target.parentElement.parentElement);
            console.log("hi");

            if(textContent === '🗑')
            return e.target.parentElement.parentElement.remove();

            scorePlayer.textContent = parseInt(scorePlayer.textContent) + parseInt(textContent);

            sortScoreBoard()
        
        });
    });
}

activateBtnEventListener()

function sortScoreBoard(){
    let scoreboardContainer = document.querySelector(".main_scoreboard-wrapper");

    let scoreBoards = document.querySelectorAll(".main_scoreboard");

    let elementsInArray = [];
    scoreBoards.forEach((el)=> elementsInArray.push(el));

    console.log(elementsInArray);
    let sortedElements = elementsInArray.map((el)=>{
        return el;
    })
    .sort((a,b)=>{
        let numA = parseInt(a.children[2].textContent),
        numB = parseInt(b.children[2].textContent)

        if(numA > numB) return -1;
        if(numA < numB) return 1;
    });

    sortedElements.forEach((el)=>{
        scoreboardContainer.append(el);
    })
}

function generateDateAndTime(){
    let dateObject = new Date();
    // console.log(dateObject);
    let month = dateObject.toLocaleString("default", {month:"long"})
    // console.log(month);
    day = dateObject.getDate(),
    year = dateObject.getFullYear(),
    time = dateObject.toLocaleTimeString().slice(0,8);
    // console.log(time);

    let generateResult = `${month} ${day}: ${year} ${time}`

    return generateResult;
}