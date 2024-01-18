<!-- FILEPATH: /Users/casey/Documents/GitHub/project/src/routes/about/+page.svelte -->
<script>
    let name = 'Casey Petrosky';
    let email = 'caseypetrosky16@example.com';
    let phone = '123-456-7890';
    let address = '123 Main St, City, State, ZIP';
    let summary = 'A passionate software developer with experience in web development.';
    let skills = ['Languages: JavaScript, Java, Python, C#, .NET, SQL',
                    'Frameworks: Svelte, Sveltekit, Vue.js, Nuxt.js, React, AngularJS',
                    ' Developer Tools: Git, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse',
                    'Libraries: Prisma ORM, Tailwind CSS',
                ];
    let experience = [
        {
            company: 'University of Iowa Health Care',
            position: 'Internal Medicine Development Assistant',
            duration: 'April 2023 - Present',
            description: [
                "• Collaborating with the Internal Medicine department’s full- time developers to update and maintain 10+ C#.NET and AnguluarJS applications.",
                "• Translating depreacted AngularJS code into modern JavaScript frameworks, specifically Vue.js, for better performance and more support from the framework.",
                "• Improved access to data by Proficiently writing and executing SQL queries to retrieve data for department administrators and doctors."
            ],
        },
        {
            company: 'New Lenox Public Works',
            position: 'Seasonal Assistant',
            duration: 'June 2023 – August 2023',
            description: [
                "• Assisted 10 full-time employees in the wastewater department with different daily and seasonal tasks such as jetting sewers, inspecting manholes, doing grout repairs, cleaning aeration tanks and more.",
                "• Quickly adapted to new procedures, regulations, and technologies with each new task assigned to me.",
                "• Thrived in high-pressure environments, persevering through challenging tasks and helping the full time employees effectively complete each task above and beyond their expectations.",
            ]
        },
        {
            company: 'Fleckenstein’s Bakery',
            position: 'Cashier',
            duration: 'November 2021 – January 2023',
            description: [
                "• Delivered exceptional customer service while working at a renowned local bakery, assisting customers with their over-the-counter baked goods purchases and ensuring a delightful in-store experience.",
                "• Proficiently managed customer orders for custom cakes and special requests, demonstrating strong organizational skills and attention to detail.",
                "• Successfully maintained efficiency and composure during high-demand periods, including busy holiday seasons, contributing to a seamless customer experience."
            ]

        }
    ];
    let education = [
        {
            institution: 'University of Iowa',
            degree: 'Bachelor of Science in Computer Science',
            duration: '2022 - 2026'
        }
    ];
    let projects = [
        {
           
            title: 'eSports League Statistic and Info Website',
            technologies: 'SvelteKit, Tailwind, Prisma ORM, PostgreSQL, Vercel',
            duration: 'June 2023 - Present',
            description: [
                "• Developed an analytics platform utilizing many cutting edge web development technologies, which offers the esports league an intuitive system for inputting and displaying statistics for individual players and teams.",
                "• Provided 3000+ server users with comprehensive access to performance data for individuals and teams, enriching their competitive gaming experience.",
                "• Established a valuable resource hub tailored for newcomers, delivering essential game information to ensure a seamless on boarding experience for new players, increasing new player retention by 50%.",
            ],
        },
    ]
</script>

<main class="container m-6 ">
    <div class="gap-5">
    <h1 class="text-2xl font-bold">{name}</h1>

    <section>
        <ul>
            <li>Email: <span class="font-medium">{email}</span></li>
        </ul>
    </section>

    <section>
        <h3 class="text-xl font-semibold">Experience</h3>
        {#each experience as job}
            <div class="mt-4">
                <h4 class="text-lg font-semibold">{job.position}</h4>
                <p class="text-gray-600">{job.company} | {job.duration}</p>
                {#each job.description as desc}
                    <p class="mt-2">{desc}</p>
                {/each}
            </div>
        {/each}
    </section>
    <section>
        <h3 class="text-xl font-semibold">Projects</h3>
        {#each projects as proj}
            <div class="mt-4">
                <h4 class="text-lg font-semibold">{proj.title}</h4>
                <p class="text-gray-600">{proj.technologies} | {proj.duration}</p>
                {#each proj.description as desc}
                    <p class="mt-2">{desc}</p>
                {/each}
            </div>
        {/each}
    </section>

    <section>
        <h3 class="text-xl font-semibold">Education</h3>
        {#each education as school}
            <div class="mt-4">
                <h4 class="text-lg font-semibold">{school.degree}</h4>
                <p class="text-gray-600">{school.institution} | {school.duration}</p>
            </div>
        {/each}
    </section>

    <section>
        <h3 class="text-xl font-semibold">Skills</h3>
        <ul>
            {#each skills as skill}
                <li class="mt-1">{skill}</li>
            {/each}
        </ul>
    </section>
</div>
</main>
