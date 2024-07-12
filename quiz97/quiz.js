// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The fish tank needs to be __________ regularly to keep the water fresh for the fish.",
    chinese_question: "鱼缸需要定期 __________ ，以保持水的清新。",
    answers: [
        { option: "A", answer: "aerated", chinese_answer: "充气", chinese_romanization: "chōngqì" },
        { option: "B", answer: "filtered", chinese_answer: "过滤", chinese_romanization: "guòlǜ" },
        { option: "C", answer: "heated", chinese_answer: "加热", chinese_romanization: "jiārè" },
        { option: "D", answer: "covered", chinese_answer: "覆盖", chinese_romanization: "fùgài" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'aerated' means to introduce air into a material." +
        "<br><br>" + 
        "(B) 'filtered' means to remove impurities or solid particles from a liquid or gas." +
        "<br><br>" + 
        "(C) 'heated' means to make something warm or hot." +
        "<br><br>" + 
        "(D) 'covered' means to place something over or on top of something else to protect or conceal it.",
    chinese_explanation: "(A) '充气' 意味着将空气引入一种材料中。" +
        "<br><br>" + 
        "(B) '过滤' 意味着从液体或气体中去除杂质或固体颗粒。" +
        "<br><br>" + 
        "(C) '加热' 意味着使某物变暖或变热。" +
        "<br><br>" + 
        "(D) '覆盖' 意味着将某物放在另一物上或之上以保护或掩盖它。"
    },
    {
        id: 2,
    question: "The students __________ the lack of sufficient resources in the library.",
    chinese_question: "学生们 __________ 图书馆资源不足的问题。",
    answers: [
        { option: "A", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "bemoaned", chinese_answer: "哀叹", chinese_romanization: "āitàn" },
        { option: "D", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'bemoaned' means to express discontent or sorrow over something." +
        "<br><br>" + 
        "(A) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" + 
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'praised' means to express warm approval or admiration.",
    chinese_explanation: "(C) '哀叹' 意味着对某事表示不满或悲伤。" +
        "<br><br>" + 
        "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
        "<br><br>" + 
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '赞美' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 3,
    question: "The harsh conditions of the prison camp __________ the prisoners, making it difficult for them to perform even basic tasks.",
    chinese_question: "监狱营地的恶劣条件 __________ 了囚犯，使他们难以完成基本任务。",
    answers: [
        { option: "A", answer: "invigorate", chinese_answer: "激励", chinese_romanization: "jīlì" },
        { option: "B", answer: "debilitate", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
        { option: "C", answer: "strengthen", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "D", answer: "energize", chinese_answer: "激发", chinese_romanization: "jīfā" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'debilitate' means to make someone weak and infirm." +
        "<br><br>" + 
        "(A) 'invigorate' means to give strength or energy to." +
        "<br><br>" + 
        "(C) 'strengthen' means to make or become stronger." +
        "<br><br>" + 
        "(D) 'energize' means to give energy or vitality to.",
    chinese_explanation: "(B) '削弱' 意味着使某人虚弱和衰弱。" +
        "<br><br>" + 
        "(A) '激励' 意味着给予力量或能量。" +
        "<br><br>" + 
        "(C) '增强' 意味着使变得更强。" +
        "<br><br>" + 
        "(D) '激发' 意味着给予能量或活力。"
    },
    {
        id: 4,
        question: "She would __________ over her favorite celebrity whenever she got the chance.",
        chinese_question: "每当有机会，她都会 __________ 她最喜欢的名人。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" },
            { option: "C", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "D", answer: "fawn", chinese_answer: "奉承", chinese_romanization: "fèngchéng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fawn' means to give a servile display of exaggerated flattery or affection, typically to gain favor." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'insult' means to speak to or treat with disrespect or scornful abuse." +
            "<br><br>" +
            "(C) 'admire' means to regard with respect or warm approval.",
        chinese_explanation: "(D) '奉承' 意味着表现出卑微的、夸张的恭维或爱慕，通常是为了获得青睐。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '侮辱' 意味着以轻蔑或蔑视的方式戏弄或侮辱。" +
            "<br><br>" +
            "(C) '钦佩' 意味着以尊重或热烈的赞同来看待。"
    },
    {
        id: 5,
    question: "Her hair would often __________ in the humid weather, making it difficult to manage.",
    chinese_question: "在潮湿的天气里，她的头发常常 __________，难以打理。",
    answers: [
        { option: "A", answer: "straighten", chinese_answer: "拉直", chinese_romanization: "lāzhí" },
        { option: "B", answer: "frizzle", chinese_answer: "卷曲", chinese_romanization: "juǎnqū" },
        { option: "C", answer: "smooth", chinese_answer: "顺滑", chinese_romanization: "shùnhuá" },
        { option: "D", answer: "flatten", chinese_answer: "压平", chinese_romanization: "yāpíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'frizzle' means to form tight curls or become frizzy, often due to humidity." +
        "<br><br>" +
        "(A) 'straighten' means to make or become straight." +
        "<br><br>" +
        "(C) 'smooth' means having an even and regular surface or consistency; free from perceptible projections, lumps, or indentations." +
        "<br><br>" +
        "(D) 'flatten' means to make or become flat or flatter.",
    chinese_explanation: "(B) '卷曲' 意味着形成紧密的卷发或变得毛躁，通常由于湿气。" +
        "<br><br>" +
        "(A) '拉直' 意味着使变直。" +
        "<br><br>" +
        "(C) '顺滑' 意味着表面或质地均匀平整；无明显的突起、凸起或凹陷。" +
        "<br><br>" +
        "(D) '压平' 意味着使变平或变平坦。"
    },
    {
        id: 6,
    question: "The witness was found to __________ his testimony, leading to a mistrial.",
    chinese_question: "证人被发现 __________ 了他的证词，导致审判无效。",
    answers: [
        { option: "A", answer: "fabricate", chinese_answer: "捏造", chinese_romanization: "niēzào" },
        { option: "B", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "repeat", chinese_answer: "重复", chinese_romanization: "chóngfù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fabricate' means to invent or concoct something, typically with deceitful intent." +
        "<br><br>" + 
        "(B) 'validate' means to check or prove the validity or accuracy of something." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'repeat' means to say again something one has already said.",
    chinese_explanation: "(A) '捏造' 意味着发明或编造某物，通常是出于欺骗目的。" +
        "<br><br>" + 
        "(B) '验证' 意味着检查或证明某事的有效性或准确性。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '重复' 意味着再次说已经说过的话。"
    },
    {
        id: 7,
    question: "To locate the lost hiker, the rescue team needed to __________ the signals from his GPS device.",
    chinese_question: "为了找到迷路的徒步者，救援队需要 __________ 他GPS设备的信号。",
    answers: [
        { option: "A", answer: "triangulate", chinese_answer: "三角定位", chinese_romanization: "sānjiǎo dìngwèi" },
        { option: "B", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
        { option: "D", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'triangulate' means to determine a location by using the positions of three known points." +
        "<br><br>" +
        "(B) 'disregard' means to pay no attention to; ignore." +
        "<br><br>" +
        "(C) 'confuse' means to make (someone) bewildered or perplexed." +
        "<br><br>" +
        "(D) 'guess' means to estimate or suppose (something) without sufficient information.",
    chinese_explanation: "(A) '三角定位' 意味着使用三个已知点的位置来确定一个位置。" +
        "<br><br>" +
        "(B) '忽视' 意味着不注意；忽略。" +
        "<br><br>" +
        "(C) '使困惑' 意味着使（某人）困惑或迷惑。" +
        "<br><br>" +
        "(D) '猜测' 意味着在没有足够信息的情况下估计或假设（某事）。"
    },
    {
        id: 8,
        question: "The instructions were deliberately written to __________ the true cost of the service, making it seem more affordable.",
        chinese_question: "这些说明被故意写成 __________ 服务的真实成本，使其看起来更实惠。",
        answers: [
            { option: "A", answer: "highlight", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
            { option: "B", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
            { option: "C", answer: "expose", chinese_answer: "揭露", chinese_romanization: "jiēlù" },
            { option: "D", answer: "obfuscate", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'obfuscate' figuratively means to make something unclear or confusing." +
            "<br><br>" +
            "(A) 'highlight' means to emphasize." +
            "<br><br>" +
            "(B) 'reveal' means to show." +
            "<br><br>" +
            "(C) 'expose' means to reveal.",
        chinese_explanation: "(D) '混淆' 一词在比喻上意味着使某事变得不清楚或混乱。" +
            "<br><br>" +
            "(A) '强调' 意味着强调。" +
            "<br><br>" +
            "(B) '揭示' 意味着展示。" +
            "<br><br>" +
            "(C) '揭露' 意味着揭示。"
    },
    {
        id: 9,
        question: "Her attempts to __________ herself in the eyes of her peers often came off as boastful and insincere.",
        chinese_question: "她试图在同龄人眼中 __________ 自己的努力常常显得自夸和虚伪。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "depreciate", chinese_answer: "贬值", chinese_romanization: "biǎnzhí" },
            { option: "C", answer: "humble", chinese_answer: "谦卑", chinese_romanization: "qiānbēi" },
            { option: "D", answer: "aggrandize", chinese_answer: "夸大", chinese_romanization: "kuādà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'aggrandize' figuratively means to increase one's reputation or status." +
            "<br><br>" +
            "(A) 'diminish' means to make smaller or less." +
            "<br><br>" +
            "(B) 'depreciate' means to reduce in value." +
            "<br><br>" +
            "(C) 'humble' means to lower in dignity or importance.",
        chinese_explanation: "(D) '夸大' 一词在比喻上意味着增加某人的声誉或地位。" +
            "<br><br>" +
            "(A) '减少' 意味着使变得更小或更少。" +
            "<br><br>" +
            "(B) '贬值' 意味着贬低价值。" +
            "<br><br>" +
            "(C) '谦卑' 意味着降低尊严或重要性。"
    },
    {
        id: 10,
        question: "She brought flowers to __________ her friend after their recent argument.",
        chinese_question: "她带来了花来 __________ 她的朋友在他们最近的争吵之后。",
        answers: [
            { option: "A", answer: "aggravate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "irritate", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "D", answer: "placate", chinese_answer: "安抚", chinese_romanization: "ānfǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'placate' means to make someone less angry or hostile." +
            "<br><br>" +
            "(A) 'aggravate' means to make a problem, injury, or offense worse or more serious." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(C) 'irritate' means to make someone annoyed or a little angry.",
        chinese_explanation: "(D) '安抚' 意味着使某人不再生气或敌对。" +
            "<br><br>" +
            "(A) '加剧' 意味着使问题、伤害或冒犯变得更糟或更严重。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(C) '激怒' 意味着使某人生气或有点生气。"
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
