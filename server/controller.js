module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your JavaScript skills are stellar."];

        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "Your life will be happy and peaceful.", "The best is yet to come.","A dubious friend may be an enemy in camouflage.","A friend asks only for your time not your money."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    submitGoal: (req, res) => {
        const goal = req.body.goal;

        if (!goal) {
            return res.status(400).send("Goal not provided");
        }

        const inspirationalMessages = ["Dream big and work hard!", "You can achieve anything you set your mind to!", "Stay focused and determined, success is just around the corner!"];

        let randomIndex = Math.floor(Math.random() * inspirationalMessages.length);
        let randomMessage = inspirationalMessages[randomIndex];

        res.status(200).send(randomMessage);
    },

    deleteGoal: (req, res) => {
        const goalToDelete = req.body.goalToDelete;

        if (!goalToDelete) {
            return res.status(400).send("Goal to delete not provided");
        }
        res.status(200).send("Last goal deleted, try adding another goal.");
    },

motivateUser: (req, res) => {
    const motivationalMessages = ["Believe in yourself, you are capable of great things!", "Success is not final, failure is not fatal: It is the courage to continue that counts.", "The only limit to our realization of tomorrow will be our doubts of today."];

    let randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    let randomMessage = motivationalMessages[randomIndex];

    res.status(200).send(randomMessage);
}
}