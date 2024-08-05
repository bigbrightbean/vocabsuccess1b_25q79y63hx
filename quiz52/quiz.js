// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
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
        id: 2,
        question: "The __________ lights on the Christmas tree added a magical touch to the holiday decorations.",
        chinese_question: "圣诞树上的 __________ 灯光为节日装饰增添了一抹神奇的色彩。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "暗淡的", chinese_romanization: "àndàn de" },
            { option: "B", answer: "dim", chinese_answer: "昏暗的", chinese_romanization: "hūn'àn de" },
            { option: "C", answer: "scintillating", chinese_answer: "闪烁的", chinese_romanization: "shǎnshuò de" },
            { option: "D", answer: "lackluster", chinese_answer: "无光泽的", chinese_romanization: "wúguāngzé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scintillating' means sparkling or shining brightly." +
            "<br><br>" +
            "(A) 'dull' means lacking brightness, vividness, or sheen." +
            "<br><br>" +
            "(B) 'dim' means not shining brightly or clearly." +
            "<br><br>" +
            "(D) 'lackluster' means lacking in vitality, force, or conviction; uninspired or uninspiring.",
        chinese_explanation: "(C) '闪烁的' 意味着闪耀或明亮的。" +
            "<br><br>" +
            "(A) '暗淡的' 意味着缺乏亮度、鲜艳度或光泽的。" +
            "<br><br>" +
            "(B) '昏暗的' 意味着不明亮或清晰的。" +
            "<br><br>" +
            "(D) '无光泽的' 意味着缺乏活力、力量或信念的；无趣的或不激励人心的。"
    },
    {
        id: 3,
        question: "Her __________ approach to politics meant she focused on what could realistically be achieved rather than lofty ideals.",
        chinese_question: "她对政治的 __________ 方法意味着她专注于现实可实现的事情，而不是崇高的理想。",
        answers: [
            { option: "A", answer: "utopian", chinese_answer: "乌托邦式的", chinese_romanization: "wūtuōbāng shì de" },
            { option: "B", answer: "pragmatist", chinese_answer: "实用主义者", chinese_romanization: "shíyòng zhǔyì zhě" },
            { option: "C", answer: "romantic", chinese_answer: "浪漫主义者", chinese_romanization: "làngmàn zhǔyì zhě" },
            { option: "D", answer: "dreamer", chinese_answer: "梦想家", chinese_romanization: "mèngxiǎngjiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pragmatist' means a person who is guided more by practical considerations than by ideals." +
            "<br><br>" +
            "(A) 'utopian' means modeled on or aiming for a state in which everything is perfect; idealistic." +
            "<br><br>" +
            "(C) 'romantic' means a person who is characterized by or suggests impractical and idealized views of life." +
            "<br><br>" +
            "(D) 'dreamer' means a person who spends a lot of time thinking about or planning enjoyable events that are not likely to happen.",
        chinese_explanation: "(B) '实用主义者'一词意味着一个更多地受到实际考虑而不是理想指导的人。" +
            "<br><br>" +
            "(A) '乌托邦式的' 意味着以一切都完美的状态为模型或目标；理想主义的。" +
            "<br><br>" +
            "(C) '浪漫主义者' 意味着一个以不切实际和理想化的生活观为特征或暗示的人。" +
            "<br><br>" +
            "(D) '梦想家' 意味着一个花很多时间思考或计划不太可能发生的愉快事件的人。"
    },
    {
        id: 4,
        question: "Her voice was so __________ that it left the audience spellbound.",
        chinese_question: "她的声音如此 __________ ，让观众听得如痴如醉。",
        answers: [
            { option: "A", answer: "enchanting", chinese_answer: "迷人", chinese_romanization: "mí rén" },
            { option: "B", answer: "harsh", chinese_answer: "刺耳", chinese_romanization: "cì'ěr" },
            { option: "C", answer: "grating", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "D", answer: "monotonous", chinese_answer: "单调", chinese_romanization: "dāndiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enchanting' means delightfully charming or attractive." +
            "<br><br>" +
            "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(C) 'grating' means sounding harsh and unpleasant." +
            "<br><br>" +
            "(D) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest.",
        chinese_explanation: "(A) '迷人' 意味着令人愉快地迷人或有吸引力的。" +
            "<br><br>" +
            "(B) '刺耳' 意味着不愉快地粗糙或刺耳。" +
            "<br><br>" +
            "(C) '刺激' 意味着听起来粗糙和不愉快。" +
            "<br><br>" +
            "(D) '单调' 意味着乏味、冗长和重复；缺乏多样性和兴趣。"
    },
    {
        id: 5,
        question: "The car came to a __________ stop when the driver slammed on the brakes to avoid hitting a deer.",
        chinese_question: "当司机猛踩刹车以避免撞到一只鹿时，汽车 __________ 停了下来。",
        answers: [
            { option: "A", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
            { option: "B", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "sudden", chinese_answer: "突然的", chinese_romanization: "tūrán de" },
            { option: "D", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sudden' means occurring or done quickly and unexpectedly or without warning." +
            "<br><br>" +
            "(A) 'gradual' means taking place or progressing slowly or by degrees." +
            "<br><br>" +
            "(B) 'gentle' means mild in temperament or behavior; kind or tender." +
            "<br><br>" +
            "(D) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast.",
        chinese_explanation: "(C) '突然的' 意味着快速和出乎意料地或没有警告地发生或完成。" +
            "<br><br>" +
            "(A) '逐渐的' 意味着慢慢地或逐步发生的。" +
            "<br><br>" +
            "(B) '温和的' 意味着性情温和或行为温和；善良或温柔的。" +
            "<br><br>" +
            "(D) '缓慢的' 意味着移动或操作，或设计为仅以低速进行；不快的。"
    },
    {
        id: 6,
        question: "Despite the chaos, he remained __________ and calm.",
        chinese_question: "尽管一片混乱，他仍然保持__________和冷静。",
        answers: [
            { option: "A", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
            { option: "B", answer: "stoic", chinese_answer: "坚忍的", chinese_romanization: "jiānrěn de" },
            { option: "C", answer: "emotional", chinese_answer: "情绪化的", chinese_romanization: "qíngxù huà de" },
            { option: "D", answer: "panicked", chinese_answer: "惊慌的", chinese_romanization: "jīnghuāng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stoic' means enduring pain and hardship without showing one's feelings or complaining." +
            "<br><br>" +
            "(A) 'anxious' means feeling or showing worry, nervousness, or unease about something with an uncertain outcome." +
            "<br><br>" +
            "(C) 'emotional' means showing strong feelings." +
            "<br><br>" +
            "(D) 'panicked' means feeling or characterized by uncontrollable fear or anxiety.",
        chinese_explanation: "(B) '坚忍的'一词意味着在忍受痛苦和困难时不表现自己的情感或不抱怨。" +
            "<br><br>" +
            "(A) '焦虑的' 意味着对结果不确定的事情感到担心、紧张或不安。" +
            "<br><br>" +
            "(C) '情绪化的' 意味着表现出强烈的感情。" +
            "<br><br>" +
            "(D) '惊慌的' 意味着感到或表现出无法控制的恐惧或焦虑。"
    },
    {
        id: 7,
        question: "The __________ goal of the project is to improve community health and wellness, and the secondary goal is to promote environmental sustainability.",
        chinese_question: "项目的 __________ 目标是改善社区健康和福祉，次要目标是促进环境可持续性。",
        answers: [
            { option: "A", answer: "primary", chinese_answer: "主要", chinese_romanization: "zhǔyào" },
            { option: "B", answer: "secondary", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "C", answer: "optional", chinese_answer: "可选", chinese_romanization: "kěxuǎn" },
            { option: "D", answer: "insignificant", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐn yào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'primary' means of chief importance; principal." +
            "<br><br>" +
            "(B) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary." +
            "<br><br>" +
            "(C) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(A) '主要' 意味着最重要的；主要的。" +
            "<br><br>" +
            "(B) '次要' 意味着排在后面的、不如主要的或由主要的某物引起的。" +
            "<br><br>" +
            "(C) '可选' 意味着可供选择但不是强制性的。" +
            "<br><br>" +
            "(D) '无关紧要' 意味着太小或不重要而不值得考虑。"
    },
    {
        id: 8,
        question: "The parents were __________ by their child's sudden decision to drop out of college and travel the world.",
        chinese_question: "父母对孩子突然决定辍学环游世界感到 __________ 。",
        answers: [
            { option: "A", answer: "delighted", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "nonplused", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "C", answer: "indifferent", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
            { option: "D", answer: "entertained", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nonplused' means to surprise and confuse someone so much that they are unsure how to react." +
            "<br><br>" +
            "(A) 'delighted' means feeling great pleasure." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'entertained' means to provide someone with amusement or enjoyment.",
        chinese_explanation: "(B) '使困惑' 意味着让某人感到惊讶和困惑，以至于他们不确定如何反应。" +
            "<br><br>" +
            "(A) '高兴' 意味着感到很大的快乐。" +
            "<br><br>" +
            "(C) '无动于衷' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(D) '娱乐' 意味着为某人提供娱乐或享受。"
    },
    {
        id: 9,
        question: "The journalist provided __________ evidence in the article, including detailed statistics, numerous eyewitness accounts, and expert testimonies.",
        chinese_question: "记者在文章中提供了 __________ 的证据，包括详细的统计数据、大量的目击者证词和专家的证词。",
        answers: [
            { option: "A", answer: "sparse", chinese_answer: "稀少的", chinese_romanization: "xīshǎo de" },
            { option: "B", answer: "insufficient", chinese_answer: "不足的", chinese_romanization: "bùzú de" },
            { option: "C", answer: "scant", chinese_answer: "不足的", chinese_romanization: "bùzú de" },
            { option: "D", answer: "copious", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'copious' means abundant in supply or quantity." +
            "<br><br>" +
            "(A) 'sparse' means thinly dispersed or scattered." +
            "<br><br>" +
            "(B) 'insufficient' means not enough; inadequate." +
            "<br><br>" +
            "(C) 'scant' means barely sufficient or adequate.",
        chinese_explanation: "(D) '丰富的' 意味着供应或数量充足。" +
            "<br><br>" +
            "(A) '稀少的' 意味着稀疏分布或分散的。" +
            "<br><br>" +
            "(B) '不足的' 意味着不够的；不足的。" +
            "<br><br>" +
            "(C) '不足的' 意味着几乎足够或足够的。"
    },
    {
        id: 10,
        question: "The horse was __________, easily startled by loud noises and sudden movements.",
        chinese_question: "那匹马非常 __________，很容易被大声的噪音和突然的动作吓到。",
        answers: [
            { option: "A", answer: "skittish", chinese_answer: "容易受惊的", chinese_romanization: "róngyì shòujīng de" },
            { option: "B", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "C", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "D", answer: "composed", chinese_answer: "镇定的", chinese_romanization: "zhèndìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'skittish' means nervous or easily frightened." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(C) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(D) 'composed' means having one's feelings and expression under control; calm.",
        chinese_explanation: "(A) '容易受惊的' 意味着紧张的或容易受惊的。" +
            "<br><br>" +
            "(B) '平静的' 意味着不表现或感觉紧张、愤怒或其他强烈情绪的。" +
            "<br><br>" +
            "(C) '稳定的' 意味着牢固固定、支持或平衡的；不摇晃或移动的。" +
            "<br><br>" +
            "(D) '镇定的' 意味着控制自己的情绪和表达的；平静的。"
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
