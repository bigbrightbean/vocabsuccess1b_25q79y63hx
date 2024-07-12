// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The activist spoke with such __________ that the entire audience was moved to action.",
        chinese_question: "这位活动家充满 __________ 地演讲，使得整个观众都被感动而行动起来。",
        answers: [
            { option: "A", answer: "fervour", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "apathy", chinese_answer: "冷淡", chinese_romanization: "lěngdàn" },
            { option: "D", answer: "disinterest", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fervour' means intense and passionate feeling." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'disinterest' means lack of interest in something.",
        chinese_explanation: "(A) '热情' 意味着强烈而热情的感情。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '冷淡' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着对某事缺乏兴趣。"
    },
    {
        id: 2,
        question: "Her sudden __________ from an inheritance allowed her to start her own business and buy a new home.",
        chinese_question: "她从继承中获得的突然 __________ 使她能够创业并购买新房。",
        answers: [
            { option: "A", answer: "misfortune", chinese_answer: "不幸", chinese_romanization: "bùxìng" },
            { option: "B", answer: "windfall", chinese_answer: "意外之财", chinese_romanization: "yìwài zhī cái" },
            { option: "C", answer: "disaster", chinese_answer: "灾难", chinese_romanization: "zāinàn" },
            { option: "D", answer: "dilemma", chinese_answer: "困境", chinese_romanization: "kùnjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'windfall' means a large amount of money that is won or received unexpectedly." +
            "<br><br>" +
            "(A) 'misfortune' means bad luck; an unfortunate condition or event." +
            "<br><br>" +
            "(C) 'disaster' means a sudden event, such as an accident or a natural catastrophe, that causes great damage or loss of life." +
            "<br><br>" +
            "(D) 'dilemma' means a situation in which a difficult choice has to be made between two or more alternatives, especially equally undesirable ones.",
        chinese_explanation: "(B) '意外之财'一词意味着意外获得的大笔钱。" +
            "<br><br>" +
            "(A) '不幸' 意味着坏运气；不幸的状况或事件。" +
            "<br><br>" +
            "(C) '灾难' 意味着突发事件，如事故或自然灾害，造成重大损失或生命损失。" +
            "<br><br>" +
            "(D) '困境' 意味着必须在两种或多种选择之间做出困难选择的情况，尤其是同样不受欢迎的选择。"
    },
    {
        id: 3,
        question: "The chef's __________ in the kitchen was evident in every dish he prepared, showcasing his exceptional talent and creativity.",
        chinese_question: "这位厨师在厨房里的 __________ 体现在他准备的每一道菜中，展示了他非凡的才华和创造力。",
        answers: [
            { option: "A", answer: "clumsiness", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
            { option: "B", answer: "prowess", chinese_answer: "英勇", chinese_romanization: "yīngyǒng" },
            { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "incompetence", chinese_answer: "无能", chinese_romanization: "wúnéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prowess' means skill or expertise in a particular activity or field; bravery in battle." +
            "<br><br>" +
            "(A) 'clumsiness' means awkwardness in movement or action." +
            "<br><br>" +
            "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(D) 'incompetence' means inability to do something successfully; ineptitude.",
        chinese_explanation: "(B) '英勇'一词意味着在特定活动或领域的技能或专长；战斗中的勇敢。" +
            "<br><br>" +
            "(A) '笨拙' 意味着动作或行为上的尴尬。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
            "<br><br>" +
            "(D) '无能' 意味着无法成功地做某事；无能。"
    },
    {
        id: 4,
        question: "The __________ of the river made it ideal for large boats to navigate through without difficulty.",
        chinese_question: "河流的 __________ 使得大型船只能够毫不困难地通过。",
        answers: [
            { option: "A", answer: "breadth", chinese_answer: "宽度", chinese_romanization: "kuāndù" },
            { option: "B", answer: "depth", chinese_answer: "深度", chinese_romanization: "shēndù" },
            { option: "C", answer: "height", chinese_answer: "高度", chinese_romanization: "gāodù" },
            { option: "D", answer: "length", chinese_answer: "长度", chinese_romanization: "chángdù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'breadth' means the distance or measurement from side to side of something; width." +
            "<br><br>" +
            "(B) 'depth' means the distance from the top or surface to the bottom of something." +
            "<br><br>" +
            "(C) 'height' means the measurement from base to top or (of a standing person) from head to foot." +
            "<br><br>" +
            "(D) 'length' means the measurement or extent of something from end to end.",
        chinese_explanation: "(A) '宽度' 意味着某物从一侧到另一侧的距离或测量；宽度。" +
            "<br><br>" +
            "(B) '深度' 意味着从顶部或表面到底部的距离。" +
            "<br><br>" +
            "(C) '高度' 意味着从底部到顶部的测量或（站立的人）从头到脚的测量。" +
            "<br><br>" +
            "(D) '长度' 意味着从一端到另一端的测量或范围。"
    },
    {
        id: 5,
        question: "The military officer instructed his __________ to carry out the mission with utmost precision and care.",
        chinese_question: "军官指示他的 __________ 以极大的精确和谨慎执行任务。",
        answers: [
            { option: "A", answer: "subordinate", chinese_answer: "下属", chinese_romanization: "xiàshǔ" },
            { option: "B", answer: "leader", chinese_answer: "领导", chinese_romanization: "lǐngdǎo" },
            { option: "C", answer: "ally", chinese_answer: "盟友", chinese_romanization: "méngyǒu" },
            { option: "D", answer: "veteran", chinese_answer: "退伍军人", chinese_romanization: "tuìwǔ jūnrén" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'subordinate' means a person under the authority or control of another within an organization." +
            "<br><br>" +
            "(B) 'leader' means a person who leads or commands a group, organization, or country." +
            "<br><br>" +
            "(C) 'ally' means a state formally cooperating with another for a military or other purpose." +
            "<br><br>" +
            "(D) 'veteran' means a person who has had long experience in a particular field.",
        chinese_explanation: "(A) '下属' 意味着在组织内受他人权威或控制的人。" +
            "<br><br>" +
            "(B) '领导' 意味着领导或指挥一个组织、国家或国家的人。" +
            "<br><br>" +
            "(C) '盟友' 意味着正式与另一国合作的国家，通常是为了军事或其他目的。" +
            "<br><br>" +
            "(D) '退伍军人' 意味着在特定领域有长期经验的人。"
    },
    {
        id: 6,
        question: "The company's success was built on the strategies and hard work of its __________.",
        chinese_question: "公司的成功建立在其 __________ 的战略和努力工作之上。",
        answers: [
            { option: "A", answer: "predecessors", chinese_answer: "前任", chinese_romanization: "qiánrèn" },
            { option: "B", answer: "rivals", chinese_answer: "竞争对手", chinese_romanization: "jìngzhēng duìshǒu" },
            { option: "C", answer: "clients", chinese_answer: "客户", chinese_romanization: "kèhù" },
            { option: "D", answer: "shareholders", chinese_answer: "股东", chinese_romanization: "gǔdōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'predecessors' figuratively means the people who were in a place or held a role before the current individuals." +
            "<br><br>" +
            "(B) 'rivals' means people or things competing with another for the same objective or for superiority in the same field of activity." +
            "<br><br>" +
            "(C) 'clients' means people or organizations using the services of a lawyer or other professional person or company." +
            "<br><br>" +
            "(D) 'shareholders' means owners of shares in a company.",
        chinese_explanation: "(A) '前任' 在此语境下意指在现任人员之前居住在某地或担任某角色的人。" +
            "<br><br>" +
            "(B) '竞争对手' 意味着在同一领域或活动中与另一人竞争相同目标或优势的人或事物。" +
            "<br><br>" +
            "(C) '客户' 意味着使用律师或其他专业人士或公司服务的个人或组织。" +
            "<br><br>" +
            "(D) '股东' 意味着公司股份的所有者。"
    },
    {
        id: 7,
      question: "The artist's latest work is an __________ of his earlier style, featuring bright colors instead of the usual dark tones.",
        chinese_question: "这位艺术家的最新作品是他早期风格的 __________，采用了明亮的颜色而不是通常的暗色调。",
        answers: [
            { option: "A", answer: "extension", chinese_answer: "延伸", chinese_romanization: "yánshēn" },
            { option: "B", answer: "inversion", chinese_answer: "颠倒", chinese_romanization: "diāndǎo" },
            { option: "C", answer: "enhancement", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "D", answer: "imitation", chinese_answer: "模仿", chinese_romanization: "mófǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inversion' means the action of inverting something or the state of being inverted, often referring to a reversal of normal order." +
            "<br><br>" +
            "(A) 'extension' means a part that is added to something to enlarge or prolong it." +
            "<br><br>" +
            "(C) 'enhancement' means an increase or improvement in quality, value, or extent." +
            "<br><br>" +
            "(D) 'imitation' means the action of using someone or something as a model.",
        chinese_explanation: "(B) '颠倒'一词意味着倒转某物的动作或状态，通常指正常顺序的颠倒。" +
            "<br><br>" +
            "(A) '延伸' 意味着为了扩大或延长而添加的部分。" +
            "<br><br>" +
            "(C) '提升' 意味着质量、价值或范围的增加或改进。" +
            "<br><br>" +
            "(D) '模仿' 意味着以某人或某物为模型的动作。"
    },
    {
        id: 8,
        question: "Her __________ for modern art was clear when she walked quickly past the exhibit without a second glance.",
        chinese_question: "她对现代艺术的 __________ 显而易见，她快速走过展览，没有再看一眼。",
        answers: [
            { option: "A", answer: "disdain", chinese_answer: "鄙视", chinese_romanization: "bǐshì" },
            { option: "B", answer: "fascination", chinese_answer: "着迷", chinese_romanization: "zhuómí" },
            { option: "C", answer: "appreciation", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" },
            { option: "D", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disdain' figuratively means the feeling that something is unworthy of consideration or respect." +
            "<br><br>" +
            "(B) 'fascination' means the power to attract; irresistible attraction." +
            "<br><br>" +
            "(C) 'appreciation' means the recognition and enjoyment of the good qualities of someone or something." +
            "<br><br>" +
            "(D) 'excitement' means a feeling of great enthusiasm and eagerness.",
        chinese_explanation: "(A) '鄙视' 在此语境下意指认为某事不值得考虑或尊重的感觉。" +
            "<br><br>" +
            "(B) '着迷' 意味着吸引力；不可抗拒的吸引力。" +
            "<br><br>" +
            "(C) '欣赏' 意味着对某人或某事的优良品质的认可和享受。" +
            "<br><br>" +
            "(D) '兴奋' 意味着极大的热情和渴望。"
    },
    {
        id: 9,
        question: "The dog's gentle __________ made it an ideal pet for families with young children.",
        chinese_question: "这只狗温和的 __________ 使它成为有小孩家庭的理想宠物。",
        answers: [
            { option: "A", answer: "instinct", chinese_answer: "本能", chinese_romanization: "běnnéng" },
            { option: "B", answer: "habit", chinese_answer: "习惯", chinese_romanization: "xíguàn" },
            { option: "C", answer: "temperament", chinese_answer: "性情", chinese_romanization: "xìngqíng" },
            { option: "D", answer: "reaction", chinese_answer: "反应", chinese_romanization: "fǎnyìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'temperament' means a person's or animal's nature, especially as it permanently affects their behavior." +
            "<br><br>" +
            "(A) 'instinct' means an innate, typically fixed pattern of behavior in animals in response to certain stimuli." +
            "<br><br>" +
            "(B) 'habit' means a settled or regular tendency or practice, especially one that is hard to give up." +
            "<br><br>" +
            "(D) 'reaction' means an action performed or a feeling experienced in response to a situation or event.",
        chinese_explanation: "(C) '性情'一词意味着一个人或动物的本性，尤其是它永久地影响他们的行为。" +
            "<br><br>" +
            "(A) '本能' 意味着动物在应对某些刺激时的一种先天的、通常是固定的行为模式。" +
            "<br><br>" +
            "(B) '习惯' 意味着一种固定的或定期的倾向或做法，尤其是很难放弃的。" +
            "<br><br>" +
            "(D) '反应' 意味着对情况或事件的反应动作或感觉。"
    },
    {
        id: 10,
        question: "Despite the passage of time, she still felt __________ towards her former friend for the betrayal.",
        chinese_question: "尽管时间流逝，她对前朋友的背叛仍然感到 __________。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "B", answer: "rancour", chinese_answer: "怨恨", chinese_romanization: "yuànhèn" },
            { option: "C", answer: "affection", chinese_answer: "爱", chinese_romanization: "ài" },
            { option: "D", answer: "gratitude", chinese_answer: "感激", chinese_romanization: "gǎnjī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rancour' means a feeling of deep and bitter anger and ill-will." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(C) 'affection' means a gentle feeling of fondness or liking." +
            "<br><br>" +
            "(D) 'gratitude' means the quality of being thankful; readiness to show appreciation for and to return kindness.",
        chinese_explanation: "(B) '怨恨'一词意味着深刻而苦涩的愤怒和恶意。" +
            "<br><br>" +
            "(A) '喜悦' 意味着极大的愉快和幸福感。" +
            "<br><br>" +
            "(C) '爱' 意味着一种温柔的喜欢或喜欢的感觉。" +
            "<br><br>" +
            "(D) '感激' 意味着感恩的品质；准备好表示感谢并回报善意。"
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
