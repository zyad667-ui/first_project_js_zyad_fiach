let bank_users = []
class users {
    constructor(name, email, paswword, money, ledger) {
        this.name = name
        this.email = email
        this.paswword = paswword
        this.money = money
        this.ledger = ledger
    }
}










let choose = prompt("do you want to  signing up, logging in, or changing the password.")
if (choose == "exit") {
    alert("you exit successfully ")
    console.log("your out");
    let choose = prompt("do you want to  signing up, logging in, or changing the password.")

}
else if (choose == "signing up") {
    sign_up()
}
else if (choose == "log in") {
    let info = prompt("insert your infom")
    log_in()
}
else if (choose == "changing the password.") {
    let changing = prompt("change paswword")
    change_paswword()
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

}






