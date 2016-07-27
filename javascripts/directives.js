angular
.module('directives', [])
.directive('quiz', function(quizFactory) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'pages/quizContent.html',
		link: function (scope, elem, attrs) {
			scope.start = function(id) {
				scope.questionNumber = 1;
				scope.category = id;
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
				scope.hideCategories = true;
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
				scope.hideCategories = false;
			};

			scope.getQuestion = function() {
				var q = quizFactory.getQuestion(scope.id, scope.category);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.answerMode = true;
				}
				else {
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) {
					alert('Please select an answer');
					return;
				}
				var ans = $('input[name=answer]:checked').val();
				if(ans == scope.answer) {
					scope.score++;
					scope.correctAns = true;
				} else {
					scope.correctAns = false;
				}
				scope.answerMode = false;
			};

			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
				scope.questionNumber++;
			};

			scope.reset();
		}
	};
})