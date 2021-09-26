import React from 'react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'

import MEP1 from '../../assets/MEP1.png'
import MEP2 from '../../assets/MEP2.png'
import TMP1 from '../../assets/TMP1.jpg'
import TMP2 from '../../assets/TMP2.jpg'
import Carousel from './Carousel'
import Project from './Project'

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const P = styled.p`
  font-size: 1.1rem !important;
  text-align: ${(props) =>
    props.align === 'center'
      ? 'center'
      : props.align === 'right'
      ? 'right'
      : props.align === 'justify'
      ? 'justify'
      : 'left'};
`

export const ProjectList = () => (
  <>
    <Project
      header={
        <>
          <b id="CaseStudy">Case Study:</b> Enteral Nutrition Management <br />
          During Prone Ventilation
        </>
      }
      date="June 18, 2019"
      sections={[
        {
          header: 'Project Goals',
          content: (
            <>
              <P>
                The goal was to deliver a professional presentation synthesizing the nutritional care that I directly
                provided to a patient by reviewing and evaluating pertinent evidence-based guidelines and emerging
                scientific research to inform further application in dietetics practice.
              </P>
              <P>
                For my case study, I chose a patient with a diagnosis of presumed sarcoidosis during their admission,
                who was later found to have anti-melanoma differentiation-associated gene 5 (anti-MDA5) amyopathic
                dermatomyositis requiring prone ventilation.
              </P>
            </>
          ),
        },
        {
          header: 'The Process',
          noContain: true,
          content: (
            <ol>
              <li>
                <P>Select a patient of interest.</P>
              </li>
              <li>
                <P>
                  Provide comprehensive nutrition care through data collection, assessment, nutrition diagnosis,
                  nutrition intervention, monitoring, and evaluation.
                </P>
              </li>
              <li>
                <P>
                  Review current protocols, best practices, resources and literature related to nutritional care of
                  patient’s condition.
                </P>
              </li>
              <li>
                <P>
                  Evaluate nutrition care and conclude practical applications for UCSF&apos;s nutrition department and
                  overall dietetics practice.
                </P>
              </li>
              <li>
                <P>
                  Design and conduct a presentation to a target audience of primarily clinical nutrition professionals.
                </P>
              </li>
            </ol>
          ),
        },
        {
          header: 'The Result',
          noContain: true,
          content: (
            <Carousel
              size={101}
              folderName="project0"
              imageName="EN Management during Prone Ventilation_Presentation.Mary Liang-"
            />
          ),
        },
        {
          header: 'Final Thoughts',
          content: (
            <P>
              My case study presentation was <i>one of the most memorable parts of my dietetic internship</i>. It is the
              representation of the zenith of the clinical knowledge and judgment I was developing throughout my
              internship rotations. This was supported by innumerable hours of research of evidence-based practice, as
              well as the integration and cooperation of the healthcare team to carry out patient-centered care.
            </P>
          ),
        },
      ]}
    />

    <Project
      header={
        <>
          <b id="CaseStudy">Patient Education Handout:</b> Mediterranean Eating Pattern <br />
        </>
      }
      date="July 5, 2019"
      sections={[
        {
          header: 'Project Goals',
          content: (
            <>
              <P>
                The goal was to create a patient education handout after researching relevant journal articles related
                to the topic.
              </P>
              <P>
                For this project, I decided to create a patient education handout for Mediterranean Eating Pattern as I
                was inspired by my outpatient rotation at the UCSF Center for Prevention of Heart and Vascular Disease.
              </P>
            </>
          ),
        },
        {
          header: 'The Process',
          noContain: true,
          content: (
            <ol>
              <li>
                <P>Select a topic of interest.</P>
              </li>
              <li>
                <P>Review resources and literature regarding the topic.</P>
              </li>
              <li>
                <P>Design and format the information in handout form, with a readability of sixth-grade level.</P>
              </li>
              <li>
                <P>Submit to preceptor for review and final changes.</P>
              </li>
            </ol>
          ),
        },
        {
          header: 'The Result',
          noContain: true,
          content: (
            <div>
              <Image
                alt="The Mediterranean Diet Handout Page 1"
                src={MEP1}
                rounded
                size="medium"
                style={{
                  width: '772px',
                  objectFit: 'cover',
                }}
                bordered
              />
              <br />
              <Image
                alt="Mediterranean Diet Handout Page 2"
                src={MEP2}
                style={{ width: '772px', objectFit: 'cover' }}
                bordered
              />
            </div>
          ),
        },
        {
          header: 'Final Thoughts',
          content: (
            <>
              <P>
                I really enjoyed working in this handout. It brought out the &quot;graphic designer&quot; in me, while
                still challenging me with what nutrition information to include and how to phrase it for our patients. I
                would definitely want to develop more patient education handouts in the future.
              </P>
            </>
          ),
        },
      ]}
    />

    <Project
      header={
        <>
          <b>Recipe Development and Theme Meal: </b>Thai Food
        </>
      }
      date="December 6, 2018"
      sections={[
        {
          noContain: true,
          content: (
            <>
              <Row>
                <Image
                  src={TMP1}
                  rounded
                  size="medium"
                  style={{ width: '300px', height: '390px', objectFit: 'cover' }}
                />
                <Image
                  src={TMP2}
                  rounded
                  size="medium"
                  style={{ width: '300px', height: '390px', objectFit: 'cover' }}
                />
              </Row>
              <P align="center" style={{ paddingTop: '0.8rem' }}>
                <i>Liang, M. (December 2018)</i>
              </P>
            </>
          ),
        },
        {
          header: 'Project Goals',
          content: (
            <P>
              The goal of this project is to test and develop a <b>new plant-forward recipe</b> to replace the beef stew
              on the patient menu for that day in both hospitals. This dish needs to{' '}
              <i>spread to at least 5 core menu</i> and provide at least <i>2.45 mg of iron</i> and{' '}
              <i>10-15 grams of protein</i>.
            </P>
          ),
        },
        {
          header: 'The Process',
          noContain: true,
          content: (
            <ol>
              <li>
                <P>Choose a theme to start developing recipe ideas. </P>
              </li>
              <li>
                <P>Begin recipe development with Executive Chefs in the kitchen and test modifications if necessary.</P>
              </li>
              <li>
                <P>
                  Create menu announcement graphics and format for patient menus and determine marketing strategies for
                  the menu.
                </P>
              </li>
              <li>
                <P>Create, standardize, and analyze recipes in software Computrition.</P>
              </li>
              <li>
                <P>Determine the plating presentation of food and take photos of the final plate presentation. </P>
              </li>
              <li>
                <P>Create plan-o-gram for trayline set up in both hospitals.</P>{' '}
              </li>
              <li>
                <P>
                  Conduct a task force meeting to share theme meal with the team and discuss the execution and
                  supervision plan.
                </P>{' '}
              </li>
              <li>
                <P>On the day of, huddle with the assembly and patient food service supervisors to review plating.</P>{' '}
              </li>
              <li>
                <P>Conduct plate waste study for the main menu item.</P>{' '}
              </li>
              <li>
                <P>
                  Calculate full-time equivalents used for theme meal and compare with usual production, compare the
                  contribution analysis to the average of three previous default entreés.
                </P>{' '}
              </li>
              <li>
                <P>
                  Present theme meal outcome, survey results, contribution analysis, and cost to UCSF’s food service
                  management team.{' '}
                </P>{' '}
              </li>
            </ol>
          ),
        },
        {
          header: 'The Result',
          noContain: true,
          content: <Carousel size={12} folderName="project2" imageName="Theme Meal Presentation-" />,
        },
        {
          header: 'Final Thoughts',
          content: (
            <P>
              This project was exceptionally fun to work on. Coming up with unique and vibrant recipes that patients
              would enjoy was a great way to learn all the intricate steps that are required to develop and test a
              recipe that has multiple requirements and restrictions. The hardest part of this project was to actually
              choose one of the multiple recipes we tested as the main entrée since they were all delicious.
            </P>
          ),
        },
      ]}
    />

    <Project
      header={
        <>
          <b id="BusinessPlan">Business Plan:</b> Nourish Bay Café
        </>
      }
      date="November 2018 - December 2018"
      sections={[
        {
          header: 'Project Goals',
          content: (
            <P>
              The goal of the project was to develop a business model plan designing a retail concept with paid meal
              services for infusion patients as part of the expansion of the new UCSF Bakar Precision Cancer Medicine
              Building from the Equator Café at UCSF Mission Bay Hospital. The purpose of our business model was to
              increase patient access to and to invigorate interest in food from UCSF dining services.
            </P>
          ),
        },
        {
          header: 'The Process',
          noContain: true,
          content: (
            <ol>
              <li>
                <P>Perform a needs assessment for the new infusion patients, who will be the customers.</P>
              </li>
              <li>
                <P>
                  Formulate healthy, fresh, and nutritionally sound menu choices and develop the services that meet the
                  needs of customers, are feasible and generate revenue.
                </P>
              </li>
              <li>
                <P>Conduct a market analysis to find competitors by location, concept, and price.</P>
              </li>
              <li>
                <P>Establish marketing and sales strategies for success. </P>
              </li>
              <li>
                <P>
                  Create a sales and profit forecast that takes into account fixed costs, variable costs, desired sales,
                  labor needs, and annual revenue patterns.
                </P>
              </li>
              <li>
                <P>Present business plan model to UCSF’s food service management team.</P>{' '}
              </li>
            </ol>
          ),
        },
        {
          header: 'The Result',
          noContain: true,
          content: <Carousel size={9} folderName="project1" imageName="Business Plan Presentation-" />,
        },
        {
          header: 'Final Thoughts',
          content: (
            <P>
              This business plan proposal was a challenging yet fun experience filled with learning opportunities.
              Working with my intern group as a team was definitely the highlight of this project, as it allowed us to
              share responsibilities, listen to each other&apos;s ideas, and rely on each other for support. With this
              project, I was able to further practice how to conduct market research, create sales and profit forecasts,
              as well as develop different and innovative business models that could be feasible with the current
              resources that the hospital and the department has.
            </P>
          ),
        },
      ]}
      last
    />
  </>
)
