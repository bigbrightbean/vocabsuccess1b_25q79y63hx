// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new employee was __________ in his work, always volunteering for extra tasks and staying late to complete projects.",
        chinese_question: "新员工在工作中表现得很 __________，总是自愿承担额外的任务并加班完成项目。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "C", answer: "zealous", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "D", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yù shuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'zealous' means having or showing great energy or enthusiasm in pursuit of a cause or objective." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'lethargic' means affected by lethargy; sluggish and apathetic.",
        chinese_explanation: "(C) '热情的' 意味着在追求目标或事业中表现出极大的精力或热情。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有表现出或感受到兴趣、热情或关心。" +
            "<br><br>" +
            "(B) '无动于衷的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '昏昏欲睡的' 意味着受到昏睡的影响；懒洋洋的。"
    },
    {
        id: 2,
        question: "The knight remained __________ in his loyalty to the king, even in the face of danger.",
        chinese_question: "即使在危险面前，骑士仍然对国王保持__________的忠诚。",
        answers: [
            { option: "A", answer: "fickle", chinese_answer: "变化无常的", chinese_romanization: "biànhuà wúcháng de" },
            { option: "B", answer: "steadfast", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "C", answer: "wavering", chinese_answer: "动摇的", chinese_romanization: "dòngyáo de" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'steadfast' means resolutely or dutifully firm and unwavering." +
            "<br><br>" +
            "(A) 'fickle' means changing frequently, especially as regards one's loyalties or affections." +
            "<br><br>" +
            "(C) 'wavering' means shaking with a quivering motion; becoming unsteady or unreliable." +
            "<br><br>" +
            "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(B) '坚定的'一词意味着坚决或尽职地坚定不移。" +
            "<br><br>" +
            "(A) '变化无常的' 意味着经常改变，尤其是关于一个人的忠诚或感情。" +
            "<br><br>" +
            "(C) '动摇的' 意味着颤抖的；变得不稳定或不可靠的。" +
            "<br><br>" +
            "(D) '犹豫的' 意味着试探性、犹豫不决或行动或说话缓慢的。"
    },
    {
        id: 3,
    question: "Despite the challenges, their commitment to the project remained __________, ensuring its successful completion.",
    chinese_question: "尽管面临挑战，他们对项目的承诺仍然 __________，确保了它的成功完成。",
    answers: [
        { option: "A", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
        { option: "B", answer: "wavering", chinese_answer: "动摇的", chinese_romanization: "dòngyáo de" },
        { option: "C", answer: "unsteady", chinese_answer: "不稳的", chinese_romanization: "bùwěn de" },
        { option: "D", answer: "unwavering", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'unwavering' means steady or resolute; not wavering." +
        "<br><br>" +
        "(A) 'uncertain' means not able to be relied on; not known or definite." +
        "<br><br>" +
        "(B) 'wavering' means shaking with a quivering motion; becoming weaker; faltering." +
        "<br><br>" +
        "(C) 'unsteady' means liable to fall or shake; not firm.",
    chinese_explanation: "(D) '坚定的' 意味着稳定或坚定；不动摇。" +
        "<br><br>" +
        "(A) '不确定的' 意味着不能依赖的；未知的或不确定的。" +
        "<br><br>" +
        "(B) '动摇的' 意味着颤抖的动作；变得更弱；衰退。" +
        "<br><br>" +
        "(C) '不稳的' 意味着容易倒下或摇晃；不牢固的。"
    },
    {
        id: 4,
        question: "After the argument, he walked away with a __________ face, refusing to speak to anyone.",
        chinese_question: "争吵之后，他脸色 __________ 地走开了，拒绝和任何人说话。",
        answers: [
            { option: "A", answer: "radiant", chinese_answer: "光芒四射的", chinese_romanization: "guāngmáng sìshè de" },
            { option: "B", answer: "sullen", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "C", answer: "delighted", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "D", answer: "beaming", chinese_answer: "满面笑容的", chinese_romanization: "mǎnmiàn xiàoróng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sullen' means bad-tempered and sulky; gloomy." +
            "<br><br>" +
            "(A) 'radiant' means sending out light; shining or glowing brightly." +
            "<br><br>" +
            "(C) 'delighted' means feeling or showing great pleasure." +
            "<br><br>" +
            "(D) 'beaming' means smiling radiantly; extremely happy.",
        chinese_explanation: "(B) '阴沉的' 意味着脾气暴躁和愠怒的；阴郁的。" +
            "<br><br>" +
            "(A) '光芒四射的' 意味着发出光；闪耀或明亮地发光。" +
            "<br><br>" +
            "(C) '高兴的' 意味着感到或表现出极大的愉快。" +
            "<br><br>" +
            "(D) '满面笑容的' 意味着笑容满面；极度高兴。"
    },
    {
        id: 5,
        question: "Her __________ response to the job offer indicated she was still unsure about accepting it.",
        chinese_question: "她对工作邀请的 __________ 回应表明她仍不确定是否接受。",
        answers: [
            { option: "A", answer: "definite", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "B", answer: "tentative", chinese_answer: "暂定的", chinese_romanization: "zàndìng de" },
            { option: "C", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "D", answer: "resolute", chinese_answer: "坚决的", chinese_romanization: "jiānjué de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tentative' means not certain or fixed; provisional." +
            "<br><br>" +
            "(A) 'definite' means clearly stated or decided; not vague or doubtful." +
            "<br><br>" +
            "(C) 'certain' means sure to happen; inevitable." +
            "<br><br>" +
            "(D) 'resolute' means admirably purposeful, determined, and unwavering.",
        chinese_explanation: "(B) '暂定的' 意味着不确定的或固定的；暂时的。" +
            "<br><br>" +
            "(A) '明确的' 意味着清楚地陈述或决定的；不模糊或怀疑的。" +
            "<br><br>" +
            "(C) '确定的' 意味着必然发生的；不可避免的。" +
            "<br><br>" +
            "(D) '坚决的' 意味着令人钦佩的有目标的、坚定的和不动摇的。"
    },
    {
        id: 6,
        question: "The __________ supporters of the team cheered loudly at every game, showing their unwavering loyalty.",
        chinese_question: "球队的 __________ 支持者在每场比赛中大声欢呼，表现出他们坚定不移的忠诚。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "indifferent", chinese_answer: "无动于衷", chinese_romanization: "wúdòng yú zhōng" },
            { option: "C", answer: "fervent", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fervent' means having or displaying a passionate intensity." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(C) '热情' 意味着具有或表现出强烈的激情。" +
            "<br><br>" +
            "(A) '冷漠' 意味着表现出或感到没有兴趣、热情或关心。" +
            "<br><br>" +
            "(B) '无动于衷' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '被动' 意味着接受或允许发生的事情或他人所做的事情，没有积极回应或抵抗。"
    },
    {
        id: 7,
    question: "The company's __________ decision to dump waste into the river caused an environmental disaster.",
    chinese_question: "该公司将废物倾倒入河中的 __________ 决定导致了环境灾难。",
    answers: [
        { option: "A", answer: "responsible", chinese_answer: "负责的", chinese_romanization: "fùzé de" },
        { option: "B", answer: "ethical", chinese_answer: "合乎道德的", chinese_romanization: "hé hū dàodé de" },
        { option: "C", answer: "conscientious", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" },
        { option: "D", answer: "unethical", chinese_answer: "不道德的", chinese_romanization: "bù dàodé de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'unethical' means not morally correct." +
        "<br><br>" +
        "(A) 'responsible' means having an obligation to do something, or having control over or care for someone, as part of one's job or role." +
        "<br><br>" +
        "(B) 'ethical' means relating to moral principles or the branch of knowledge dealing with these." +
        "<br><br>" +
        "(C) 'conscientious' means wishing to do what is right, especially to do one's work or duty well and thoroughly.",
    chinese_explanation: "(D) '不道德的' 意味着在道德上不正确的。" +
        "<br><br>" +
        "(A) '负责的' 意味着有义务做某事，或作为工作或角色的一部分对某人有控制或照顾的。" +
        "<br><br>" +
        "(B) '合乎道德的' 意味着与道德原则或处理这些知识的分支有关的。" +
        "<br><br>" +
        "(C) '认真的' 意味着希望做正确的事情，尤其是希望认真和彻底地做好自己的工作或职责的。"
    },
    {
        id: 8,
    question: "The rain stopped at an __________ moment, right before the outdoor wedding ceremony began.",
    chinese_question: "雨在 __________ 的时刻停了下来，就在户外婚礼仪式开始之前。",
    answers: [
        { option: "A", answer: "inconvenient", chinese_answer: "不方便的", chinese_romanization: "bù fāngbiàn de" },
        { option: "B", answer: "inopportune", chinese_answer: "不合时宜的", chinese_romanization: "bù hé shíyí de" },
        { option: "C", answer: "opportune", chinese_answer: "恰当的", chinese_romanization: "qiàdàng de" },
        { option: "D", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'opportune' means well-chosen or particularly favorable or appropriate." +
        "<br><br>" +
        "(A) 'inconvenient' means causing trouble, difficulties, or discomfort." +
        "<br><br>" +
        "(B) 'inopportune' means occurring at an inconvenient or inappropriate time." +
        "<br><br>" +
        "(D) 'awkward' means causing difficulty; hard to do or deal with.",
    chinese_explanation: "(C) '恰当的' 意味着选择得好或特别有利或适当的。" +
        "<br><br>" +
        "(A) '不方便的' 意味着引起麻烦、困难或不适的。" +
        "<br><br>" +
        "(B) '不合时宜的' 意味着在不合适或不方便的时间发生的。" +
        "<br><br>" +
        "(D) '尴尬的' 意味着引起困难的；难以处理的。"
    },
    {
        id: 9,
    question: "She was very __________ to the new ideas presented during the meeting, showing an open-minded attitude.",
    chinese_question: "她对会议上提出的新想法非常 __________，表现出开明的态度。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "reluctant", chinese_answer: "不情愿的", chinese_romanization: "bù qíngyuàn de" },
        { option: "C", answer: "opposed", chinese_answer: "反对的", chinese_romanization: "fǎnduì de" },
        { option: "D", answer: "receptive", chinese_answer: "乐于接受的", chinese_romanization: "lè yú jiēshòu de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'receptive' means willing to consider or accept new suggestions and ideas." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(B) 'reluctant' means unwilling and hesitant." +
        "<br><br>" +
        "(C) 'opposed' means eager to prevent or put an end to; disapproving of or disagreeing with.",
    chinese_explanation: "(D) '乐于接受的' 意味着愿意考虑或接受新的建议和想法。" +
        "<br><br>" +
        "(A) '冷漠的' 意味着没有特别兴趣或同情；不关心的。" +
        "<br><br>" +
        "(B) '不情愿的' 意味着不愿意和犹豫的。" +
        "<br><br>" +
        "(C) '反对的' 意味着急于阻止或结束；不赞成或不同意的。"
    },
    {
        id: 10,
        question: "The __________ hiker made his way through the dense forest, enjoying the solitude.",
        chinese_question: "这位 __________ 的徒步旅行者穿过茂密的森林，享受着独处的时光。",
        answers: [
            { option: "A", answer: "group", chinese_answer: "团队", chinese_romanization: "tuánduì" },
            { option: "B", answer: "lone", chinese_answer: "独自", chinese_romanization: "dúzì" },
            { option: "C", answer: "numerous", chinese_answer: "众多", chinese_romanization: "zhòngduō" },
            { option: "D", answer: "accompanied", chinese_answer: "陪伴", chinese_romanization: "péibàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lone' means being alone; without companions." +
            "<br><br>" +
            "(A) 'group' means a number of people or things that are together." +
            "<br><br>" +
            "(C) 'numerous' means many." +
            "<br><br>" +
            "(D) 'accompanied' means having someone with you.",
        chinese_explanation: "(B) '独自' 意味着一个人；没有同伴。" +
            "<br><br>" +
            "(A) '团队' 意味着一群人在一起。" +
            "<br><br>" +
            "(C) '众多' 意味着很多。" +
            "<br><br>" +
            "(D) '陪伴' 意味着有人和你在一起。"
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
