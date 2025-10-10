import Badge from "../../components/Badge";
import ContactComponent from "../../components/ContactComponent";

const Contact = () => {
  return (
    <div id="contact" className="pt-20 flex flex-col items-center gap-4">
      <Badge title="CONTACT" />
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-4">
        <div className="flex-1 lg:flex-3/4">
          <ContactComponent />
        </div>
        <div className="w-[60vw] lg:flex-1/4 border">
          <iframe
            title="MANIT Bhopal Country View"
           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14800.1234!2d77.3951!3d23.2122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4b85f794a879%3A0x27a1a9da57576956!2sMANIT%20Bhopal!5e0!3m2!1sen!2sin!4v1696859480733!5m2!1sen!2sin"
            className="w-full lg:size-80"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
