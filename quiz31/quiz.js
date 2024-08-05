// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The teacher's __________ grading system confused the students, as it seemed to lack any clear criteria.",
    chinese_question: "老师 __________ 的评分系统让学生感到困惑，因为它似乎没有任何明确的标准。",
    answers: [
        { option: "A", answer: "systematic", chinese_answer: "系统的", chinese_romanization: "xìtǒng de" },
        { option: "B", answer: "logical", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
        { option: "C", answer: "arbitrary", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
        { option: "D", answer: "fair", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'arbitrary' means based on random choice or personal whim, rather than any reason or system." +
        "<br><br>" +
        "(A) 'systematic' means done or acting according to a fixed plan or system; methodical." +
        "<br><br>" +
        "(B) 'logical' means of or according to the rules of logic or formal argument." +
        "<br><br>" +
        "(D) 'fair' means in accordance with the rules or standards; legitimate.",
    chinese_explanation: "(C) '随意的' 意味着基于随机选择或个人随意，而不是任何理由或系统。" +
        "<br><br>" +
        "(A) '系统的' 意味着根据固定计划或系统进行的；有条理的。" +
        "<br><br>" +
        "(B) '合理的' 意味着符合逻辑或正式论证的规则。" +
        "<br><br>" +
        "(D) '公平的' 意味着符合规则或标准的；合法的。"
    },
    {
        id: 2,
        question: "The water in the pond was so __________ that you couldn't see the bottom, making it difficult to know how deep it was.",
        chinese_question: "池塘里的水非常 __________，你看不见底部，使得很难知道它有多深。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清澈的", chinese_romanization: "qīngchè de" },
            { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "C", answer: "murky", chinese_answer: "浑浊的", chinese_romanization: "húnzhuó de" },
            { option: "D", answer: "clean", chinese_answer: "干净的", chinese_romanization: "gānjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'murky' means dark and gloomy, especially due to thick mist or dirt." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'transparent' means allowing light to pass through so that objects behind can be distinctly seen." +
            "<br><br>" +
            "(D) 'clean' means free from dirt, marks, or stains.",
        chinese_explanation: "(C) '浑浊的' 意味着黑暗和阴沉的，尤其是由于浓雾或泥土。" +
            "<br><br>" +
            "(A) '清澈的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(B) '透明的' 意味着允许光线通过，使得后面的物体可以清晰地看到。" +
            "<br><br>" +
            "(D) '干净的' 意味着没有污垢、痕迹或污渍的。"
    },
    {
        id: 3,
        question: "The old woman had a __________ belief that breaking a mirror would bring seven years of bad luck.",
        chinese_question: "这位老妇人有一个 __________ 的信念，认为打破镜子会带来七年的厄运。",
        answers: [
            { option: "A", answer: "superstitious", chinese_answer: "迷信的", chinese_romanization: "míxìn de" },
            { option: "B", answer: "logical", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "C", answer: "scientific", chinese_answer: "科学的", chinese_romanization: "kēxué de" },
            { option: "D", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'superstitious' means having beliefs based on superstition rather than reason or knowledge." +
            "<br><br>" +
            "(B) 'logical' means reasonable or following a clear, rational pattern." +
            "<br><br>" +
            "(C) 'scientific' means based on or characterized by the methods and principles of science." +
            "<br><br>" +
            "(D) 'skeptical' means having doubts or reservations.",
        chinese_explanation: "(A) '迷信的' 意味着基于迷信而不是理性或知识的信念。" +
            "<br><br>" +
            "(B) '合理的' 意味着合理或遵循清晰、合理的模式。" +
            "<br><br>" +
            "(C) '科学的' 意味着基于科学的方法和原则。" +
            "<br><br>" +
            "(D) '怀疑的' 意味着有疑虑或保留意见。"
    },
    {
        id: 4,
        question: "Writing a letter to someone who has moved away without a forwarding address is __________, because there is no way for them to receive it.",
        chinese_question: "给一个搬走了且没有留下转寄地址的人写信是 __________ 的，因为他们不可能收到信。",
        answers: [
            { option: "A", answer: "futile", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "B", answer: "meaningful", chinese_answer: "有意义的", chinese_romanization: "yǒu yìyì de" },
            { option: "C", answer: "rewarding", chinese_answer: "有回报的", chinese_romanization: "yǒu huíbào de" },
            { option: "D", answer: "crucial", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'futile' means incapable of producing any useful result; pointless." +
            "<br><br>" +
            "(B) 'meaningful' means having a serious, important, or useful quality or purpose." +
            "<br><br>" +
            "(C) 'rewarding' means providing satisfaction; gratifying." +
            "<br><br>" +
            "(D) 'crucial' means decisive or critical, especially in the success or failure of something.",
        chinese_explanation: "(A) '无效的' 意味着无法产生任何有用的结果；无意义的。" +
            "<br><br>" +
            "(B) '有意义的' 意味着具有严肃、重要或有用的质量或目的。" +
            "<br><br>" +
            "(C) '有回报的' 意味着提供满足感的；令人满意的。" +
            "<br><br>" +
            "(D) '关键的' 意味着决定性或关键的，尤其是在成功或失败方面。"
    },
    {
        id: 5,
        question: "The children listened to the __________ story with wide-eyed wonder.",
        chinese_question: "孩子们带着惊讶的目光听着这个 __________ 的故事。",
        answers: [
            { option: "A", answer: "enchanting", chinese_answer: "迷人", chinese_romanization: "mí rén" },
            { option: "B", answer: "boring", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "C", answer: "tedious", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "D", answer: "mundane", chinese_answer: "平凡", chinese_romanization: "píngfán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enchanting' means delightfully charming or attractive." +
            "<br><br>" +
            "(B) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(C) 'tedious' means too long, slow, or dull; tiresome or monotonous." +
            "<br><br>" +
            "(D) 'mundane' means lacking interest or excitement; dull.",
        chinese_explanation: "(A) '迷人' 意味着令人愉快地迷人或有吸引力的。" +
            "<br><br>" +
            "(B) '无聊' 意味着不有趣；乏味。" +
            "<br><br>" +
            "(C) '冗长' 意味着太长、太慢或太沉闷；乏味或单调。" +
            "<br><br>" +
            "(D) '平凡' 意味着缺乏兴趣或兴奋；乏味。"
    },
    {
        id: 6,
        question: "Her __________ smile made her instantly likeable to everyone she met.",
        chinese_question: "她的 __________ 微笑让她瞬间被所有遇见她的人所喜欢。",
        answers: [
            { option: "A", answer: "endearing", chinese_answer: "讨人喜欢", chinese_romanization: "tǎo rén xǐhuān" },
            { option: "B", answer: "harsh", chinese_answer: "刺耳", chinese_romanization: "cìěr" },
            { option: "C", answer: "unpleasant", chinese_answer: "令人不快", chinese_romanization: "lìng rén bù kuài" },
            { option: "D", answer: "cold", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endearing' means inspiring affection." +
            "<br><br>" +
            "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(C) 'unpleasant' means causing discomfort, unhappiness, or revulsion." +
            "<br><br>" +
            "(D) 'cold' means lacking affection or warmth of feeling.",
        chinese_explanation: "(A) '讨人喜欢' 意味着激发喜爱的。" +
            "<br><br>" +
            "(B) '刺耳' 意味着不愉快地粗糙或刺耳。" +
            "<br><br>" +
            "(C) '令人不快' 意味着引起不适、不愉快或厌恶。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏感情或温暖的感觉。"
    },
    {
        id: 7,
        question: "Despite his great success, he remained __________ and always credited his team for the achievements.",
        chinese_question: "尽管取得了巨大成功，他仍然保持 __________ ，并总是将成就归功于他的团队。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "B", answer: "arrogant", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
            { option: "C", answer: "boastful", chinese_answer: "自夸", chinese_romanization: "zìkuā" },
            { option: "D", answer: "proud", chinese_answer: "自豪", chinese_romanization: "zìháo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(B) 'arrogant' means having or revealing an exaggerated sense of one's own importance or abilities." +
            "<br><br>" +
            "(C) 'boastful' means showing excessive pride and self-satisfaction in one's achievements, possessions, or abilities." +
            "<br><br>" +
            "(D) 'proud' means feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions.",
        chinese_explanation: "(A) '谦虚' 意味着对自己的重要性有或表现出适度或低估。" +
            "<br><br>" +
            "(B) '傲慢' 意味着有或透露出自己重要性或能力的夸大感觉。" +
            "<br><br>" +
            "(C) '自夸' 意味着对自己的成就、财产或能力表现出过度的自豪和自满。" +
            "<br><br>" +
            "(D) '自豪' 意味着因自己的成就、品质或财产感到深深的愉悦或满足。"
    },
    {
        id: 8,
        question: "The plant's __________ leaves were a sign that it needed more water.",
        chinese_question: "这棵植物的 __________ 叶子表明它需要更多的水。",
        answers: [
            { option: "A", answer: "firm", chinese_answer: "坚固的", chinese_romanization: "jiāngù de" },
            { option: "B", answer: "energetic", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
            { option: "C", answer: "limp", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
            { option: "D", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'limp' means lacking firmness or structure; not stiff or strong." +
            "<br><br>" +
            "(A) 'firm' means having a solid, almost unyielding surface or structure." +
            "<br><br>" +
            "(B) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'strong' means having the power to move heavy weights or perform other physically demanding tasks.",
        chinese_explanation: "(C) '无力的' 意味着缺乏坚固性或结构；不坚挺或不强壮。" +
            "<br><br>" +
            "(A) '坚固的' 意味着具有坚固、几乎不屈服的表面或结构。" +
            "<br><br>" +
            "(B) '充满活力的' 意味着显示或涉及很大的活动或活力。" +
            "<br><br>" +
            "(D) '强壮的' 意味着有能力移动重物或执行其他体力要求高的任务。"
    },
    {
        id: 9,
        question: "She felt __________ by the accusation, as she believed she had done nothing wrong.",
        chinese_question: "她对指控感到 __________ ，因为她认为自己没有做错任何事。",
        answers: [
            { option: "A", answer: "aggrieved", chinese_answer: "感到痛苦", chinese_romanization: "gǎndào tòngkǔ" },
            { option: "B", answer: "delighted", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "C", answer: "indifferent", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
            { option: "D", answer: "amused", chinese_answer: "觉得好笑", chinese_romanization: "juéde hǎoxiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aggrieved' means feeling resentment at having been unfairly treated." +
            "<br><br>" +
            "(B) 'delighted' means feeling or showing great pleasure." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'amused' means finding something funny or entertaining.",
        chinese_explanation: "(A) '感到痛苦' 意味着感到被不公平对待的怨恨。" +
            "<br><br>" +
            "(B) '高兴' 意味着感到或表现出极大的快乐。" +
            "<br><br>" +
            "(C) '无动于衷' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '觉得好笑' 意味着觉得某事有趣或有娱乐性。"
    },
    {
        id: 10,
        question: "A __________ mindset can help individuals stay resilient in the face of adversity.",
        chinese_question: "__________ 的心态可以帮助人们在逆境中保持坚韧。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "sturdy", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "C", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "D", answer: "delicate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sturdy' means having resolute determination." +
            "<br><br>" +
            "(A) 'weak' means lacking physical strength or vigor." +
            "<br><br>" +
            "(C) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(D) 'delicate' means easily broken or damaged; fragile.",
        chinese_explanation: "(B) '坚定的' 意味着有坚定的决心。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏体力或活力。" +
            "<br><br>" +
            "(C) '脆弱的' 意味着容易破碎或损坏。" +
            "<br><br>" +
            "(D) '精致的' 意味着容易破碎或损坏；脆弱的。"
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
