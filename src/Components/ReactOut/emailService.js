import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init(""); // Replace with your actual public key

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      "", // Your EmailJS Service ID
      "", // Your EmailJS Template ID
      formData, // Form data object
      "" // Your EmailJS Public Key (same as above)
    );

    console.log("Email sent successfully:", response);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
};
