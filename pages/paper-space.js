import { useState, useRef } from "react"
import { useInViewport } from "react-in-viewport"
import css from "../components/ProjectLayout/ProjectLayout.module.scss"
import cx from "classnames"
import ModalImage from "react-modal-image"
import {
  Container,
  DescriptionHorizontalList,
  DescriptionList,
  DescriptionGrid,
  Heading,
  ProjectLayout,
  SectionHeading,
  Text,
  Quote,
  FeatureDescription,
  LinkIcon
} from "../components"
import projects from "../data/projects.js"

export default function project() {
  const data = projects.paperSpace;
  const { siteURL, primaryColor, featuredImagePath } = projects.paperSpace

  return (
    <ProjectLayout data={projects.paperSpace}>
      <Container width="sm">
        <SectionHeading
          color="grey-medium"
          heading="01 Problem Space"
          subheading="Identifying the problem"
        />
      </Container>
      <Container paddingY="no" paddingX="none">
        <div className="flex">
          <img
            src="/assets/paper-space/mobile-view-2.png"
            className="w-1/2 mx-auto"
          />
        </div>
      </Container>
      <Container width="sm">
        <Heading level="h3">
          Journaling is an accessible way to define and reach our personal
          goals, to practice mindfulness, and to provide self-care.
        </Heading>
        <Text as="div" color="grey-dark" classes={{ root: "mb-12" }}>
          The trend of journaling has also grown significantly over the past
          years. Through our interviews, we’ve discovered many people who view
          journaling as a beneficial way to understand their emotions and to
          practice mindfulness. However, we identified the problem of people
          challenged with journaling inconsistently.
        </Text>
        <div className="p-8 mb-12 bg-gray-50">
          <Text as="div" style="lg-md" color="grey-dark">
            We curiously wanted to enhance the digital writing experience by
            focusing on being mindful while improving the habit of journaling.
          </Text>
        </div>
      </Container>
      <Container bgColorHex={primaryColor} width="sm" paddingY="lg">
        <div className="flex flex-col">
          <SectionHeading
            color="grey-medium"
            heading="User Interviews"
            subheading="Understanding the Habits of People who Journal"
          />
          <Text as="div" color="grey-dark" classes={{ root: "mb-12" }}>
            We interviewed 5 individuals, characterized as young adults in
            college/ university or are working professionals. The questions
            focused in learning and understanding their{" "}
            <strong>
              journaling habits, purpose for journaling, and their writing
              experiences
            </strong>{" "}
            if that’s using paper or digital.
          </Text>
          <div className="my-12">
            <ModalImage
              small="/assets/paper-space/interview-script.png"
              large="/assets/paper-space/interview-script.png"
              alt="Interview script"
            />
          </div>
          <SectionHeading
            color="grey-medium"
            heading="Main Insights"
            subheading="Identifying the Commonalities"
          />
          <Text as="div" color="grey-dark" classes={{ root: "mb-12" }}>
            The themes discovered from the user interviews revealed a common
            experience of people’s perception and purpose of journaling.
            <br />
            The user interviews revealed common themes on people’s perception
            and purpose of journaling and also habits.
          </Text>
          <DescriptionList
            items={[
              {
                title: "Journaling as way for reflection",
                additionals:
                  " “For me, journaling is a way to put out my negative emotions and have a better understanding of my trigger points.“ ",
              },
              {
                title: "Unable to journal consistently",
                additionals:
                  "“I really want to journal everyday but it’s hard to find the motivation to write consistently on a daily basis.“",
              },
              {
                title:
                  "Values the writing experience itself veruses the sub-features that are distracting",
                additionals:
                  "“I really want to journal everyday but It’s hard to find the motivation to write consistently on a daily basis.“",
              },
            ]}
          />
          <SectionHeading
            color="grey-medium"
            heading="User Persona"
            subheading="From a journaller’s POV"
          />
          <Text as="p" color="grey-dark">
            Collaboratively, we gathered insights and themes from our user
            research to create this user persona, Emilie, to identify our target
            audience’s user needs. We explored how this could drive the success
            of our product and design.
          </Text>
          <ModalImage
            small="/assets/paper-space/user-persona.svg"
            large="/assets/paper-space/user-persona.svg"
            alt="Interview script"
          />
        </div>
      </Container>
      <Container width="sm" paddingY="lg">
        <div className="mb-16 sm:mb-4">
          <SectionHeading
            color="grey-medium"
            heading="02 Design Process"
            subheading="Designing the product"
          />
        </div>
        <Heading level="h3" style="h5" classes={{ root: "mb-8" }}>
          HMW
        </Heading>
        <Text as="div" color="grey-dark" classes={{ root: "mb-16" }}>
          We mapped out our solutions by going through each step and asked
          ourselves HMW's to find design opportunities, and followed by
          gathering inspiration. We enjoyed this part because it allowed for
          creative thinking and bringing in ideas on what people like. Our
          design sprint, facilitated by one of our team members, undeniably
          helped our decision in delivering the success of the product feature.
          <br />
        </Text>
        <ModalImage
          small="/assets/paper-space/hmw.svg"
          large="/assets/paper-space/hmw.svg"
          alt="Wireframes sketch"
        />
        <Text as="p" color="grey-dark" classes={{ root: "pt-8 pb-24" }}>
          <strong>
            Collaboratively, we identified which features deemed higher
            priority.
          </strong>{" "}
          It was important for everyone to agree on the definite core features
          while also considering the technical and time limitations during that
          time.
        </Text>
        <div className="mb-24">
          <Heading level="h3" style="h5" classes={{ root: "mb-8" }}>
            Low-fidelity sketches
          </Heading>
          <Text as="div" color="grey-dark" classes={{ root: "mb-16" }}>
            We started with low-fidelity sketches after determining our user
            task flow and continued iterating collaboratively
          </Text>
          <ModalImage
            small="/assets/paper-space/wireframe-lo-fi.png"
            large="/assets/paper-space/wireframe-lo-fi.png"
            alt="Wireframes sketch"
          />
        </div>
      </Container>
      <Container width="sm" bgColor="black">
        <div className="mt-24 mb-16 sm:mb-4">
          <SectionHeading
            isDark
            heading="Problems identified"
            subheading="Work flow challenges"
          />
          <DescriptionList
            isDark
            items={[
              {
                title: "Technical feasibility",
                description:
                  "We were challenged with the technical feasibility in incorporating our proposed feature ideas as well as meeting the deadlines. This led us to think about the product more intuitively to determine the right core feature(s) we wanted to successfully attain for the app.",
                },
              {
                title:
                  "Created the branding and facilitated in the strategy for marketing the product",
                  description:
                  "Taking a second look at our proposed ideas and in doing a second round of market research for journaling, we observed the use of graphical interfaces for displaying mood and behaviour.",
                },
            ]}
          />
        </div>
      </Container>
      <Container paddingY="lg">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          <div>
            <SectionHeading
              heading="03 Solution"
              subheading="Simplifying the product features for a seamless digital journaling experience"
            />
          </div>
          <div>
            <DescriptionList
              items={[
                {
                  title:
                    "Centering the core experience on the “must-have” features",
                    description:
                    "Given the time and technical resources we had, the group agreed on removing the “should-have” and “nice-to-have” features. It was important to focus on our technical capabilities and to ensure that we provided an exceptional user experience for these selected features.",
                  },
                {
                  title:
                    "Improving our technology stack for better user experience",
                    description:
                    "Our goal diverted into finding a technical solution that would identify and analyze emotions from written text, thus uncovering user’s emotions while using the app. We researched APIs that would allow for analyzing emotions through user input text, and discovered the Watson Tone Analyzer, by IBM.",
                  },
              ]}
            />
          </div>
        </div>
      </Container>
      <Container
        width="sm"
        paddingY="lg"
        bgColorHex={primaryColor}
        classes={{ root: css.negativeMarginBottom }}
      >
        <SectionHeading
          heading="Introducing the final designs"
          subheading="PaperSpace"
        />
        <div className="my-48">
          <br />
        </div>
      </Container>
      <Container paddingY="none" width="sm" classes={{ root: css.topOffset }}>
        <img src="/assets/paper-space/mockups-product.png" className="mb-16" />
        <div className="mb-16">
          <LinkIcon openNewTab href={data.siteURL}>
            {data.cta}
          </LinkIcon>
        </div>
        <Text as="p" style="lg-md" color="grey-dark">
          A journaling application that creates a digital space for people to
          freely write, while making sense of their emotions and to gain relief.
          People can practice mindfulness through gradient color-coded
          indicators, and also find the guided prompts users who need a
          kick-starter to write.
        </Text>
      </Container>
      <Container paddingY="lg">
        <FeatureDescription
          items={[
            {
              imageUrl: "/assets/paper-space/feature-0.png",
              title: "Color Gradients as Mood Indicators",
              description:
                "Color-coded categories to visualize user’s emotions based on their writing content over weekly, monthly and yearly. These color gradients summerizes the emotions from the journal entries. It also provides a visual sense of how they’ve been feeling through the varying shades.",
              },
            {
              imageUrl: "/assets/paper-space/feature-1.png",
              title: "Color-coded Categories with Respective Moods",
              description:
                "Each color with its respective mood showed on the entry cards based on your writing content.",
              },
            {
              imageUrl: "/assets/paper-space/feature-2.png",
              title: "Guided Prompts for Journal Writing",
              description:
                "Guided prompts are offered for users who need a kick-starter to write. ",
              },
          ]}
        ></FeatureDescription>
      </Container>
      <Container width="sm" paddingY="md">
        <div className="mb-16">
          <SectionHeading
            color="grey-medium"
            heading="05 Design system"
            subheading="Creating and documenting a product design system"
          />
        </div>
        <Text as="div" color="grey-dark" classes={{ root: "mb-16 sm:mb-4" }}>
          We focused on creating a design system for the purpose of helping all
          team members in bringing PaperSpace to life.
          <br />
          <br />
          Our design system focused on strengthening and improving communication
          for all team members to build consistency in the product’s visuals.
          With better communication led to efficient project workflow, saving
          our team some time in ensuring we’re able to execute the product
          design to its fullest.
          <br />
        </Text>
      </Container>
      <Container bgColor="grey-light">
        <div className="mb-24">
          <img src="/assets/paper-space/title.png" className="mx-auto" />
        </div>
        <div className="flex flex-row my-16 space-x-8 sm:flex-col sm:space-x-0">
          <Heading level="h3" style="h2">
            Colors
          </Heading>
          <ModalImage
            small="/assets/paper-space/colors.png"
            large="/assets/paper-space/colors.png"
            alt="Wireframes sketch"
          />
        </div>
        <div className="flex flex-row my-16 space-x-8 sm:flex-col sm:space-x-0">
          <Heading level="h3" style="h2">
            Typography
          </Heading>
          <ModalImage
            small="/assets/paper-space/typography.png"
            large="/assets/paper-space/typography.png"
            alt="Wireframes sketch"
          />
        </div>
        <div className="flex flex-row my-16 space-x-8 sm:flex-col sm:space-x-0">
          <Heading level="h3" style="h2">
            Iconography
          </Heading>
          <ModalImage
            small="/assets/paper-space/iconography.png"
            large="/assets/paper-space/iconography.png"
            alt="Wireframes sketch"
          />
        </div>
        <div className="flex flex-row my-16 space-x-8 sm:flex-col sm:space-x-0">
          <div className="flex flex-col">
            <Heading level="h3" style="h2">
              Tap Bar <br />
              Component
            </Heading>
          </div>
          <ModalImage
            small="/assets/paper-space/tapbar.png"
            large="/assets/paper-space/tapbar.png"
            alt="Wireframes sketch"
          />
        </div>
      </Container>
      <Container width="sm" paddingY="lg">
        <Heading level="h3" style="h5" classes={{ root: "mb-8" }}>
          Outcome
        </Heading>
        <Text as="div" color="grey-dark" classes={{ root: "mb-12" }}>
          The design system offered an importance of building consistency in PaperSpace and it also provided our team with the following skills:
        </Text>
        <DescriptionHorizontalList items={[
          {
            title:"Collaboration Skills",
            description:"A team effort, where each member is working together (designers and developers) to articulate and document the use of components, so that when it comes to developing them, we understood the use of the component. Involving everyone from the begining also helped with designing and building the components needed."
          },
          {
            title:"Systems Thinking",
            description:"A closer look into the component. Touching on UI aspects like color, typography and its styles, and weight. This allowed us to correctly translate the style guides to the right CSS properties when it came to developing the component for it. "
          },
          {
            title:"Design and Code",
            description:"From design to development, this allowed our team to also speak in developers’ language. Knowing the typography styles and being strict with its code implementation."
          },
        ]}/>
      </Container>
    </ProjectLayout>
  )
}
