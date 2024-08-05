// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "For a successful project, clear communication is __________ and cannot be overlooked.",
        chinese_question: "对于一个成功的项目，清晰的沟通是 __________ 的，不能被忽视。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "paramount", chinese_answer: "最重要的", chinese_romanization: "zuì zhòngyào de" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēi bùzú dào de" },
            { option: "D", answer: "inconsequential", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paramount' means more important than anything else; supreme." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(D) 'inconsequential' means not important or significant.",
        chinese_explanation: "(B) '最重要的' 意味着比其他任何事情都重要的；至高无上的。" +
            "<br><br>" +
            "(A) '次要的' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着如此小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(D) '无关紧要的' 意味着不重要或不显著的。"
    },
    {
        id: 2,
        question: "The detective's theory seemed __________, given the evidence collected from the crime scene.",
        chinese_question: "鉴于从犯罪现场收集的证据，侦探的理论看起来是 __________ 的。",
        answers: [
            { option: "A", answer: "implausible", chinese_answer: "不可信的", chinese_romanization: "bù kěxìn de" },
            { option: "B", answer: "unreasonable", chinese_answer: "不合理的", chinese_romanization: "bù hélǐ de" },
            { option: "C", answer: "plausible", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
            { option: "D", answer: "irrational", chinese_answer: "不理智的", chinese_romanization: "bù lǐzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'plausible' means seeming reasonable or probable." +
            "<br><br>" +
            "(A) 'implausible' means not seeming reasonable or probable." +
            "<br><br>" +
            "(B) 'unreasonable' means not guided by or based on good sense." +
            "<br><br>" +
            "(D) 'irrational' means not logical or reasonable.",
        chinese_explanation: "(C) '可信的' 意味着看起来合理或可能的。" +
            "<br><br>" +
            "(A) '不可信的' 意味着看起来不合理或不可能的。" +
            "<br><br>" +
            "(B) '不合理的' 意味着没有根据或不合逻辑的。" +
            "<br><br>" +
            "(D) '不理智的' 意味着不合逻辑或不合理的。"
    },
    {
        id: 3,
        question: "Unlike her colleagues who were kept in the dark, she was __________ to the confidential information about the merger before it was made public.",
        chinese_question: "与被蒙在鼓里的同事不同，她在合并消息公开之前就已经__________地知道了机密信息。",
        answers: [
            { option: "A", answer: "unaware", chinese_answer: "不知道的", chinese_romanization: "bù zhīdào de" },
            { option: "B", answer: "oblivious", chinese_answer: "无意识的", chinese_romanization: "wú yìshí de" },
            { option: "C", answer: "privy", chinese_answer: "知情的", chinese_romanization: "zhīqíng de" },
            { option: "D", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'privy' means sharing in the knowledge of (something secret or private)." +
            "<br><br>" +
            "(A) 'unaware' means having no knowledge of a situation or fact." +
            "<br><br>" +
            "(B) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(D) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated.",
        chinese_explanation: "(C) '知情的'一词意味着分享某些秘密或私密信息的。" +
            "<br><br>" +
            "(A) '不知道的' 意味着对某情况或事实没有了解。" +
            "<br><br>" +
            "(B) '无意识的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(D) '无知的' 意味着总体上缺乏知识或意识的；未受教育的或不成熟的。"
    },
    {
        id: 4,
        question: "The __________ oak tree stood tall and strong, withstanding the harshest of storms.",
        chinese_question: "那棵 __________ 的橡树高大而强壮，能承受最严酷的风暴。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "C", answer: "robust", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "D", answer: "delicate", chinese_answer: "娇嫩的", chinese_romanization: "jiāonèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(D) 'delicate' means easily broken or damaged; fragile.",
        chinese_explanation: "(C) '强壮的' 意味着强壮和健康的；有活力的。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力要求任务的力量；缺乏体力和能量。" +
            "<br><br>" +
            "(B) '脆弱的' 意味着容易破碎或损坏的。" +
            "<br><br>" +
            "(D) '娇嫩的' 意味着容易破碎或损坏的；脆弱的。"
    },
    {
        id: 5,
        question: "The history of the ancient civilization remains __________ due to the lack of written records and artifacts.",
        chinese_question: "由于缺乏书面记录和文物，这个古代文明的历史仍然是 __________ 的。",
        answers: [
            { option: "A", answer: "well-known", chinese_answer: "众所周知的", chinese_romanization: "zhòng suǒ zhōu zhī de" },
            { option: "B", answer: "documented", chinese_answer: "有记录的", chinese_romanization: "yǒu jìlù de" },
            { option: "C", answer: "obscure", chinese_answer: "难以理解的", chinese_romanization: "nányǐ lǐjiě de" },
            { option: "D", answer: "familiar", chinese_answer: "熟悉的", chinese_romanization: "shúxī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obscure' means not discovered or known about; uncertain, or not clearly expressed or easily understood." +
            "<br><br>" +
            "(A) 'well-known' means known widely or thoroughly." +
            "<br><br>" +
            "(B) 'documented' means recorded in documents." +
            "<br><br>" +
            "(D) 'familiar' means well-known from long or close association.",
        chinese_explanation: "(C) '难以理解的' 意味着没有被发现或不知道的；不确定的，或没有清晰地表达或容易理解的。" +
            "<br><br>" +
            "(A) '众所周知的' 意味着广泛或彻底地被知道的。" +
            "<br><br>" +
            "(B) '有记录的' 意味着在文件中记录的。" +
            "<br><br>" +
            "(D) '熟悉的' 意味着由于长时间或密切的联系而熟悉的。"
    },
    {
        id: 6,
        question: "The cat had a __________ habit of sleeping in the sink, which amused everyone.",
        chinese_question: "这只猫有个__________的习惯，它喜欢睡在水槽里，这让每个人都感到有趣。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
            { option: "C", answer: "peculiar", chinese_answer: "奇特的", chinese_romanization: "qítè de" },
            { option: "D", answer: "usual", chinese_answer: "通常的", chinese_romanization: "tōngcháng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'peculiar' means strange or odd; unusual." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(B) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(D) 'usual' means habitually or typically occurring or done; customary.",
        chinese_explanation: "(C) '奇特的'一词意味着奇怪的或不寻常的。" +
            "<br><br>" +
            "(A) '普通的' 意味着没有特别或独特的特点；正常的。" +
            "<br><br>" +
            "(B) '常见的' 意味着经常发生、发现或完成的；普遍的。" +
            "<br><br>" +
            "(D) '通常的' 意味着习惯性或通常发生或完成的；惯常的。"
    },
    {
        id: 7,
        question: "The __________ marble floors gleamed under the bright lights of the grand hallway.",
        chinese_question: "在明亮的灯光下，大厅的 __________ 大理石地板闪闪发光。",
        answers: [
            { option: "A", answer: "rough", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "B", answer: "dull", chinese_answer: "暗淡的", chinese_romanization: "àndàn de" },
            { option: "C", answer: "polished", chinese_answer: "光滑的", chinese_romanization: "guānghuá de" },
            { option: "D", answer: "uneven", chinese_answer: "不平的", chinese_romanization: "bùpíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'polished' means made smooth and glossy by or as if by rubbing; refined." +
            "<br><br>" +
            "(A) 'rough' means having an uneven or irregular surface; not smooth or level." +
            "<br><br>" +
            "(B) 'dull' means lacking brightness, vividness, or sheen." +
            "<br><br>" +
            "(D) 'uneven' means not level or smooth.",
        chinese_explanation: "(C) '光滑的' 意味着通过或好像通过摩擦使光滑和有光泽；精炼的。" +
            "<br><br>" +
            "(A) '粗糙的' 意味着表面不平或不规则的；不光滑或不平整的。" +
            "<br><br>" +
            "(B) '暗淡的' 意味着缺乏亮度、鲜艳或光泽的。" +
            "<br><br>" +
            "(D) '不平的' 意味着不平整或不光滑的。"
    },
    {
        id: 8,
        question: "The queen's __________ presence commanded respect and admiration from everyone in the room.",
        chinese_question: "女王的 __________ 气质使房间里的每个人都敬佩和钦佩。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "regal", chinese_answer: "皇家般的", chinese_romanization: "huángjiā bān de" },
            { option: "D", answer: "modest", chinese_answer: "低调的", chinese_romanization: "dīdiào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'regal' means of, resembling, or fit for a monarch, especially in being magnificent or dignified." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'modest' means unassuming in the estimation of one's abilities or achievements.",
        chinese_explanation: "(C) '皇家般的' 意味着像君主或适合君主的，尤其是宏伟或有尊严的。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己重要性的评价低或表现出低调的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特的特征的；正常的。" +
            "<br><br>" +
            "(D) '低调的' 意味着在评价自己的能力或成就时不自以为是的。"
    },
    {
        id: 9,
        question: "The temple is considered __________ and is visited by thousands of pilgrims every year.",
        chinese_question: "这座寺庙被认为是 __________ 的，每年都有成千上万的朝圣者前来参观。",
        answers: [
            { option: "A", answer: "secular", chinese_answer: "世俗的", chinese_romanization: "shìsú de" },
            { option: "B", answer: "sacred", chinese_answer: "神圣的", chinese_romanization: "shénshèng de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "profane", chinese_answer: "亵渎的", chinese_romanization: "xièdú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sacred' means connected with God or dedicated to a religious purpose and so deserving veneration." +
            "<br><br>" +
            "(A) 'secular' means denoting attitudes, activities, or other things that have no religious or spiritual basis." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'profane' means relating or devoted to that which is not sacred or biblical; secular rather than religious.",
        chinese_explanation: "(B) '神圣的' 意味着与上帝有关或专用于宗教目的，因此值得尊敬的。" +
            "<br><br>" +
            "(A) '世俗的' 意味着指态度、活动或其他没有宗教或精神基础的事情。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特别或独特的特征的；正常的。" +
            "<br><br>" +
            "(D) '亵渎的' 意味着与宗教或圣经无关的；世俗的而非宗教的。"
    },
    {
        id: 10,
        question: "Her instructions were so __________ that no one knew what to do next.",
        chinese_question: "她的指示非常 __________，没有人知道接下来该做什么。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" },
            { option: "C", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "D", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'precise' means marked by exactness and accuracy of expression or detail." +
            "<br><br>" +
            "(D) 'explicit' means stated clearly and in detail.",
        chinese_explanation: "(C) '模糊的' 意味着不确定、不明确或不清晰的性质或意义的。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(B) '精确的' 意味着表达或细节的准确性。" +
            "<br><br>" +
            "(D) '明确的' 意味着清楚详细地陈述的。"
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
