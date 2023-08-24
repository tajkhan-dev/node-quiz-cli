import inquirer from "inquirer";
const quiz = async () => {
    const data = await inquirer.prompt([
        {
            name: 'ans1',
            type: 'list',
            choices: ["55", "5", "5+5", `'5'`],
            message: `What is the result of the expression: 5 + '5' in JavaScript?`,
        },
        {
            name: 'ans2',
            type: 'list',
            choices: ["string", "NaN", "number", `undefined`],
            message: `What is the result of the expression: typeof NaN in JavaScript?`,
        },
        {
            name: 'ans3',
            type: 'list',
            choices: [
                "To convert a JSON string to a JavaScript object",
                "To convert a JavaScript array to a JSON string",
                "To parse a JSON string and create a JavaScript object",
                `To convert a JavaScript object to a JSON string`,
            ],
            message: `What is the purpose of the JSON.stringify() method in JavaScript?`,
        },
        {
            name: 'ans4',
            type: 'list',
            choices: ["Math.random()", "Math.ceil()", "Math.round()", `Math.floor()`],
            message: `How do you round a number to the nearest integer in JavaScript?`,
        },
        {
            name: 'ans5',
            type: 'list',
            choices: [
                "To select and manipulate DOM elements based on CSS selectors",
                "To select and manipulate DOM elements based on their tag names",
                "To select and manipulate DOM elements based on their IDs",
                `To select and manipulate DOM elements based on their class names`,
            ],
            message: `What is the purpose of the querySelector() method in JavaScript?`,
        },
        {
            name: 'ans6',
            type: 'list',
            choices: [
                "array.unshift()",
                "array.shift()",
                "array.push()",
                `array.pop()`,
            ],
            message: `Which method is used to remove the last element from an array in JavaScript?`,
        }
    ]);
    let correctanswers = [
        "55",
        "number",
        "To convert a JavaScript object to a JSON string",
        "Math.round()",
        "To select and manipulate DOM elements based on CSS selectors",
        "array.pop()",
    ];
    let ans = [];
    for (const key in data) {
        ans.push(data[key]);
    }
    let marks = 0;
    for (let i = 0; i < ans.length; i++) {
        if (correctanswers[i] === ans[i]) {
            marks += 1;
        }
    }
    console.log("your total marks  ", marks, "/", ans.length);
};
quiz();
