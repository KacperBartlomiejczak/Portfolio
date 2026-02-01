import SectionLayout from "../section/sectionLayout";
import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";

export default function Contact() {
  return (
    <SectionLayout
      title=""
      id="contact"
      center={false}
      className="bg-linear-to-b! from-bg-color to-secondary-bg/30 dark:bg-linear-to-b! dark:from-background dark:to-brand/5"
    >
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
