// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "One of the __________ points in her argument was the need for immediate action to address climate change.",
        chinese_question: "她的论点中一个 __________ 的观点是需要立即采取行动来应对气候变化。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "C", answer: "salient", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "D", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'salient' means most noticeable or important." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering.",
        chinese_explanation: "(C) '显著的' 意味着最显眼或最重要的。" +
            "<br><br>" +
            "(A) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(B) '次要的' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着如此小或不重要，不值得考虑的。"
    },
    {
        id: 2,
        question: "His __________ plans for the new building included a rooftop garden and a helipad.",
        chinese_question: "他对新大楼的 __________ 计划包括一个屋顶花园和一个直升机停机坪。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "grandiose", chinese_answer: "宏伟", chinese_romanization: "hóngwěi" },
            { option: "D", answer: "humble", chinese_answer: "低调", chinese_romanization: "dīdiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grandiose' means impressive and imposing in appearance or style, especially pretentiously so." +
            "<br><br>" +
            "(A) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's importance.",
        chinese_explanation: "(C) '宏伟' 意味着外观或风格上令人印象深刻和壮观，尤其是虚张声势的。" +
            "<br><br>" +
            "(A) '谦虚' 意味着对自己的能力或成就持谦虚或适度的估计。" +
            "<br><br>" +
            "(B) '简单' 意味着容易理解或完成；没有困难。" +
            "<br><br>" +
            "(D) '低调' 意味着表现谦虚或低估自己的重要性。"
    },
    {
        id: 3,
    question: "The berries looked delicious, but we weren't sure if they were __________.",
    chinese_question: "这些浆果看起来很美味，但我们不确定它们是否__________。",
    answers: [
        { option: "A", answer: "poisonous", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" },
        { option: "B", answer: "decorative", chinese_answer: "装饰性的", chinese_romanization: "zhuāngshìxìng de" },
        { option: "C", answer: "edible", chinese_answer: "可食用的", chinese_romanization: "kě shíyòng de" },
        { option: "D", answer: "toxic", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'edible' means fit to be eaten (often used to contrast with unpalatable or poisonous examples)." +
        "<br><br>" +
        "(A) 'poisonous' means containing poison that is dangerous." +
        "<br><br>" +
        "(B) 'decorative' means serving to make something look more attractive; ornamental." +
        "<br><br>" +
        "(D) 'toxic' means poisonous.",
    chinese_explanation: "(C) '可食用的' 一词意味着适合食用的（通常用来与不可口或有毒的例子对比）。" +
        "<br><br>" +
        "(A) '有毒的' 意味着含有危险的毒素。" +
        "<br><br>" +
        "(B) '装饰性的' 意味着用来使某物看起来更具吸引力的；装饰的。" +
        "<br><br>" +
        "(D) '有毒的' 意味着有毒的。"
    },
    {
        id: 4,
        question: "Her __________ idea for a smartphone app quickly gained popularity among tech enthusiasts.",
        chinese_question: "她关于智能手机应用程序的 __________ 想法迅速在技术爱好者中获得了人气。",
        answers: [
            { option: "A", answer: "novel", chinese_answer: "新颖的", chinese_romanization: "xīnyǐng de" },
            { option: "B", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'novel' means new or unusual in an interesting way." +
            "<br><br>" +
            "(B) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(A) '新颖的' 意味着新的或不同寻常的，有趣的。" +
            "<br><br>" +
            "(B) '可预测的' 意味着能够预测的。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特殊或独特的特征；正常的。" +
            "<br><br>" +
            "(D) '常见的' 意味着经常发生、发现或完成的；流行的。"
    },
    {
        id: 5,
        question: "Her __________ attitude made it difficult for her to stand up for herself in challenging situations.",
        chinese_question: "她的__________态度使她在挑战性情况下很难为自己辩护。",
        answers: [
            { option: "A", answer: "assertive", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "B", answer: "active", chinese_answer: "积极的", chinese_romanization: "jījí de" },
            { option: "C", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
            { option: "D", answer: "proactive", chinese_answer: "积极主动的", chinese_romanization: "jījí zhǔdòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(A) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(B) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(D) 'proactive' means creating or controlling a situation rather than just responding to it after it has happened.",
        chinese_explanation: "(C) '被动的'一词意味着接受或允许发生的事情或他人所做的事情，而没有积极的回应或抵抗。" +
            "<br><br>" +
            "(A) '自信的' 意味着有或表现出自信和强势的个性。" +
            "<br><br>" +
            "(B) '积极的' 意味着参与或准备参与体力充沛的追求。" +
            "<br><br>" +
            "(D) '积极主动的' 意味着创造或控制一种情况，而不是在事情发生后仅仅做出反应。"
    },
    {
        id: 6,
        question: "His __________ smile, filled with mocking contempt, made everyone uncomfortable during the serious discussion.",
        chinese_question: "他 __________ 的笑容充满了嘲弄和轻蔑，使得在严肃的讨论中每个人都感到不舒服。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "B", answer: "sardonic", chinese_answer: "讽刺的", chinese_romanization: "fèngcì de" },
            { option: "C", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "D", answer: "sincere", chinese_answer: "诚恳的", chinese_romanization: "chéngkěn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sardonic' means grimly mocking or cynical." +
            "<br><br>" +
            "(A) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(C) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(B) '讽刺的' 意味着冷嘲的或愤世嫉俗的。" +
            "<br><br>" +
            "(A) '真诚的' 意味着真正的，所说的就是其所是的；真实的。" +
            "<br><br>" +
            "(C) '友好的' 意味着善良和愉快的。" +
            "<br><br>" +
            "(D) '诚恳的' 意味着没有伪装或欺骗的；出于真诚的感情的。"
    },
    {
        id: 7,
        question: "After several hours of waiting, the children became __________ and started to fidget in their seats.",
        chinese_question: "等待了几个小时后，孩子们变得 __________，开始在座位上坐立不安。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "still", chinese_answer: "静止的", chinese_romanization: "jìngzhǐ de" },
            { option: "C", answer: "restful", chinese_answer: "安静的", chinese_romanization: "ānjìng de" },
            { option: "D", answer: "restless", chinese_answer: "焦躁的", chinese_romanization: "jiāozào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'restless' means unable to rest or relax as a result of anxiety or boredom." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'still' means not moving or making a sound." +
            "<br><br>" +
            "(C) 'restful' means having a quiet and soothing quality.",
        chinese_explanation: "(D) '焦躁的' 意味着由于焦虑或无聊而无法休息或放松的。" +
            "<br><br>" +
            "(A) '平静的' 意味着不显示或感到紧张、愤怒或其他强烈情绪的。" +
            "<br><br>" +
            "(B) '静止的' 意味着不移动或发出声音的。" +
            "<br><br>" +
            "(C) '安静的' 意味着具有安静和舒缓的品质。"
    },
    {
        id: 8,
    question: "The team's success was __________, seen in their numerous trophies and awards.",
    chinese_question: "团队的成功是__________的，从他们众多的奖杯和奖项中可以看出。",
    answers: [
        { option: "A", answer: "intangible", chinese_answer: "无形的", chinese_romanization: "wúxíng de" },
        { option: "B", answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "C", answer: "elusive", chinese_answer: "难以捉摸的", chinese_romanization: "nányǐ zhuōmō de" },
        { option: "D", answer: "tangible", chinese_answer: "有形的", chinese_romanization: "yǒuxíng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'tangible' means perceptible by touch; clear and definite; real." +
        "<br><br>" +
        "(A) 'intangible' means unable to be touched or grasped; not having physical presence." +
        "<br><br>" +
        "(B) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
        "<br><br>" +
        "(C) 'elusive' means difficult to find, catch, or achieve.",
    chinese_explanation: "(D) '有形的'一词意味着可以触摸到的；清晰而明确的；真实的。" +
        "<br><br>" +
        "(A) '无形的' 意味着无法触摸或掌握的；没有实体存在的。" +
        "<br><br>" +
        "(B) '模糊的' 意味着有多种解释的；没有一个明显的意义。" +
        "<br><br>" +
        "(C) '难以捉摸的' 意味着难以找到、抓住或实现的。"
    },
    {
        id: 9,
        question: "The __________ landscape of the city was dotted with skyscrapers, bustling streets, and vibrant nightlife.",
        chinese_question: "城市的 __________ 景观点缀着摩天大楼、繁忙的街道和丰富多彩的夜生活。",
        answers: [
            { option: "A", answer: "rural", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" },
            { option: "B", answer: "urban", chinese_answer: "城市的", chinese_romanization: "chéngshì de" },
            { option: "C", answer: "pastoral", chinese_answer: "田园的", chinese_romanization: "tiányuán de" },
            { option: "D", answer: "rustic", chinese_answer: "质朴的", chinese_romanization: "zhìpǔ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'urban' means in, relating to, or characteristic of a city or town." +
            "<br><br>" +
            "(A) 'rural' means in, relating to, or characteristic of the countryside rather than the town." +
            "<br><br>" +
            "(C) 'pastoral' means associated with country life, especially in an idealized form." +
            "<br><br>" +
            "(D) 'rustic' means relating to the countryside; rural.",
        chinese_explanation: "(B) '城市的' 意味着在城镇的、与城镇有关的或具有城镇特征的。" +
            "<br><br>" +
            "(A) '乡村的' 意味着在乡村的、与乡村有关的或具有乡村特征的。" +
            "<br><br>" +
            "(C) '田园的' 意味着与乡村生活有关的，特别是以理想化的形式。" +
            "<br><br>" +
            "(D) '质朴的' 意味着与乡村有关的；乡村的。"
    },
    {
        id: 10,
        question: "The doctor responded immediately to the __________ call from the emergency room.",
        chinese_question: "医生立即响应了急诊室的 __________ 电话。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "leisurely", chinese_answer: "悠闲的", chinese_romanization: "yōuxián de" },
            { option: "C", answer: "urgent", chinese_answer: "紧急的", chinese_romanization: "jǐnjí de" },
            { option: "D", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kě xuǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'urgent' means requiring immediate action or attention." +
            "<br><br>" +
            "(A) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(B) 'leisurely' means acting or done at leisure; unhurried or relaxed." +
            "<br><br>" +
            "(D) 'optional' means available to be chosen but not obligatory.",
        chinese_explanation: "(C) '紧急的' 意味着需要立即行动或关注的。" +
            "<br><br>" +
            "(A) '随意的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(B) '悠闲的' 意味着在闲暇时进行的；不慌不忙的。" +
            "<br><br>" +
            "(D) '可选的' 意味着可选择的，但不是强制的。"
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
