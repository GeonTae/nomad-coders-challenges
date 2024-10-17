const select = selecteInput. value; //string
const guess = guessInput.value; // string

if (select === "" || guess ==="") {
    resultMessage. innerText = "";
    score.style.color = "red";
    score. innerHTML = "<strong>Please select Number!</strong>";
    return;
}


// const selectNumber = parseInt(select, 10);
// const guessNumber = parseInt(guess, 10);
// <input>과 <form>태그를 통해 제출된 값은 문자열형태로 저장됩니다. select과 guess의 타입은 현재 문자열입니다.
// 위 코드는 문자열 형태의 입력 값을 숫자 비교를 하기 위해 정수 형태로 바꿔주는 코드입니다.
// parseInt()함수는 문자열을 정수 형태로 바꿔주는 함수입니다. 맨 마지막의 10은 10진수로 변경하라는 의미입니다.
// (5)

// const machineChose = Math.ceil(Math.random() * selectNumber);
// Math.random()함수로 랜덤으로 숫자를 생성합니다. 이때 Math.random()은 0에서 1보다 작은 숫자를 생성하므로 숫자가 생성되는 범위는 max를 넘지 못합니다.
// 필요한 값은 정수 형태의 숫자이기 때문에 Math.ceil()함수를 통해 값을 올림하고 소수점 이하를 없애 줍니다.
// 여기서 버림이 아닌 올림을 하는 이유는 올림을 함으로써 max까지의 수를 얻을 수 있기 때문입니다.



resultMessage. innerText = `You chose: ${guessNumber}, the machine chose: ${machineChose}.`;
score.style.color = "black";
guessNumber === machineChose
? (score. innerHTML = "<strong>You won!</strong>")
: (score. innerHTML = "<strong>You lost!</strong>");