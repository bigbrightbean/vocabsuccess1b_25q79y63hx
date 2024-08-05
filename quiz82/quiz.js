// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new education model became a __________ for schools nationwide, influencing teaching methods everywhere.",
        chinese_question: "新的教育模式成为全国学校的 __________，影响了各地的教学方法。",
        answers: [
            { option: "A", answer: "paradigm", chinese_answer: "范例", chinese_romanization: "fànlì" },
            { option: "B", answer: "problem", chinese_answer: "问题", chinese_romanization: "wèntí" },
            { option: "C", answer: "anecdote", chinese_answer: "趣闻", chinese_romanization: "qùwén" },
            { option: "D", answer: "mystery", chinese_answer: "谜团", chinese_romanization: "mítuán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'paradigm' means a typical example or pattern of something; a model." +
            "<br><br>" +
            "(B) 'problem' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome." +
            "<br><br>" +
            "(C) 'anecdote' means a short amusing or interesting story about a real incident or person." +
            "<br><br>" +
            "(D) 'mystery' means something that is difficult or impossible to understand or explain.",
        chinese_explanation: "(A) '范例' 意味着某物的典型例子或模式；模型。" +
            "<br><br>" +
            "(B) '问题' 意味着被认为是不受欢迎或有害并需要处理和克服的事物或情况。" +
            "<br><br>" +
            "(C) '趣闻' 意味着关于真实事件或人物的简短有趣的故事。" +
            "<br><br>" +
            "(D) '谜团' 意味着难以或不可能理解或解释的事情。"
    },
    {
        id: 2,
    question: "The surprise celebrity appearance at the concert caused __________ among the fans.",
    chinese_question: "演唱会上的惊喜明星出现引起了粉丝们的 __________。",
    answers: [
        { option: "A", answer: "serenity", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "B", answer: "pandemonium", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "C", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" },
        { option: "D", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'pandemonium' means wild and noisy disorder or confusion; uproar." +
        "<br><br>" +
        "(A) 'serenity' means the state of being calm and peaceful." +
        "<br><br>" +
        "(C) 'silence' means complete absence of sound." +
        "<br><br>" +
        "(D) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method.",
    chinese_explanation: "(B) '混乱' 意味着狂野和嘈杂的混乱或骚动。" +
        "<br><br>" +
        "(A) '平静' 意味着平静和安宁。" +
        "<br><br>" +
        "(C) '安静' 意味着完全没有声音。" +
        "<br><br>" +
        "(D) '秩序' 意味着按照特定顺序、模式或方法排列人或物。"
    },
    {
        id: 3,
        question: "Her __________ towards the project was evident; she neither contributed nor seemed to care about the outcome.",
        chinese_question: "她对项目的 __________ 显而易见；她既没有贡献也不关心结果。",
        answers: [
            { option: "A", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "concern", chinese_answer: "关心", chinese_romanization: "guānxīn" },
            { option: "D", answer: "passion", chinese_answer: "激情", chinese_romanization: "jīqíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(A) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(C) 'concern' means a matter of interest or importance to someone." +
            "<br><br>" +
            "(D) 'passion' means strong and barely controllable emotion.",
        chinese_explanation: "(B) '冷漠'一词意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(A) '热情' 意味着强烈和渴望的享受、兴趣或赞同。" +
            "<br><br>" +
            "(C) '关心' 意味着某人感兴趣或重要的事情。" +
            "<br><br>" +
            "(D) '激情' 意味着强烈和几乎无法控制的情感。"
    },
    {
        id: 4,
        question: "The mountain climbers finally reached the __________ of Mount Everest, celebrating their achievement at the highest point on Earth.",
        chinese_question: "登山者终于到达了珠穆朗玛峰的 __________，在地球最高点庆祝他们的成就。",
        answers: [
            { option: "A", answer: "base", chinese_answer: "底部", chinese_romanization: "dǐbù" },
            { option: "B", answer: "valley", chinese_answer: "山谷", chinese_romanization: "shāngǔ" },
            { option: "C", answer: "plateau", chinese_answer: "高原", chinese_romanization: "gāoyuán" },
            { option: "D", answer: "apex", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'apex' means the top or highest part of something, especially one forming a point." +
            "<br><br>" +
            "(A) 'base' means the lowest part or edge of something." +
            "<br><br>" +
            "(B) 'valley' means a low area of land between hills or mountains, typically with a river or stream flowing through it." +
            "<br><br>" +
            "(C) 'plateau' means an area of relatively level high ground.",
        chinese_explanation: "(D) '顶点' 意味着某物的顶部或最高部分，尤其是形成一个点的部分。" +
            "<br><br>" +
            "(A) '底部' 意味着某物的最低部分或边缘。" +
            "<br><br>" +
            "(B) '山谷' 意味着两山或山之间的低地，通常有河流或溪流流过。" +
            "<br><br>" +
            "(C) '高原' 意味着相对平坦的高地。"
    },
    {
        id: 5,
        question: "The __________ of winter brought cold winds and snowy days, signaling the end of autumn.",
        chinese_question: "冬天的 __________ 带来了寒风和雪天，标志着秋天的结束。",
        answers: [
            { option: "A", answer: "advent", chinese_answer: "到来", chinese_romanization: "dàolái" },
            { option: "B", answer: "exit", chinese_answer: "退出", chinese_romanization: "tuìchū" },
            { option: "C", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "D", answer: "regression", chinese_answer: "倒退", chinese_romanization: "dàotuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'advent' figuratively means the arrival of a notable person, thing, or event." +
            "<br><br>" +
            "(B) 'exit' means the act of going out or leaving a place." +
            "<br><br>" +
            "(C) 'retreat' means the act of moving back or withdrawing." +
            "<br><br>" +
            "(D) 'regression' means a return to a former or less developed state.",
        chinese_explanation: "(A) '到来' 在此语境下意指一个显著的人、事或事件的到来。" +
            "<br><br>" +
            "(B) '退出' 意味着离开某地的行为。" +
            "<br><br>" +
            "(C) '撤退' 意味着后退或撤退的行为。" +
            "<br><br>" +
            "(D) '倒退' 意味着回到从前或较不发达的状态。"
    },
    {
        id: 6,
        question: "Her encounter with the famous author at the coffee shop was pure __________; she had just been reading his book.",
        chinese_question: "她在咖啡店偶遇那位著名作家纯属 __________；她刚刚在读他的书。",
        answers: [
            { option: "A", answer: "serendipity", chinese_answer: "机缘巧合", chinese_romanization: "jīyuán qiǎohé" },
            { option: "B", answer: "misfortune", chinese_answer: "不幸", chinese_romanization: "bùxìng" },
            { option: "C", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "D", answer: "sadness", chinese_answer: "悲伤", chinese_romanization: "bēishāng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'serendipity' means the occurrence and development of events by chance in a happy or beneficial way." +
            "<br><br>" +
            "(B) 'misfortune' means bad luck." +
            "<br><br>" +
            "(C) 'boredom' means the state of feeling bored." +
            "<br><br>" +
            "(D) 'sadness' means the condition or quality of being sad.",
        chinese_explanation: "(A) '机缘巧合'一词意味着事情偶然发生并以幸福或有益的方式发展。" +
            "<br><br>" +
            "(B) '不幸' 意味着坏运气。" +
            "<br><br>" +
            "(C) '无聊' 意味着感到厌倦的状态。" +
            "<br><br>" +
            "(D) '悲伤' 意味着悲伤的状态或质量。"
    },
    {
        id: 7,
        question: "Despite pressure to conform, she remained a __________, often introducing innovative ideas to her team.",
        chinese_question: "尽管有压力要求她遵守规范，她仍然是个 __________，经常向团队提出创新的想法。",
        answers: [
            { option: "A", answer: "maverick", chinese_answer: "特立独行者", chinese_romanization: "tèlìdúxíngzhě" },
            { option: "B", answer: "conformist", chinese_answer: "循规蹈矩者", chinese_romanization: "xúnguīdǎojǔzhě" },
            { option: "C", answer: "follower", chinese_answer: "追随者", chinese_romanization: "zhuīsuízhě" },
            { option: "D", answer: "traditionalist", chinese_answer: "传统主义者", chinese_romanization: "chuántǒng zhǔyì zhě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'maverick' means an independent-minded person who does not conform to accepted norms." +
            "<br><br>" +
            "(B) 'conformist' means a person who conforms to accepted behavior or established practices." +
            "<br><br>" +
            "(C) 'follower' means a person who supports and admires a particular person or set of ideas." +
            "<br><br>" +
            "(D) 'traditionalist' means a person who adheres to tradition, especially in cultural or religious practice.",
        chinese_explanation: "(A) '特立独行者' 意味着一个独立思考、不遵守既定规范的人。" +
            "<br><br>" +
            "(B) '循规蹈矩者' 意味着一个遵循接受行为或既定做法的人。" +
            "<br><br>" +
            "(C) '追随者' 意味着支持和钦佩特定人或思想体系的人。" +
            "<br><br>" +
            "(D) '传统主义者' 意味着在文化或宗教实践中坚持传统的人。"
    },
    {
        id: 8,
        question: "He was known as a __________ for cheating his friends out of their money in card games.",
        chinese_question: "他因在牌局中欺骗朋友的钱而被称为 __________。",
        answers: [
            { option: "A", answer: "knave", chinese_answer: "无赖", chinese_romanization: "wúlài" },
            { option: "B", answer: "hero", chinese_answer: "英雄", chinese_romanization: "yīngxióng" },
            { option: "C", answer: "saint", chinese_answer: "圣人", chinese_romanization: "shèngrén" },
            { option: "D", answer: "scholar", chinese_answer: "学者", chinese_romanization: "xuézhě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'knave' means a dishonest or unscrupulous man." +
            "<br><br>" +
            "(B) 'hero' means a person who is admired for their courage, outstanding achievements, or noble qualities." +
            "<br><br>" +
            "(C) 'saint' means a person acknowledged as holy or virtuous." +
            "<br><br>" +
            "(D) 'scholar' means a specialist in a particular branch of study, especially the humanities.",
        chinese_explanation: "(A) '无赖' 意味着一个不诚实或不道德的男人。" +
            "<br><br>" +
            "(B) '英雄' 意味着因其勇气、杰出成就或高尚品质而受到钦佩的人。" +
            "<br><br>" +
            "(C) '圣人' 意味着被承认为神圣或有道德的人。" +
            "<br><br>" +
            "(D) '学者' 意味着某一特定学科领域的专家，尤其是人文学科。"
    },
    {
        id: 9,
        question: "The professor's __________ was clear when he frequently praised students who agreed with his viewpoints while ignoring those who challenged him.",
        chinese_question: "当教授经常赞扬那些同意他观点的学生，而忽视那些挑战他的学生时，他的 __________ 显而易见。",
        answers: [
            { option: "A", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "B", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
            { option: "C", answer: "objectivity", chinese_answer: "客观性", chinese_romanization: "kèguān xìng" },
            { option: "D", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bias' figuratively means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
            "<br><br>" +
            "(B) 'integrity' means the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(C) 'objectivity' means the quality of being objective." +
            "<br><br>" +
            "(D) 'diligence' means careful and persistent work or effort.",
        chinese_explanation: "(A) '偏见' 在此语境下意指对一个人或一个群体的倾向或偏见，尤其是被认为不公平的方式。" +
            "<br><br>" +
            "(B) '正直' 意味着诚实和具有强烈道德原则的品质。" +
            "<br><br>" +
            "(C) '客观性' 意味着客观的质量。" +
            "<br><br>" +
            "(D) '勤奋' 意味着仔细和持续的工作或努力。"
    },
    {
        id: 10,
    question: "The sudden drop in temperature was a __________ that a storm was coming.",
    chinese_question: "温度的突然下降是暴风雨即将来临的 __________。",
    answers: [
        { option: "A", answer: "sign", chinese_answer: "迹象", chinese_romanization: "jīxiàng" },
        { option: "B", answer: "secret", chinese_answer: "秘密", chinese_romanization: "mìmì" },
        { option: "C", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "D", answer: "mystery", chinese_answer: "谜", chinese_romanization: "mí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'sign' means an object, quality, or event whose presence or occurrence indicates the probable presence or occurrence of something else." +
        "<br><br>" +
        "(B) 'secret' means something that is kept or meant to be kept unknown or unseen by others." +
        "<br><br>" +
        "(C) 'error' means a mistake." +
        "<br><br>" +
        "(D) 'mystery' means something that is difficult or impossible to understand or explain.",
    chinese_explanation: "(A) '迹象' 意味着某物、质量或事件的存在或发生表明其他事物的可能存在或发生。" +
        "<br><br>" +
        "(B) '秘密' 意味着被隐瞒或意图隐瞒他人的事情。" +
        "<br><br>" +
        "(C) '错误' 意味着一个错误。" +
        "<br><br>" +
        "(D) '谜' 意味着难以理解或解释的事情。"
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
