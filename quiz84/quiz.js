// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The ranchers worked tirelessly to __________ the wild horses into the pen before the storm hit.",
        chinese_question: "在暴风雨来临之前，牧民们不知疲倦地工作，将野马 __________ 进围栏。",
        answers: [
            { option: "A", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
            { option: "B", answer: "corral", chinese_answer: "围拢", chinese_romanization: "wéilǒng" },
            { option: "C", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'corral' means to gather together and confine." +
            "<br><br>" +
            "(A) 'scatter' means to throw in various random directions." +
            "<br><br>" +
            "(C) 'release' means to set free." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(B) '围拢' 意味着把一起聚集并限制在一个地方。" +
            "<br><br>" +
            "(A) '分散' 意味着朝各个随机方向抛撒。" +
            "<br><br>" +
            "(C) '释放' 意味着放出。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 2,
    question: "The CEO's __________ was revealed when it was discovered that he had been using company funds for personal vacations, a blatant misuse of corporate resources.",
    chinese_question: "当发现首席执行官一直在使用公司资金进行个人度假时，他的 __________ 被揭露出来，这是对公司资源的公然滥用。",
    answers: [
        { option: "A", answer: "propriety", chinese_answer: "得体", chinese_romanization: "détǐ" },
        { option: "B", answer: "decency", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
        { option: "C", answer: "correctness", chinese_answer: "正确", chinese_romanization: "zhèngquè" },
        { option: "D", answer: "impropriety", chinese_answer: "不正当行为", chinese_romanization: "bù zhèngdàng xíngwéi" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'impropriety' means improper behavior or character." +
        "<br><br>" +
        "(A) 'propriety' means conforming to accepted standards of behavior or morals." +
        "<br><br>" +
        "(B) 'decency' means behavior that conforms to accepted standards of morality or respectability." +
        "<br><br>" +
        "(C) 'correctness' means the quality of being right in an accurate or factual way.",
    chinese_explanation: "(D) '不正当行为' 意味着不当的行为或品行。" +
        "<br><br>" +
        "(A) '得体' 意味着符合公认的行为或道德标准。" +
        "<br><br>" +
        "(B) '礼貌' 意味着符合道德或尊重标准的行为。" +
        "<br><br>" +
        "(C) '正确' 意味着准确或事实方面的正确性。"
    },
    {
        id: 3,
    question: "They decided it was time to __________ the topic of budget cuts in the next meeting, so that everyone could discuss and understand the financial constraints.",
    chinese_question: "他们决定在下次会议上提出预算削减的话题，以便大家能够讨论和理解财政约束。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "broach", chinese_answer: "提出", chinese_romanization: "tíchū" },
        { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'broach' means to raise a sensitive or difficult subject for discussion." +
        "<br><br>" + 
        "(A) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" + 
        "(D) 'avoid' means to keep away from or stop oneself from doing something.",
    chinese_explanation: "(B) '提出' 意味着提出一个敏感或困难的话题进行讨论。" +
        "<br><br>" + 
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(C) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
        "<br><br>" + 
        "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 4,
    question: "The teacher __________ the students to study hard for the upcoming exams by giving motivational speeches and providing extra study materials.",
    chinese_question: "老师通过发表激励演讲和提供额外的学习资料来 __________ 学生们努力学习以应对即将到来的考试。",
    answers: [
        { option: "A", answer: "reprimanded", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "exhorted", chinese_answer: "力劝", chinese_romanization: "lìquàn" },
        { option: "D", answer: "belittled", chinese_answer: "贬低", chinese_romanization: "biǎndī" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'exhorted' means to strongly encourage or urge someone to do something." +
        "<br><br>" + 
        "(A) 'reprimanded' means to scold or criticize someone for their behavior or actions." +
        "<br><br>" + 
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'belittled' means to make someone or something seem less impressive or important.",
    chinese_explanation: "(C) '力劝' 意味着强烈鼓励或敦促某人做某事。" +
        "<br><br>" + 
        "(A) '训斥' 意味着因为某人的行为或行动而责备或批评某人。" +
        "<br><br>" + 
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '贬低' 意味着使某人或某物显得不那么令人印象深刻或重要。"
    },
    {
        id: 5,
    question: "The repetitive noise from the neighbor's house started to __________ on their nerves and disrupt their peace.",
    chinese_question: "邻居家的重复噪音开始 __________ 他们的神经，打扰他们的安宁。",
    answers: [
        { option: "A", answer: "grate", chinese_answer: "刺激", chinese_romanization: "cìjī" },
        { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'grate' means to irritate or annoy someone, used figuratively here." +
        "<br><br>" +
        "(B) 'calm' means to make someone peaceful and free from disturbance." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'enjoy' means to take delight or pleasure in something.",
    chinese_explanation: "(A) '刺激' 意味着使某人烦躁或恼火，这里是比喻用法。" +
        "<br><br>" +
        "(B) '平静' 意味着使某人平静和远离干扰。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '享受' 意味着对某事感到高兴或愉快。"
    },
    {
        id: 6,
    question: "After the surgery, she needed several weeks to __________ and regain her strength.",
    chinese_question: "手术后，她需要几周时间来 __________ 并恢复体力。",
    answers: [
        { option: "A", answer: "deteriorate", chinese_answer: "恶化", chinese_romanization: "èhuà" },
        { option: "B", answer: "recuperate", chinese_answer: "康复", chinese_romanization: "kāngfù" },
        { option: "C", answer: "exhaust", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
        { option: "D", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'recuperate' means to recover from illness or exertion." +
        "<br><br>" +
        "(A) 'deteriorate' means to become progressively worse." +
        "<br><br>" +
        "(C) 'exhaust' means to drain someone of their physical or mental resources." +
        "<br><br>" +
        "(D) 'decline' means to become smaller, fewer, or less; decrease.",
    chinese_explanation: "(B) '康复' 意味着从疾病或劳累中恢复。" +
        "<br><br>" +
        "(A) '恶化' 意味着变得越来越糟。" +
        "<br><br>" +
        "(C) '耗尽' 意味着消耗某人的体力或精神资源。" +
        "<br><br>" +
        "(D) '下降' 意味着变得更小、更少或减少。"
    },
    {
        id: 7,
    question: "To __________ the approval process, the company implemented an online application system so that applications could be reviewed and approved more quickly.",
    chinese_question: "为了 __________ 审批流程，公司实施了在线申请系统，以便可以更快地审查和批准申请。",
    answers: [
        { option: "A", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
        { option: "B", answer: "expedite", chinese_answer: "加快", chinese_romanization: "jiākuài" },
        { option: "C", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
        { option: "D", answer: "lengthen", chinese_answer: "延长", chinese_romanization: "yáncháng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'expedite' figuratively means to make an action or process happen sooner or be accomplished more quickly." +
        "<br><br>" +
        "(A) 'complicate' means to make more complex." +
        "<br><br>" +
        "(C) 'hinder' means to obstruct or delay." +
        "<br><br>" +
        "(D) 'lengthen' means to make longer.",
    chinese_explanation: "(B) '加快' 一词在比喻上意味着使某个动作或过程更快发生或完成。" +
        "<br><br>" +
        "(A) '复杂化' 意味着使变得更复杂。" +
        "<br><br>" +
        "(C) '阻碍' 意味着阻碍或延迟。" +
        "<br><br>" +
        "(D) '延长' 意味着使变得更长。"
    },
    {
        id: 8,
    question: "The children began to __________ excitedly about their upcoming trip to the zoo, discussing the animals they wanted to see and the adventures they anticipated.",
    chinese_question: "孩子们开始兴奋地 __________ 他们即将到来的动物园之行，讨论他们想看的动物和期待的冒险。",
    answers: [
        { option: "A", answer: "jabber", chinese_answer: "喋喋不休", chinese_romanization: "diédiébùxiū" },
        { option: "B", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
        { option: "C", answer: "meditate", chinese_answer: "冥想", chinese_romanization: "míngxiǎng" },
        { option: "D", answer: "sing", chinese_answer: "唱歌", chinese_romanization: "chànggē" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'jabber' means to talk rapidly and excitedly but with little sense." +
        "<br><br>" +
        "(B) 'whisper' means to speak very softly using one's breath without one's vocal cords, especially for the sake of secrecy." +
        "<br><br>" +
        "(C) 'meditate' means to think deeply or focus one's mind for a period of time." +
        "<br><br>" +
        "(D) 'sing' means to make musical sounds with the voice.",
    chinese_explanation: "(A) '喋喋不休' 意味着快速且兴奋地说话，但意义不大。" +
        "<br><br>" +
        "(B) '低语' 意味着用非常轻的声音说话，尤其是为了保密。" +
        "<br><br>" +
        "(C) '冥想' 意味着深思或集中注意力一段时间。" +
        "<br><br>" +
        "(D) '唱歌' 意味着用声音发出音乐声音。"
    },
    {
        id: 9,
    question: "It took hours to __________ the cables that had been left in a tangled mess.",
    chinese_question: "花了好几个小时才 __________ 那些被弄成一团的电缆。",
    answers: [
        { option: "A", answer: "disentangle", chinese_answer: "解开", chinese_romanization: "jiěkāi" },
        { option: "B", answer: "tie", chinese_answer: "系", chinese_romanization: "jì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "break", chinese_answer: "打破", chinese_romanization: "dǎpò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disentangle' means to free something or someone from an entanglement." +
        "<br><br>" + 
        "(B) 'tie' means to fasten something with a string or rope." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'break' means to separate into pieces as a result of a blow, shock, or strain.",
    chinese_explanation: "(A) '解开' 意味着将某物或某人从纠缠中解脱出来。" +
        "<br><br>" + 
        "(B) '系' 意味着用绳子或绳索系紧某物。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '打破' 意味着因打击、冲击或压力分成碎片。"
    },
    {
        id: 10,
        question: "The quiet time in the morning gave her a chance to __________ on her recent experiences and gain insights from them.",
        chinese_question: "早晨的安静时间让她有机会 __________ 最近的经历，并从中获得见解。",
        answers: [
            { option: "A", answer: "hurry", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
            { option: "B", answer: "talk", chinese_answer: "说话", chinese_romanization: "shuōhuà" },
            { option: "C", answer: "dance", chinese_answer: "跳舞", chinese_romanization: "tiàowǔ" },
            { option: "D", answer: "ruminate", chinese_answer: "沉思", chinese_romanization: "chénsī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ruminate' means to think deeply about something." +
            "<br><br>" +
            "(A) 'hurry' means to move or act with haste." +
            "<br><br>" +
            "(B) 'talk' means to speak in order to give information or express ideas." +
            "<br><br>" +
            "(C) 'dance' means to move rhythmically to music.",
        chinese_explanation: "(D) '沉思' 意味着深入思考某事。" +
            "<br><br>" +
            "(A) '匆忙' 意味着急切地移动或行动。" +
            "<br><br>" +
            "(B) '说话' 意味着说话以提供信息或表达想法。" +
            "<br><br>" +
            "(C) '跳舞' 意味着随着音乐有节奏地移动。"
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
