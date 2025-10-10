import AboutSection from "../../components/AboutSection";

const About = () => {
  return (
    <div id="about" className="bg-blue-50">
      <div className="px-6 py-20 w-full max-w-7xl mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AboutSection
            title="About the Institute"
            description="Maulana Azad National Institute of Technology Bhopal (An Institution of National Importance), offers various undergraduate and post graduate courses and research programs. Under the peaceful and friendly environment, MANIT is producing technocrats who are resources to Nation and the world. Our bright students with excellent technical skills have always contributed to the successes of various sections towards the technical group."
          />
          <AboutSection
            title="MANIT Campus"
            description="The total area of campus is 650 acres and protected by boundary wall and ring road. The entire campus consists of administrative and academic building, workshop, Library and community center, Residential area accommodation for students and staff and other general amenities such as post office, Shopping complex, a School for children, dispensary, an auditorium with the capacity of 1000 persons and sports complex with vast expanse of open area."
          />
          <AboutSection
            title="About Department"
            description="Centre of Excellence in Product Design & Smart Manufacturing (CPDSM) was established in the year 2021 at Maulana Azad National Institute of Technology, Bhopal to offer a unique platform for collaboration of advanced technologies in the area of product design and smart manufacturing. Mechanical Engineering Department is also one of the biggest departments of the institute with student strength of about 1000 (B. Tech 780, M. Tech 180 & Ph.D. 40 respectively) which will touch higher strength in next few years. While managing this increased strength which is an urgent need of the nation, department is committed to well being and all round development of its students."
          />
        </div>
        <div className="flex flex-col gap-4">
          <AboutSection
            title="NPDSM-2024 Conference"
            description="Mechanical Engineering will evolve and collaborate as a global profession over the next decade through its emerging trends to develop engineering solutions that foster a cleaner, safer and sustainable world.

Product Design and Smart Manufacturing involves interdisciplinary research and enables development of new products by making use of innovative technologies. Also, it allows us to customize the products at any time based on customer requirements.

NPDSM 2024 aims to serve as a platform for researchers, academicians and industrialists to interact and exchange their ideas and research results so as to accelerate progress in development of new products with the help of smart manufacturing techniques."
          />
          <AboutSection
            title="About NPDSM-2025 Conference"
            description="Mechanical Engineering will evolve and collaborate as a global profession over the next decade through its emerging trends to develop engineering solutions that foster a cleaner, safer and sustainable world.

Product Design and Smart Manufacturing involves interdisciplinary research and enables development of new products by making use of innovative technologies. Also, it allows us to customize the products at any time based on customer requirements.

NPDSM 2024 aims to serve as a platform for researchers, academicians and industrialists to interact and exchange their ideas and research results so as to accelerate progress in development of new products with the help of smart manufacturing techniques."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
