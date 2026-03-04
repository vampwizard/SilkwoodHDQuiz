// Update to allow changing answers before submitting
// and show explanation only after pressing Next

function select(answer) {
    // Remove early return to allow changing answers
    this.selectedAnswer = answer;
}

function renderQ() {
    // Reset the explanation view
    this.showExplanation = false;
    // Existing rendering logic...
}

function next() {
    // Check if explanation is showing
    if (!this.showExplanation) {
        // Show explanation
        this.showExplanation = true;
    } else {
        // Move to next question
        this.currentQuestionIndex++;
        this.showExplanation = false; // reset for the next question
    }
}