import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [serverMessage, setServerMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        PUBLIC_KEY
      );

      setServerMessage("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS error", error);
      setServerMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="contact-page py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-primary mb-2 fw-semibold">— Contact</p>
          <h1 className="display-5 fw-bold">Reach Out to BGM Overseas</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: 720 }}>
            Have questions about studying abroad or planning your career overseas?
            Our expert advisors are ready to help with admissions, visas, scholarships,
            and professional guidance.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card contact-card shadow-sm h-100">
              <div className="card-body">
                <div className="contact-card-top">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4 className="card-title">Get in Touch</h4>
                    <p className="text-muted">
                      We respond quickly to queries about study pathways, visa support,
                      scholarship help, and career planning.
                    </p>
                  </div>
                </div>

                <ul className="contact-list list-unstyled mt-4">
                  <li>
                    <strong>Phone:</strong> +91 98765 43210
                  </li>
                  <li>
                    <strong>Email:</strong> info@bgmoverseas.com
                  </li>
                  <li>
                    <strong>Address:</strong> 123 Student Plaza, Mumbai, India
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card contact-card shadow-sm h-100">
              <div className="card-body">
                <h4 className="card-title">Send a Message</h4>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="name"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && (
                      <div className="invalid-feedback">{errors.subject.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className={`form-control ${errors.message ? "is-invalid" : ""}`}
                      {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message.message}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary contact-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {serverMessage && (
                    <div className="alert alert-info mt-3">{serverMessage}</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;