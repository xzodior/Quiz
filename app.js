const correctAnswers = ['D', 'D', 'C', 'D', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.getElementById('result');
console.log(result)

form.addEventListener('submit', event => {
    // prevent page refreshing after clicking submit
    event.preventDefault();

    // store answers in an array
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
    
    // for loop to check if the index values inside each array is equal
    for (i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]){
            score += 20;
        }
    }

    //showcase scores after submit
    if (score < 50) {
        result.querySelector('span').style.color = 'crimson';
    } else {
        result.querySelector('span').style.color = 'limegreen';
    }
    result.style.display = 'block';
    scrollTo(0, 0);

    // added animation to the score where it will start from 0, then go up to the value
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10)
})