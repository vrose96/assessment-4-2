const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const submitGoalBtn = document.getElementById("submitGoalButton");
const deleteGoalBtn = document.getElementById("deleteGoalButton"); 
const goalInput = document.getElementById("goalInput");
const deleteGoalInput = document.getElementById("deleteGoalInput"); 
const inspirationalMessageDiv = document.getElementById("inspirationalMessage");
const motivateBtn = document.getElementById("motivateButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch(error => {
            console.error("Error getting compliment:", error);
        });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch(error => {
            console.error("Error getting fortune:", error);
        });
};

const submitGoal = () => {
    const goal = goalInput.value;

    axios.post("http://localhost:4000/api/goal", { goal })
        .then(res => {
            const message = res.data;
            inspirationalMessageDiv.innerText = message;
        })
        .catch(error => {
            console.error("Error submitting goal:", error);
        });
};

const deleteGoal = () => {
    const goalToDelete = deleteGoalInput.value;

    axios.delete("http://localhost:4000/api/goal", { data: { goalToDelete } })
        .then(res => {
            const message = res.data;
            inspirationalMessageDiv.innerText = message;
        })
        .catch(error => {
            console.error("Error deleting goal:", error);
        });
};

const motivateUser = () => {
    axios.put("http://localhost:4000/api/motivate")
        .then(res => {
            const message = res.data;
            inspirationalMessageDiv.innerText = message;
        })
        .catch(error => {
            console.error("Error motivating user:", error);
        });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
submitGoalBtn.addEventListener('click', submitGoal);
deleteGoalBtn.addEventListener('click', deleteGoal);
motivateBtn.addEventListener('click', motivateUser);