import { ReactNode } from "react";

type ChildrenType = {
  children: ReactNode;
};

const SectionHeading = ({ children }: ChildrenType) => (
  <h2 className="text-2xl font-bold mb-4">{children}</h2>
);

const Subheading = ({ children }: ChildrenType) => (
  <h3 className="text-xl font-bold mb-2">{children}</h3>
);

const ListItem = ({ children }: ChildrenType) => (
  <li className="list-disc ml-6">{children}</li>
);

const PlanSection = ({ title, children }: ChildrenType & { title: string }) => (
  <section className="mb-8">
    <SectionHeading>{title}</SectionHeading>
    <div className="ml-4">{children}</div>
  </section>
);

const Plan = () => (
  <div className="max-w-2xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8">
      Front-end Team Lead at Promova Plan
    </h1>

    <PlanSection title="1. Assessing and Improving Team Performance">
      <Subheading>Methodology:</Subheading>
      <p>
        Conduct bi-annual performance reviews to evaluate individual and team
        contributions. Incorporate both quantitative metrics and qualitative
        factors.
      </p>

      <Subheading>Improvement Strategies:</Subheading>
      <ul>
        <ListItem>
          Identify strengths and weaknesses through performance reviews (aka gap
          analyze)
        </ListItem>
        <ListItem>
          Encourage continuous learning opportunities via courses, challenges
          and etc..
        </ListItem>
        <ListItem>
          Organize team-building activities to enhance collaboration or
          bi-annual hackathon to do some cool experiments in fun way.
        </ListItem>
        <ListItem>Keep transparencies between teammates</ListItem>
        <ListItem>
          Collect team feedback via quarterly retro FE improvements to keep team
          in a good shape and fix in advance our process
        </ListItem>
      </ul>
    </PlanSection>

    <PlanSection title="2. Talent Development and Skill Enhancement">
      <Subheading>Strategy:</Subheading>
      <p>
        Create individualized training plans for each team member. Include
        technical and soft skills development.
      </p>

      <Subheading>Implementation:</Subheading>
      <ul>
        <ListItem>
          Encourage rotation between projects or between task complexity to gain
          more ownership for all our teammates
        </ListItem>
        <ListItem>
          Support team members in obtaining relevant
          certifications/courses/articles/code quizzes.
        </ListItem>
        <ListItem>
          Acknowledge and reward achievements through a recognition program in
          case it exist or kudo CRM (aka code performer last month/ or breaker
          changes coder )
        </ListItem>
      </ul>
    </PlanSection>

    <PlanSection title="3. Process and Organizational Improvements">
      <Subheading>Optimization Strategies:</Subheading>
      <ul>
        <ListItem>Scrum</ListItem>
        <ListItem>
          Efficient communication (slack) and establish regular team meetings
          but not so often and (friday free meetings )
        </ListItem>
        <ListItem>
          Develop a centralized knowledge-sharing platform for documentation
          (notion would be nice)
        </ListItem>
        <ListItem>
          Establish a feedback loop for continuous improvement.
        </ListItem>
        <ListItem>Define clear career growth paths for team members.</ListItem>
        <ListItem>
          Improve and atomize code review process + play with AI auto PR
          comments generation + copilot integration
        </ListItem>
      </ul>
    </PlanSection>
  </div>
);

export default Plan;
