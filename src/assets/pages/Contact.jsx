import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp, FaClock } from "react-icons/fa";
import PageHero from "../components/PageHero/PageHero";
import { supabase } from "../../lib/supabaseClient";
import "./Contact.css";
import whyBgmBg from "../images/why-bgm-bg.jpg";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const COUNTRY_CODES = [
  { code: "+91", label: "+91 (India)" },
  { code: "+1", label: "+1 (US/Canada)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+61", label: "+61 (Australia)" },
  { code: "+971", label: "+971 (UAE)" },
  { code: "+65", label: "+65 (Singapore)" },
  { code: "+49", label: "+49 (Germany)" },
];

function Contact() {
  const [serverMessage, setServerMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { countryCode: "+91" } });

  const onSubmit = async (data) => {
    const phone = `${data.countryCode} ${data.phone}`;

    const [emailResult, dbResult, autoReplyResult] = await Promise.allSettled([
      emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone,
          subject: data.subject,
          message: data.message,
        },
        PUBLIC_KEY
      ),
      supabase
        ? supabase.from("contact_submissions").insert({
            name: data.name,
            email: data.email,
            phone,
            subject: data.subject,
            message: data.message,
          })
        : Promise.reject(new Error("Supabase is not configured")),
      emailjs.send(
        SERVICE_ID,
        AUTOREPLY_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone,
          subject: data.subject,
          message: data.message,
        },
        PUBLIC_KEY
      ),
    ]);

    if (emailResult.status === "rejected") {
      console.error("EmailJS error", emailResult.reason);
    }
    if (dbResult.status === "rejected") {
      console.error("Supabase insert error", dbResult.reason);
    }
    if (autoReplyResult.status === "rejected") {
      console.error("Auto-reply email error", autoReplyResult.reason);
    }

    if (emailResult.status === "fulfilled" || dbResult.status === "fulfilled") {
      setServerMessage("Message sent successfully!");
      reset();
    } else {
      setServerMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <PageHero
        title="Contact"
        image={whyBgmBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="contact-page py-4">
        <div className="container">
          <div className="text-center mb-4">
            <p className="text-primary mb-2 fw-semibold">— Contact</p>
            <h1 className="display-5 fw-bold">Reach Out to BGM Overseas</h1>
           <p
  className="display text-center mx-auto"
  style={{ maxWidth: "720px" }}
>
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
                    <div className="contact-icon"><FaPhoneAlt /></div>
                    <div>
                      <h4 className="card-title">Get in Touch</h4>

                    </div>
                  </div>

                  <div className="contact-map">
                    <iframe
                      title="BGM Overseas Consultancy location"
                      src="https://www.google.com/maps?q=Flat+No+304+Datta+Sai+Apartments+Indira+Nagar+Dilsukhnagar+Hyderabad+Telangana+500060&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>

                  <div className="social-links">
                    <a href="#" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF />
                    </a>
                    <a href="https://instagram.com/bgmoverseasconsultancy" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                    <a href="https://wa.me/919490996326" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp />
                    </a>
                    <a href="mailto:bgmoverseasconsultancy@gmail.com" className="social-icon" aria-label="Email">
                      <FaEnvelope />
                    </a>
                  </div>

                  <ul className="contact-list list-unstyled">
                    <li>
                      <FaPhoneAlt className="contact-list-icon" /> <strong>Phone:</strong> +91 94909 96326
                    </li>
                    <li>
                      <FaClock className="contact-list-icon" /> <strong>Office Hours:</strong> 10:00 AM – 6:00 PM
                    </li>
                    <li>
                      <FaEnvelope className="contact-list-icon" /> <strong>Email:</strong> bgmoverseasconsultancy@gmail.com
                    </li>
                    <li>
                      <FaMapMarkerAlt className="contact-list-icon" /> <strong>Address:</strong> Flat No: 304, Datta Sai Apartments, Indira Nagar, Dilsukhnagar, Hyderabad, Telangana 500060, India
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
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input
                        id="name"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                        })}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Mobile Number</label>
                      <div className="input-group">
                        <select
                          id="countryCode"
                          className="form-select flex-grow-0 w-auto"
                          {...register("countryCode", { required: true })}
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>{c.label}</option>
                          ))}
                        </select>
                        <input
                          id="phone"
                          type="tel"
                          inputMode="numeric"
                          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                          placeholder="XXXXX XXXXX"
                          {...register("phone", {
                            required: "Mobile number is required",
                            pattern: { value: /^[0-9\s-]{6,15}$/, message: "Enter a valid mobile number" },
                          })}
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Country</label>
                      <select
                        id="subject"
                        className={`form-select ${errors.subject ? "is-invalid" : ""}`}
                        defaultValue=""
                        {...register("subject", { required: "Please select a country" })}
                      >
                        <option value="" disabled>Select a country</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                      </select>
                      {errors.subject && <div className="invalid-feedback">{errors.subject.message}</div>}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        id="message"
                        rows="5"
                        className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        {...register("message", { required: "Message is required" })}
                      />
                      {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary contact-btn" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {serverMessage && <div className="alert alert-info mt-3">{serverMessage}</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;