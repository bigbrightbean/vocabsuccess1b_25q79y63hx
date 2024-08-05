// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "To make the party decorations more festive, they decided to __________ the room with colourful lights and balloons.",
        chinese_question: "为了让派对装饰更有节日气氛，他们决定用彩灯和气球 __________ 房间。",
        answers: [
            { option: "A", answer: "damage", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "B", answer: "embellish", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
            { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'embellish' means to make something more attractive by adding decorative details." +
            "<br><br>" +
            "(A) 'damage' means to cause harm to something." +
            "<br><br>" +
            "(C) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '装饰'一词意味着通过添加装饰细节使某物更有吸引力。" +
            "<br><br>" +
            "(A) '破坏' 意味着对某物造成伤害。" +
            "<br><br>" +
            "(C) '简化' 意味着使某事变得更简单或更容易做或理解。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
        question: "The rebel leader sought to __________ his enemies into surrendering by using threats and violence.",
        chinese_question: "反叛领袖试图通过使用威胁和暴力来 __________ 敌人投降。",
        answers: [
            { option: "A", answer: "console", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "bludgeon", chinese_answer: "强迫", chinese_romanization: "qiǎngpò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bludgeon' means to bully someone into doing something or to hit someone repeatedly with a heavy object." +
            "<br><br>" +
            "(A) 'console' means to comfort someone at a time of grief or disappointment." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'aid' means to help or support.",
        chinese_explanation: "(D) '强迫' 意味着威胁某人做某事或用重物反复打击某人。" +
            "<br><br>" +
            "(A) '安慰' 意味着在悲伤或失望时安慰某人。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '帮助' 意味着帮助或支持。"
    },
    {
        id: 3,
        question: "Adopting a pet __________ a commitment to care for it for its entire life.",
        chinese_question: "领养宠物 __________ 终生照顾它的承诺。",
        answers: [
            { option: "A", answer: "excludes", chinese_answer: "排除", chinese_romanization: "páichú" },
            { option: "B", answer: "entails", chinese_answer: "需要", chinese_romanization: "xūyào" },
            { option: "C", answer: "simplifies", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "D", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'entails' means to involve something as a necessary or inevitable part or consequence." +
            "<br><br>" +
            "(A) 'excludes' means to deny someone access to or bar someone from a place, group, or privilege." +
            "<br><br>" +
            "(C) 'simplifies' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(D) 'ignores' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '需要'一词意味着作为必要或不可避免的一部分或结果而涉及某事。" +
            "<br><br>" +
            "(A) '排除' 意味着拒绝某人进入某个地方、群体或特权。" +
            "<br><br>" +
            "(C) '简化' 意味着使某事变得更简单或更容易做或理解。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
        question: "She decided to __________ on her baking skills to start a home bakery.",
        chinese_question: "她决定 __________ 她的烘焙技能来开一家家庭烘焙店。",
        answers: [
            { option: "A", answer: "capitalize", chinese_answer: "利用", chinese_romanization: "lìyòng" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capitalize' means to take advantage of (a situation); make the most of." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'delay' means to make (someone or something) late or slow." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '利用' 意味着利用（情况）；充分利用。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '延迟' 意味着使（某人或某事）变迟或变慢。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 5,
        question: "The machine __________ a loud noise when it started.",
        chinese_question: "机器启动时 __________ 了很大的噪音。",
        answers: [
            { option: "A", answer: "emitted", chinese_answer: "发出", chinese_romanization: "fāchū" },
            { option: "B", answer: "absorbed", chinese_answer: "吸收", chinese_romanization: "xīshōu" },
            { option: "C", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "suppressed", chinese_answer: "抑制", chinese_romanization: "yìzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'emitted' means to produce and discharge (something, especially gas or radiation)." +
            "<br><br>" +
            "(B) 'absorbed' means to take in or soak up (energy or a liquid or other substance)." +
            "<br><br>" +
            "(C) 'concealed' means to keep from being seen; hide." +
            "<br><br>" +
            "(D) 'suppressed' means to forcibly put an end to.",
        chinese_explanation: "(A) '发出' 意味着产生并释放（某物，尤其是气体或辐射）。" +
            "<br><br>" +
            "(B) '吸收' 意味着吸收（能量或液体或其他物质）。" +
            "<br><br>" +
            "(C) '隐藏' 意味着使看不见；隐藏。" +
            "<br><br>" +
            "(D) '抑制' 意味着强行终止。"
    },
    {
        id: 6,
    question: "Their goal is to __________ the delivery service, allowing customers to book couriers directly through an app.",
    chinese_question: "他们的目标是 __________ 送货服务，让客户可以通过应用程序直接预订快递员。",
    answers: [
        { option: "A", answer: "uberize", chinese_answer: "优步化", chinese_romanization: "yōubù huà" },
        { option: "B", answer: "centralize", chinese_answer: "集中", chinese_romanization: "jízhōng" },
        { option: "C", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
        { option: "D", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'uberize' means to transform a service by using a business model similar to that of Uber, usually involving an app-based platform connecting consumers with service providers." +
        "<br><br>" +
        "(B) 'centralize' means to bring activities together in one place or under a single authority." +
        "<br><br>" +
        "(C) 'discourage' means to cause someone to lose confidence or enthusiasm." +
        "<br><br>" +
        "(D) 'complicate' means to make something more difficult or confusing.",
    chinese_explanation: "(A) '优步化' 意味着通过使用类似于优步的商业模式来改变一种服务，通常涉及一个将消费者与服务提供商连接起来的应用程序平台。" +
        "<br><br>" +
        "(B) '集中' 意味着将活动集中在一个地方或一个单一的权威下。" +
        "<br><br>" +
        "(C) '劝阻' 意味着使某人失去信心或热情。" +
        "<br><br>" +
        "(D) '复杂化' 意味着使某事更加困难或混乱。"
    },
    {
        id: 7,
    question: "The carpenter had to __________ out a space in the wood to fit the new hinge.",
    chinese_question: "木匠必须用 __________ 凿出木头中的空间以安装新的铰链。",
    answers: [
        { option: "A", answer: "chisel", chinese_answer: "凿子", chinese_romanization: "záozi" },
        { option: "B", answer: "sand", chinese_answer: "砂纸打磨", chinese_romanization: "shāzhǐ dǎmó" },
        { option: "C", answer: "paint", chinese_answer: "油漆", chinese_romanization: "yóuqī" },
        { option: "D", answer: "glue", chinese_answer: "胶水粘合", chinese_romanization: "jiāoshuǐ zhānhé" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'chisel' means to cut or shape something with a chisel." +
        "<br><br>" + 
        "(B) 'sand' means to smooth or polish with sandpaper or a mechanical sander." +
        "<br><br>" + 
        "(C) 'paint' means to cover the surface of something with paint." +
        "<br><br>" + 
        "(D) 'glue' means to stick or fasten things together with an adhesive substance.",
    chinese_explanation: "(A) '凿子' 意味着用凿子切割或雕刻某物。" +
        "<br><br>" + 
        "(B) '砂纸打磨' 意味着用砂纸或机械打磨机抛光或磨光。" +
        "<br><br>" + 
        "(C) '油漆' 意味着在某物表面覆盖油漆。" +
        "<br><br>" + 
        "(D) '胶水粘合' 意味着用粘合剂将物品粘合在一起。"
    },
    {
        id: 8,
    question: "After a long chase, the fugitive was finally __________ by the police.",
    chinese_question: "经过长时间的追捕，逃犯最终被警方 __________。",
    answers: [
        { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "arrested", chinese_answer: "逮捕", chinese_romanization: "dàibǔ" },
        { option: "D", answer: "questioned", chinese_answer: "询问", chinese_romanization: "xúnwèn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'arrested' means to seize someone by legal authority and take them into custody." +
        "<br><br>" +
        "(A) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(B) 'assisted' means to help someone." +
        "<br><br>" +
        "(D) 'questioned' means to ask questions or interrogate.",
    chinese_explanation: "(C) '逮捕' 意味着通过法律权力抓捕某人并将其拘留。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(B) '帮助' 意味着帮助某人。" +
        "<br><br>" +
        "(D) '询问' 意味着问问题或审问。"
    },
    {
        id: 9,
    question: "He __________ the help of a professional to fix the plumbing issues in his house.",
    chinese_question: "他 __________ 专业人员的帮助来解决家中的管道问题。",
    answers: [
        { option: "A", answer: "enlisted", chinese_answer: "寻求", chinese_romanization: "xúnqiú" },
        { option: "B", answer: "rejected", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "C", answer: "doubted", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "D", answer: "prevented", chinese_answer: "预防", chinese_romanization: "yùfáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enlisted' means secured the support or help of someone." +
        "<br><br>" +
        "(B) 'rejected' means dismissed or refused." +
        "<br><br>" +
        "(C) 'doubted' means felt uncertain about." +
        "<br><br>" +
        "(D) 'prevented' means kept something from happening.",
    chinese_explanation: "(A) '寻求' 意味着获得某人的支持或帮助。" +
        "<br><br>" +
        "(B) '拒绝' 意味着驳回或拒绝。" +
        "<br><br>" +
        "(C) '怀疑' 意味着感到不确定。" +
        "<br><br>" +
        "(D) '预防' 意味着阻止某事发生。"
    },
    {
        id: 10,
    question: "He was careful not to __________ any personal information during the interview.",
    chinese_question: "他在面试时小心不 __________ 任何个人信息。",
    answers: [
        { option: "A", answer: "share", chinese_answer: "分享", chinese_romanization: "fēnxiǎng" },
        { option: "B", answer: "divulge", chinese_answer: "泄露", chinese_romanization: "xièlòu" },
        { option: "C", answer: "disclose", chinese_answer: "透露", chinese_romanization: "tòulù" },
        { option: "D", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'divulge' figuratively means to make known (private or sensitive information)." +
        "<br><br>" +
        "(A) 'share' means to give a portion to others." +
        "<br><br>" +
        "(C) 'disclose' means to make known." +
        "<br><br>" +
        "(D) 'reveal' means to make known.",
    chinese_explanation: "(B) '泄露' 一词在比喻上意味着使（私人或敏感信息）变得公开。" +
        "<br><br>" +
        "(A) '分享' 意味着把一部分给予他人。" +
        "<br><br>" +
        "(C) '透露' 意味着使知道。" +
        "<br><br>" +
        "(D) '揭示' 意味着使知道。"
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
