import SectionLayout from "../section/sectionLayout";
import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";

export default function Contact() {
  return (
    <SectionLayout title="" id="contact" center={false}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-8">
          {/* Left Column - Contact Info */}
          <ContactInfo />

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </SectionLayout>
  );
}
