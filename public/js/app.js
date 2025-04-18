




// let choose_users = prompt(" do you want to signing up, logging in, or changing the password.")
// if (choose == "exit") {
//     alert("you exit successfully ")
//     prompt("do you want to  signing up, logging in, or changing the password.")
//     console.log(choose_users);
// }
// else if (choose_users == "sign up") {
//     prompt("You have successfully signed up. ")
//     alert("you sign up successfully ")
//     console.log(choose_users);
//     SignUp()
// }
// else if (choose_users == " log in") {
//     prompt("You have successfully logs in ")
//     console.log(choose_users);
//     logsIn()
// }
// else if (choose_users == "changing the password") {
//     prompt("The system is currently changing the password.")
//     console.log(choose_users);
//     changePassword()
// }


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








