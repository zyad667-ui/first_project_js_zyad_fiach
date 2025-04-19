let bank_users = [{
    name: "Zyad Fiach",
    email: "zyad@gmail.com",
    age: 22,
    password: 'zy@dSecure123!',
    balance: 2500,
    history: [],
    loan: 500
}]
class users {
    constructor(name, email, paswword, money, ledger) {
        this.name = name
        this.email = email
        this.paswword = paswword
        this.money = money
        this.ledger = ledger
    }
}
function mainMenu() {
    while (true) {
        let choose = prompt("Do you want to: 'sign up', 'log in', or 'change password'? Type 'exit' to quit.").trim().toLowerCase();

        if (choose === "exit") {
            alert("You exited successfully.");
            console.log("You're out.");
            break;
        } else if (choose === "sign up") {
            sign_up();
        } else if (choose === "log in") {
            log_in();
        } else if (choose === "change password") {
            change_password();
        } else {
            alert("Invalid option. Please try again.");
        }
    }
}

function sign_up() {
    const full_name = prompt("insert your name").trim()
    let capitalized_letter = full_name
        .split(' ')
        .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
        .join(' ')
    if (full_name.length < 5) {
        alert('Your name must contain a minimum of 5 characters.')
        const full_name = prompt("enter your name")
        console.log("full name is : " + full_name.trim());
    }
    else if (/[^a-zA-Z\s]/.test(full_name)) {
        alert('your name must not contain numbers or special characters.')
        const full_name = prompt("enter your name")
        console.log("full name is : " + full_name);
    }
    else {
        console.log(("Full name: " + capitalized_letter));
        alert('Your name is valid.')
    }

    // **********
    let
        email = prompt("insert your mail : ")
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    let reduce_space_email = email
        .split(' ')
        .map(e => e.toLowerCase())
        .join(' ')
    if (emailRegex.test(email)) {
        console.log("Email" + reduce_space_email.trim());
        alert("your email are valid")
    }
    else if (email.length < 10) {
        alert('Your email must contain a minimum of 10 characters.');
        let email = prompt("Enter your email: ");
        console.log("Email: " + reduce_space_email.trim());
    }
    else if (!email.includes('@')) {
        alert('Your email must contain a domain name.');
        let email = prompt("Enter your email: ");
        console.log("Email: " + reduce_space_email.trim());
    }
    else {
        alert('Your email is invalid.');
    }
    console.log(email);
    // **********
    let age = prompt(("Enter your age.").trim());

    function verifAge() {
        if (age.length === 0 || age.length > 2) {
            age = prompt("Enter a valid age!").trim();
            return verifAge();
        } else {
            return parseInt(age);
        }
    }
    age = verifAge();
    console.log("ton age est : " + age);
    //*********
    let spécial_character = /[@#\-+*/]/;
    let password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#\-+*/])[A-Za-z\d@#\-+*/]{7,}$/

    function hasmiddlespace(str) {
        return str !== str.trim() || str.includes(" ")
    }
    let password = " "
    let confirm = false

    while (!confirm) {
        password = prompt("enter your password: ").trim()

        if (hasmiddlespace(password)) {
            alert("password should not contain spaces .");
        }
        if (password_pattern.test(password)) {
            alert("password is invalid It must contain:\n- At least one lowercase letter\n- At least one uppercase letter\n- At least one digit\n- At least one special character (@, #, -, +, *, /)\n- At least 7 characters.")
        }

        let confirmpassword = prompt("confirm your password ").trim();

        if (password !== confirmpassword) {
            alert("password do not match . try again  ")
        }

        confirm = true

    }
    alert("your name is valid  and confirmed ")
    console.log("password " + password);


    let newusers = new users(capitalized_letter, email, password)
    bank_users.push(newusers)
    alert("Registration successful!")
    console.log("user added ", newusers);
}

function log_in() {
    let email = prompt("enter your email your email : ").trim().toLowerCase()

    let user = bank_users.find(u => u.email === email)
    if (!user) {
        alert("email not found")
        return
    }
    let password = prompt("enter your password").trim()
    if (password !== user.password) {
        alert("coorect password .");
    }
    alert("login succesfule Mr " + user.name + "welcome to your account ")
    console.log("logged in " + user);
    Servicebancair()

    //*************** */
    function change_paswword() {
        let email = prompt("enter your email :").trim.toLowerCase();
        let user = bank_users(y => y.email === email)
        if (!user) {
            alert("email not found")
            return
        }
        let oldpassword = prompt("enter your current  password : ")
        if (oldpassword !== user.password) {
            alert("Incorrect current password.")
        }
        let newpassword = prompt("enter your new password ").trim();
        let password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#\-+*/])[A-Za-z\d@#\-+*/]{7,}$/

        if (!password_pattern.test(newpassword)) {
            alert("password  changed succesful")
            console.log("updated user: ", user);

        }
    }

}
mainMenu();


function Servicebancair(user) {
    while (true) {
        const choice = prompt(`Welcome ${user.name}!\n\nChoose a service:\n- Withdraw\n- Deposit\n- Loan\n- Invest\n- History\n- Logout\n(Type 'exit' to leave)`)

        if (!choice) {
            alert("no input detected please try again")
        }

        switch (choice.trim().toLowerCase) {
            case "exit":
                alert("you been logged out see you soon")
                return;

            case "withdraw":
                withdraw(user)
                break
            case "deposit":
                deposit(user)
                break
            case "loan":
                loan(user)
                break
            case "invest":
                invest(user)
                break
            case "history":
                history(user)
                break
            default: {
                alert("banqua m3adnhach had services , write a valid service ty")
            }
        }
    }
}
function withdraw(user) {
    let amountstr = prompt("how m do you want to with draw ")

    if (amountstr === "exit") {
        return alert("operation cancelled")
    }

    let amount = parseFloat(amountstr.trim())

    if (user.balance < amount) {
        alert("insufficient fuds")
    }
    if (amount <= 0 || isNaN(amount)) {
        return alert("please enter a valid  amount")
    }


    user.balance -= amount
    if (!user.history) user.history = [];
    user.history.push(`Withdrawn ${amount} - New Balance: ${user.balance}`);

    alert(`Withdrawal successful. Your new balance is ${user.balance}`);
    console.log(`${user.name}withdrew ${amount} his new balance after withdrew is ${user.balance}`);

}

function deposit(user) {
    if (amountstr === "exit") {
        return alert("operation cancelled")
    }

    if (amount <= 0 || isNaN(amount)) {
        return alert("please enter a valid  amount")
    }
    if (amount <= 1000) {
        user.balance += amount
        alert(`${user.name} deposited ${amount.toFixed(2)}dollar`)
        console.log(`${user.name} deposited ${amount.toFixed(2)}dollar`);

        user.history.push(`Deposit of ${amount.toFixed(2)}$`)
    }
    else {
        alert("you cant push more than 1000 $")
    }
}





function loan(user) {
    if (amountstr === "exit") {
        return alert("operation cancelled")
    }

    if (amount <= 0 || isNaN(amount)) {
        return alert("please enter a valid  amount")
    }


}

function invest(user) {
    if (amountstr === "exit") {
        return alert("operation cancelled")
    }

    if (amount <= 0 || isNaN(amount)) {
        return alert("please enter a valid  amount")
    }
}


function history(user) {
    if (!user.history || user.history.length === 0) {
        alert("No recent activity.");
    } else {
        let activities = user.history.join("\n");
        alert(`Recent activity:\n\n${activities}`);
    }
}