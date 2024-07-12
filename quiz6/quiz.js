// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The smell coming from the garbage dump was so __________ that it made everyone in the vicinity feel sick.",
        chinese_question: "垃圾场散发出的气味是如此 __________，使得附近的所有人都感到恶心。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "delightful", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "C", answer: "loathsome", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
            { option: "D", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'loathsome' means causing hatred or disgust; repulsive." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'delightful' means causing delight; charming." +
            "<br><br>" +
            "(D) 'fragrant' means having a pleasant or sweet smell.",
        chinese_explanation: "(C) '令人厌恶的' 意味着引起憎恨或厌恶的；令人反感的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着带来快乐或满足感的。" +
            "<br><br>" +
            "(B) '令人愉快的' 意味着带来愉快；迷人的。" +
            "<br><br>" +
            "(D) '芳香的' 意味着有愉快或甜美的气味。"
    },
    {
        id: 2,
        question: "The engineer suggested a __________ solution that could be implemented within the existing budget constraints.",
        chinese_question: "工程师提出了一个 __________ 的解决方案，可以在现有预算限制内实施。",
        answers: [
            { option: "A", answer: "impractical", chinese_answer: "不切实际", chinese_romanization: "bù qiè shíjì" },
            { option: "B", answer: "theoretical", chinese_answer: "理论", chinese_romanization: "lǐlùn" },
            { option: "C", answer: "practicable", chinese_answer: "可行", chinese_romanization: "kěxíng" },
            { option: "D", answer: "impossible", chinese_answer: "不可能", chinese_romanization: "bù kěnéng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'practicable' means capable of being done or put into practice successfully." +
            "<br><br>" +
            "(A) 'impractical' means not sensible or realistic." +
            "<br><br>" +
            "(B) 'theoretical' means based on theory rather than practical application." +
            "<br><br>" +
            "(D) 'impossible' means not able to occur or be done.",
        chinese_explanation: "(C) '可行' 意味着能够成功地完成或付诸实践。" +
            "<br><br>" +
            "(A) '不切实际' 意味着不合理或不现实。" +
            "<br><br>" +
            "(B) '理论' 意味着基于理论而非实际应用。" +
            "<br><br>" +
            "(D) '不可能' 意味着不能发生或完成。"
    },
    {
        id: 3,
        question: "The new employee was __________ about starting his first project.",
        chinese_question: "新员工对开始他的第一个项目感到非常 __________ 。",
        answers: [
            { option: "A", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "C", answer: "apathetic", chinese_answer: "冷淡", chinese_romanization: "lěngdàn" },
            { option: "D", answer: "reluctant", chinese_answer: "勉强", chinese_romanization: "miǎnqiáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'reluctant' means unwilling and hesitant.",
        chinese_explanation: "(A) '热情' 意味着表现出强烈和热切的享受、兴趣或认可。" +
            "<br><br>" +
            "(B) '漠不关心' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(C) '冷淡' 意味着表现出或感到没有兴趣、热情或关注。" +
            "<br><br>" +
            "(D) '勉强' 意味着不情愿和犹豫。"
    },
    {
        id: 4,
        question: "After spending the whole winter indoors, his skin was noticeably __________.",
        chinese_question: "整个冬天都待在室内之后，他的皮肤明显变得 __________。",
        answers: [
            { option: "A", answer: "vibrant", chinese_answer: "鲜艳的", chinese_romanization: "xiānyàn de" },
            { option: "B", answer: "pale", chinese_answer: "苍白的", chinese_romanization: "cāngbái de" },
            { option: "C", answer: "tanned", chinese_answer: "晒黑的", chinese_romanization: "shàihēi de" },
            { option: "D", answer: "flushed", chinese_answer: "红润的", chinese_romanization: "hóngrùn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pale' means light in color or having less color than usual." +
            "<br><br>" +
            "(A) 'vibrant' means full of energy and life." +
            "<br><br>" +
            "(C) 'tanned' means having brown skin after exposure to the sun." +
            "<br><br>" +
            "(D) 'flushed' means red and hot, typically as the result of illness or strong emotion.",
        chinese_explanation: "(B) '苍白的' 意味着颜色浅或比平时颜色淡。" +
            "<br><br>" +
            "(A) '鲜艳的' 意味着充满活力和生机。" +
            "<br><br>" +
            "(C) '晒黑的' 意味着经过阳光照射后皮肤变成棕色。" +
            "<br><br>" +
            "(D) '红润的' 意味着通常由于疾病或强烈情感而变红和发热。"
    },
    {
        id: 5,
        question: "It is __________ to remain silent when someone else is speaking during a meeting.",
        chinese_question: "在会议中当别人讲话时保持沉默是 __________ 的。",
        answers: [
            { option: "A", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "B", answer: "inappropriate", chinese_answer: "不合适的", chinese_romanization: "bù héshì de" },
            { option: "C", answer: "fitting", chinese_answer: "合适的", chinese_romanization: "héshì de" },
            { option: "D", answer: "appropriate", chinese_answer: "适当的", chinese_romanization: "shìdàng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'appropriate' means suitable or proper in the circumstances." +
            "<br><br>" +
            "(A) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(B) 'inappropriate' means not suitable or proper in the circumstances." +
            "<br><br>" +
            "(C) 'fitting' means suitable or appropriate under the circumstances.",
        chinese_explanation: "(D) '适当的' 意味着在情况下适当或合适的。" +
            "<br><br>" +
            "(A) '粗鲁的' 意味着冒犯性的不礼貌或粗鲁的。" +
            "<br><br>" +
            "(B) '不合适的' 意味着在情况下不适当或不合适的。" +
            "<br><br>" +
            "(C) '合适的' 意味着在情况下适当或合适的。"
    },
    {
        id: 6,
        question: "The weather conditions were __________ for a picnic in the park, with clear skies and mild temperatures.",
        chinese_question: "天气条件 __________ 适合在公园野餐，天空晴朗，气温温和。",
        answers: [
            { option: "A", answer: "suitable", chinese_answer: "合适", chinese_romanization: "héshì" },
            { option: "B", answer: "adverse", chinese_answer: "不利", chinese_romanization: "bùlì" },
            { option: "C", answer: "harsh", chinese_answer: "严酷", chinese_romanization: "yánkù" },
            { option: "D", answer: "unpleasant", chinese_answer: "令人不快", chinese_romanization: "lìng rén bù kuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'suitable' means right or appropriate for a particular person, purpose, or situation." +
            "<br><br>" +
            "(B) 'adverse' means preventing success or development; harmful; unfavorable." +
            "<br><br>" +
            "(C) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'unpleasant' means causing discomfort, unhappiness, or revulsion.",
        chinese_explanation: "(A) '合适' 意味着对特定的人、目的或情况是合适的。" +
            "<br><br>" +
            "(B) '不利' 意味着妨碍成功或发展的；有害的；不利的。" +
            "<br><br>" +
            "(C) '严酷' 意味着令人不愉快的粗糙或刺耳的。" +
            "<br><br>" +
            "(D) '令人不快' 意味着引起不适、痛苦或厌恶的。"
    },
    {
        id: 7,
    question: "He was fully __________ of the risks involved in the project but decided to proceed anyway.",
    chinese_question: "他完全__________项目中涉及的风险，但还是决定继续进行。",
    answers: [
        { option: "A", answer: "unaware", chinese_answer: "不知道的", chinese_romanization: "bù zhīdào de" },
        { option: "B", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
        { option: "C", answer: "aware", chinese_answer: "知道的", chinese_romanization: "zhīdào de" },
        { option: "D", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'aware' means having knowledge or perception of a situation or fact." +
        "<br><br>" +
        "(A) 'unaware' means having no knowledge of a situation or fact." +
        "<br><br>" +
        "(B) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
        "<br><br>" +
        "(D) 'oblivious' means not aware of or not concerned about what is happening around one.",
    chinese_explanation: "(C) '知道的' 一词意味着对某种情况或事实有知识或感知。" +
        "<br><br>" +
        "(A) '不知道的' 意味着对情况或事实没有知识。" +
        "<br><br>" +
        "(B) '无知的' 意味着普遍缺乏知识或意识；未受教育或不成熟的。" +
        "<br><br>" +
        "(D) '无视的' 意味着对周围发生的事情没有意识或不关心。"
    },
    {
        id: 8,
        question: "The haunted house had a __________ appearance, with cobwebs and eerie shadows everywhere.",
        chinese_question: "鬼屋外观__________，到处都是蜘蛛网和诡异的阴影。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "C", answer: "ghastly", chinese_answer: "可怕的", chinese_romanization: "kěpà de" },
            { option: "D", answer: "delightful", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ghastly' means causing great horror or fear; frightful or macabre." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'beautiful' means pleasing the senses or mind aesthetically." +
            "<br><br>" +
            "(D) 'delightful' means causing delight; charming.",
        chinese_explanation: "(C) '可怕的'一词意味着引起极大的恐惧或害怕的；令人害怕或与死亡有关的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着给人快乐或满足感的。" +
            "<br><br>" +
            "(B) '美丽的' 意味着在美学上愉悦感官或心灵的。" +
            "<br><br>" +
            "(D) '令人愉快的' 意味着引起愉悦的；迷人的。"
    },
    {
        id: 9,
        question: "The crowd erupted in __________ applause as the band finished their final song.",
        chinese_question: "当乐队完成最后一首歌时，观众爆发出 __________ 的掌声。",
        answers: [
            { option: "A", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ānjìng de" },
            { option: "C", answer: "thunderous", chinese_answer: "雷鸣般的", chinese_romanization: "léimíng bān de" },
            { option: "D", answer: "soft", chinese_answer: "轻柔的", chinese_romanization: "qīngróu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thunderous' means very loud." +
            "<br><br>" +
            "(A) 'gentle' means mild in temperament or behavior; kind or tender." +
            "<br><br>" +
            "(B) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(D) 'soft' means easy to mold, cut, compress, or fold; not hard or firm to the touch.",
        chinese_explanation: "(C) '雷鸣般的' 意味着非常响亮的。" +
            "<br><br>" +
            "(A) '温和的' 意味着性情或行为温和的；善良或温柔的。" +
            "<br><br>" +
            "(B) '安静的' 意味着几乎没有声音或没有声音的。" +
            "<br><br>" +
            "(D) '轻柔的' 意味着易于塑造、切割、压缩或折叠的；摸起来不硬或不牢的。"
    },
    {
        id: 10,
        question: "She adjusted the settings to achieve the __________ performance of the machine.",
        chinese_question: "她调整了设置以达到机器的 __________ 性能。",
        answers: [
            { option: "A", answer: "suboptimal", chinese_answer: "次优的", chinese_romanization: "cì yōu de" },
            { option: "B", answer: "poor", chinese_answer: "差的", chinese_romanization: "chà de" },
            { option: "C", answer: "optimal", chinese_answer: "最佳的", chinese_romanization: "zuì jiā de" },
            { option: "D", answer: "worst", chinese_answer: "最差的", chinese_romanization: "zuì chà de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'optimal' means best or most favorable; optimum." +
            "<br><br>" +
            "(A) 'suboptimal' means below the best or most favorable condition." +
            "<br><br>" +
            "(B) 'poor' means lacking sufficient money to live at a standard considered comfortable or normal in a society." +
            "<br><br>" +
            "(D) 'worst' means of the poorest quality or the lowest standard.",
        chinese_explanation: "(C) '最佳的' 意味着最好的或最有利的；最优的。" +
            "<br><br>" +
            "(A) '次优的' 意味着低于最佳或最有利的条件。" +
            "<br><br>" +
            "(B) '差的' 意味着缺乏足够的钱以达到社会中认为舒适或正常的标准。" +
            "<br><br>" +
            "(D) '最差的' 意味着质量最差或标准最低的。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
