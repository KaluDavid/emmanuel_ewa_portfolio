import { Project } from "./types";

export const project: Project[] = [
  {
    id: "1",
    img: "/project1.png",
    title: "Business Performance Dashboard",
    color: "bg-project1",
    slug: "business-performance-dashboard",
    description:
      "Developed dynamic dashboards to monitor operational and financial performance, improving decision-making speed by 20% and achieving 98% compliance in financial reporting.",
    tools: "Power BI • Excel • Google Studio • SQL",

    // OTHERS
    year: "2022/2025",
    role: "Senior Data Analyst",
    project_overview:
      "This comprehensive business performance dashboard was designed to provide Joza Global's executive team with real-time insights into critical business metrics. The solution integrated multiple data sources including financial systems, operational databases, and external market data to create a unified view of business performance.",

    // PROCESS
    process: [
      {
        d1: "Drop Box",
        d2: "Google worksheet",
      },

      {
        cleaning:
          "Standardized data formats, removed duplicates, validated financial calculations, and created automated data pipelines",
      },
      { tool_stack1: "Google Studio for web reporting" },

      {
        visualization:
          "Standardized KPI definitions across departments, Financial Performance Charts, Operational Metrics, Real-time dashboard updates",
      },
      {
        stakeholder:
          "I worked closely with Finance, Operations, and IT teams to ensure data accuracy and usability.",
      },
    ],

    // RESULTS AND IMPACTS
    results: [
      {
        first: {
          num: "20%",
          title: "Decision-making improvement",
          description:
            "Faster executive decision-making through real-time insights",
        },

        second: {
          num: "98%",
          title: "Decision-making improvement",
          description:
            "Faster executive decision-making through real-time insights",
        },

        third: {
          num: "85%",
          title: "Decision-making improvement",
          description:
            "Faster executive decision-making through real-time insights",
        },

        color: "bg-[#03112b]",
      },
    ],

    // KEY TAKEAWAYS
    take_aways: {
      f1: "Real-time dashboards significantly improve decision-making speed",
      f2: "Automated data pipelines reduce manual errors by 90%",
      f3: "Cross-departmental collaboration is crucial for comprehensive analytics",
      f4: "Regular stakeholder feedback ensures dashboard relevance",
    },
  },
  {
    id: "2",
    img: "/project2.png",
    title: "Revenue Optimization Report",
    color: "bg-project2",
    description:
      "Conducted deep operational analysis that uncovered cost leaks and optimized delivery workflows, increasing revenue by 10% and improving delivery compliance to 98%.",
    slug: "revenue-optimization-report",
    tools: "Excel • Google Studio • SQL",

    // OTHERS
    year: "2022",
    role: "Data Analyst",
    project_overview:
      "Whitesoul Logistics faced declining profit margins due to inefficient cost management and delivery processes. The company needed insights into operational bottlenecks and revenue optimization opportunities.",

    // PROCESS
    process: [
      {
        d1: "Delivery Records",
        d2: "Cost Management System",
        d3: "Customer Database",
        d4: "Route Optimization Data",
      },

      {
        cleaning:
          "Cleaned delivery data, standardized cost categories, and created comprehensive route analysis datasets",
      },
      {
        tool_stack1: "Google Studio",
        tool_stack2: "Excel for initial analysis",
      },

      {
        visualization:
          "Revenue Trend Analysis, Cost Breakdown Charts, Delivery Performance Metrics, Route Optimization Maps.",
      },
      {
        stakeholder:
          "I partnered with Operations, Finance, and Safety teams to implement data-driven improvements.",
      },
    ],

    // RESULTS AND IMPACTS
    results: [
      {
        first: {
          num: "10%",
          title: "Revenue increase",
          description: "Optimized routing and cost management strategies",
        },

        second: {
          num: "22%",
          title: "Safety Compliance",
          description: "Improved safety protocols through data insights",
        },

        third: {
          num: "15%",
          title: "Operational efficiency",
          description: "Streamlined Processes and reduced waste",
        },

        color: "bg-[#151515]",
      },
    ],

    // KEY TAKEAWAYS
    take_aways: {
      f1: "Route optimization can significantly impact both costs and customer satisfaction",
      f2: "Safety data analysis reveals patterns that prevent incidents",
      f3: "Regular performance monitoring enables proactive decision-making",
      f4: "Integration of multiple data sources provides holistic business insights",
    },
  },
  {
    id: "3",
    img: "/project3.png",
    title: "Supply Chain Analytics",
    color: "bg-project3",
    description:
      "Designed data pipelines and supply chain dashboards that led to a 30% increase in efficiency, 20% fewer incidents, and 99% data accuracy in logistics reports.",
    slug: "supply-chain-analytics",
    tools: "Power BI • Excel • Metabase • SQL",

    // OTHERS
    year: "2022/2022",
    role: "Business Intelligence Specialist",
    project_overview:
      "MDS faced challenges with supply chain visibility and data accuracy across multiple warehouses and distribution centers. The company needed a comprehensive analytics solution to optimize inventory management, track shipments, and improve overall supply chain efficiency.",

    // PROCESS
    process: [
      {
        d1: "Warehouse Management System",
        d2: "Transportation Database",
        d3: "Inventory Records",
        d4: "Supplier Data",
      },

      {
        cleaning:
          "Standardized inventory codes, validated shipment data, removed duplicate entries, and created unified data models across all locations",
      },
      {
        tool_stack1: "Power BI for comprehensive dashboards",
        tool_stack2: "SQL for complex data queries",
        tool_stack3: "Metabase for self-service analysis",
        tool_stack4: "Excel for data validation",
      },

      {
        visualization:
          "Supply Chain Performance Dashboard, Inventory Level Tracking, Shipment Status Reports, Supplier Performance Metrics.",
      },
      {
        stakeholder:
          "I worked with Supply Chain, Warehouse Operations, and IT teams to ensure data integrity and system integration.",
      },
    ],

    // RESULTS AND IMPACTS
    results: [
      {
        first: {
          num: "99%",
          title: "Data reporting accuracy",
          description:
            "Achieved near-perfect accuracy in supply chain data reporting",
        },

        second: {
          num: "30%",
          title: "Data processing efficiency",
          description:
            "Increased speed of data processing and report generation",
        },

        third: {
          num: "15%",
          title: "Data inaccuracy reduction",
          description:
            "Significant reduction in data errors and inconsistencies",
        },

        color: "bg-[#464646]",
      },
    ],

    // KEY TAKEAWAYS
    take_aways: {
      f1: "Standardized data models across locations dramatically improve accuracy",
      f2: "Real-time supply chain visibility enables proactive decision-making",
      f3: "Automated data validation reduces manual errors significantly",
      f4: "Self-service analytics empowers teams to make data-driven decisions independently",
    },
  },
  {
    id: "4",
    img: "/project4.png",
    title: "Data Accuracy Audit",
    color: "bg-project4",
    description:
      "Audited and restructured database systems to eliminate data redundancy and reduce input errors by 15%, while boosting entry speed and accuracy to 98%.",
    slug: "data-accuracy-audit",
    tools: "Power BI • Excel  • SQL",

    // OTHERS
    year: "2019/2020",
    role: "Data Entry Specialist",
    project_overview:
      "Pabetel experienced significant data quality issues affecting operational efficiency and decision-making. The company needed a comprehensive audit of their data entry systems and processes to identify sources of errors and implement corrective measures.",

    // PROCESS
    process: [
      {
        d1: "Customer Database",
        d2: "Transaction Records",
        d3: "Inventory System",
        d4: "Financial Records",
      },

      {
        cleaning:
          "Conducted systematic data audits, identified error patterns, standardized data entry procedures, and implemented validation rules.",
      },
      {
        tool_stack1: "Excel for data analysis and validation",
        tool_stack2: "SQL for database queries and updates",
        tool_stack3: "Power BI for error tracking dashboards",
        tool_stack4: "Access for database management",
      },

      {
        visualization:
          "Data Quality Dashboard, Error Tracking Reports, Data Entry Performance Metrics, Compliance Monitoring Charts.",
      },
      {
        stakeholder:
          "I partnered with Data Entry teams, IT department, and Operations management to implement quality improvements.",
      },
    ],

    // RESULTS AND IMPACTS
    results: [
      {
        first: {
          num: "98%",
          title: "Data entry accuracy",
          description: "Optimized entry systems achieving 98% accuracy rate",
        },

        second: {
          num: "60%",
          title: "Manual error reduction",
          description:
            "Reduced manual errors through systematic data audits and process improvements",
        },

        third: {
          num: "25%",
          title: "Process efficiency",
          description:
            "Improved overall data processing efficiency through standardization",
        },
        color: "bg-[#063A8F]",
      },
    ],

    // KEY TAKEAWAYS
    take_aways: {
      f1: "Route optimization can significantly impact both costs and customer satisfaction",
      f2: "Safety data analysis reveals patterns that prevent incidents",
      f3: "Regular performance monitoring enables proactive decision-making",
      f4: "Integration of multiple data sources provides holistic business insights",
    },
  },
];
