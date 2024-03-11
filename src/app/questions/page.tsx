"use client";
import React, { useEffect, useState, CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { emailCurrentState } from "../state/state";
import { useRecoilValue } from "recoil";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
type SelectedOptionsType = {
  [key: string]: string;
};
import { useToast } from "@/components/ui/use-toast";

function page() {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const { toast } = useToast();
  const router = useRouter();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const questions = [
    {
      id: 1,
      question:
        "You are participating in developing the project charter for a new project assigned to you. Which of the following is input in Develop Project Charter?",
      options: [
        "Project management plan",
        "Communication management plan",
        "A Contract",
        "Stakeholder management plan",
      ],
      Correct_answer: 3,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 11,
      question:
        "Chris is a project manager for a large construction company. Risk management is a large part of what you manage. Your management instructs you to focus on the business risks and informs you they will focus on the pure risks. How is your organization most likely to deal with pure risks?",
      options: [
        "Buy insurance",
        "Build contingency into the budget",
        "Build contingency into the schedule",
        "Hire more staff",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 15,
      question:
        "While managing a project, you decide to create a prototype of your product first to ensure that it is acceptable to stakeholders before creating your product. Creating a prototype is an example of:",
      options: [
        "Risk mitigation",
        "Risk avoidance",
        "Monte Carlo simulation",
        "Project assumptions testing",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 20,
      question: "Rework is an example of a (an):",
      options: [
        "External failure cost",
        "Internal failure cost",
        "Appraisal cost",
        "Prevention cost",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Easy",
    },
    {
      id: 21,
      question:
        "You are the project manager of a large, complex, multi-year project. In the past, you have planned out all the details of the activities early in the project . For your current project you are more likely to do progressive elaboration through:",
      options: [
        "Rolling wave planning",
        "Templates",
        "WBS",
        "Scope management",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 26,
      question:
        "Activity has an optimistic estimate of 10 days, pessimistic estimate of 16 days , and most likely estimate of 13 days. What is the duration estimate for the activity if the project manager used a non-linear method to estimate the duration of this activity?",
      options: [
        "13 days",
        "16 days",
        "10 days",
        "Cannot be determined with available information",
      ],
      Correct_answer: 1,
      L1_tag: "Time Management",
      Difficulty: "Medium",
    },
    {
      id: 34,
      question:
        "You have assigned to a project which has major cost overruns, as well as a long list of uncontrolled changes. Uncontrolled changes are also known as:",
      options: ["Scope creep", "Scope change", "WBS change", "Schedule creep"],
      Correct_answer: 1,
      L1_tag: "Scope Management",
      Difficulty: "Medium",
    },
    {
      id: 41,
      question:
        "A project manager is using a method that not considered the risk to perform schedule network analysis, which type of duration estimates is being the project manager used?",
      options: [
        "Critical path method",
        "Monte Carlo",
        "Beta distribution",
        "Triangular distribution",
      ],
      Correct_answer: 4,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 43,
      question:
        "Your manufacture component business is growing at an exponential rate. With respect to product testing, you are moving to testing samples instead of entire populations. In general, the main reasons to test samples instead of populations include all of the following except:",
      options: [
        "The testing takes a long time",
        "The testing may be destructive",
        "The testing is variable related not attribute related",
        "The testing is expensive",
      ],
      Correct_answer: 3,
      L1_tag: "Planning",
      Difficulty: "Hard",
    },
    {
      id: 44,
      question: "On what contract type does the highest risk for the seller?",
      options: [
        "Time and materials",
        "Cost plus percentage of cost",
        "Cost plus fixed fee",
        "Fixed price",
      ],
      Correct_answer: 4,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 45,
      question: "Tool and technique for quality assurance are:",
      options: [
        "Quality audit",
        "Expert judgment",
        "Pareto diagrams",
        "Control chart",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 46,
      question:
        "The document that describes how the project scope will be defined, documented, validated, managed, and controlled, called?",
      options: [
        "Scope management plan",
        "Statement of work",
        "Project scope statement",
        "WBS",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Easy",
    },
    {
      id: 47,
      question: "A tool and technique for creating WBS:",
      options: [
        "Meeting",
        "Product Analysis",
        "Facilitated Workshops",
        "Decomposition",
      ],
      Correct_answer: 4,
      L1_tag: "Planning",
      Difficulty: "Easy",
    },
    {
      id: 48,
      question:
        "Collect requirements is The process of determining, documenting, and managing stakeholder needs and requirements to meet project objectives, after collect requirements what will you do next?",
      options: [
        "Control scope",
        "Define scope",
        "Create WBS",
        "Validate scope",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 49,
      question: "Who is responsible for creating WBS?",
      options: [
        "The functional Manager",
        "The Project manager and project team",
        "The project manager",
        "The project team",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 61,
      question:
        "Sandra is a project manager in the process of analyzing activity sequences, durations, resource requirements, and schedule constraints to create an approved project schedule. What should Sandra do next?",
      options: [
        "Use the critical path method and what-if scenario to calculate the optimum duration of the project",
        "Use this approved schedule duration as a baseline and start tracking the project",
        "Create a network diagram of the project",
        "Determine resource requirement for each activity in the project",
      ],
      Correct_answer: 2,
      L1_tag: "Time Management",
      Difficulty: "Medium",
    },
    {
      id: 62,
      question:
        "A project manager is in the process of documenting and defining stakeholders’ needs to meet the project objectives. What is the output of this process?",
      options: [
        "Stakeholder management strategy",
        "Change log",
        "Requirements documentation",
        "Issue log",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 70,
      question:
        "A project manager has recently been assigned to a long-running project and wants to know who the key influences are on the project and what their level of involvement is. The best document to gather this kind of information is:",
      options: [
        "Stakeholder management plan updates",
        "Stakeholder management plan",
        "Project management plan",
        "Human resource management plan",
        "Stakeholder register",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 73,
      question:
        "As part of your staffing management plan, you are creating a chart to illustrate the number of hours that a person, department, or entire project team will need each week or month over the course of the project. This chart is also known as:",
      options: [
        "Resource histogram",
        "Resource breakdown structure",
        "Resource calendar",
        "Control chart",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 76,
      question:
        "Communication between project stakeholders can occur through various means. Which of the following is an example of interactive communication?",
      options: [
        "Stakeholder analysis, Expert Judgment Communication method, interpersonal skills",
        "Meetings, Expert judgment, information management system",
        "Management skills, issue log, expert judgment",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Easy",
    },
    {
      id: 81,
      question:
        "You are a project manager, and during the planning phase, you are creating a document that will serve as a guide for future project activities. This document is known as:",
      options: [
        "WBS dictionary",
        "Project management plan",
        "Scope statement",
        "Project statement of Work",
      ],
      Correct_answer: 3,
      L1_tag: "Planning",
      Difficulty: "Easy",
    },
    {
      id: 85,
      question:
        "Which of the following is a tool or technique used in the Collect Requirements process?",
      options: [
        "Stakeholder analysis",
        "Scope creation",
        "Quality matrices",
        "Risk analysis",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 90,
      question:
        "Which technique is used for estimating the duration of project activities?",
      options: [
        "Critical path method",
        "Schedule network analysis",
        "Critical chain method",
        "Applying leads and lags",
      ],
      Correct_answer: 3,
      L1_tag: "Planning",
      Difficulty: "Easy",
    },
    {
      id: 95,
      question:
        "During the process of activity duration estimation, which of the following techniques is a bottom-up estimating method?",
      options: [
        "Bottom-up estimating",
        "Expert Judgment",
        "Analogous estimating",
        "Parametric estimating",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 96,
      question:
        "Your project sponsor has requested a cost estimate for the project on which you're working. This project is similar in scope to a project you worked on last year. She would like to get the cost estimates as soon as possible. Accuracy is not her primary concern, which tool and technique will use for the estimate?",
      options: [
        "Bottom-up estimating",
        "Parametric estimating",
        "Three-point estimating",
        "Analogous estimating",
      ],
      Correct_answer: 3,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 97,
      question:
        "Your sponsor has requested you to come up with a cost estimate for all the activities which defined in the project schedule. He has specially mentioned it to you to make sure that you are taking Risk into consideration. Which technique will be best in such kind of scenarios?",
      options: ["Bottom-up", "Beta distribution", "Parametric", "Analogous"],
      Correct_answer: 4,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 106,
      question: "What are the dimensions measured on a stakeholder grid?",
      options: [
        "Expertise and Influence",
        "Power/Interest Grid",
        "Motive/opportunity Grid",
        "Power Grid",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 107,
      question:
        "If the project manager is unsure who has the authority to approve changes in project scope, he should consult:",
      options: [
        "The scope statement",
        "The customer",
        "The sponsor",
        "The scope management plan",
      ],
      Correct_answer: 4,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 108,
      question:
        "Your project team has just received the sponsor's approval of the scope statement. What is the next?",
      options: [
        "Develop the product description",
        "Create the scope baseline",
        "Hold the kickoff meeting",
        "Create the network diagram",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Easy",
    },
    {
      id: 109,
      question:
        "In which of the following documents could the sponsor find work package descriptions?",
      options: [
        "(WBS) Dictionary",
        "The project charter.",
        "The scope management plan",
        "The project scope statement",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 117,
      question:
        "The process of Identifying, documenting, and assigning roles, responsibilities, and reporting relationships for a project are called",
      options: [
        "Staff Management Planning",
        "Schedule management plan",
        "Human Resource Planning",
        "Organizational Breakdown",
      ],
      Correct_answer: 3,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 124,
      question:
        "Your company is introducing a new product for the holiday season. You will use incremental steps to help you refine the characteristics of the product...",
      options: [
        "Iterations",
        "Progressive elaboration",
        "Communication",
        "Multiphase project approach",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",

      Difficulty: "Medium",
    },
    {
      id: 126,
      question:
        "The Plan-Do-Check-Act cycle includes which of the following project management process groups at its core?...",
      options: [
        "Planning, Executing, Monitoring and Controlling",
        "Initiating, Planning, Executing, Monitoring and Controlling",
        "Planning, Monitoring and Controlling, and Closing",
        "Initiating, Planning, Executing, Monitoring and Controlling, and Closing",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 127,
      question:
        "Which of the following are the processes in the Project Communications Management knowledge area?...",
      options: [
        "Plan Communications Management, Manage Communications, Develop Project Management Plan, and Monitor Communications",
        "Plan Communications Management, Manage Communications, Develop Project Management Plan, Monitor Communications, and Close Project or Phase",
        "Plan Communications Management, Manage Communications, and Monitor Communications",
        "Plan Communications Management, Manage Communications, Direct and Manage Project Work, and Monitor Communications",
      ],
      Correct_answer: 3,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 128,
      question:
        "Your selection committee is trying to decide between two projects. Funds exist to undertake only one of the projects...",
      options: [
        "Project selection methods are a tool and technique of the Initiation process.",
        "IRR is the discount rate when NPV equals zero.",
        "The discounted cash flow technique evaluates the cash inflows for each period and compares this to the initial investment.",
        "Payback period is the least precise of all the cash flow calculations used to select projects.",
      ],
      Correct_answer: 3,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 130,
      question:
        "Your selection committee has determined they have the funds to apply resources to two projects...",
      options: ["27 months", "28 months", "25 months", "24 months"],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 131,
      question:
        "Your selection committee has determined they have the funds to apply resources to two projects...",
      options: [
        "Project B should be first because its IRR is higher than Project A’s.",
        "Project B should be first because its payback period is shorter than Project A’s.",
        "Project A should be first because its IRR value is lower than Project B’s.",
        "Project A should be first because its payback period is shorter than Project B’s.",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 136,
      question:
        "You know that the agile PMO’s responsibility is to deliver business value to the right people at the right time...",
      options: ["A, B, C", "A, B, C, D", "B, C, D", "A, B, D"],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 137,
      question:
        "During the Sequence Activities process, you discover that industry “best practices” techniques for your project dictate that activity A be completed using an automated process while activity B should be completed using a manual process...",
      options: [
        "Discretionary dependency",
        "Preferred dependency",
        "Mandatory dependency",
        "External dependency",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 138,
      question:
        "Define Activities involves decomposing the work package levels into units of work called what?...",
      options: [
        "Schedule activities",
        "Activities",
        "Tasks",
        "Code of accounts",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 139,
      question:
        "The four logical relationships known as: finish to start, start to finish, start to start, and finish to finish are used in which of the following diagramming methods?...",
      options: ["GERT", "PDM", "CPM", "ADM"],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 140,
      question:
        "This process is where start and finish dates for your project activities are determined and activity sequences and durations are finalize..",
      options: [
        "Develop Schedule",
        "Sequence Activities",
        "Estimate Activity Duration",
        "Estimate Activity Resources",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 141,
      question:
        "All of the following are true regarding lead and lag time except which one?...",
      options: [
        "Leads and lags are used when there are delays between dependent and independent activities in the project schedule.",
        "Leads require time to be subtracted from the start date or the finish date of the dependent activity.",
        "Lags delay successor activities and require time to be added to the start date or the finish date of the dependent activity.",
        "Lead time is used more often than lag time.",
      ],
      Correct_answer: 4,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 142,
      question:
        "Each of the following is an element of the cost management plan except which one?...",
      options: [
        "Level of accuracy",
        "Reporting formats",
        "Units of measure",
        "Cost aggregation method",
      ],
      Correct_answer: 4,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 144,
      question:
        "All of the following are true regarding the Determine Budget process except...",
      options: [
        "It assigns cost estimates to the project activities.",
        "The cost baseline plots the sum of estimated costs in a linear graph.",
        "Estimates in the cost baseline are used to measure variances and performance later in the project.",
        "The cost baseline, once established, is the expected cost for the project.",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 145,
      question:
        "This tool and technique of Estimate Costs generally provides the most accurate estimate...",
      options: [
        "Analogous estimating",
        "Bottom-up estimating",
        "Three-point estimating",
        "Parametric estimating",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 146,
      question:
        "This cost estimating technique is a form of expert judgment and is one of the least accurate cost estimating techniques...",
      options: [
        "Analogous estimating",
        "Bottom-up estimating",
        "Parametric estimating",
        "Three-point estimating",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 147,
      question:
        "You are the project manager for a construction project. The architect has just completed the plans for a new building, and you are preparing a cost estimate...",
      options: [
        "Three-point estimating",
        "Parametric estimating",
        "Analogous estimating",
        "Bottom-up estimating",
      ],
      Correct_answer: 3,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 148,
      question:
        "The critical path is best described as which one of the following?...",
      options: [
        "The series of activities that take the most time.",
        "The series of activities that take the least time.",
        "The series of activities that are most costly.",
        "The series of activities that have the least amount of risk.",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 149,
      question:
        "Fast-tracking is best described as which one of the following?...",
      options: [
        "Allowing one phase of the project to overlap with the next phase.",
        "Moving resources from the critical path to the noncritical path.",
        "Hiring more people to get the work done more quickly.",
        "Eliminating nonessential tasks.",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 150,
      question:
        "Which of the following is not a technique for reducing project duration?...",
      options: [
        "Fast-tracking",
        "Crashing",
        "Resource leveling",
        "Control charts",
      ],
      Correct_answer: 4,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 151,
      question:
        "The Develop Project Management Plan process in project integration management belongs to which project management process group?...",
      options: ["Initiating", "Planning", "Executing", "Closing"],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 152,
      question:
        "Which of the following is a tool or technique for the Plan Procurement Management process?...",
      options: [
        "Make-or-buy analysis",
        "Expert judgment",
        "Market research",
        "Bidder conferences",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 153,
      question:
        "Which of the following is an output of the Plan Quality Management process?...",
      options: [
        "Quality metrics",
        "Quality management plan",
        "Quality control measurements",
        "Quality checklists",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 154,
      question:
        "Which of the following is a tool or technique of the Define Scope process?...",
      options: [
        "Product analysis",
        "Stakeholder analysis",
        "Expert judgment",
        "Decomposition",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 155,
      question:
        "Which of the following is a tool or technique of the Identify Stakeholders process?...",
      options: [
        "Data analysis",
        "Expert judgment",
        "Market research",
        "Facilitated workshops",
      ],
      Correct_answer: 4,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 156,
      question:
        "Which of the following is a tool or technique of the Plan Stakeholder Engagement process?...",
      options: [
        "Expert judgment",
        "Stakeholder analysis",
        "Facilitated workshops",
        "Data analysis",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 157,
      question:
        "Which of the following is an output of the Identify Stakeholders process?...",
      options: [
        "Stakeholder register",
        "Stakeholder engagement plan",
        "Stakeholder management plan",
        "Project documents updates",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 158,
      question:
        "Which of the following is an output of the Plan Stakeholder Engagement process?...",
      options: [
        "Issue log",
        "Change log",
        "Stakeholder engagement plan",
        "Project documents updates",
      ],
      Correct_answer: 3,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 159,
      question:
        "Which of the following is a tool or technique of the Collect Requirements process?...",
      options: [
        "Data analysis",
        "Facilitated workshops",
        "Expert judgment",
        "Stakeholder analysis",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 160,
      question:
        "Which of the following is a tool or technique of the Define Activities process?...",
      options: [
        "Decomposition",
        "Data analysis",
        "Expert judgment",
        "Rolling wave planning",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 161,
      question:
        "Which of the following is a tool or technique of the Estimate Activity Durations process?...",
      options: [
        "Expert judgment",
        "Data analysis",
        "Rolling wave planning",
        "Decomposition",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 162,
      question:
        "Which of the following is a tool or technique of the Estimate Costs process?...",
      options: [
        "Data analysis",
        "Expert judgment",
        "Rolling wave planning",
        "Decomposition",
      ],
      Correct_answer: 2,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
    {
      id: 163,
      question:
        "Which of the following is an output of the Estimate Costs process?...",
      options: [
        "Cost baseline",
        "Project funding requirements",
        "Cost management plan",
        "Project documents updates",
      ],
      Correct_answer: 1,
      L1_tag: "Planning",
      Difficulty: "Medium",
    },
  ];
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(
    {}
  );

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleSelectOption = (questionId: any, option: any) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: option }));
  };
  const currentLoggedInState = useRecoilValue(emailCurrentState);
  useEffect(() => {
    // if (currentLoggedInState.email == "") redirect("/");
  }, []);
  useEffect(() => {
    const allAnswered = questions.every(
      //@ts-ignore
      (question) => selectedOptions[question.id]
    );
    setIsSubmitEnabled(allAnswered);
  }, [selectedOptions, questions]);

  const handleSubmit = async () => {
    const answersToSend = Object.entries(selectedOptions).map(
      ([questionId, answer]) => ({
        questionId,
        answer,
      })
    );
    const finalDataSent = {
      userId: currentLoggedInState.id,
      answers: answersToSend,
    };
    try {
      /*
      const response = await axios.post(
        "",
        finalDataSent
      );
      console.log("Response from backend:", response.data);
      */
      router.push("/student_dashboard/sharad");
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <>
      <h1 className="scroll-m-20 text-2xl mt-5 ml-10 font-extrabold tracking-tight lg:text-3xl">
        Recommended Questions:
      </h1>
      <div className="w-screen h-screen justify-center items-center flex">
        <div className="w-full h-full m-10 rounded-xl">
          {questions.map((question, index) => (
            <div key={index} className="mb-5 overflow-auto mr-5 ml-5 mt-5">
              <Card>
                <CardHeader>
                  <CardTitle className="mb-2 text-xl">{question.id}</CardTitle>
                  <CardDescription>{question.question}</CardDescription>
                </CardHeader>
                <CardContent>
                  {question.options.map((option, index) => (
                    <Button
                      key={index}
                      className={`m-2 ${
                        selectedOptions[question.id] === option
                          ? "bg-blue-500 text-white"
                          : "bg-black"
                      }`}
                      onClick={() => handleSelectOption(question.id, option)}
                    >
                      {option}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
          <div className="flex justify-center w-full">
            <Button className="w-full mb-10" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
