import "./OurTeam.css";
import PageHero from "../components/PageHero/PageHero";
import whyBgmBg from "../images/why-bgm-bg.jpg";

function OurTeam() {
  const teamMembers = [
    {
      name: "Aman Sharma",
      role: "Founder & CEO",
      description: "Overseas education leader with 12+ years guiding students to top universities worldwide.",
      focus: "Strategy, partnerships, admissions counselling",
    },
    {
      name: "Priya Patel",
      role: "Senior Study Abroad Counselor",
      description: "Expert in USA, UK, Canada and Australia applications with a 98% placement success rate.",
      focus: "Course selection, SOP review, university shortlisting",
    },
    {
      name: "Rohit Mehta",
      role: "Visa & Immigration Consultant",
      description: "Handles visa documentation, interview prep and compliance for all major destinations.",
      focus: "Visa approvals, document coaching, interview readiness",
    },
    {
      name: "Neha Verma",
      role: "Scholarship & Career Advisor",
      description: "Helps students secure funding and build career plans that match global industry demand.",
      focus: "Scholarship applications, career guidance, internship planning",
    },
  ];

  return (
    <>
      <PageHero
        title="Our Team"
        image={whyBgmBg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Our Team" }]}
      />

      <section className="our-team-page py-4">
        <div className="container">
          <div className="section-header text-center mb-4">
            <p className="text-primary mb-2 fw-semibold">— Our Team</p>
            <h2 className="display-5 fw-bold">
              Meet the Experts Behind Your Global Education Journey
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: 720 }}>
              Our team combines admission expertise, visa support, scholarship guidance,
              and career coaching so you get personalised support from the first step
              through arrival abroad.
            </p>
          </div>

          <div className="row gy-4">
            {teamMembers.map((member) => (
              <div className="col-md-6 col-xl-3" key={member.name}>
                <div className="team-card card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="team-badge">★</div>
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.description}</p>
                    <p className="team-focus">
                      <strong>Focus:</strong> {member.focus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurTeam;