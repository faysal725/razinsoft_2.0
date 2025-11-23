
"use server";

export default async function submitForm(prevState, formData) {

    const email = formData.get("email");


    console.log(email)
    if (!email.includes("@")) {
        return { error: "Please enter a valid email." };
    }

    return { success: "Form submitted successfully!" };
}