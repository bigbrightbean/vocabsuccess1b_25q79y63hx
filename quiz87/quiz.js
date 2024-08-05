// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Whenever he didn't get what he wanted, he would __________ until someone gave in to his demands.",
    chinese_question: "每当他没有得到自己想要的东西时，他就会 __________ ，直到有人屈服于他的要求。",
    answers: [
        { option: "A", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wēixiào" },
        { option: "B", answer: "snivel", chinese_answer: "哭诉", chinese_romanization: "kūsù" },
        { option: "C", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" },
        { option: "D", answer: "cheer", chinese_answer: "欢呼", chinese_romanization: "huānhū" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'snivel' means to cry and sniffle in a feeble or fretful way." +
        "<br><br>" +
        "(A) 'smile' means to form one's features into a pleased or kind expression." +
        "<br><br>" +
        "(C) 'laugh' means to make sounds and movements of the face and body that show amusement." +
        "<br><br>" +
        "(D) 'cheer' means to shout for joy or in praise.",
    chinese_explanation: "(B) '哭诉' 意味着以软弱或烦躁的方式哭泣和抽泣。" +
        "<br><br>" +
        "(A) '微笑' 意味着将面部表情变成愉快或亲切的表情。" +
        "<br><br>" +
        "(C) '笑' 意味着发出和做出显示愉快的声音和动作。" +
        "<br><br>" +
        "(D) '欢呼' 意味着欢呼或赞美。"
    },
    {
        id: 2,
        question: "In his speech, the leader chose not to __________ his political rivals but instead focused on his own plans for the future.",
        chinese_question: "在演讲中，这位领导者选择不去 __________ 他的政治对手，而是专注于自己的未来计划。",
        answers: [
            { option: "A", answer: "laud", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "vilify", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'vilify' means to speak or write about in an abusively disparaging manner." +
            "<br><br>" +
            "(A) 'laud' means to praise highly." +
            "<br><br>" +
            "(B) 'honor' means to regard with great respect." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight of something.",
        chinese_explanation: "(D) '诋毁' 意味着以辱骂性的贬低方式谈论或写作。" +
            "<br><br>" +
            "(A) '赞美' 意味着高度赞扬。" +
            "<br><br>" +
            "(B) '尊敬' 意味着非常尊重。" +
            "<br><br>" +
            "(C) '支持' 意味着承担某物的全部或部分重量。"
    },
    {
        id: 3,
    question: "The manager decided to __________ the process by hiring additional staff, ensuring the project was completed on time.",
    chinese_question: "经理决定通过雇用更多的员工来 __________ 进程，确保项目按时完成。",
    answers: [
        { option: "A", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
        { option: "B", answer: "expedite", chinese_answer: "加速", chinese_romanization: "jiāsù" },
        { option: "C", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
        { option: "D", answer: "obstruct", chinese_answer: "阻挡", chinese_romanization: "zǔdǎng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'expedite' means to speed up the process or progress of." +
        "<br><br>" +
        "(A) 'delay' means to postpone." +
        "<br><br>" +
        "(C) 'hinder' means to obstruct or delay." +
        "<br><br>" +
        "(D) 'obstruct' means to block or impede.",
    chinese_explanation: "(B) '加速' 一词意味着加快进程。" +
        "<br><br>" +
        "(A) '延迟' 意味着推迟。" +
        "<br><br>" +
        "(C) '阻碍' 意味着阻碍或延迟。" +
        "<br><br>" +
        "(D) '阻挡' 意味着阻塞或妨碍。"
    },
    {
        id: 4,
        question: "The online challenge quickly __________ numerous copycat versions across social media platforms.",
        chinese_question: "在线挑战迅速在社交媒体平台上 __________ 了众多模仿版本。",
        answers: [
            { option: "A", answer: "spawned", chinese_answer: "产生", chinese_romanization: "chǎnshēng" },
            { option: "B", answer: "discouraged", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "C", answer: "hampered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "overlooked", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spawned' means to generate or bring forth." +
            "<br><br>" +
            "(B) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
            "<br><br>" +
            "(C) 'hampered' means to hinder or impede the movement or progress of." +
            "<br><br>" +
            "(D) 'overlooked' means to fail to notice something.",
        chinese_explanation: "(A) '产生' 意味着生成或引发。" +
            "<br><br>" +
            "(B) '劝阻' 意味着使某人失去信心或热情。" +
            "<br><br>" +
            "(C) '阻碍' 意味着阻碍或妨碍移动或进展。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能注意到某事。"
    },
    {
        id: 5,
    question: "The employee would often __________ over his boss, hoping to gain favor.",
    chinese_question: "这名员工经常 __________ 他的老板，希望获得青睐。",
    answers: [
        { option: "A", answer: "fawn", chinese_answer: "奉承", chinese_romanization: "fèngchéng" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
        { option: "D", answer: "mock", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fawn' means to give a servile display of exaggerated flattery or affection, typically to gain favor." +
        "<br><br>" + 
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(C) 'challenge' means to dispute the truth or validity of." +
        "<br><br>" + 
        "(D) 'mock' means to tease or laugh at in a scornful or contemptuous manner.",
    chinese_explanation: "(A) '奉承' 意味着表现出卑微的、夸张的恭维或爱慕，通常是为了获得青睐。" +
        "<br><br>" + 
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(C) '挑战' 意味着质疑真理或有效性。" +
        "<br><br>" + 
        "(D) '嘲笑' 意味着以轻蔑或蔑视的方式戏弄或嘲笑。"
    },
    {
        id: 6,
    question: "She __________ the missed opportunities in her life, wishing she had taken more chances.",
    chinese_question: "她 __________ 生活中错过的机会，希望自己当时多尝试一些。",
    answers: [
        { option: "A", answer: "lamented", chinese_answer: "哀叹", chinese_romanization: "āitàn" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'lamented' means to express sorrow, mourning, or regret, used figuratively here." +
        "<br><br>" +
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'supported' means to give assistance to." +
        "<br><br>" +
        "(D) 'criticized' means to indicate the faults of someone or something in a disapproving way.",
    chinese_explanation: "(A) '哀叹' 意味着表达悲伤、哀悼或遗憾，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '支持' 意味着给予帮助。" +
        "<br><br>" +
        "(D) '批评' 意味着以不赞成的方式指出某人或某物的错误。"
    },
    {
        id: 7,
    question: "She wore a scarf to __________ her cough, trying not to disturb others in the meeting.",
    chinese_question: "她戴上围巾来 __________ 自己的咳嗽，尽量不打扰会议上的其他人。",
    answers: [
        { option: "A", answer: "highlight", chinese_answer: "突出", chinese_romanization: "tūchū" },
        { option: "B", answer: "muffle", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
        { option: "C", answer: "expose", chinese_answer: "暴露", chinese_romanization: "bàolù" },
        { option: "D", answer: "exaggerate", chinese_answer: "夸大", chinese_romanization: "kuādà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'muffle' figuratively means to suppress or hide." +
        "<br><br>" +
        "(A) 'highlight' means to emphasize." +
        "<br><br>" +
        "(C) 'expose' means to reveal." +
        "<br><br>" +
        "(D) 'exaggerate' means to represent as larger or more significant.",
    chinese_explanation: "(B) '抑制' 一词在比喻上意味着压抑或隐藏。" +
        "<br><br>" +
        "(A) '突出' 意味着强调。" +
        "<br><br>" +
        "(C) '暴露' 意味着揭示。" +
        "<br><br>" +
        "(D) '夸大' 意味着表现得比实际更大或更重要。"
    },
    {
        id: 8,
    question: "During the meeting, he didn't __________ his words, expressing his disappointment bluntly.",
    chinese_question: "在会议上，他没有 __________ 他的言辞，直言不讳地表达了他的失望。",
    answers: [
        { option: "A", answer: "mince", chinese_answer: "婉转", chinese_romanization: "wǎnzhuǎn" },
        { option: "B", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
        { option: "C", answer: "elaborate", chinese_answer: "详细解释", chinese_romanization: "xiángxì jiěshì" },
        { option: "D", answer: "enhance", chinese_answer: "提升", chinese_romanization: "tíshēng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'mince' figuratively means to speak indirectly or with hesitation." +
        "<br><br>" +
        "(B) 'obscure' means to make unclear." +
        "<br><br>" +
        "(C) 'elaborate' means to explain in detail." +
        "<br><br>" +
        "(D) 'enhance' means to improve.",
    chinese_explanation: "(A) '婉转' 一词在比喻上意味着间接或犹豫地说话。" +
        "<br><br>" +
        "(B) '遮掩' 意味着使不清楚。" +
        "<br><br>" +
        "(C) '详细解释' 意味着详细说明。" +
        "<br><br>" +
        "(D) '提升' 意味着改善。"
    },
    {
        id: 9,
    question: "The rebels decided to __________ the military base, hoping to find weapons and supplies.",
    chinese_question: "叛军决定 __________ 军事基地，希望找到武器和补给品。",
    answers: [
        { option: "A", answer: "defend", chinese_answer: "保卫", chinese_romanization: "bǎowèi" },
        { option: "B", answer: "ransack", chinese_answer: "洗劫", chinese_romanization: "xǐjié" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "build", chinese_answer: "建造", chinese_romanization: "jiànzào" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ransack' means to search through a place and cause damage, often looking for valuables or supplies." +
        "<br><br>" +
        "(A) 'defend' means to protect from harm or attack." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'build' means to construct something by putting parts together.",
    chinese_explanation: "(B) '洗劫' 意味着翻箱倒柜并造成损害，通常是寻找贵重物品或补给品。" +
        "<br><br>" +
        "(A) '保卫' 意味着保护免受伤害或攻击。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '建造' 意味着通过组装零件构造某物。"
    },
    {
        id: 10,
    question: "The professor's __________ was apparent when he was caught plagiarizing research papers from his students, violating academic integrity.",
    chinese_question: "当教授被发现抄袭学生的研究论文时，他的 __________ 显而易见，违反了学术诚信。",
    answers: [
        { option: "A", answer: "propriety", chinese_answer: "得体", chinese_romanization: "détǐ" },
        { option: "B", answer: "decency", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
        { option: "C", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
        { option: "D", answer: "impropriety", chinese_answer: "不正当行为", chinese_romanization: "bù zhèngdàng xíngwéi" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'impropriety' means improper behavior or character." +
        "<br><br>" +
        "(A) 'propriety' means conforming to accepted standards of behavior or morals." +
        "<br><br>" +
        "(B) 'decency' means behavior that conforms to accepted standards of morality or respectability." +
        "<br><br>" +
        "(C) 'integrity' means the quality of being honest and having strong moral principles.",
    chinese_explanation: "(D) '不正当行为' 意味着不当的行为或品行。" +
        "<br><br>" +
        "(A) '得体' 意味着符合公认的行为或道德标准。" +
        "<br><br>" +
        "(B) '礼貌' 意味着符合道德或尊重标准的行为。" +
        "<br><br>" +
        "(C) '正直' 意味着诚实和具有坚定道德原则的品质。"
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
