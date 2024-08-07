export const blogs = [
  {
    index_w: 4,
    heading: "Research Experience : Social good through technology",

    preview:
      "Discover how we used machine learning and tech innovation to uncover the hidden truths in global supply chains, exposing unethical labor practices and making a real social impact",

    summary: [
      "During my master’s program, I stumbled upon an amazing opportunity to work with Prof. Shawn Bhimani on a project that completely changed how I think about technology and its potential impact on society. We set out to build a supply chain traceability system using machine learning, and wow, was it an eye-opener! I owe a big shoutout to my friend for introducing me to Prof. Bhimani, who is genuinely passionate about uncovering the hidden evils in today’s capitalist economy.",
      "Our big idea? Create a free app where anyone could enter a company name, like 'xyz,' and instantly find out if their products are linked to exploited labor. Imagine the power in that! We gathered data from shipments and teamed up with on-the-ground researchers to back up our claims with solid evidence. (You can check out more at www.supplytrace.org).",
      "I joined the team as a full-stack developer, diving headfirst into building Django-based REST API services and crafting a slick React web app to showcase our findings. One of the coolest features we have now is a map that lets users track a company's shipments tied to forced labor, tracing their origins with concrete evidence.",
      "What started as a small project quickly snowballed into something much bigger. We attracted like-minded investors from giants like Microsoft, Sayari, and others who were eager to support our mission. Our little project grew into a startup-like venture, with a team of over 10 passionate people working tirelessly to bring this vision to life.",
      "The whole experience was incredible, teaching me just how much of a social impact we, as engineers, can have in this world. It’s not just about writing code; it’s about using our skills to make a difference and shine a light on issues that matter.",
    ],
    learnMoreLinks: [],
    tags: ["Personal Experience", "Forced labour", "Microsft", "Research"],
    rating: 0,
  },

  {
    index_w: 4,
    heading:
      "Research Experience : How resilient and tested are our databases?",

    preview:
      "Discover how we used rigourously tested the databases to ensure the isolation levels are maintained and the data is consistent",

    summary: [
      "During the summer of 2023, I hit a wall while searching for internships without any luck. I was unsure of my next steps and even questioned why I wanted to pursue a master's degree in the first place. That’s when I realized I genuinely enjoyed research. So, I approached my operating systems professor, who I had worked with on creating a microkernel (that’s another blog story), and shared my interests with him. I asked if we could work on something related to systems.",
      "He mentioned that he was working on finding isolation level bugs in databases, and honestly, it went right over my head at first. But I was intrigued. So, I dove into OSDI papers and soon realized how unreliable databases can be. At every conference, people are still uncovering isolation level bugs in standard engines like MariaDB, MySQL, and others",
      "We decided to tackle this problem by creating an automated test suite capable of generating millions of SQL interleavings and running them to validate their correctness on various database engines. The real game-changer was the Java-based validator we developed. It used complex graph simulations to accurately predict expected results. This became the heart of our project.",
      "Through this system, we were able to validate and uncover numerous bugs in Serializable and Snapshot Isolation levels. It was a fascinating experience that deepened my understanding of databases and affirmed my love for research.",
    ],
    learnMoreLinks: [],
    tags: [
      "Personal Experience",
      "Database research",
      "Isolation levels",
      "Research",
    ],
    rating: 0,
  },

  {
    index_w: 4,
    heading:
      "Personal Experience : How I created an operating system within 3k lines",

    preview: "My Journey into Operating System Implementation",

    summary: [
      "During the fall semester as a master's student at Northeastern University, I had an incredible opportunity to delve deeply into the world of operating system implementation. This exploration was part of the OS Implementation course, which was both challenging and rewarding. The highlight of this journey was developing a lightweight microkernel, EGOS-2k+, specifically tailored for RISC-V systems.",
      "The EGOS-2k+ microkernel represents an incremental expansion of the impressive EGOS-2000, a 2000-line operating system initially crafted by Yunhao Zhang at Cornell University. The task was daunting, but it provided a unique opportunity to build upon an existing foundation and integrate new functionalities, making it a richer and more robust system.",
      "One of the significant features we integrated into EGOS-2k+ was a User-Level Threading Library. This library introduced cooperative scheduling to enhance the efficiency of user-level threads, enabling smoother multitasking within the system. This improvement not only made the system more efficient but also demonstrated the potential for lightweight threading solutions in microkernels.",
      "We also implemented a Powerful Kernel Scheduler using a Multilevel Feedback Queue (MLFQ). This scheduler was crucial for effective process scheduling, integration of Syscalls using Ecalls and an Exception Module. By handling kernel-level exceptions for both user and system processes, we significantly enhanced the robustness of the microkernel. we developed a Virtual Memory Module with a two-level page table to provide robust virtual memory translation and support",
      "Reflecting on this experience, I am immensely grateful for the guidance of Professor Cheng Tan and the foundational work of Yunhao Zhang, which made this exciting expansion possible. This journey not only deepened my understanding of operating systems but also affirmed my passion for systems engineering",
    ],
    learnMoreLinks: [],
    tags: [
      "Personal Experience",
      "Operating System",
      "Cornell University",
      "EGOS",
    ],
    rating: 0,
  },

  {
    index_w: 0,
    heading: "DSA : A new perspective for binary search",

    preview:
      "Binary search if learnt properly is such a simple concept, but the places where we can apply it has no bounds",

    summary: [
      "Today I was trying to solve some leetcode and found how helpful the leetcode community is. Binary search if learnt properly is such a simple concept, but the places where we can apply it has no bounds. I was trying to solve a problem 'Capacity To Ship Packages Within D Days' and came across a beautiful writeup by a random person on how to approach binary search problems. It had a template that can be used to solve any binary search problem. I was amazed by the simplicity of the template and how it can be applied to solve any binary search problem. I would recommend everyone to read the writeup and try to solve the problem using the template. It is a great learning experience.",
    ],
    learnMoreLinks: [
      {
        title: "The template writeup",
        link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/769698/python-clear-explanation-powerful-ultimate-binary-search-template-solved-many-problems",
      },
    ],
    tags: ["DSA", "Leetcode", "Binary Search", "Write up", "Humanity"],
    rating: 0,
  },
  {
    index_w: 1,
    heading: "Book Review : Song of Achilles",
    preview:
      "A captivating retelling of the Iliad from Patroclus's perspective, where romance, war, and mythology intertwine",

    summary: [
      "Unparalled writing. The poetic masterclass. The book is a retelling of the Iliad from the perspective of Patroclus. The book is a blend of romance, war, and mythology. Every line is carefully sculpted to give the feel of reading a poem. The way the author has portrayed the relationship between Achilles and Patroclus is heartwarming and heartbreaking at the same time",
    ],
    learnMoreLinks: [
      {
        title: "Buy the book",
        link: "https://a.co/d/hEa8pMa",
      },
    ],
    tags: [
      "Book Review",
      "Madeline Miller",
      "Achilles",
      "Patroclus",
      "Poetic",
      "Mythology",
    ],
    rating: 4.5,
  },
  {
    index_w: 2,
    heading: "Book Review : Kafka on the Shore",

    preview:
      "Experience the dreamlike blend of magical realism, fantasy, and philosophy in Murakami's 'Kafka on the Shore",

    summary: [
      "Murakami books have always made me feel like I am in a dream and kafka on the shore is not an exception. The book is a blend of magical realism, fantasy, and philosophy. The story revolves around lot of characters and their interconnections. The book is a mix of multiple genres and is a must-read for anyone who is looking to get a new experience and a new world.",
    ],
    learnMoreLinks: [
      {
        title: "Buy the book",
        link: "https://a.co/d/9GA99Bq",
      },
    ],
    tags: ["Book Review", "Murakami", "Kafka on the Shore"],
    rating: 4,
  },

  {
    index_w: 3,
    heading: "Book Review : Midnight Library",

    preview:
      "Discover the thought-provoking journey through parallel universes in Matt Haig's 'Midnight Library.'",

    summary: [
      "One of the few books that I would genuienly like to re-read. It is a book that makes you think about your life choices and the impact of those choices. The story travels seamlessly between parallel universes letting the protagonist's experience how the life would have been if she made different choices, making her realize the importance of living in the present. I would say it is a must-read for anyone who is looking for a book that is both thought-provoking and heartwarming.",
    ],
    learnMoreLinks: [
      {
        title: "Buy the book",
        link: "https://a.co/d/cN8MJhJ",
      },
    ],
    tags: [
      "Book Review",
      "Matt Haig",
      "Midnight Library",
      "Speculative fiction",
    ],
    rating: 3.5,
  },
];
