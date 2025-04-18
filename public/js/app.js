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
    let age = prompt("Enter your age.").trim();

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
    













}








