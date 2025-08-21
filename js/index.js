// контейнеры
let labelNode = document.querySelector('#label');
let answerNode = document.querySelector(`#answer`);
let stotyNode = document.querySelector(`#story`);
let nextNode = document.querySelector(`#next`);
let questionsNode = document.querySelector(`#questions`);

let counter = 0;
let story = ``;

nextNode.addEventListener(`click`, function() {
    counter++;
    if(counter == 1) {
        story = answerNode.value;
        labelNode.innerHTML = `Где?`;
        
    } else if(counter == 2){
        story = `${story} ${answerNode.value}`;
        labelNode.innerHTML = `С кем?`;
    } else if(counter == 3) {
        story = `${story} ${answerNode.value}`;
        labelNode.innerHTML = `Что делали?`;
    } else if(counter == 4) {
        story = `${story} ${answerNode.value}`;
        labelNode.innerHTML = `Зачем?`;
    } else if(counter == 5) {
        story = `${story}, ${answerNode.value}`;
        labelNode.innerHTML = `Чем дело закончилось?`; 
    } else{
        questionsNode.classList.add(`d-none`);
        stotyNode.innerHTML = story + `.` + answerNode.value + `.`
    }

    answerNode.value = ``;
});
