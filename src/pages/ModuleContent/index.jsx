import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Typography, Box, Alert, Paper } from '@mui/material';
import MalariaQuizModule2 from '../../components/MalariaQuizModule2';
import QuizFour from "../../components/QuizFour";
import HIVQuizModule2 from "../../components/HIVQuizModule2";
import HIVQuizModule4 from "../../components/HIVQuizModule4";
import TBQuizModule2 from "../../components/TBQuizModule2";
import TBQuizModule5 from "../../components/TBQuizModule5";
import PolioQuizModule2 from "../../components/PolioQuizModule2";
import PolioQuizModule4 from "../../components/PolioQuizModule4";
import SubstanceUseQuizModule2 from "../../components/SubstanceUseQuizModule2";
import SubstanceUseQuizModule3 from "../../components/SubstanceUseQuizModule3";


const ModuleContent = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');

  const courseId = pathParts[3] || 'malaria';
  const moduleId = pathParts[4] || 'module-1';

  console.log("Course ID:", courseId);
  console.log("Module ID:", moduleId);

  const moduleContent = {
    malaria: {
      'module-1': {
        title: 'Introduction & Overview - Malaria',
        content: `<p>
          Malaria is one of the most persistent and devastating infectious diseases in human history. It has influenced the outcomes of wars, hindered economic growth, and continues to place a heavy burden on healthcare systems around the world. Caused by Plasmodium parasites and transmitted through the bites of infected female Anopheles mosquitoes, malaria is both preventable and curable, yet it remains a leading cause of illness and death in tropical and subtropical regions.
          <br /><br />
          Globally, malaria affects over 200 million people each year, with hundreds of thousands of deaths, especially among young children and pregnant women. While it is a global health concern, the African continent bears the greatest burden—accounting for roughly 95% of all malaria cases and deaths. In many African nations, malaria remains one of the top causes of mortality and a significant barrier to development.
          <br /><br />
          Zooming in further, Nigeria is at the epicenter of the malaria crisis. As Africa's most populous country, Nigeria alone contributes nearly one-quarter of all global malaria cases. Despite massive efforts including awareness campaigns, insecticide-treated nets, and access to medications, malaria continues to take a heavy toll on the nation's public health and economy.
          <br /><br />
          This module introduces you to the basic understanding of malaria, its causes, effects, and importance on a global, continental, and national scale. As you move through the course, you will explore malaria's transmission, symptoms, prevention strategies, and the global and local actions aimed at its control and eventual eradication.
              <br /><br />
    <strong>Watch this short video for a visual overview:</strong><br />
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/PGiqxnAr2fQ" title="What is Malaria? | World Malaria Day" frameborder="0" allowfullscreen></iframe>
        </p>`
      },
      'module-2': {
        title: 'Mode of Transmission - Malaria',
        content: `<p>
          Malaria is transmitted exclusively through the bites of infected female <strong>Anopheles</strong> mosquitoes, which are active mainly between dusk and dawn. The transmission cycle begins when a mosquito bites a person already infected with the malaria parasite. The mosquito ingests the parasites during the blood meal, and after a developmental period in the mosquito's gut, the parasites migrate to its salivary glands. When the mosquito bites another person, the parasites are injected into the bloodstream, beginning a new infection.
          <br /><br />
          The intensity and frequency of malaria transmission depend on multiple interconnected factors: the presence of the Plasmodium parasite (most commonly <em>P. falciparum</em> and <em>P. vivax</em>), the mosquito vector's breeding habits and density, the level of immunity within the human population, and environmental conditions such as temperature, humidity, and rainfall—which directly affect mosquito survival and breeding.
          <br /><br />
          In areas where malaria is endemic, humans serve as the primary reservoir for the parasite, creating a continuous transmission cycle. While mosquito bites remain the main route of transmission, malaria can also be transmitted through blood transfusions, organ transplants, shared needles, and from mother to child during childbirth (congenital malaria)—though these instances are rare compared to vector-borne transmission.
          <br /><br />
          Understanding the mode of transmission is critical in designing effective prevention strategies such as mosquito net use, indoor residual spraying, environmental control of breeding sites, and public health education to reduce human-vector contact.
        </p>`
      },
      'module-3': {
        title: 'Malaria Prevention Strategy',
        content: `<p>
          Preventing malaria is one of the most critical steps in reducing its global burden, especially in regions where the disease is endemic. Malaria prevention strategies focus primarily on controlling the mosquito vector, preventing human-mosquito contact, and using chemoprevention in vulnerable populations. Below are the most effective and widely recommended methods:
          <br /><br />

          <strong>1. Insecticide-Treated Nets (ITNs):</strong><br />
          Sleeping under insecticide-treated mosquito nets is one of the most effective ways to prevent malaria, especially for children and pregnant women. Long-lasting insecticidal nets (LLINs) not only protect the user but also reduce mosquito populations in the surrounding area.
          <br /><br />

          <strong>2. Indoor Residual Spraying (IRS):</strong><br />
          This involves spraying the inside of homes with insecticides that remain effective for several months. IRS kills mosquitoes when they rest on treated surfaces, thereby reducing malaria transmission. It is most effective when at least 80% of homes in an area are sprayed.
          <br /><br />

          <strong>3. Environmental Management:</strong><br />
          Controlling the mosquito breeding environment by draining stagnant water, covering water storage containers, and clearing bushes around homes can significantly reduce mosquito populations. Community efforts and sanitation campaigns play a vital role in this method.
          <br /><br />

          <strong>4. Chemoprevention:</strong><br />
          Preventive medication can be administered to high-risk groups. For example, <em>Intermittent Preventive Treatment in Pregnancy (IPTp)</em> and <em>Seasonal Malaria Chemoprevention (SMC)</em> for children in areas of high seasonal transmission have proven effective.
          <br /><br />

          <strong>5. Malaria Vaccine:</strong><br />
          The RTS,S/AS01 malaria vaccine—also known as Mosquirix—has been introduced in select countries in sub-Saharan Africa. It is the world's first approved malaria vaccine and has shown promise in reducing severe cases in children.
          <br /><br />

          <strong>6. Personal Protection:</strong><br />
          Wearing long-sleeved clothing, using mosquito repellents containing DEET or picaridin, and ensuring windows and doors are screened are practical everyday steps individuals can take, especially in high-transmission zones.
          <br /><br />

          <strong>7. Health Education and Community Engagement:</strong><br />
          Educating communities about how malaria is transmitted, the importance of using preventive tools, and when to seek treatment plays a crucial role in sustained malaria control. Engagement through schools, local health workers, and media campaigns strengthens the overall impact.
          <br /><br />

          <strong>Watch this informative video by the WHO to better understand malaria prevention:</strong><br />
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/9oNDkbR2b0k" title="Preventing Malaria | World Health Organization" frameborder="0" allowfullscreen></iframe>
          <br /><br />

          Malaria prevention is not the responsibility of a single individual or government—it requires a combined effort of communities, health systems, global organizations, and continuous research. With proper implementation of these strategies, malaria cases and deaths can be drastically reduced, bringing the world closer to eradication.
        </p>`
      },
      'module-4': {
        title: 'Malaria Testing and Treatment',
        content: `<p>
          Early and accurate diagnosis of malaria is crucial for effective treatment and for reducing disease transmission. Malaria testing helps distinguish it from other febrile illnesses and ensures that antimalarial drugs are used appropriately.
          <br /><br />
          <strong>1. Diagnostic Methods:</strong><br />
          There are two primary methods for diagnosing malaria:
          <ul>
            <li><strong>Microscopy:</strong> This traditional method involves examining a drop of the patient's blood under a microscope to detect the presence of malaria parasites. It is considered the gold standard and allows identification of the specific Plasmodium species and the parasite density.</li>
            <li><strong>Rapid Diagnostic Tests (RDTs):</strong> RDTs detect specific antigens produced by malaria parasites. These tests are quicker and easier to use, especially in areas where quality microscopy is not available.</li>
          </ul>
          <br />
          <strong>2. Treatment Approaches:</strong><br />
          Treatment depends on several factors including the type of malaria parasite, severity of the disease, and patient age or pregnancy status. The World Health Organization (WHO) recommends the following:
          <ul>
            <li><strong>Uncomplicated Malaria:</strong> Artemisinin-based Combination Therapy (ACT) is the first-line treatment. ACTs combine two drugs to reduce the chance of resistance and improve effectiveness.</li>
            <li><strong>Severe Malaria:</strong> Requires immediate hospitalization and administration of injectable artesunate, followed by ACT for full treatment once the patient stabilizes.</li>
            <li><strong>Relapsing Malaria (e.g., Plasmodium vivax):</strong> In addition to ACT, Primaquine is used to eliminate dormant liver stages and prevent relapses.</li>
          </ul>
          <br />
          <strong>3. Self-Medication and Resistance:</strong><br />
          It's important to avoid self-medication with antimalarials. Misuse can lead to drug resistance, making treatment less effective in the long run. Always seek a diagnosis and use prescribed treatment.
          <br /><br />
       <strong>Watch this short WHO video on malaria testing and treatment:</strong><br />
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/F0LBU1VHdlA" title="Malaria: How is it diagnosed and treated?" frameborder="0" allowfullscreen></iframe>
      <br /><br />
        </p>`
      },
      'module-5': {
        title: 'Community Engagement for Malaria',
        content: `
    <h2>Community Engagement for Malaria Prevention and Control</h2>

    <p>Malaria remains one of the most pressing public health concerns, especially in tropical and subtropical regions. While medical interventions like diagnostics and treatment are vital, the role of the community in preventing malaria cannot be overstated. Engaging communities in malaria awareness, prevention, and response is a cornerstone of successful control and elimination strategies.</p>

    <h3>Why Community Engagement Matters</h3>
    <p>Malaria thrives in environments where awareness and resources are limited. Communities that are actively involved in prevention efforts are more likely to adopt behaviors that reduce transmission and seek timely treatment. Community engagement leads to:</p>
    <ul>
      <li><strong>Better awareness</strong> about mosquito-borne transmission and preventive practices.</li>
      <li><strong>Improved use</strong> of insecticide-treated nets (ITNs) and indoor residual spraying (IRS).</li>
      <li><strong>Early diagnosis and treatment</strong> through community health volunteers.</li>
      <li><strong>Monitoring and surveillance</strong> by locals who can report and track cases quickly.</li>
    </ul>

    <h3>Key Strategies for Community Engagement</h3>
    <ol>
      <li><strong>Health Education Campaigns:</strong> Organize local events, dramas, radio broadcasts, and door-to-door sensitization to spread key messages on malaria prevention and treatment.</li>
      <li><strong>Empowering Community Health Workers (CHWs):</strong> Train and equip CHWs to provide malaria testing, distribute bed nets, and educate families at the grassroots level.</li>
      <li><strong>School-Based Programs:</strong> Teach children about mosquito life cycles and hygiene practices. Students often act as change agents in their families and neighborhoods.</li>
      <li><strong>Involving Religious and Traditional Leaders:</strong> These respected figures can influence community behavior and support health messaging during ceremonies and gatherings.</li>
      <li><strong>Community-Led Clean-Up Drives:</strong> Encourage people to remove stagnant water, dispose of waste properly, and maintain clean surroundings to eliminate mosquito breeding sites.</li>
    </ol>

    <h3>Challenges in Community Engagement</h3>
    <p>Despite its importance, engaging communities in malaria efforts faces some barriers, such as:</p>
    <ul>
      <li>Lack of trust in health systems or government programs</li>
      <li>Poor literacy or misunderstanding of malaria symptoms and causes</li>
      <li>Cultural beliefs and practices that conflict with scientific approaches</li>
      <li>Inconsistent funding or support for local health initiatives</li>
    </ul>

    <p>To overcome these, it's essential to involve community members from the start in designing and executing malaria programs. This participatory approach builds ownership and trust.</p>

    <h3>Watch this Video on Community-Driven Malaria Prevention</h3>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
      <iframe 
        src="https://www.youtube.com/embed/9FrpKpbfpsU" 
        frameborder="0" 
        allowfullscreen 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>

    <p>Community engagement is not a one-time activity but a continuous process that builds resilience and empowers people to protect themselves and their neighbors. Together, communities can drive the fight against malaria and contribute to long-term health and development.</p>
  `
      },
      'module-6': {
        title: 'Global Malaria Initiative',
        content: `
    <p>
      The Global Malaria Initiative refers to a collective effort by international organizations, governments, and communities to reduce and eventually eliminate malaria worldwide. This initiative aims to save lives, reduce disease burden, and promote healthier communities, especially in malaria-endemic regions such as Sub-Saharan Africa, parts of Asia, and Latin America.
    </p><br /><br />

    <p>
      One of the major players in this initiative is the **World Health Organization (WHO)**, which provides technical guidance, policy recommendations, and monitoring systems to support national malaria programs. WHO’s "Global Technical Strategy for Malaria 2016–2030" sets ambitious goals such as reducing malaria case incidence and mortality rates by at least 90% by 2030.
    </p><br /><br />

    <p>
      Another key contributor is the **Roll Back Malaria Partnership (RBM)**—a global framework that unites over 500 partners, including NGOs, research institutions, and private sector organizations. The RBM focuses on coordinated action, innovation, and resource mobilization to accelerate malaria control efforts.
    </p><br /><br />

    <p>
      Significant financial support is provided by initiatives like **The Global Fund to Fight AIDS, Tuberculosis and Malaria**, and **President’s Malaria Initiative (PMI)**. These programs supply life-saving tools such as insecticide-treated bed nets, diagnostic testing kits, antimalarial drugs, and funding for public education campaigns.
    </p><br /><br />

    <p>
      Research and innovation also play a vital role in the Global Malaria Initiative. Organizations like **PATH** and **Medicines for Malaria Venture (MMV)** are working to develop new antimalarial medications, vaccines, and mosquito control technologies. One groundbreaking example is the **RTS,S/AS01 malaria vaccine**, which is now being piloted in several African countries.
    </p><br /><br />

    <p>
      Despite these efforts, challenges remain, such as drug-resistant malaria strains, mosquito resistance to insecticides, limited healthcare infrastructure, and climate change. Continued global cooperation, funding, and community engagement are essential to overcoming these barriers.
    </p><br /><br />

    <p>
      The Global Malaria Initiative embodies the spirit of collective responsibility and shared progress. Through sustained action, collaboration, and innovation, the dream of a malaria-free world is becoming increasingly achievable.
    </p><br /><br />
  `
      },
    },
    'hiv': {
      'module-1': {
        title: 'Introduction & Overview - HIV',
        content: `<p>
          <strong>What is HIV and AIDS?</strong><br>
          HIV (Human Immunodeficiency Virus) is a virus that attacks the body's immune system, specifically the CD4 cells (T cells), which help the immune system fight off infections. If left untreated, HIV can lead to AIDS (Acquired Immunodeficiency Syndrome). While HIV is the virus that causes the infection, AIDS is the most advanced stage of the disease, characterized by a severely weakened immune system and the occurrence of certain opportunistic infections or cancers.<br><br>

          <strong>How HIV Affects the Immune System:</strong><br>
          Once HIV enters the body, it targets and destroys CD4 cells, which play a crucial role in immune defense. Over time, as the number of CD4 cells declines, the body becomes more vulnerable to infections and diseases it would normally be able to fight off. Without treatment, HIV can weaken the immune system to the point that it progresses to AIDS, where the immune system is badly damaged.<br><br>

          <strong>The Global and Local Impact of HIV/AIDS:</strong><br>
          HIV/AIDS remains a major global public health issue. According to UNAIDS, millions of people worldwide live with HIV, with the majority in low- and middle-income countries. Sub-Saharan Africa bears the highest burden. Locally, HIV has impacted communities by affecting the health, social structure, and economy, particularly where access to treatment and education is limited. Stigma and misinformation also continue to hinder effective prevention and care.<br><br>

          <strong>Watch this short video to learn more about HIV:</strong><br>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/OR5zL6yKW3o" title="HIV Overview" frameborder="0" allowfullscreen></iframe>
        </p>`
      },


      'module-2': {
        title: 'HIV Transmission',
        content: `
    <h2>How HIV is Transmitted</h2>
    <p>HIV (Human Immunodeficiency Virus) is transmitted through specific bodily fluids from a person who has HIV. It can be passed from one person to another, but only under certain conditions.</p><br />

    <h3>Main Ways HIV is Transmitted</h3>
    <ul>
      <li><strong>Unprotected Sexual Contact:</strong> HIV can be transmitted during vaginal, anal, or oral sex without the use of a condom or other barrier methods, especially if one partner has a detectable viral load.</li><br />
      <li><strong>Sharing Needles:</strong> Sharing needles, syringes, or other drug injection equipment with someone who has HIV can transmit the virus.</li><br />
      <li><strong>From Mother to Child:</strong> A pregnant person with HIV can pass the virus to their baby during pregnancy, childbirth, or breastfeeding. However, with proper treatment, this risk can be greatly reduced.</li><br />
      <li><strong>Blood Transfusions and Organ Transplants:</strong> Although rare in countries with rigorous testing, HIV can be transmitted through infected blood or organs.</li><br />
    </ul>

    <h3>HIV is <strong>not</strong> Transmitted By</h3>
    <p>HIV cannot be spread through casual contact. This includes:</p><br /><br />
    <ul>
      <li>Hugging, kissing, or shaking hands</li><br />
      <li>Sharing food or drinks</li>
      <li>Toilet seats or showers</li>
      <li>Insect bites</li>
    </ul>

    <h3>Preventing HIV Transmission</h3>
    <p>There are several effective ways to reduce the risk of HIV transmission:</p><br />
    <ul>
      <li>Using condoms correctly every time you have sex</li><br />
      <li>Taking PrEP (pre-exposure prophylaxis) if you are at high risk</li><br />
      <li>Never sharing needles or syringes</li><br />
      <li>Regular HIV testing and knowing your partner's status</li><br />
      <li>Ensuring any blood products or medical instruments are sterile</li><br />
    </ul>

    <p>Understanding how HIV is transmitted helps reduce fear and stigma, and encourages safe, informed behaviors that protect you and others.</p><br /><br />
  `
      },


      'module-3': {
        title: 'HIV Treatment',
        content: `
    <h2>Understanding HIV Treatment</h2>
    <p>HIV treatment involves taking medicines that reduce the amount of virus in the body. These medicines are called antiretroviral therapy (ART). While there is no cure for HIV, ART helps people with HIV live long, healthy lives and reduces the risk of transmitting the virus to others.</p><br />

    <p>ART works by preventing the virus from multiplying, which protects the immune system. A strong immune system can fight off infections and certain HIV-related cancers more effectively.</p><br />

    <p>It is recommended that everyone diagnosed with HIV begin treatment as soon as possible, regardless of how long they’ve had the virus or how healthy they feel.</p><br />

    <h3>Key Benefits of HIV Treatment</h3>
    <ul>
      <li>Helps people with HIV live longer, healthier lives</li><br />
      <li>Reduces the risk of HIV transmission</li><br />
      <li>Prevents the progression to AIDS</li><br />
    </ul>

    <p>It is important to take HIV medicine every day as prescribed. Missing doses can allow the virus to multiply and become resistant to medication.</p><br />

    <h3>Watch: How HIV Treatment Works</h3>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/GR9d9wrOl5E" title="How HIV Treatment Works" frameborder="0" allowfullscreen></iframe><br />

    <p>If you're living with HIV, staying on treatment and maintaining regular medical checkups can help you achieve and maintain an undetectable viral load — which means the virus is so low in your body that standard tests can’t detect it.</p><br />
  `
      },


      'module-4': {
        title: 'HIV Testing and Antiretroviral Therapy (ART)',
        content: `
    <h2>HIV Testing: The First Step Toward Treatment</h2>
    <p>HIV testing is the only way to know if someone has the virus. Early detection through testing allows people to start treatment sooner, protect their partners, and maintain better long-term health.</p><br /><br />

    <p>There are several types of HIV tests, including:</p><br /><br />
    <ul>
      <li><strong>Antibody tests:</strong> Detect antibodies the body produces in response to HIV.</li><br /><br />
      <li><strong>Antigen/antibody tests:</strong> Can detect both HIV antibodies and antigens, often within 2–4 weeks after exposure.</li><br />
      <li><strong>Nucleic acid tests (NATs):</strong> Detect the virus itself in the blood and can diagnose HIV earlier than other tests.</li><br />
    </ul>

    <p>HIV testing can be done in clinics, hospitals, at home (with self-test kits), or at mobile testing units. It’s fast, confidential, and often free.</p><br />

    <h2>What Happens After a Positive Result?</h2>
    <p>If someone tests positive for HIV, they should begin antiretroviral therapy (ART) as soon as possible. Starting ART early improves health outcomes and greatly reduces the risk of transmitting HIV to others.</p><br /><br />

    <h2>Antiretroviral Therapy (ART)</h2>
    <p>ART is the standard treatment for HIV. It involves taking a combination of HIV medicines daily. These medicines control the virus and protect the immune system.</p><br /><br />

    <p>Key benefits of ART include:</p><br />
    <ul>
      <li>Lowering the viral load to undetectable levels</li><br />
      <li>Preventing the progression to AIDS</li><br />
      <li>Improving quality of life and life expectancy</li><br />
      <li>Reducing the risk of transmitting HIV to others (U=U: Undetectable = Untransmittable)</li><br />
    </ul>

    <p>Consistency is critical — ART must be taken exactly as prescribed. Skipping doses or stopping treatment can lead to drug resistance and treatment failure.</p><br />

    <h2>Monitoring During ART</h2>
    <p>People on ART need regular checkups to monitor their viral load and immune function (CD4 count). These tests help healthcare providers adjust treatment if needed.</p><br />

    <p>With early testing and continuous ART, people living with HIV can lead full, productive, and healthy lives.</p><br />
  `
      },


      'module-5': {
        title: 'HIV Stigma and Discrimination',
        content: `
    <h2>What is HIV Stigma?</h2>
    <p>HIV stigma refers to negative beliefs, feelings, and attitudes towards people living with HIV. It often stems from fear, misinformation, and cultural beliefs about how HIV is transmitted or who is affected.</p><br />

    <p>Examples of stigma include blaming people for contracting HIV, avoiding physical contact, or treating them as though they are dangerous or less valuable.</p><br />

    <h2>What is HIV Discrimination?</h2>
    <p>Discrimination occurs when people with HIV are treated unfairly or denied their rights based on their HIV status. This can happen in healthcare, workplaces, schools, communities, and even within families.</p><br />

    <p>Examples of discrimination include being denied employment or healthcare, being excluded from social events, or having one's HIV status shared without consent.</p><br />

    <h2>Impacts of Stigma and Discrimination</h2>
    <p>Stigma and discrimination can discourage people from getting tested or seeking treatment. It can also cause emotional harm, isolation, and depression. In some cases, it even leads to violence or abandonment.</p><br />

    <p>For people already living with HIV, stigma can reduce quality of life and negatively affect mental and physical health.</p><br />

    <h2>How to Fight HIV Stigma</h2>
    <ul>
      <li><strong>Educate others:</strong> Share facts about HIV to dispel myths and reduce fear.</li><br /><br />
      <li><strong>Use respectful language:</strong> Say “person living with HIV” instead of labeling someone as “HIV-infected.”</li>
      <li><strong>Support those affected:</strong> Be a listener, an advocate, or simply a kind presence.</li>
      <li><strong>Challenge discrimination:</strong> Speak up when you see unfair treatment or stigma in action.</li>
    </ul> <br/>

    <h2>Watch: Ending HIV Stigma</h2>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/UtZyOUXuQeU" title="Ending HIV Stigma | WHO" frameborder="0" allowfullscreen></iframe><br /><br />

    <p>By ending stigma and discrimination, we can encourage more people to get tested, treated, and supported. Compassion, education, and community action are essential in the fight against HIV.</p><br /><br />
  `
      },


      'module-6': {
        title: 'HIV Support and Advocacy',
        content: `
    <h2>What is HIV Support?</h2>
    <p>HIV support involves providing care, encouragement, and assistance to individuals living with HIV. This support can come from family, friends, healthcare providers, community organizations, and peer networks.</p><br />

    <p>Support plays a critical role in helping people cope with their diagnosis, stick to treatment plans, and maintain good mental and physical health. It also helps reduce feelings of isolation and fear.</p><br />

    <h2>Types of Support</h2>
    <ul>
      <li><strong>Emotional support:</strong> Includes listening without judgment, offering reassurance, and encouraging open conversations.</li><br />
      <li><strong>Medical support:</strong> Includes access to doctors, treatment, medication, and regular health monitoring.</li><br />
      <li><strong>Peer support:</strong> Connecting with others who are also living with HIV can be empowering and healing.</li><br />
      <li><strong>Community support:</strong> NGOs, support groups, and local centers often offer education, services, and social events to build community and awareness.</li><br />
    </ul>

    <h2>What is HIV Advocacy?</h2>
    <p>HIV advocacy is the effort to promote equal rights, access to treatment, awareness, and dignity for people living with HIV. Advocates work to eliminate stigma, influence public policies, and ensure that healthcare systems serve all individuals fairly.</p><br />

    <p>Advocacy can take many forms, including public speaking, writing, organizing community events, campaigning for policy changes, and using social media to raise awareness.</p><br />

    <h2>Why Advocacy Matters</h2>
    <p>Advocacy helps ensure that people with HIV have access to life-saving medications, safe environments, and legal protection. It also strengthens the global fight against HIV by pushing for funding, research, and education.</p><br />

    <p>When more people get involved in advocacy, communities become safer, better informed, and more compassionate toward those living with HIV.</p><br />

    <h2>How You Can Support and Advocate</h2>
    <ul>
      <li>Educate yourself and others about HIV facts and myths.</li><br />
      <li>Stand up against discrimination and stigma when you see it.</li><br />
      <li>Support or volunteer with HIV organizations in your area.</li><br />
      <li>Amplify voices of people living with HIV and their stories.</li><br />
    </ul>

    <p>Support and advocacy go hand in hand in improving the lives of people with HIV and moving us closer to ending the epidemic.</p><br />
  `
      }


    },
    'tuberculosis': {
      'module-1': {
        title: 'TB Fundamentals',
        content: `
    <h2>What is Tuberculosis (TB)?</h2>
    <p>Tuberculosis (TB) is a potentially serious infectious disease caused by a bacterium called <em>Mycobacterium tuberculosis</em>. While it primarily affects the lungs (pulmonary TB), it can also spread to other parts of the body such as the kidneys, spine, or brain (extrapulmonary TB).</p><br /><br />

    <p>TB spreads from person to person through the air. When someone with active pulmonary TB coughs, sneezes, or even speaks, tiny droplets containing the bacteria can be inhaled by others nearby.</p><br /><br />

    <h2>Types of TB</h2>
    <ul>
      <li><strong>Latent TB:</strong> The bacteria remain in the body in an inactive state and cause no symptoms. It isn’t contagious, but it can become active later.</li><br /><br />
      <li><strong>Active TB:</strong> The bacteria are active, multiply in the body, and cause symptoms. This form is contagious and requires immediate treatment.</li><br /><br />
    </ul>

    <h2>Symptoms of Active TB</h2>
    <p>Common symptoms of active TB include:</p><br /><br />
    <ul>
      <li>Persistent cough (sometimes with blood)</li><br /><br />
      <li>Chest pain</li><br /><br />
      <li>Unexplained weight loss</li><br /><br />
      <li>Fever and night sweats</li><br /><br />
      <li>Fatigue and weakness</li><br /><br />
    </ul>

    <h2>Who is at Risk?</h2>
    <p>Anyone can get TB, but certain groups are at higher risk. These include people with weakened immune systems (e.g., HIV-positive individuals), people living in crowded or poorly ventilated areas, healthcare workers, and people who use tobacco or alcohol heavily.</p><br /><br />

    <h2>Importance of Early Detection</h2>
    <p>Early diagnosis and treatment of TB are crucial. Untreated TB can lead to serious health problems or even death, and people with active TB can infect many others.</p><br /><br />

    <p>With proper medical care, TB is curable and preventable. Understanding the fundamentals is the first step toward reducing its spread and impact.</p><br /><br />
  `
      },


      'module-2': {
        title: 'TB Transmission and Infection',
        content: `
    <h2>How is Tuberculosis (TB) Transmitted?</h2> <br/>
    <p>TB is transmitted through the air when a person with active pulmonary TB coughs, sneezes, talks, or spits. Tiny infectious droplets are released into the air, and people nearby can inhale them into their lungs.</p><br />

    <p>TB is not spread through shaking hands, sharing food or drink, touching surfaces, or kissing. It requires prolonged exposure in a closed or poorly ventilated environment for transmission to occur.</p><br />

    <h2>Risk of Infection</h2>
    <p>Not everyone who inhales the TB bacteria becomes sick. In fact, most people infected with the bacteria will develop latent TB, which means the bacteria are present but inactive and do not cause symptoms or spread to others.</p><br />

    <p>However, if the immune system becomes weak (due to HIV, malnutrition, or other illnesses), latent TB can become active. People with weakened immune systems are at greater risk of developing active TB.</p><br />

    <h2>Environments That Promote TB Spread</h2>
    <ul>
      <li>Overcrowded and poorly ventilated spaces</li><br />
      <li>Hospitals and clinics with inadequate infection control</li><br />
      <li>Prisons, shelters, and refugee camps</li><br />
      <li>Homes with individuals who are not receiving proper TB treatment</li><br />
    </ul>

    <h2>Preventing TB Transmission</h2>
    <ul>
      <li>Early detection and treatment of TB</li><br />
      <li>Good ventilation in indoor spaces</li><br />
      <li>Wearing masks in high-risk environments</li><br />
      <li>Covering the mouth when coughing or sneezing</li><br />
    </ul>

    <p>Understanding how TB spreads helps reduce the risk of infection and protects communities from outbreaks.</p><br />
  `
      },



      'module-3': {
        title: 'TB Prevention Measures',
        content: `
    <h2>Why TB Prevention Matters</h2><br/>
    <p>Tuberculosis (TB) is a serious disease that can spread quickly in communities, especially where healthcare is limited or living conditions are overcrowded. Preventing TB is essential to protect individuals and communities from infection and long-term health complications.</p><br />

    <h2>Key Prevention Strategies</h2><br/>
    <ul>
      <li><strong>Early Diagnosis and Treatment:</strong> The most effective way to prevent the spread of TB is to identify and treat people with active TB as soon as possible. Treatment not only helps the individual recover but also stops them from spreading TB to others.</li><br />

      <li><strong>Ventilation and Airflow:</strong> Since TB spreads through the air, good ventilation in homes, schools, public spaces, and clinics is crucial. Keeping windows open and allowing fresh air to circulate can help reduce the risk of airborne transmission.</li><br />

      <li><strong>Cough Etiquette:</strong> People with coughs, especially in high-risk areas, should be encouraged to cover their mouths with a tissue or elbow when coughing or sneezing, and to wear a mask if they are suspected of having TB.</li><br />

      <li><strong>Protective Measures in Healthcare:</strong> Healthcare workers should use personal protective equipment (PPE) like masks and gloves when dealing with TB patients. Isolation of infectious cases may also be necessary in hospitals to prevent spread.</li><br />

      <li><strong>BCG Vaccination:</strong> The Bacillus Calmette-Guérin (BCG) vaccine offers protection, especially for children in countries with a high rate of TB. It helps reduce the risk of severe forms of TB, such as TB meningitis.</li><br />
    </ul>

    <h2>Supporting Community Prevention</h2>
    <p>Community health education is critical to help people understand how TB spreads and how to protect themselves. Reducing stigma around TB also encourages more people to seek early diagnosis and treatment.</p><br />

    <h2>Watch: Preventing the Spread of TB</h2>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/VB7KMHLhqIc" title="How to prevent tuberculosis | WHO" frameborder="0" allowfullscreen></iframe><br />

    <p>With the right combination of public health education, early treatment, proper hygiene, and strong healthcare systems, TB prevention is possible and effective. Everyone plays a role in stopping its spread.</p><br />
  `
      },


      'module-4': {
        title: 'TB Diagnosis and Treatment',
        content: `
    <h2>Diagnosing Tuberculosis (TB)</h2><br/>
    <p>Early and accurate diagnosis of TB is essential to control the disease and prevent its spread. TB diagnosis often begins with an evaluation of symptoms such as a persistent cough, chest pain, night sweats, fever, and unexplained weight loss.</p><br />

    <h3>Common Diagnostic Methods</h3>
    <ul>
      <li><strong>Sputum Test:</strong> This is one of the most common tests. A patient provides a sample of mucus from the lungs (sputum), which is examined under a microscope for TB bacteria.</li><br />
      <li><strong>Chest X-ray:</strong> Helps identify damage or abnormalities in the lungs associated with TB infection.</li><br /><br />
      <li><strong>GeneXpert Test:</strong> A molecular test that detects TB bacteria and checks for drug resistance. It is fast and highly accurate.</li><br />
      <li><strong>Skin and Blood Tests:</strong> These help determine if someone has been infected with TB bacteria, especially in cases of latent TB.</li><br />
    </ul>

    <h2>Treating TB</h2><br/>
    <p>TB is a treatable and curable disease, but it requires a strict and lengthy course of antibiotics. Treatment is usually free in most public healthcare settings.</p><br />

    <h3>Standard TB Treatment Plan</h3><br/>
    <ul>
      <li>TB treatment generally lasts for 6 months and includes a combination of antibiotics such as isoniazid, rifampicin, pyrazinamide, and ethambutol.</li><br />
      <li>The first two months are the intensive phase, where four drugs are taken to kill most of the bacteria.</li><br />
      <li>The last four months are the continuation phase, involving fewer drugs to kill any remaining bacteria and prevent relapse.</li><br />
    </ul>

    <h3>Importance of Completing Treatment</h3>
    <p>It is critical that patients take their medication exactly as prescribed and complete the full treatment, even if symptoms improve early. Stopping treatment too soon can lead to the development of drug-resistant TB, which is harder and more expensive to treat.</p><br />

    <h2>Drug-Resistant TB</h2>
    <p>Some forms of TB do not respond to standard drugs and require special medications. Multidrug-resistant TB (MDR-TB) and extensively drug-resistant TB (XDR-TB) are more difficult to treat and require longer treatment durations with second-line drugs.</p><br />

    <h2>Support for TB Patients</h2>
    <p>Many healthcare systems provide counseling, education, and follow-up visits to help TB patients stick to their treatment and fully recover. Family and community support also play a key role in treatment success.</p><br />

    <p>With proper diagnosis, timely treatment, and community awareness, TB can be effectively controlled and eventually eliminated.</p><br />
  `
      },


      'module-5': {
        title: 'TB and Social Determinants of Health',
        content: `
    <p>
      Tuberculosis (TB) is not just a medical condition—it is deeply influenced by social and economic factors known as social determinants of health. These are the conditions in which people are born, grow, live, work, and age, and they greatly affect the risk of exposure, infection, and the ability to access timely diagnosis and treatment.
    </p><br />

    <p>
      **Poverty** is one of the strongest predictors of TB. People living in poverty often face overcrowded living conditions, poor ventilation, and limited access to healthcare services—all of which contribute to the spread of the disease.
    </p><br />

    <p>
      **Malnutrition** weakens the immune system, making individuals more susceptible to TB infection and less likely to recover quickly. TB and malnutrition often form a vicious cycle, where one exacerbates the other.
    </p><br />

    <p>
      **HIV/AIDS** is another major social determinant. Individuals living with HIV are significantly more vulnerable to TB due to their weakened immune systems. This dual burden creates additional healthcare challenges in many developing regions.
    </p><br />

    <p>
      **Stigma and discrimination** also affect TB outcomes. Many people with TB may avoid seeking medical help out of fear of social rejection or job loss. This delay can lead to more severe illness and increase the chances of transmitting the disease to others.
    </p><br />

    <p>
      **Education and awareness** play a crucial role. Individuals with little knowledge about TB may not recognize the symptoms or understand the importance of completing treatment. Health education programs are essential in improving TB control.
    </p><br />

    <p>
      Addressing these social determinants is key to eliminating TB. Public health policies must focus on improving living conditions, reducing poverty, expanding access to healthcare, and fighting stigma to ensure no one is left behind in the fight against TB.
    </p><br />
  `
      },

      'module-6': {
        title: 'TB Control Programs',
        content: `
    <p>
      TB control programs are organized efforts designed to reduce the spread, impact, and burden of tuberculosis within populations. These programs are typically led by governments, in collaboration with global health organizations, and aim to prevent transmission, ensure early diagnosis, and support effective treatment of TB cases.
    </p><br />

    <p>
      A cornerstone of many TB control programs is the **Directly Observed Treatment, Short-course (DOTS)** strategy. Introduced by the World Health Organization (WHO), DOTS ensures that patients adhere to their full course of medication under the supervision of a health worker. This approach reduces the risk of incomplete treatment, drug resistance, and relapse.
    </p><br />

    <p>
      **Case detection and surveillance** are vital components. Programs often rely on community outreach and diagnostic facilities to identify individuals with TB symptoms and test them quickly. Efficient surveillance systems also help track infection patterns and monitor the success of interventions.
    </p><br />

    <p>
      **Free or subsidized TB treatment** is offered in many countries to eliminate financial barriers that might prevent individuals from accessing care. These programs also provide support for co-infections such as HIV, recognizing the interlinked nature of these health challenges.
    </p><br />

    <p>
      TB control programs often focus on **high-risk populations**, including people living in poverty, those in crowded living conditions, healthcare workers, and individuals with compromised immune systems. Targeted education, screening, and preventive therapy are used to reduce the risk in these groups.
    </p><br />

    <p>
      In recent years, TB control programs have increasingly embraced **digital tools** to track patient adherence, manage case data, and provide remote health support. Mobile apps, SMS reminders, and electronic health records enhance the efficiency and reach of these programs.
    </p><br />

    <p>
      Continued investment, public engagement, and political commitment are crucial to the success of TB control efforts. Only through a united and sustained response can countries hope to meet global TB elimination targets and protect vulnerable communities.
    </p><br />
  `
      },
    },
    'substance-abuse': {
      'module-1': {
  title: 'Understanding Substance Use Disorders',
  content: `
    <p>
      Substance Use Disorders (SUDs) are complex conditions that involve the uncontrolled use of substances such as alcohol, prescription medications, or illegal drugs despite harmful consequences. These disorders can affect a person's brain, behavior, and overall functioning in daily life.
    </p><br /><br />

    <p>
      SUDs are medical illnesses recognized by the mental health and medical communities. They may cause significant impairment in physical and mental health, social relationships, employment, and legal status. Substance use becomes a disorder when it leads to repeated problems and disrupts one's ability to meet responsibilities at work, school, or home.
    </p><br /><br />

    <p>
      The development of a substance use disorder is influenced by a mix of genetic, environmental, and psychological factors. Early use of substances, trauma, peer pressure, mental health conditions, and family history can all increase a person's risk.
    </p><br /><br />

    <p>
      Symptoms may include cravings, loss of control over use, withdrawal symptoms, increased tolerance, and continued use despite knowing the harm it causes. Over time, SUDs can lead to chronic health problems, including liver damage, brain changes, cardiovascular disease, and mental health disorders like depression and anxiety.
    </p><br /><br />

    <p>
      It's important to understand that addiction is a treatable disease. Effective treatment often involves a combination of therapy, medication, and lifestyle changes. Recovery is a long-term process that requires ongoing support from healthcare providers, family, and the community.
    </p><br /><br />

    <p>
      Education and awareness are key to prevention and early intervention. By understanding the signs of substance misuse and supporting those at risk, we can reduce stigma and encourage people to seek help early.
    </p><br /><br />

    <p><strong>Watch this video for a deeper insight into how substance use disorders affect the brain and behavior:</strong></p><br />
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/IMT9lCedDG0" title="Understanding Addiction" frameborder="0" allowfullscreen></iframe><br /><br />
  `
}
,

     'module-2': {
  title: 'Biological and Social Factors',
  content: `
    <p>
      Substance use disorders (SUDs) do not develop in isolation. They result from a complex interplay between biological and social factors. Understanding these factors is essential for prevention, treatment, and recovery planning.
    </p><br /><br />

    <p>
      <strong>Biological factors</strong> include genetic predisposition, brain chemistry, and physical health. Studies have shown that genetics may account for about 40-60% of a person’s vulnerability to addiction. If a parent or close relative struggles with substance use, there is an increased likelihood of the individual developing a similar condition.
    </p><br /><br />

    <p>
      The brain's reward system also plays a key role. Substances like drugs and alcohol stimulate the release of dopamine, creating feelings of pleasure. Repeated use changes how the brain functions—reducing natural dopamine levels and altering impulse control, judgment, and decision-making. This makes quitting difficult and can lead to compulsive behavior.
    </p><br /><br />

    <p>
      Other biological aspects include age of first use, mental health conditions like depression or anxiety, and gender. For instance, adolescents are more vulnerable because their brains are still developing, and women may experience faster progression from use to dependency than men.
    </p><br /><br />

    <p>
      <strong>Social factors</strong> are just as influential. These include family environment, peer influence, education level, employment status, cultural norms, and exposure to trauma or abuse. Growing up in a household where substance use is normalized increases risk. Peer pressure—especially in adolescence—can lead individuals to experiment with substances.
    </p><br /><br />

    <p>
      Social inequality, poverty, and lack of access to education or healthcare can contribute to the development and persistence of substance use disorders. In some communities, stigma or discrimination based on race, gender identity, or socioeconomic status can increase psychological stress, making individuals more vulnerable to substance use as a coping mechanism.
    </p><br /><br />

    <p>
      A strong support network and access to healthcare and community services can reduce the likelihood of substance use and improve outcomes for those in recovery. Prevention strategies must address both the biological and social roots of addiction to be effective.
    </p><br /><br />
  `
},

   'module-3': {
  title: 'Prevention of Substance Abuse',
  content: `
    <p>
      Prevention of substance abuse involves a broad range of strategies and approaches aimed at reducing the risk of individuals experimenting with or becoming dependent on harmful substances such as alcohol, tobacco, and drugs. Prevention is not a one-size-fits-all approach; it requires a multi-layered effort that targets individuals, families, schools, communities, and policy makers.
    </p><br /><br />

    <p>
      <strong>Early education and awareness</strong> are crucial in prevention. Teaching children and adolescents about the risks of substance use can significantly reduce experimentation. Age-appropriate educational programs in schools that focus on decision-making skills, self-esteem building, and stress management help prepare young people to make healthier choices.
    </p><br /><br />

    <p>
      <strong>Parental involvement and strong family bonds</strong> are significant protective factors. Children who have clear rules, open communication, and emotional support from their caregivers are less likely to engage in risky behaviors. Parents play a key role by setting positive examples, discussing the dangers of drugs and alcohol, and being actively involved in their child’s life.
    </p><br /><br />

    <p>
      <strong>Community-based programs</strong> create safe, supportive environments that engage youth in positive activities such as sports, arts, mentorship, and volunteering. These programs reduce idle time, foster connection, and provide an alternative to environments where substance use might be encouraged.
    </p><br /><br />

    <p>
      <strong>Policy-level interventions</strong> also play a major role. Laws that regulate the sale and distribution of alcohol, tobacco, and other substances can prevent underage use and reduce overall consumption. Media campaigns and public health messaging can raise awareness and promote healthy lifestyles.
    </p><br /><br />

    <p>
      <strong>Mental health support</strong> is another essential pillar of prevention. Many people turn to substances as a way to cope with stress, anxiety, trauma, or depression. Ensuring access to mental health services can help individuals find healthier coping strategies before substance use becomes a problem.
    </p><br /><br />

    <p>
      Ultimately, the prevention of substance abuse is a collective responsibility. It involves families, schools, healthcare providers, community leaders, and government agencies working together to build a society that supports healthy, substance-free living.
    </p><br /><br />
  `
},

    'module-4': {
  title: 'Screening and Treatment Approaches',
  content: `
    <p>
      Screening and treatment are critical components in addressing substance use disorders (SUDs). Early identification through effective screening allows for timely intervention, which can significantly improve treatment outcomes and reduce long-term health and social consequences.
    </p><br /><br />

    <p>
      <strong>Screening</strong> involves evaluating individuals to determine if they are at risk for or are currently experiencing substance-related problems. This is commonly done using validated screening tools such as the CAGE questionnaire, ASSIST (Alcohol, Smoking and Substance Involvement Screening Test), or AUDIT (Alcohol Use Disorders Identification Test). These tools help healthcare professionals assess the severity of substance use and guide decisions about the next steps in care.
    </p><br /><br />

    <p>
      Screening is often integrated into primary care, emergency departments, mental health clinics, and community health programs. Early and regular screening, especially for high-risk populations such as adolescents, pregnant women, and individuals with mental health conditions, increases the likelihood of early detection and successful intervention.
    </p><br /><br />

    <p>
      <strong>Treatment approaches</strong> for substance use disorders are multifaceted and tailored to the individual's needs. No single treatment works for everyone, and success depends on a combination of methods, personal motivation, and support systems.
    </p><br /><br />

    <p>
      One of the most common and effective models is the <strong>integrated treatment approach</strong>, which combines behavioral therapy, counseling, medication, and social support. Behavioral therapies like Cognitive Behavioral Therapy (CBT), Motivational Interviewing (MI), and contingency management help individuals recognize and change patterns of substance use.
    </p><br /><br />

    <p>
      <strong>Medication-Assisted Treatment (MAT)</strong> is often used for opioid, alcohol, and tobacco use disorders. Medications such as methadone, buprenorphine, and naltrexone can help manage withdrawal symptoms, reduce cravings, and support long-term recovery. MAT is most effective when paired with counseling and behavioral therapies.
    </p><br /><br />

    <p>
      <strong>Supportive services</strong> such as housing assistance, vocational training, and peer recovery programs also play a vital role in sustained recovery. Recovery is not just about stopping substance use—it’s about rebuilding lives and restoring well-being.
    </p><br /><br />

    <p>
      Continuous monitoring, relapse prevention planning, and aftercare services are also essential. Relapse is a common part of the recovery process, and effective treatment plans account for this by emphasizing resilience, adaptability, and ongoing support.
    </p><br /><br />

    <p>
      In summary, effective screening and treatment approaches require a compassionate, evidence-based, and individualized response that addresses both the physical and psychological dimensions of substance use disorders.
    </p><br /><br />
  `
},

    'module-5': {
  title: 'Recovery and Harm Reduction',
  content: `
    <p>
      Recovery and harm reduction are two essential components in addressing substance use disorders. While recovery focuses on achieving and maintaining sobriety, harm reduction aims to minimize the negative consequences of substance use for individuals and communities, even if they are not yet ready or able to stop using completely.
    </p><br /><br />

    <p>
      <strong>Recovery</strong> is a personal journey that involves more than just stopping substance use. It encompasses rebuilding physical health, mental stability, emotional well-being, relationships, and social and occupational functioning. Recovery is not linear and often includes setbacks such as relapse. However, with the right support systems—including peer support groups, counseling, treatment programs, and community networks—long-term recovery is possible.
    </p><br /><br />

    <p>
      Recovery models often include a mix of behavioral therapies, Medication-Assisted Treatment (MAT), and community-based supports like 12-step programs or non-religious alternatives such as SMART Recovery. What’s most important is that recovery plans are individualized and respect each person’s unique needs and goals.
    </p><br /><br />

    <p>
      <strong>Harm reduction</strong> is a public health strategy that seeks to reduce the adverse health, social, and economic effects of drug use without necessarily requiring abstinence. This includes measures such as needle exchange programs, supervised consumption sites, access to naloxone (a life-saving medication that reverses opioid overdoses), and drug-checking services.
    </p><br /><br />

    <p>
      Harm reduction respects human rights and dignity, meets people where they are, and builds trust over time. It is particularly important in reaching marginalized populations who may not have access to traditional healthcare services.
    </p><br /><br />

    <p>
      Both recovery and harm reduction approaches are essential in comprehensive substance use policies. Recovery helps those who are ready to stop using, while harm reduction keeps individuals safe and alive, creating opportunities for eventual recovery. Together, they support people at all stages of their journey.
    </p><br /><br />

    <p>
      Watch this short video to better understand the principles and practices of harm reduction:
    </p><br /><br />

    <iframe width="560" height="315" src="https://www.youtube.com/embed/uhvRirqj114" 
    title="What is Harm Reduction?" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe><br /><br />
  `
},

'module-6': {
  title: 'Community Based Interventions',
  content: `
    <p>
      Community-based interventions are essential strategies in preventing and managing substance use disorders (SUDs). These interventions are rooted in the local context, involving the active participation of community members, organizations, and stakeholders in creating supportive environments and delivering tailored services to individuals affected by substance use.
    </p><br /><br />

    <p>
      One of the key strengths of community-based interventions is their ability to reach people where they live, work, and socialize. This approach allows for culturally sensitive, accessible, and sustainable solutions that are more likely to be accepted and effective over time. It also builds trust and ownership among community members, encouraging long-term commitment to addressing substance use challenges.
    </p><br /><br />

    <p>
      Common types of community-based interventions include public education campaigns, peer support programs, school-based prevention initiatives, mobile outreach services, and collaboration with faith-based and grassroots organizations. These interventions often focus on early education, risk reduction, promoting healthy lifestyles, and connecting individuals to professional treatment and recovery services.
    </p><br /><br />

    <p>
      Involving peers and people with lived experience in the design and delivery of programs enhances relevance and relatability. Peer support can be especially effective in outreach, mentorship, and guiding others through the recovery journey. Their stories help reduce stigma and provide hope for others who may be struggling.
    </p><br /><br />

    <p>
      Partnerships with local health services, law enforcement, schools, and employers help broaden the impact of community interventions. When different sectors collaborate, communities can address substance use through a comprehensive and united approach—targeting both the root causes and consequences.
    </p><br /><br />

    <p>
      In conclusion, community-based interventions are a powerful tool in the fight against substance abuse. By tapping into local strengths and promoting inclusive, compassionate strategies, these efforts create healthier environments and pathways for individuals to recover and thrive.
    </p><br /><br />
  `
},
    },


    'polio': {
      'module-1': {
        title: 'Understanding Polio (Foundational Knowledge)',
        content: `
    <h1 style="color: green; font-size: 30px;"><strong>What is Polio?</strong></h1>
    <p><strong>Polio</strong>, or poliomyelitis, is a highly infectious viral disease that primarily affects children under the age of five. It is caused by the <em>poliovirus</em>, which is transmitted through the fecal-oral route, often via contaminated water or food.</p>

    <h1 style="color: green; font-size: 30px;"><strong>How Polio Affects the Body</strong></h1>
    <p>Once the virus enters the body, it multiplies in the intestine and can invade the nervous system. In a small percentage of cases, the virus attacks motor neurons, leading to weakness or paralysis, most often in the legs. Paralysis is usually permanent, and in the most severe cases, it can affect muscles that help with breathing, which may result in death.</p>

    <h3>Types of Poliovirus</h3>
    <ul>
      <li><strong>Type 1</strong> – Still circulates in some parts of the world</li>
      <li><strong>Type 2</strong> – Declared eradicated in 2015</li>
      <li><strong>Type 3</strong> – Declared eradicated in 2019</li>
    </ul>

    <h3>Symptoms</h3><br/>
    <p>Most people infected with the poliovirus do not become visibly ill. However, typical symptoms in early stages may include:</p>
    <ul>
      <li>Fever</li>
      <li>Fatigue</li>
      <li>Headache</li>
      <li>Vomiting</li>
      <li>Stiffness in the neck</li>
      <li>Pain in the limbs</li>
    </ul>

    <h3>Prevention</h3> <br/>
    <p>Polio has no cure, but it is preventable through safe and effective vaccines. The <strong>oral polio vaccine (OPV)</strong> and the <strong>inactivated polio vaccine (IPV)</strong> are both used in immunization campaigns around the world. Maintaining high vaccination coverage is key to eradicating the disease completely.</p>

    <h3>Global Eradication Efforts</h3><br/>
    <p>Since the launch of the Global Polio Eradication Initiative in 1988, cases have decreased by over 99%. Continuous surveillance and immunization campaigns are critical to keep polio at bay, especially in vulnerable regions.</p>

    <h3> <strong>Watch: What is Polio?</strong></h3><br/>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin-top:8px; overflow: hidden;">
      <iframe src="https://www.youtube.com/embed/_ivM7J2ao1s" 
        frameborder="0" 
        allowfullscreen 
        style="position: absolute; top:0; left: 0; width: 100%; height: 100%;">
     </iframe>
    </div>
  `
      },




      'module-2': {
        title: 'Symptoms & Diagnosis (Early Detection)',
        content: `
    <h2>Identifying the Early Signs of Polio</h2><br/>
    <p>Early detection of polio is crucial in preventing the spread of the disease and improving patient outcomes. Polio can present in different ways, ranging from no symptoms to severe, life-altering paralysis. Understanding the symptoms helps with timely diagnosis and appropriate intervention.</p><br/>

    <h3>Types of Polio Presentations</h3><br/>
    <ul>
      <li><strong>Asymptomatic (Inapparent Infection):</strong> Most cases (around 72%) show no visible symptoms. These individuals can still spread the virus unknowingly.</li>
      <li><strong>Abortive Poliomyelitis:</strong> Involves mild symptoms like fever, sore throat, headache, vomiting, and general discomfort, resembling common viral infections.</li>
      <li><strong>Non-paralytic Poliomyelitis:</strong> Includes signs of central nervous system involvement such as neck stiffness, back pain, and increased sensitivity to touch, but does not lead to paralysis.</li>
      <li><strong>Paralytic Poliomyelitis:</strong> A rare but severe form that causes flaccid paralysis, typically in the legs, and may involve breathing muscles if the respiratory system is affected.</li>
    </ul><br/>

    <h3>Post-Polio Syndrome (PPS)</h3><br/>
    <p>PPS is a condition that affects polio survivors years after recovery. Symptoms include new muscle weakness, fatigue, and pain, which can significantly impact quality of life.</p>

    <h3>How Is Polio Diagnosed?</h3><br/>
    <p>Healthcare providers use a combination of clinical evaluation and lab tests to confirm polio. Key diagnostic methods include:</p>
    <ul><br/>
      <li><strong>Stool Sample:</strong> The most reliable method to isolate poliovirus.</li>
      <li><strong>Throat Swabs:</strong> Can detect poliovirus in the early stages of infection.</li>
      <li><strong>Lumbar Puncture (Spinal Tap):</strong> Tests cerebrospinal fluid for signs of infection in the central nervous system.</li>
    </ul>

    <p>Early detection helps prevent the spread of the virus and allows for proper supportive care in case of complications.</p>
  `
      },


      'module-3': {
        title: 'Polio Prevention & Vaccination (Proactive Measures)',
        content: `
    <h2>Preventing Polio Through Awareness and Immunization</h2>
    <p>Prevention is the most powerful tool in the fight against polio. Since there is no cure for the disease once contracted, proactive measures like vaccination and public health interventions are essential for protecting individuals and communities.</p>

    <h3>How Is Polio Spread?</h3>
    <p>Poliovirus is primarily transmitted through the fecal-oral route — meaning the virus is spread through contaminated food, water, or hands that have come in contact with the feces of an infected person. It can also spread through oral-oral transmission (via saliva), especially in settings with poor sanitation and hygiene.</p>

    <h3>Key Prevention Strategies</h3>
    <ul>
      <li><strong>Vaccination:</strong> Immunization is the most effective way to prevent polio. It helps the body build immunity against the virus and stops its transmission in the community.</li>
      <li><strong>Hygiene and Sanitation:</strong> Promoting proper handwashing, safe drinking water, and adequate sewage disposal greatly reduces the risk of polio transmission.</li>
      <li><strong>Surveillance:</strong> Early identification of poliovirus in communities (through stool samples or wastewater surveillance) helps public health officials respond swiftly to prevent outbreaks.</li>
      <li><strong>Health Education:</strong> Educating the public about polio, its symptoms, and the importance of vaccination increases community participation and acceptance of immunization campaigns.</li>
    </ul>

    <h3>Types of Polio Vaccines</h3>
    <ul>
      <li><strong>Oral Polio Vaccine (OPV):</strong> A live, weakened form of the virus that is administered by mouth. It provides both individual immunity and community protection (herd immunity) because the vaccine virus can spread and immunize others.</li>
      <li><strong>Inactivated Polio Vaccine (IPV):</strong> Given as an injection, IPV contains an inactivated (killed) virus and is very safe. It provides strong protection but does not lead to community transmission of immunity.</li>
    </ul>

    <p>Most countries now use a combination of OPV and IPV in national immunization schedules to maximize protection. The World Health Organization recommends that children receive multiple doses of the vaccine starting from infancy.</p>

    <h3>Global Vaccination Efforts</h3>
    <p>Organizations like the World Health Organization (WHO), UNICEF, and Rotary International have played key roles in reducing polio cases by over 99% through coordinated vaccination programs such as the Global Polio Eradication Initiative (GPEI). Continued funding, political commitment, and public cooperation are essential to finally eradicating the disease worldwide.</p>

    <h3>What You Can Do</h3>
    <ul>
      <li>Ensure your children receive all recommended polio vaccinations on time.</li>
      <li>Support and participate in local and global immunization campaigns.</li>
      <li>Promote hygiene practices in your community to prevent the spread of viruses.</li>
      <li>Stay informed and educate others about the importance of immunization.</li>
    </ul>

    <p><strong>Remember:</strong> A world without polio is within reach, but only if we stay vigilant, informed, and proactive in our prevention efforts.</p>
  `
      },

      'module-4': {
        title: 'Vaccination Campaigns and Surveillance',
        content: `
    <h2>Vaccination Campaigns and Surveillance: The Backbone of Polio Eradication</h2>
    
    <p>Polio eradication has been one of the largest global public health efforts in history. At the heart of this achievement are mass vaccination campaigns and robust disease surveillance systems that detect, respond to, and prevent outbreaks. These tools help ensure that every child is protected and that no case of polio goes undetected.</p>

    <h3>Mass Vaccination Campaigns</h3>
    <p>Vaccination campaigns are organized efforts to administer the polio vaccine to large populations, especially in areas at high risk of poliovirus transmission. These campaigns are often referred to as National Immunization Days (NIDs) or Subnational Immunization Days (SNIDs), depending on their scale.</p>

    <ul>
      <li><strong>Door-to-Door Strategy:</strong> Trained health workers go house to house to ensure every child under five is vaccinated, even in remote and conflict-affected areas.</li>
      <li><strong>Fixed Posts:</strong> Vaccination booths are set up at schools, clinics, marketplaces, bus stations, and other public areas to reach people on the move.</li>
      <li><strong>Mobile and Outreach Teams:</strong> These are special units deployed to reach nomadic populations, border communities, or hard-to-reach settlements.</li>
    </ul>

    <p>Campaigns are usually accompanied by mass communication efforts to raise awareness, counter misinformation, and encourage participation. These include radio broadcasts, community meetings, posters, and involvement of religious and community leaders.</p>

    <h3>Surveillance Systems</h3>
    <p>Surveillance is critical to track the spread of the virus and ensure timely response. Two main surveillance methods are used for polio:</p>

    <ul>
      <li><strong>Acute Flaccid Paralysis (AFP) Surveillance:</strong> Health workers monitor for any cases of sudden weakness or paralysis in children under 15. Each suspected case is investigated, and stool samples are collected for lab testing.</li>
      <li><strong>Environmental Surveillance:</strong> Poliovirus can be detected in sewage systems before cases appear. Regular sampling of wastewater helps identify hidden circulation of the virus, especially in urban areas.</li>
    </ul>

    <p>Both surveillance systems work together to ensure rapid detection, containment, and interruption of virus transmission.</p>

    <h3>The Role of the Community</h3>
    <p>Community involvement is essential for the success of vaccination campaigns and surveillance. Volunteers, local leaders, teachers, and caregivers play a vital role in:</p>
    <ul>
      <li>Encouraging parents to vaccinate their children</li>
      <li>Reporting suspected cases of paralysis to health authorities</li>
      <li>Supporting health workers in accessing hard-to-reach areas</li>
    </ul>

    <p><strong>In conclusion:</strong> Vaccination campaigns and surveillance are powerful tools in the global fight against polio. By working together and remaining vigilant, we can ensure a polio-free future for all children.</p>
  `
      },

      'module-5': {
        title: 'Advocacy & Community Action (Real-World Application)',
        content: `
    <h2>Advocacy & Community Action: Driving Polio Eradication from the Ground Up</h2>

    <p>While vaccines and surveillance systems are essential tools in the fight against polio, sustainable eradication also depends on strong advocacy and active community participation. Advocacy ensures that polio remains a priority at all levels—from government halls to neighborhood streets—while community action empowers individuals to take ownership of health initiatives in their local areas.</p>

    <h3>What is Advocacy in the Context of Polio?</h3>
    <p>Advocacy involves raising awareness, influencing policies, and mobilizing support to achieve specific goals—in this case, the eradication of polio. It includes:</p>
    <ul>
      <li><strong>Engaging leaders:</strong> Working with political, religious, and traditional leaders to endorse polio vaccination campaigns and promote community trust.</li>
      <li><strong>Policy influence:</strong> Advocating for funding, resources, and laws that support immunization programs and health system strengthening.</li>
      <li><strong>Media engagement:</strong> Using radio, television, social media, and community forums to counter misinformation and promote accurate health information.</li>
    </ul>

    <h3>Community Action: Local Solutions for Global Impact</h3>
    <p>Communities play a vital role in the success of polio eradication efforts. Local residents often understand the unique challenges and needs of their environment, making them powerful allies in health promotion. Community action includes:</p>
    <ul>
      <li><strong>Volunteer Mobilization:</strong> Thousands of volunteers help identify unvaccinated children, spread awareness, and support immunization days.</li>
      <li><strong>Community Dialogues:</strong> Small group discussions in homes, schools, and places of worship to address concerns and misconceptions about vaccines.</li>
      <li><strong>Support for Health Workers:</strong> Local cooperation ensures vaccinators can access every household, especially in hard-to-reach or insecure areas.</li>
    </ul>

    <h3>Overcoming Barriers through Unity</h3>
    <p>Challenges such as vaccine hesitancy, misinformation, cultural resistance, and logistical issues can be overcome through coordinated community action. For example:</p>
    <ul>
      <li>In regions with religious resistance, clerics who support polio campaigns can encourage families to vaccinate their children.</li>
      <li>Where myths about vaccines prevail, trusted neighbors and local health advocates can deliver credible information in local dialects.</li>
    </ul>

    <p><strong>In summary:</strong> Advocacy and community action transform the polio fight from a top-down intervention to a bottom-up movement—ensuring the people most affected by the disease are empowered to be part of the solution.</p>

    <h3>Watch: Real-World Examples of Community Advocacy in Action</h3>
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
      <iframe 
        src="https://www.youtube.com/embed/P1AqdJANsGE"
        frameborder="0"
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
  `
      },

      'module-6': {
        title: 'Post-Eradication',
        content: `
    <h2>Post-Eradication: Sustaining a Polio-Free World</h2>

    <p>Polio eradication is not the end of the journey—it marks the beginning of a critical new phase: ensuring the disease does not return. The post-eradication era involves maintaining vigilance, strengthening health systems, and transitioning resources to continue protecting communities globally.</p><br/>

    <h3>Why Post-Eradication Planning Matters</h3>
    <p>Once wild poliovirus transmission is stopped, there's still a risk of re-emergence through vaccine-derived poliovirus strains or lapses in immunization coverage. Without sustained efforts, countries may become vulnerable to new outbreaks, reversing decades of progress.</p><br/>

    <h3>Key Components of the Post-Eradication Strategy</h3>
    <ul>
      <li><strong>Continued Immunization:</strong> Even after eradication, routine immunization must continue to ensure that future generations remain protected. High vaccination coverage helps prevent re-infection from circulating vaccine-derived polioviruses (cVDPVs).</li>

      <li><strong>Environmental Surveillance:</strong> Monitoring sewage systems and wastewater for poliovirus helps detect silent transmission in communities before any cases of paralysis occur.</li>

      <li><strong>Stockpile Management:</strong> Strategic reserves of polio vaccines and antivirals are maintained to allow for a rapid response if the virus is detected post-eradication.</li>

      <li><strong>Laboratory Containment:</strong> Facilities that store poliovirus samples must follow strict protocols to prevent accidental release. The Global Action Plan (GAPIII) outlines safety and security standards for such laboratories.</li>

      <li><strong>Transition of Resources:</strong> The infrastructure built for polio—such as trained personnel, surveillance systems, and emergency response tools—can be redirected to strengthen broader public health systems and combat other diseases.</li>
    </ul><br/>

    <h3>Global Cooperation and Political Commitment</h3>
    <p>The post-eradication phase demands continued collaboration among governments, health organizations, donors, and communities. Sustaining a polio-free world requires the same level of coordination and funding as the eradication phase.</p><br/>

    <h3>Looking Ahead</h3>
    <p>In a world where polio is no longer a threat, the lessons learned from eradication—about resilience, community engagement, and global unity—will continue to inspire future public health victories. A polio-free world is within reach, but only with sustained commitment and preparedness can we ensure that it stays that way.</p>
  `
      },
    }
  };

  // Check if the content exists and debug if it doesn't
  if (!moduleContent[courseId] || !moduleContent[courseId][moduleId]) {
    return (
      <Box my={4}>
        <Alert severity="warning">
          Content not found for this module. (Course: {courseId}, Module: {moduleId})
        </Alert>
      </Box>
    );
  }

  const currentModule = moduleContent[courseId]?.[moduleId];

  // Function to render the appropriate quiz component based on course and module
  const renderQuizComponent = () => {
    if (courseId === 'malaria') {
      if (moduleId === 'module-2') {
        return <MalariaQuizModule2 />;
      } else if (moduleId === 'module-4') {
        return <QuizFour />;
      }else if (moduleId == 'module-6') {
        return <Alert severity='info'>HIV module 6 Quiz/video Not Available</Alert>
      }
    } else if (courseId === 'hiv') {
      if (moduleId === 'module-2') {
        return <HIVQuizModule2 />;
      } else if (moduleId == 'module-3') {
        return <Alert severity='info'>HIV module 3 Quiz Not Available</Alert>
      } else if (moduleId == 'module-4') {
        return <HIVQuizModule4 />
      } else if (moduleId == 'module-6') {
        return <Alert severity='info'>HIV module 6 Quiz/Video Not Available</Alert>
      }
    } else if (courseId === 'tuberculosis') {
      if (moduleId == "module-2") {
        return <TBQuizModule2 />
      } if (moduleId == "module-5") {
        return <TBQuizModule5 />
      } else if (moduleId == 'module-6') {
        return <Alert severity='info'>HIV module 6 Quiz/Video Not Available</Alert>
      }
    }else if(courseId === 'substance-abuse'){
      if(moduleId== "module-2"){
        return<SubstanceUseQuizModule2/>
      } else if(moduleId== "module-3"){
        return<SubstanceUseQuizModule3/>
      } else if (moduleId == 'module-4') {
        return <Alert severity='info'>Substance Abuse module 4 Quiz/Video Not Available</Alert>
      }else if (moduleId == 'module-6') {
        return <Alert severity='info'>Substance Abuse module 6 Quiz/video Not Available</Alert>
      }
    }else if (courseId === 'polio') {
      if (moduleId == "module-2") {
        return <PolioQuizModule2 />
      } else if (moduleId == 'module-3') {
        return <Alert severity='info'>Polio module 3 Quiz Not Available</Alert>
      } else if (moduleId == 'module-4') {
        return <PolioQuizModule4 />
      }
    }

    return null;
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>{currentModule?.title}</Typography>

      <Paper elevation={3} sx={{ padding: 3 }}>
        <div
          dangerouslySetInnerHTML={{ __html: currentModule?.content }}
        />

        {renderQuizComponent()}
      </Paper>
    </Box>
  );
};

export default ModuleContent;