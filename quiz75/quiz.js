// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ in thinking everyone had good intentions left him vulnerable to manipulation and deceit.",
        chinese_question: "他认为每个人都有好意的 __________ 让他容易受到操纵和欺骗。",
        answers: [
            { option: "A", answer: "suspicion", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "B", answer: "caution", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "C", answer: "perceptiveness", chinese_answer: "洞察力", chinese_romanization: "dòngchá lì" },
            { option: "D", answer: "naivete", chinese_answer: "天真", chinese_romanization: "tiānzhēn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'naivete' means a lack of experience, wisdom, or judgment; innocence or gullibility." +
            "<br><br>" +
            "(A) 'suspicion' means a feeling or thought that something is possible, likely, or true." +
            "<br><br>" +
            "(B) 'caution' means care taken to avoid danger or mistakes." +
            "<br><br>" +
            "(C) 'perceptiveness' means having or showing keenness of insight, understanding, or intuition.",
        chinese_explanation: "(D) '天真'一词意味着缺乏经验、智慧或判断；天真或轻信。" +
            "<br><br>" +
            "(A) '怀疑' 意味着某事可能、可能或真实的感觉或想法。" +
            "<br><br>" +
            "(B) '谨慎' 意味着采取的避免危险或错误的措施。" +
            "<br><br>" +
            "(C) '洞察力' 意味着具有或表现出敏锐的洞察力、理解力或直觉。"
    },
    {
        id: 2,
        question: "Her artistic __________ shone through in her beautifully crafted paintings and sculptures.",
        chinese_question: "她的艺术 __________ 在她精美的绘画和雕塑中熠熠生辉。",
        answers: [
            { option: "A", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "B", answer: "inclination", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
            { option: "C", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bùqíngyuàn" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inclination' means a natural tendency to act in a particular way." +
            "<br><br>" +
            "(A) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(C) 'reluctance' means unwillingness or disinclination to do something." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '倾向'一词意味着自然的倾向去以某种方式行动。" +
            "<br><br>" +
            "(A) '厌恶' 意味着强烈的反感或不情愿。" +
            "<br><br>" +
            "(C) '不情愿' 意味着不愿意或不情愿做某事。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关注或同情。"
    },
    {
        id: 3,
        question: "After implementing the new teaching methods, the teacher noticed an __________ in students' participation, with more students actively engaging in class discussions and activities.",
        chinese_question: "在实施新的教学方法后，老师注意到学生的参与度有所 __________ ，更多学生积极参与课堂讨论和活动。",
        answers: [
            { option: "A", answer: "decrease", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "C", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "D", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'increase' means a rise in the amount, number, or value of something." +
            "<br><br>" +
            "(A) 'decrease' means to make or become smaller or fewer in size, amount, intensity, or degree." +
            "<br><br>" +
            "(B) 'hesitation' means the action of pausing before saying or doing something." +
            "<br><br>" +
            "(C) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value.",
        chinese_explanation: "(D) '增加' 意味着某物的数量、数目或价值的上升。" +
            "<br><br>" +
            "(A) '减少' 意味着在大小、数量、强度或程度上变小或变少。" +
            "<br><br>" +
            "(B) '犹豫' 意味着在说或做某事前暂停的动作。" +
            "<br><br>" +
            "(C) '下降' 意味着力量、数量、质量或价值的逐渐和持续的损失。"
    },
    {
        id: 4,
    question: "His stern __________ reflected his disapproval of the proposal.",
    chinese_question: "他严肃的 __________ 反映了他对这个提案的不满。",
    answers: [
        { option: "A", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "countenance", chinese_answer: "面容", chinese_romanization: "miànróng" },
        { option: "C", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
        { option: "D", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'countenance' means a person's face or facial expression." +
        "<br><br>" +
        "(A) 'celebration' means the action of celebrating an important day or event." +
        "<br><br>" +
        "(C) 'ignorance' means lack of knowledge or information." +
        "<br><br>" +
        "(D) 'enthusiasm' means intense and eager enjoyment, interest, or approval.",
    chinese_explanation: "(B) '面容' 意味着一个人的脸或面部表情。" +
        "<br><br>" +
        "(A) '庆祝' 意味着庆祝一个重要的日子或事件的行为。" +
        "<br><br>" +
        "(C) '无知' 意味着缺乏知识或信息。" +
        "<br><br>" +
        "(D) '热情' 意味着强烈和热切的享受、兴趣或赞同。"
    },
    {
        id: 5,
        question: "His face turned red with __________ when he realized he had made a silly mistake in front of his colleagues.",
        chinese_question: "当他意识到自己在同事面前犯了一个愚蠢的错误时，脸上充满了 __________。",
        answers: [
            { option: "A", answer: "confidence", chinese_answer: "信心", chinese_romanization: "xìnxīn" },
            { option: "B", answer: "chagrin", chinese_answer: "懊恼", chinese_romanization: "àonǎo" },
            { option: "C", answer: "amusement", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
            { option: "D", answer: "curiosity", chinese_answer: "好奇", chinese_romanization: "hàoqí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chagrin' means distress or embarrassment at having failed or been humiliated." +
            "<br><br>" +
            "(A) 'confidence' means the feeling or belief that one can rely on someone or something." +
            "<br><br>" +
            "(C) 'amusement' means the state or experience of finding something funny." +
            "<br><br>" +
            "(D) 'curiosity' means a strong desire to know or learn something.",
        chinese_explanation: "(B) '懊恼' 意味着因失败或受到羞辱而产生的苦恼或尴尬。" +
            "<br><br>" +
            "(A) '信心' 意味着可以依赖某人或某事的感觉或信念。" +
            "<br><br>" +
            "(C) '娱乐' 意味着发现某事有趣的状态或体验。" +
            "<br><br>" +
            "(D) '好奇' 意味着强烈的求知欲。"
    },
    {
        id: 6,
        question: "The king's __________ extended over the entire kingdom, with all subjects pledging their loyalty to him.",
        chinese_question: "国王的 __________ 覆盖了整个王国，所有臣民都向他宣誓效忠。",
        answers: [
            { option: "A", answer: "dominion", chinese_answer: "统治", chinese_romanization: "tǒngzhì" },
            { option: "B", answer: "rebellion", chinese_answer: "叛乱", chinese_romanization: "pànluàn"},
            { option: "C", answer: "liberty", chinese_answer: "自由", chinese_romanization: "zìyóu" },
            { option: "D", answer: "anarchy", chinese_answer: "无政府状态", chinese_romanization: "wú zhèngfǔ zhuàngtài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dominion' means sovereignty or control." +
            "<br><br>" +
            "(B) 'rebellion' means an act of violent or open resistance to an established government or ruler." +
            "<br><br>" +
            "(C) 'liberty' means the state of being free within society from oppressive restrictions." +
            "<br><br>" +
            "(D) 'anarchy' means a state of disorder due to absence or nonrecognition of authority.",
        chinese_explanation: "(A) '统治' 意味着主权或控制。" +
            "<br><br>" +
            "(B) '叛乱' 意味着对既定政府或统治者的暴力或公开抵抗行为。" +
            "<br><br>" +
            "(C) '自由' 意味着在社会中不受压迫性限制的状态。" +
            "<br><br>" +
            "(D) '无政府状态' 意味着由于缺乏或不承认权威而导致的混乱状态。"
    },
    {
        id: 7,
        question: "The celebrity used her __________ to bring attention to important social issues, gaining widespread support.",
        chinese_question: "这位名人利用她的 __________ 吸引了对重要社会问题的关注，获得了广泛的支持。",
        answers: [
            { option: "A", answer: "clout", chinese_answer: "影响力", chinese_romanization: "yǐngxiǎng lì" },
            { option: "B", answer: "insignificance", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "C", answer: "uncertainty", chinese_answer: "不确定性", chinese_romanization: "bù quèdìng xìng" },
            { option: "D", answer: "timidity", chinese_answer: "胆怯", chinese_romanization: "dǎnqiè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'clout' figuratively means influence or power." +
            "<br><br>" +
            "(B) 'insignificance' means the quality of being too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(C) 'uncertainty' means the state of being uncertain." +
            "<br><br>" +
            "(D) 'timidity' means lack of courage or confidence.",
        chinese_explanation: "(A) '影响力' 在此语境下意指影响力或权力。" +
            "<br><br>" +
            "(B) '微不足道' 意味着太小或不重要而不值得考虑的质量。" +
            "<br><br>" +
            "(C) '不确定性' 意味着不确定的状态。" +
            "<br><br>" +
            "(D) '胆怯' 意味着缺乏勇气或信心。"
    },
    {
        id: 8,
        question: "The student’s perfect score on the exam was an __________, as she had consistently struggled with the subject throughout the semester.",
        chinese_question: "学生在考试中的满分是一个 __________，因为她整个学期都在这个科目上挣扎。",
        answers: [
            { option: "A", answer: "anomaly", chinese_answer: "异常现象", chinese_romanization: "yìcháng xiànxiàng" },
            { option: "B", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" },
            { option: "C", answer: "uniformity", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" },
            { option: "D", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'anomaly' figuratively means something that deviates from what is standard, normal, or expected." +
            "<br><br>" +
            "(B) 'certainty' means firm conviction that something is the case." +
            "<br><br>" +
            "(C) 'uniformity' means the quality or state of being uniform." +
            "<br><br>" +
            "(D) 'routine' means a sequence of actions regularly followed; a fixed program.",
        chinese_explanation: "(A) '异常现象' 在此语境下意指偏离标准、正常或预期的事物。" +
            "<br><br>" +
            "(B) '确定性' 意味着坚信某事是事实。" +
            "<br><br>" +
            "(C) '一致性' 意味着一致的质量或状态。" +
            "<br><br>" +
            "(D) '常规' 意味着经常遵循的动作序列；固定程序。"
    },
    {
        id: 9,
        question: "The health __________ emphasized the importance of regular exercise and a balanced diet to maintain overall well-being.",
        chinese_question: "这位健康 __________ 强调了定期锻炼和均衡饮食对维持整体健康的重要性。",
        answers: [
            { option: "A", answer: "advocate", chinese_answer: "倡导者", chinese_romanization: "chàngdǎo zhě" },
            { option: "B", answer: "critic", chinese_answer: "批评者", chinese_romanization: "pīpíng zhě" },
            { option: "C", answer: "bystander", chinese_answer: "旁观者", chinese_romanization: "pángguān zhě" },
            { option: "D", answer: "opponent", chinese_answer: "反对者", chinese_romanization: "fǎnduì zhě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'advocate' figuratively means a person who publicly supports or recommends a particular cause or policy." +
            "<br><br>" +
            "(B) 'critic' means a person who expresses an unfavorable opinion of something." +
            "<br><br>" +
            "(C) 'bystander' means a person who is present at an event or incident but does not take part." +
            "<br><br>" +
            "(D) 'opponent' means someone who competes against or fights another in a contest, game, or argument.",
        chinese_explanation: "(A) '倡导者' 在此语境下意指公开支持或推荐特定事业或政策的人。" +
            "<br><br>" +
            "(B) '批评者' 意味着对某事物表达不利意见的人。" +
            "<br><br>" +
            "(C) '旁观者' 意味着在事件或事故中在场但不参与的人。" +
            "<br><br>" +
            "(D) '反对者' 意味着在比赛、游戏或争论中与另一方竞争或对抗的人。"
    },
    {
        id: 10,
    question: "Sharks are considered top __________ in the ocean, with few natural enemies.",
    chinese_question: "鲨鱼被认为是海洋中的顶级 __________ ，几乎没有天敌。",
    answers: [
        { option: "A", answer: "predators", chinese_answer: "捕食者", chinese_romanization: "bǔshí zhě" },
        { option: "B", answer: "herbivores", chinese_answer: "食草动物", chinese_romanization: "shícǎo dòngwù" },
        { option: "C", answer: "prey", chinese_answer: "猎物", chinese_romanization: "lièwù" },
        { option: "D", answer: "omnivores", chinese_answer: "杂食动物", chinese_romanization: "záshí dòngwù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'predators' means animals that naturally prey on others." +
        "<br><br>" +
        "(B) 'herbivores' means animals that feed on plants." +
        "<br><br>" +
        "(C) 'prey' means animals that are hunted and killed by others for food." +
        "<br><br>" +
        "(D) 'omnivores' means animals that eat both plants and animals.",
    chinese_explanation: "(A) '捕食者' 意味着自然捕食其他动物的动物。" +
        "<br><br>" +
        "(B) '食草动物' 意味着以植物为食的动物。" +
        "<br><br>" +
        "(C) '猎物' 意味着被其他动物捕猎和杀死的动物。" +
        "<br><br>" +
        "(D) '杂食动物' 意味着既吃植物也吃动物的动物。"
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
