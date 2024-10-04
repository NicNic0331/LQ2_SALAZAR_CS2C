// Use the readline module to handle user input.
const readline = require('readline');

// Set up an interface to read input from the console.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Question and get user input.
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main Program
async function userInfo() {
    // User inputs
    let name = await askQuestion("Enter your Name: ");
    let address = await askQuestion("Enter your Address: ");
    let age = parseInt(await askQuestion("Enter your Age: "));
    let classRole = await askQuestion("Enter your Class Role (Officer, Student, Teacher): ");
    let course = await askQuestion("Enter your Course (BSCS, BSM, BAEL): ");

    // Conditional statement for course.
    switch (course.toUpperCase()) {
        case 'BSCS':
            console.log("You have selected the BSCS course.");
            checkRole(classRole, name, age);
            break;
        case 'BSM':
            console.log("You have selected the BSM course.");
            checkRole(classRole, name, age);
            break;
        case 'BAEL':
            console.log("You have selected the BAEL course.");
            checkRole(classRole, name, age);
            break;
        default:
            console.log("Invalid Course. Defaulting to General Student.");
            checkRole("Student", name, age);
            break;
    }
}

// Check class role and loop based on 1/4 of the user's age.
function checkRole(role, name, age) {
    let iterations = Math.floor(age / 4);

    switch (role.toUpperCase()) {
        case 'OFFICER':
            console.log("Role: Officer");
            for (let i = 0; i < iterations; i++) {
                console.log(`Officer: ${name}`);
            }
            break;
        case 'STUDENT':
            console.log("Role: Student");
            for (let i = 0; i < iterations; i++) {
                console.log(`Student: ${name}`);
            }
            break;
        case 'TEACHER':
            console.log("Role: Teacher");
            for (let i = 0; i < iterations; i++) {
                console.log(`Teacher: ${name}`);
            }
            break;
        default:
            console.log("Invalid role. Defaulting to Student.");
            for (let i = 0; i < iterations; i++) {
                console.log(`Student: ${name}`);
            }
            break;
    }
}

// Run the program
userInfo().then(() => rl.close());