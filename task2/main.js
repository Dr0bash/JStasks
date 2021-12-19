var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это светится', 'это вкручивается'],
    tries: 3,
    checkAnswer(answer) {
        if(this.tries == 0){
            alert('Игра окончена');
            console.log('Игра окончена');
        }
        else {
            if (this.correctAnswer.toLowerCase() === answer.toLowerCase()){
                alert('Правильный ответ');
                console.log('Правильный ответ');
            }
            else{
                alert('Неправильный ответ');
                console.log('Неравильный ответ');
                this.tries--;
                switch(this.tries) {
                    case 0:
                        alert('Игра окончена');
                        console.log('Игра окончена');
                        break;
                    case 1:
                        alert('Осталась одна попытка, вот тебе подсказка: ' + this.hints[1]);
                        console.log('Осталась одна попытка, вот тебе подсказка: ');
                        break;
                    case 2:
                        alert('Осталось две попытки, вот тебе подсказка: ' + this.hints[0]);
                        console.log('Осталось две попытки, вот тебе подсказка: ');
                        break;
                }
            }
        } 
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer);
        
    }
}