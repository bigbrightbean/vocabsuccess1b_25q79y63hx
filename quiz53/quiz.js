// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Their decision to go on a weekend trip was __________, made without any prior planning or preparation.",
        chinese_question: "他们周末旅行的决定是 __________ 的，没有任何事先的计划或准备。",
        answers: [
            { option: "A", answer: "spur-of-the-moment", chinese_answer: "一时冲动的", chinese_romanization: "yīshí chōngdòng de" },
            { option: "B", answer: "premeditated", chinese_answer: "预谋的", chinese_romanization: "yùmóu de" },
            { option: "C", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
            { option: "D", answer: "calculated", chinese_answer: "经过深思熟虑的", chinese_romanization: "jīngguò shēnsī shúlǜ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spur-of-the-moment' means done suddenly without planning." +
            "<br><br>" +
            "(B) 'premeditated' means thought out or planned beforehand." +
            "<br><br>" +
            "(C) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'calculated' means done with full awareness of the likely consequences.",
        chinese_explanation: "(A) '一时冲动的' 意味着突然做出的，没有计划的。" +
            "<br><br>" +
            "(B) '预谋的' 意味着事先思考或计划的。" +
            "<br><br>" +
            "(C) '故意的' 意味着有意识和故意做出的。" +
            "<br><br>" +
            "(D) '经过深思熟虑的' 意味着充分意识到可能的后果后做出的。"
    },
    {
        id: 2,
        question: "She appreciated his __________ feedback, even when it was difficult to hear.",
        chinese_question: "她欣赏他 __________ 的反馈，即使有时听起来很难受。",
        answers: [
            { option: "A", answer: "forthright", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "B", answer: "misleading", chinese_answer: "误导的", chinese_romanization: "wùdǎo de" },
            { option: "C", answer: "deceptive", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" },
            { option: "D", answer: "unclear", chinese_answer: "不清楚的", chinese_romanization: "bù qīngchǔ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'forthright' means direct and outspoken; straightforward and honest." +
            "<br><br>" +
            "(B) 'misleading' means giving the wrong idea or impression." +
            "<br><br>" +
            "(C) 'deceptive' means giving an appearance or impression different from the true one; misleading." +
            "<br><br>" +
            "(D) 'unclear' means not easy to see, hear, or understand.",
        chinese_explanation: "(A) '直率的' 意味着直接和坦率的；直截了当的。" +
            "<br><br>" +
            "(B) '误导的' 意味着给人错误的想法或印象的。" +
            "<br><br>" +
            "(C) '欺骗的' 意味着给人一种与真实情况不同的外观或印象的；误导的。" +
            "<br><br>" +
            "(D) '不清楚的' 意味着不容易看到、听到或理解的。"
    },
    {
        id: 3,
        question: "The __________ speech moved many to take action, sparking a wave of change.",
        chinese_question: "那篇 __________ 的演讲让许多人采取行动，掀起了一股变革的浪潮。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "B", answer: "boring", chinese_answer: "乏味", chinese_romanization: "fáwèi" },
            { option: "C", answer: "influential", chinese_answer: "有影响力", chinese_romanization: "yǒu yǐngxiǎng lì" },
            { option: "D", answer: "monotonous", chinese_answer: "单调", chinese_romanization: "dāndiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'influential' means having the power to have an effect on people or events." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'boring' means not interesting." +
            "<br><br>" +
            "(D) 'monotonous' means dull, tedious, and repetitious.",
        chinese_explanation: "(C) '有影响力' 意味着有能力对人或事件产生影响。" +
            "<br><br>" +
            "(A) '无聊' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(B) '乏味' 意味着没有趣味。" +
            "<br><br>" +
            "(D) '单调' 意味着乏味、冗长和重复。"
    },
    {
        id: 4,
        question: "The author’s __________ of fans eagerly awaited the release of her next novel.",
        chinese_question: "这位作者的 __________ 粉丝热切地期待着她下一本小说的发布。",
        answers: [
            { option: "A", answer: "legion", chinese_answer: "大量", chinese_romanization: "dàliàng" },
            { option: "B", answer: "handful", chinese_answer: "少数", chinese_romanization: "shǎoshù" },
            { option: "C", answer: "couple", chinese_answer: "一对", chinese_romanization: "yīduì" },
            { option: "D", answer: "few", chinese_answer: "几个", chinese_romanization: "jǐ gè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'legion' means a large number." +
            "<br><br>" +
            "(B) 'handful' means a small number or amount." +
            "<br><br>" +
            "(C) 'couple' means two individuals of the same sort considered together." +
            "<br><br>" +
            "(D) 'few' means a small number of.",
        chinese_explanation: "(A) '大量'一词意味着数量庞大。" +
            "<br><br>" +
            "(B) '少数' 意味着数量少。" +
            "<br><br>" +
            "(C) '一对' 意味着两个同类的个体一起考虑。" +
            "<br><br>" +
            "(D) '几个' 意味着数量少。"
    },
    {
        id: 5,
        question: "The __________ lion roared loudly, sending chills down the spines of the onlookers.",
        chinese_question: "那只 __________ 的狮子大声咆哮，令观众们感到毛骨悚然。",
        answers: [
            { option: "A", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "B", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" },
            { option: "C", answer: "ferocious", chinese_answer: "凶猛的", chinese_romanization: "xiōngměng de" },
            { option: "D", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ferocious' means savagely fierce, cruel, or violent." +
            "<br><br>" +
            "(A) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(C) '凶猛的' 意味着非常凶猛、残忍或暴力的。" +
            "<br><br>" +
            "(A) '胆小的' 意味着表现出缺乏勇气或信心；容易受惊的。" +
            "<br><br>" +
            "(B) '温柔的' 意味着具有或表现出温和、善良或温柔的性格或特征。" +
            "<br><br>" +
            "(D) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈情绪的。"
    },
    {
        id: 6,
        question: "His facial features were __________, making him look like a classical statue.",
        chinese_question: "他的面部特征 __________ ，使他看起来像一座古典雕像。",
        answers: [
            { option: "A", answer: "chiselled", chinese_answer: "分明", chinese_romanization: "fēnmíng" },
            { option: "B", answer: "softened", chinese_answer: "柔化", chinese_romanization: "róuhuà" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "blurred", chinese_answer: "模糊", chinese_romanization: "móhu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chiselled' means having clean, sharp, and well-defined features, especially used to describe a person's face." +
            "<br><br>" +
            "(B) 'softened' means to make or become less hard." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'blurred' means to make or become unclear or less distinct.",
        chinese_explanation: "(A) '分明' 意味着干净、锐利、轮廓分明的特征，尤其用于描述一个人的面部。" +
            "<br><br>" +
            "(B) '柔化' 意味着使变得不那么硬。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '模糊' 意味着使变得不清楚或不那么明显。"
    },
    {
        id: 7,
        question: "The __________ coat was warm but made it difficult for him to move around.",
        chinese_question: "这个 __________ 的外套很暖和，但让他很难活动。",
        answers: [
            { option: "A", answer: "lightweight", chinese_answer: "轻便", chinese_romanization: "qīngbiàn" },
            { option: "B", answer: "fitted", chinese_answer: "合身", chinese_romanization: "héshēn" },
            { option: "C", answer: "bulky", chinese_answer: "笨重", chinese_romanization: "bènzhòng" },
            { option: "D", answer: "snug", chinese_answer: "舒适", chinese_romanization: "shūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bulky' means taking up much space, typically large and unwieldy." +
            "<br><br>" +
            "(A) 'lightweight' means light in weight." +
            "<br><br>" +
            "(B) 'fitted' means made to fit closely." +
            "<br><br>" +
            "(D) 'snug' means comfortably tight or close-fitting.",
        chinese_explanation: "(C) '笨重' 意味着占用很多空间，通常是大而笨拙的。" +
            "<br><br>" +
            "(A) '轻便' 意味着重量轻。" +
            "<br><br>" +
            "(B) '合身' 意味着贴身的。" +
            "<br><br>" +
            "(D) '舒适' 意味着舒适紧密的。"
    },
    {
        id: 8,
        question: "The system settings will revert to __________ if no user preferences are saved.",
        chinese_question: "如果未保存用户偏好，系统设置将恢复为 __________。",
        answers: [
            { option: "A", answer: "advanced", chinese_answer: "高级", chinese_romanization: "gāojí" },
            { option: "B", answer: "customized", chinese_answer: "定制", chinese_romanization: "dìngzhì" },
            { option: "C", answer: "updated", chinese_answer: "更新", chinese_romanization: "gēngxīn" },
            { option: "D", answer: "default", chinese_answer: "默认", chinese_romanization: "mòrèn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'default' means a preselected option adopted by a computer program or other mechanism when no alternative is specified by the user." +
            "<br><br>" +
            "(A) 'advanced' means ahead in development or progress." +
            "<br><br>" +
            "(B) 'customized' means modified to suit a particular individual or task." +
            "<br><br>" +
            "(C) 'updated' means made more modern or up to date.",
        chinese_explanation: "(D) '默认' 意味着在用户未指定其他选项时由计算机程序或其他机制采用的预选选项。" +
            "<br><br>" +
            "(A) '高级' 意味着在发展或进步方面领先。" +
            "<br><br>" +
            "(B) '定制' 意味着根据特定个人或任务进行修改。" +
            "<br><br>" +
            "(C) '更新' 意味着变得更现代或更新。"
    },
    {
        id: 9,
        question: "The teacher's __________ voice could be heard clearly across the entire classroom.",
        chinese_question: "老师的__________声音可以在整个教室清晰地听到。",
        answers: [
            { option: "A", answer: "soft", chinese_answer: "轻柔的", chinese_romanization: "qīngróu de" },
            { option: "B", answer: "strident", chinese_answer: "刺耳的", chinese_romanization: "cìěr de" },
            { option: "C", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" },
            { option: "D", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ānjìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'strident' means loud and harsh; grating." +
            "<br><br>" +
            "(A) 'soft' means easy to mold, cut, compress, or fold; not hard or firm to the touch." +
            "<br><br>" +
            "(C) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(D) 'quiet' means making little or no noise.",
        chinese_explanation: "(B) '刺耳的'一词意味着大声且刺耳；摩擦声。" +
            "<br><br>" +
            "(A) '轻柔的' 意味着易于塑造、切割、压缩或折叠；不硬或不坚实。" +
            "<br><br>" +
            "(C) '温柔的' 意味着有或表现出温和、善良或温柔的性格或特征。" +
            "<br><br>" +
            "(D) '安静的' 意味着没有或几乎没有噪音。"
    },
    {
        id: 10,
        question: "She was __________ when her secret was accidentally revealed to everyone.",
        chinese_question: "当她的秘密被意外地泄露给所有人时，她感到 __________ 。",
        answers: [
            { option: "A", answer: "excited", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "B", answer: "mortified", chinese_answer: "尴尬", chinese_romanization: "gāngà" },
            { option: "C", answer: "entertained", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
            { option: "D", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mortified' means to feel extremely embarrassed or ashamed." +
            "<br><br>" +
            "(A) 'excited' means very enthusiastic and eager." +
            "<br><br>" +
            "(C) 'entertained' means to provide someone with amusement or enjoyment." +
            "<br><br>" +
            "(D) 'relaxed' means free from tension and anxiety.",
        chinese_explanation: "(B) '尴尬' 意味着感到极度尴尬或羞愧。" +
            "<br><br>" +
            "(A) '兴奋' 意味着非常热情和渴望。" +
            "<br><br>" +
            "(C) '娱乐' 意味着为某人提供娱乐或享受。" +
            "<br><br>" +
            "(D) '放松' 意味着无紧张和焦虑。"
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
