import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import BMC from '../../assets/BMC.jpg'
import BUDining from '../../assets/BU.jpg'
import GBFB from '../../assets/GBFB.jpg'
import HNRCA from '../../assets/HNRCA.jpg'
import MNHC from '../../assets/MNHC.jpg'
import Spaulding from '../../assets/Spaulding.jpg'
import UCSF from '../../assets/ucsf.jpg'
import Exp from './Exp'

const ExpList = () => (
  <div>
    <div id="Experience1">
      <Exp
        src={MNHC}
        title="Mission Neighborhood Health Center, Shotwell and Excelsior clinics"
        subtitle="Registered Dietitian/Chronic Care Coordinator | September 2019 - Present"
        text={
          <div>
            <p style={{ textAlign: 'justify' }}>
              Mission Neighborhood Health Center is a community services organization and a Federally Qualified Health
              Center that provides compassionate, patient-centered care to the community, with a focus on the
              Latinx/Hispanic population.
            </p>
            <ul style={{ textAlign: 'left' }}>
              <li style={{ marginBottom: '0.7rem' }}>
                Providing <b>culturally competent</b> nutrition care, education, and counseling to patients of all age
                groups at two clinics in a community health setting that focuses on providing services to the
                Latinx/Hispanic population.
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                Applying thorough knowledge of <b>child</b> nutrition and health, <b>adult</b> nutrition, and{' '}
                <b>maternal</b> and <b>perinatal</b> health, including <b>breastfeeding</b> support.
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                Monitoring and coordinating the care and treatment plan of patients with <b>chronic conditions</b>,
                especially providing diabetes education and management, in collaboration with the healthcare team.
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                Implementing nutrition portion of the <b>Comprehensive Perinatal Services Program (CPSP)</b> and
                ensuring all requirements are met.
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                Providing <b>breastfeeding education and support</b> to patients both prenatally and postnatally.
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                Applying thorough knowledge of child nutrition and health, adult nutrition, and maternal and perinatal
                health, including breastfeeding support
              </li>
            </ul>
          </div>
        }
      />
    </div>
    <div id="Experience2">
      <Exp
        src={UCSF}
        title={<div>Dietetic Internship at University of California, San Francisco (UCSF) Medical Center</div>}
        subtitle="Dietetic Intern | July 2018 - July 2019"
        text={
          <div>
            <p style={{ textAlign: 'justify' }}>
              A full-time 52-week rigorous dietetic internship with medical nutrition therapy concentration in a
              tertiary care, 720-bed teaching hospital.
            </p>
            <ul style={{ textAlign: 'left' }}>
              <li style={{ marginBottom: '0.7rem' }}>
                Provided nutrition care for adults and pediatric patents with a variety of complex medical conditions.
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                Utilized nutrition care process to assess, identify nutrition diagnoses and design nutrition
                interventions in an acute care setting.
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                Developed enteral and parenteral nutrition support plans, and provide nutrition education for inpatients
                and outpatients.
              </li>
            </ul>
          </div>
        }
        noDiv={true}
      />
      <br />
      <Exp
        subtitle="Rotation Experience:"
        text={
          <ul style={{ textAlign: 'left' }}>
            <li style={{ marginBottom: '0.8rem' }}>
              {' '}
              <b>26 weeks in Adult clinical</b> | Critical Care, Cardiology & Cardiothoracic Surgery, Surgical Oncology,
              Malignant Hematology, Neurosciences
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <b>6 weeks in Pediatric and Elective clinical </b>| Bone Marrow Transplant, General Medicine, Cardiac
              Transitional Care, Cardiac Intensive Care Units
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <b>4 weeks in Outpatient </b>| Nutrition Counseling Clinic, Pre and Post Heart and Lung Transplant,
              Nephrology, Gastrointestinal/Inflammatory Bowel Disease
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <b>6 weeks in Staff Relief </b>| Surgical Oncology, Malignant Hematology, Neurosciences
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <b>2 weeks in Community </b>| La Clínica de la Raza
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <b>8 weeks in Food Service Management </b>| UCSF Nutrition & Food Services
            </li>
          </ul>
        }
        noDiv={true}
        subheadPadding="0"
      />
      <br />
      <Exp
        subtitle="Other Achievements:"
        text={
          <ul style={{ textAlign: 'left' }}>
            <li style={{ marginBottom: '0.8rem' }}>
              Delivered a{' '}
              <Link to="/projects#CaseStudy" scroll={(el) => el.scrollIntoView({ block: 'center' })}>
                <b>professional case study presentation</b>
              </Link>{' '}
              on the enteral nutrition management for patients in the intensive care unit (ICU) who are undergoing prone
              ventilation.
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              Delivered a <b>journal article review </b>presentation analyzing the available evidence regarding isolated
              functional fibers and reviews common misconceptions regarding fiber supplementation.
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              Designed <b>{`"Low Iodine Diet"`} </b>education material for patients in the inpatient and outpatient care
              settings.
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              Delivered a <b>story board </b>for Patient Food Services video, including script, frames, timings, and
              description of the shots.
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              Collaborated in a team of 5 to propose a{' '}
              <Link to="/projects#BusinessPlan" scroll={(el) => el.scrollIntoView({ block: 'center' })}>
                <b>business plan </b>
              </Link>
              to provide an option to purchase hot foods for patients in the infusion clinic at Mission Bay.
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              Mastering proficiency in <b>Epic electronic health record</b> and <b>Computrition</b> programs.
            </li>
          </ul>
        }
        subheadPadding="0"
      />
    </div>
    <div id="Experience3">
      <Exp
        src={BMC}
        title="Boston Medical Center Preventive Food Pantry"
        subtitle="Volunteer | September 2016 - May 2018"
        text={
          <div>
            <p style={{ textAlign: 'justify' }}>
              First hospital-based therapeutic preventive food pantry in the country, distributing one million pounds of
              food every year and has served over one million people since 2001.
            </p>
            <ul style={{ textAlign: 'left' }}>
              <li style={{ marginBottom: '0.7rem' }}>
                Provided appropriate healthful foods from the pantry to eligible low-income patients according to their
                food prescriptions and nutritional needs.
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                Assisted with produce delivery to The Teaching Kitchen at BMC to allow for patients to receive
                disease-specific, cost-effective cooking classes.
              </li>
            </ul>
          </div>
        }
      />
    </div>
    <div id="Experience4">
      <Exp
        src={Spaulding}
        title="Spaulding Rehabilitational Hospital"
        subtitle="Intern | June 2017 - July 2017"
        text={
          <div>
            <p style={{ textAlign: 'justify' }}>
              Dietetic practicum at a 132-bed teaching hospital for Harvard Medical School. Spaulding Rehabilitational
              Hospital is one of the largest rehabilitation facilities in the U.S., providing comprehensive
              rehabilitation treatment.
            </p>
            <ul style={{ textAlign: 'left' }}>
              <li style={{ marginBottom: '0.7rem' }}>
                Assisted dietitians and diet technicians in inpatient clinical services for pediatric and adults in the
                brain and spinal cord injury and stroke units.
              </li>
              <li style={{ marginBottom: '0.7rem' }}>Created nutrition materials in English and Spanish.</li>
            </ul>
          </div>
        }
      />
    </div>
    <div id="Experience5">
      <Exp
        src={HNRCA}
        title={
          <div>
            Energy Metabolism Lab (EMET) at the <br /> Jean Mayer USDA Human Nutrition Research Center on Aging
          </div>
        }
        subtitle="Research Assistant | January 2017 – May 2017"
        text={
          <div>
            <p style={{ textAlign: 'justify' }}>
              The Jean Mayer USDA Human Nutrition Research Center on Aging (HNRCA) at Tufts University is one of six
              human nutrition research centers supported by the United States Department of Agriculture (USDA). It is a
              bench to bedside research center that generates translational scientific results with the purpose to make
              significant research contributions to U.S. and international nutritional and physical activity
              recommendations, public policy, and clinical healthcare.
            </p>
            <ul style={{ textAlign: 'left' }}>
              <li style={{ marginBottom: '0.7rem' }}>
                Assisted with the organization of data collected in metabolic trials, such as the Healthy Families
                Healthy Forces Study, a randomized trial which compared two interventions for sustainable weight loss.
              </li>
            </ul>
          </div>
        }
      />
    </div>
    <div id="Experience6">
      <Exp
        src={GBFB}
        title="The Greater Boston Food Bank (GBFB)"
        subtitle="Volunteer | September 2016 - December 2017"
        text={
          <div>
            <p style={{ textAlign: 'justify' }}>
              The Greater Boston Food Bank (GBFB) works passionately to end hunger here by providing people from the
              area who are in need with the healthy food and resources they need.
            </p>
            <ul style={{ textAlign: 'left' }}>
              <li style={{ marginBottom: '0.7rem' }}>
                Aid in organizing, packaging, and loading foods for shipment to help end hunger by ensuring that
                communities in Eastern Massachusetts receive the timely and healthy food and resources they need.
              </li>
            </ul>
          </div>
        }
      />
    </div>
    <div id="Experience7">
      <Exp
        src={BUDining}
        title="Boston University Dining Services"
        subtitle="Student Worker | November 2014 - May 2015"
        text={
          <div>
            <p style={{ textAlign: 'justify' }}>
              BU offers one of the best campus dining services in the country, with three residence dining rooms with
              all-you-can-eat food service and the George Sherman Union Food Court which has 11 different restaurants.
            </p>
            <ul style={{ textAlign: 'left' }}>
              <li style={{ marginBottom: '0.7rem' }}>
                Prepared and served food in healthy portions in a fast-paced kitchen setting.
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                Ensured good outcomes by maintaining activity and temperature logs of inspected work areas and prepared
                foods.
              </li>
            </ul>
          </div>
        }
        noDiv={true}
      />
    </div>
  </div>
)

export default ExpList
