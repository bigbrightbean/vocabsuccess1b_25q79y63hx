// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Fish use their fins and tails for __________, allowing them to navigate through water with ease.",
        chinese_question: "鱼类利用它们的鳍和尾进行 __________，使它们能够轻松地在水中导航。",
        answers: [
            { option: "A", answer: "locomotion", chinese_answer: "运动", chinese_romanization: "yùndòng" },
            { option: "B", answer: "filtration", chinese_answer: "过滤", chinese_romanization: "guòlǜ" },
            { option: "C", answer: "hydration", chinese_answer: "水合作用", chinese_romanization: "shuǐ hé zuòyòng" },
            { option: "D", answer: "insulation", chinese_answer: "隔离", chinese_romanization: "gélí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'locomotion' means the ability to move from one place to another." +
            "<br><br>" +
            "(B) 'filtration' means the action or process of filtering something." +
            "<br><br>" +
            "(C) 'hydration' means the process of causing something to absorb water." +
            "<br><br>" +
            "(D) 'insulation' means the action of insulating something or someone.",
        chinese_explanation: "(A) '运动' 意味着从一个地方移动到另一个地方的能力。" +
            "<br><br>" +
            "(B) '过滤' 意味着过滤某物的动作或过程。" +
            "<br><br>" +
            "(C) '水合作用' 意味着使某物吸收水分的过程。" +
            "<br><br>" +
            "(D) '隔离' 意味着隔离某物或某人的行为。"
    },
    {
        id: 2,
        question: "The __________ of his speech impressed everyone, as he was able to convey his message clearly and concisely.",
        chinese_question: "他的演讲 __________ 令人印象深刻，因为他能够清晰而简洁地传达信息。",
        answers: [
            { option: "A", answer: "length", chinese_answer: "长度", chinese_romanization: "chángdù" },
            { option: "B", answer: "verbosity", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "C", answer: "brevity", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
            { option: "D", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'brevity' means concise and exact use of words in writing or speech." +
            "<br><br>" +
            "(A) 'length' means the measurement or extent of something from end to end." +
            "<br><br>" +
            "(B) 'verbosity' means the quality of using more words than needed; wordiness." +
            "<br><br>" +
            "(D) 'confusion' means lack of understanding; uncertainty.",
        chinese_explanation: "(C) '简洁'一词意味着在写作或讲话中使用简明准确的词语。" +
            "<br><br>" +
            "(A) '长度' 意味着从一端到另一端的测量或范围。" +
            "<br><br>" +
            "(B) '冗长' 意味着使用比需要更多的词；多话。" +
            "<br><br>" +
            "(D) '混乱' 意味着缺乏理解；不确定性。"
    },
    {
        id: 3,
    question: "She earned the __________ of her peers through hard work and dedication.",
    chinese_question: "她通过努力工作和奉献赢得了同龄人的 __________。",
    answers: [
        { option: "A", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" },
        { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'respect' means to admire someone or something deeply, as a result of their abilities, qualities, or achievements." +
        "<br><br>" +
        "(A) 'disregard' means to pay no attention to; ignore." +
        "<br><br>" +
        "(B) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(C) '尊重' 意味着因某人的能力、品质或成就而深深钦佩他们。" +
        "<br><br>" +
        "(A) '无视' 意味着不注意；忽视。" +
        "<br><br>" +
        "(B) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关注或同情。"
    },
    {
        id: 4,
    question: "He reminisced about the __________, feeling nostalgic about his childhood days.",
    chinese_question: "他回忆起 __________，对童年时光感到怀旧。",
    answers: [
        { option: "A", answer: "past", chinese_answer: "过去", chinese_romanization: "guòqù" },
        { option: "B", answer: "future", chinese_answer: "未来", chinese_romanization: "wèilái" },
        { option: "C", answer: "present", chinese_answer: "现在", chinese_romanization: "xiànzài" },
        { option: "D", answer: "upcoming", chinese_answer: "即将到来", chinese_romanization: "jíjiāng dàolái" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'past' means having happened or existed before now." +
        "<br><br>" +
        "(B) 'future' means the time or a period of time following the moment of speaking or writing." +
        "<br><br>" +
        "(C) 'present' means the period of time now occurring." +
        "<br><br>" +
        "(D) 'upcoming' means about to happen.",
    chinese_explanation: "(A) '过去' 意味着在现在之前发生或存在。" +
        "<br><br>" +
        "(B) '未来' 意味着在说话或写作时之后的时间或一段时间。" +
        "<br><br>" +
        "(C) '现在' 意味着现在发生的时间段。" +
        "<br><br>" +
        "(D) '即将到来' 意味着即将发生。"
    },
    {
        id: 5,
    question: "The athlete's performance had a positive __________ on the team's morale, inspiring them to play harder.",
    chinese_question: "运动员的表现对团队的士气产生了积极的 __________ ，激励他们更加努力地比赛。",
    answers: [
        { option: "A", answer: "impact", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
        { option: "B", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
        { option: "C", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
        { option: "D", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'impact' means the strong effect or influence that something has on a situation or person." +
        "<br><br>" +
        "(B) 'delay' means a period of time by which something is late or postponed." +
        "<br><br>" +
        "(C) 'routine' means a sequence of actions regularly followed; a fixed program." +
        "<br><br>" +
        "(D) 'obstacle' means a thing that blocks one's way or prevents or hinders progress.",
    chinese_explanation: "(A) '影响' 意味着某物对情况或人的强烈效果或影响。" +
        "<br><br>" +
        "(B) '延迟' 意味着某事迟到或推迟的一段时间。" +
        "<br><br>" +
        "(C) '常规' 意味着定期遵循的行动顺序；固定程序。" +
        "<br><br>" +
        "(D) '障碍' 意味着挡住某人去路或阻止或妨碍进展的事物。"
    },
    {
        id: 6,
    question: "To survive in the wild, smaller animals must be wary of __________ lurking nearby.",
    chinese_question: "为了在野外生存，小动物必须警惕潜伏在附近的 __________ 。",
    answers: [
        { option: "A", answer: "companions", chinese_answer: "同伴", chinese_romanization: "tóngbàn" },
        { option: "B", answer: "protectors", chinese_answer: "保护者", chinese_romanization: "bǎohù zhě" },
        { option: "C", answer: "nurturers", chinese_answer: "养育者", chinese_romanization: "yǎngyù zhě" },
        { option: "D", answer: "predators", chinese_answer: "捕食者", chinese_romanization: "bǔshí zhě" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'predators' means animals that naturally prey on others." +
        "<br><br>" +
        "(A) 'companions' means people or animals with whom one spends a lot of time or with whom one travels." +
        "<br><br>" +
        "(B) 'protectors' means people or things that protect someone or something." +
        "<br><br>" +
        "(C) 'nurturers' means people who care for and encourage the growth or development of someone or something.",
    chinese_explanation: "(D) '捕食者' 意味着自然捕食其他动物的动物。" +
        "<br><br>" +
        "(A) '同伴' 意味着与某人共度大量时间或与其一起旅行的人或动物。" +
        "<br><br>" +
        "(B) '保护者' 意味着保护某人或某物的人或事物。" +
        "<br><br>" +
        "(C) '养育者' 意味着照顾和鼓励某人或某物的成长或发展的人。"
    },
    {
        id: 7,
    question: "The classroom turned into __________ when the teacher left the room.",
    chinese_question: "当老师离开教室时，教室里变得一片 __________。",
    answers: [
        { option: "A", answer: "mayhem", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "B", answer: "discipline", chinese_answer: "纪律", chinese_romanization: "jìlǜ" },
        { option: "C", answer: "silence", chinese_answer: "寂静", chinese_romanization: "jìjìng" },
        { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'mayhem' means a state of chaos and disorder." +
        "<br><br>" +
        "(B) 'discipline' means controlled behavior resulting from training." +
        "<br><br>" +
        "(C) 'silence' means complete absence of sound." +
        "<br><br>" +
        "(D) 'calm' means a state of tranquility.",
    chinese_explanation: "(A) '混乱' 意味着一种混乱和无序的状态。" +
        "<br><br>" +
        "(B) '纪律' 意味着通过训练获得的受控行为。" +
        "<br><br>" +
        "(C) '寂静' 意味着完全没有声音。" +
        "<br><br>" +
        "(D) '平静' 意味着一种宁静的状态。"
    },
    {
        id: 8,
        question: "His mother looked at him with __________ when she found out he had skipped school.",
        chinese_question: "当母亲发现他逃学时，带着 __________ 看着他。",
        answers: [
            { option: "A", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "B", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" },
            { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" },
            { option: "D", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reproach' means expressing disapproval or disappointment." +
            "<br><br>" +
            "(A) 'admiration' means respect and warm approval." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'joy' means a feeling of great pleasure and happiness.",
        chinese_explanation: "(B) '责备'一词意味着表示不赞成或失望。" +
            "<br><br>" +
            "(A) '钦佩' 意味着尊重和热情赞同。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '喜悦' 意味着极大的愉快和幸福的感觉。"
    },
    {
        id: 9,
    question: "She followed her morning __________, which included exercise, breakfast, and reading the news.",
    chinese_question: "她遵循早晨的 __________ ，包括锻炼、早餐和阅读新闻。",
    answers: [
        { option: "A", answer: "routine", chinese_answer: "例行程序", chinese_romanization: "lìxíng chéngxù" },
        { option: "B", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "C", answer: "improvisation", chinese_answer: "即兴", chinese_romanization: "jíxìng" },
        { option: "D", answer: "disorder", chinese_answer: "无序", chinese_romanization: "wúxù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'routine' means a sequence of actions regularly followed; a fixed program." +
        "<br><br>" +
        "(B) 'chaos' means complete disorder and confusion." +
        "<br><br>" +
        "(C) 'improvisation' means the action of creating or performing something spontaneously or without preparation." +
        "<br><br>" +
        "(D) 'disorder' means a state of confusion.",
    chinese_explanation: "(A) '例行程序' 意味着定期遵循的一系列行动；固定程序。" +
        "<br><br>" +
        "(B) '混乱' 意味着完全的混乱和困惑。" +
        "<br><br>" +
        "(C) '即兴' 意味着自发地或未经准备地创作或表演。" +
        "<br><br>" +
        "(D) '无序' 意味着一种困惑的状态。"
    },
    {
        id: 10,
    question: "The city held a grand __________ to celebrate the national holiday, complete with floats and marching bands.",
    chinese_question: "城市举行了一场盛大的 __________，庆祝国庆日，游行队伍和乐队齐聚一堂。",
    answers: [
        { option: "A", answer: "riot", chinese_answer: "暴乱", chinese_romanization: "bàoluàn" },
        { option: "B", answer: "meeting", chinese_answer: "会议", chinese_romanization: "huìyì" },
        { option: "C", answer: "parade", chinese_answer: "游行", chinese_romanization: "yóuxíng" },
        { option: "D", answer: "concert", chinese_answer: "音乐会", chinese_romanization: "yīnyuè huì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'parade' means a public procession, especially one celebrating a special day or event." +
        "<br><br>" +
        "(A) 'riot' means a violent disturbance of the peace by a crowd." +
        "<br><br>" +
        "(B) 'meeting' means an assembly of people for a particular purpose." +
        "<br><br>" +
        "(D) 'concert' means a musical performance given in public.",
    chinese_explanation: "(C) '游行' 意味着庆祝特殊日子或活动的公众游行。" +
        "<br><br>" +
        "(A) '暴乱' 意味着一群人的暴力骚乱。" +
        "<br><br>" +
        "(B) '会议' 意味着为特定目的聚集在一起的一群人。" +
        "<br><br>" +
        "(D) '音乐会' 意味着在公众场合进行的音乐表演。"
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
