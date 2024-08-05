// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ with which she pursued her career goals was inspiring to all who knew her.",
        chinese_question: "她追求职业目标的 __________ 激励了所有认识她的人。",
        answers: [
            { option: "A", answer: "laziness", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "ferocity", chinese_answer: "凶猛", chinese_romanization: "xiōngměng" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ferocity' means the state or quality of being ferocious; fierceness." +
            "<br><br>" +
            "(A) 'laziness' means the quality of being unwilling to work or use energy; idleness." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(C) '凶猛'一词意味着凶猛的状态或品质；激烈。" +
            "<br><br>" +
            "(A) '懒惰' 意味着不愿意工作或使用精力的品质；懒散。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。"
    },
    {
        id: 2,
        question: "The __________ of the discussions during the conference covered everything from technological advancements to ethical considerations.",
        chinese_question: "会议期间讨论的 __________ 涉及从技术进步到伦理考虑的所有内容。",
        answers: [
            { option: "A", answer: "breadth", chinese_answer: "广度", chinese_romanization: "guǎngdù" },
            { option: "B", answer: "narrowness", chinese_answer: "狭窄", chinese_romanization: "xiázhǎi" },
            { option: "C", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "D", answer: "superficiality", chinese_answer: "肤浅", chinese_romanization: "fūqiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'breadth' figuratively means the extent or range of knowledge, experience, or activity." +
            "<br><br>" +
            "(B) 'narrowness' means limited in extent, amount, or scope." +
            "<br><br>" +
            "(C) 'simplicity' means the quality or condition of being easy to understand or do." +
            "<br><br>" +
            "(D) 'superficiality' means lack of thoroughness, depth of character, or serious thought.",
        chinese_explanation: "(A) '广度' 在此语境下意指知识、经验或活动的范围或程度。" +
            "<br><br>" +
            "(B) '狭窄' 意味着范围、数量或范围有限。" +
            "<br><br>" +
            "(C) '简单' 意味着易于理解或做的质量或条件。" +
            "<br><br>" +
            "(D) '肤浅' 意味着缺乏彻底性、性格深度或严肃思考。"
    },
    {
        id: 3,
        question: "Despite his initial __________ about accepting the risky job offer, he eventually decided to take the plunge.",
        chinese_question: "尽管他最初对接受这份有风险的工作有所 __________，但最终还是决定冒险一试。",
        answers: [
            { option: "A", answer: "qualms", chinese_answer: "不安", chinese_romanization: "bù'ān" },
            { option: "B", answer: "confidence", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "C", answer: "eagerness", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
            { option: "D", answer: "certainty", chinese_answer: "确定", chinese_romanization: "quèdìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'qualms' means an uneasy feeling of doubt, worry, or fear, especially about one's own conduct; a misgiving." +
            "<br><br>" +
            "(B) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
            "<br><br>" +
            "(C) 'eagerness' means enthusiasm to do or to have something." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(A) '不安' 意味着对某事感到怀疑、担忧或恐惧的不安感觉，尤其是关于自己的行为；不安。" +
            "<br><br>" +
            "(B) '自信' 意味着对某人或某事可以依靠的感觉或信念；坚定的信任。" +
            "<br><br>" +
            "(C) '渴望' 意味着做某事或拥有某物的热情。" +
            "<br><br>" +
            "(D) '确定' 意味着对某事的坚定信念。"
    },
    {
        id: 4,
        question: "The team's __________ for the championship was evident in their intense training sessions and unwavering focus.",
        chinese_question: "团队对冠军的 __________ 体现在他们的高强度训练和坚定不移的专注中。",
        answers: [
            { option: "A", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "complacency", chinese_answer: "自满", chinese_romanization: "zìmǎn" },
            { option: "C", answer: "detachment", chinese_answer: "超脱", chinese_romanization: "chāotuō" },
            { option: "D", answer: "fervour", chinese_answer: "热情", chinese_romanization: "rèqíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fervour' means intense and passionate feeling." +
            "<br><br>" +
            "(A) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'complacency' means a feeling of smug or uncritical satisfaction with oneself or one's achievements." +
            "<br><br>" +
            "(C) 'detachment' means the state of being objective or aloof.",
        chinese_explanation: "(D) '热情'一词意味着强烈而热情的感觉。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(B) '自满' 意味着对自己或自己的成就的洋洋自得或不加批判的满足感。" +
            "<br><br>" +
            "(C) '超脱' 意味着客观或超然的状态。"
    },
    {
        id: 5,
        question: "The political party faced a __________ when disagreements over policy decisions led to the formation of two separate factions.",
        chinese_question: "由于在政策决定上的分歧，这个政党面临着 __________，导致形成了两个独立的派别。",
        answers: [
            { option: "A", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "schism", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
            { option: "D", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'schism' means a split or division between strongly opposed sections or parties, caused by differences in opinion or belief." +
            "<br><br>" +
            "(A) 'unity' means the state of being united or joined as a whole." +
            "<br><br>" +
            "(B) 'harmony' means agreement or concord." +
            "<br><br>" +
            "(D) 'agreement' means harmony or accordance in opinion or feeling.",
        chinese_explanation: "(C) '分裂'一词意味着由于意见或信仰的分歧而在强烈反对的部分或政党之间的分裂或分裂。" +
            "<br><br>" +
            "(A) '团结' 意味着联合或作为一个整体的状态。" +
            "<br><br>" +
            "(B) '和谐' 意味着协议或一致。" +
            "<br><br>" +
            "(D) '协议' 意味着意见或感觉上的和谐或一致。"
    },
    {
        id: 6,
        question: "The look of __________ on her face was unmistakable when she realized she had missed her flight.",
        chinese_question: "当她意识到自己错过了航班时，脸上的 __________ 是显而易见的。",
        answers: [
            { option: "A", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "B", answer: "consternation", chinese_answer: "惊愕", chinese_romanization: "jīng’è" },
            { option: "C", answer: "curiosity", chinese_answer: "好奇", chinese_romanization: "hàoqí" },
            { option: "D", answer: "satisfaction", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'consternation' figuratively means feelings of anxiety or dismay, typically at something unexpected." +
            "<br><br>" +
            "(A) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(C) 'curiosity' means a strong desire to know or learn something." +
            "<br><br>" +
            "(D) 'satisfaction' means fulfillment of one's wishes, expectations, or needs.",
        chinese_explanation: "(B) '惊愕' 在此语境下意指通常因意外事情引起的焦虑或惊慌的感觉。" +
            "<br><br>" +
            "(A) '兴奋' 意味着极大的热情和渴望的感觉。" +
            "<br><br>" +
            "(C) '好奇' 意味着强烈的求知欲。" +
            "<br><br>" +
            "(D) '满足' 意味着实现自己的愿望、期望或需要的状态。"
    },
    {
        id: 7,
        question: "Her constant requests for help felt like an __________ on her colleagues, who were also busy with their own tasks.",
        chinese_question: "她不断请求帮助让她的同事们感到是一种 __________，因为他们也忙于自己的任务。",
        answers: [
            { option: "A", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" },
            { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "C", answer: "imposition", chinese_answer: "强加", chinese_romanization: "qiángjiā" },
            { option: "D", answer: "favor", chinese_answer: "恩惠", chinese_romanization: "ēnhuì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'imposition' means the action or process of imposing something, especially a burden or obligation." +
            "<br><br>" +
            "(A) 'advantage' means a condition or circumstance that puts one in a favorable or superior position." +
            "<br><br>" +
            "(B) 'reward' means a thing given in recognition of one's service, effort, or achievement." +
            "<br><br>" +
            "(D) 'favor' means an act of kindness beyond what is due or usual.",
        chinese_explanation: "(C) '强加'一词意味着施加某物的行动或过程，尤其是负担或义务。" +
            "<br><br>" +
            "(A) '优势' 意味着使一个人处于有利或优越地位的条件或情况。" +
            "<br><br>" +
            "(B) '奖励' 意味着为表彰某人的服务、努力或成就而给予的事物。" +
            "<br><br>" +
            "(D) '恩惠' 意味着超出应得或通常情况下的善举。"
    },
    {
        id: 8,
        question: "The classroom was filled with __________ as students disagreed on how to approach the group project.",
        chinese_question: "教室里充满了 __________，因为学生们对如何进行小组项目意见不一。",
        answers: [
            { option: "A", answer: "discord", chinese_answer: "不和", chinese_romanization: "bùhé" },
            { option: "B", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "C", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
            { option: "D", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'discord' figuratively means a lack of harmony or agreement." +
            "<br><br>" +
            "(B) 'cooperation' means the process of working together to the same end." +
            "<br><br>" +
            "(C) 'unity' means the state of being united or joined as a whole." +
            "<br><br>" +
            "(D) 'agreement' means harmony or accordance in opinion or feeling.",
        chinese_explanation: "(A) '不和' 在此语境下意指缺乏和谐或一致。" +
            "<br><br>" +
            "(B) '合作' 意味着为同一个目标一起工作的过程。" +
            "<br><br>" +
            "(C) '团结' 意味着联合或作为一个整体的状态。" +
            "<br><br>" +
            "(D) '一致' 意味着意见或感觉上的一致或协调。"
    },
    {
        id: 9,
        question: "Despite the challenges, she pursued her goals with unwavering __________, never doubting her ability to succeed.",
        chinese_question: "尽管面临挑战，她仍然以坚定的 __________ 追求自己的目标，从不怀疑自己能否成功。",
        answers: [
            { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "conviction", chinese_answer: "信念", chinese_romanization: "xìnniàn" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conviction' means a firmly held belief or opinion." +
            "<br><br>" +
            "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'uncertainty' means the state of being unsure of something.",
        chinese_explanation: "(B) '信念'一词意味着坚定的信仰或意见。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '不确定' 意味着对某事不确定的状态。"
    },
    {
        id: 10,
        question: "The bar was known for frequent __________, often involving unruly patrons after too many drinks.",
        chinese_question: "这家酒吧因频繁的 __________ 而闻名，经常涉及喝得太多的粗鲁顾客。",
        answers: [
            { option: "A", answer: "brawls", chinese_answer: "斗殴", chinese_romanization: "dòu'ōu" },
            { option: "B", answer: "discussions", chinese_answer: "讨论", chinese_romanization: "tǎolùn" },
            { option: "C", answer: "meetings", chinese_answer: "会议", chinese_romanization: "huìyì" },
            { option: "D", answer: "gatherings", chinese_answer: "聚会", chinese_romanization: "jùhuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brawls' means a rough or noisy fight or quarrel." +
            "<br><br>" +
            "(B) 'discussions' means the action or process of talking about something to reach a decision or to exchange ideas." +
            "<br><br>" +
            "(C) 'meetings' means an assembly of people, especially the members of a society or committee, for discussion or entertainment." +
            "<br><br>" +
            "(D) 'gatherings' means an assembly or meeting, especially a social or festive one or one held for a specific purpose.",
        chinese_explanation: "(A) '斗殴' 意味着一场粗暴或喧闹的打斗或争吵。" +
            "<br><br>" +
            "(B) '讨论' 意味着讨论某事以达成决定或交换意见的行为或过程。" +
            "<br><br>" +
            "(C) '会议' 意味着人们的集会，尤其是社团或委员会成员的集会，进行讨论或娱乐。" +
            "<br><br>" +
            "(D) '聚会' 意味着一个集会，尤其是社交或节日的集会，或为特定目的举行的集会。"
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
