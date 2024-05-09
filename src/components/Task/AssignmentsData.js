const assignmentData = [
  {
    id: 1,
    title: "History",
    description: "Complete History Assignments",
    completionStatus: false,
    removed: false,
    subTasks: [
      {
        parentId: 1,
        id: 101,
        title: "Chapter 17 Assignment",
        description: "Read Chapter 17 and complete assignments 4-12",
        completionStatus: false,
        removed: false,
      },
      {
        parentId: 1,
        id: 102,
        title: "Write Essay",
        description: "Write 3 page essay about the renaissance",
        completionStatus: false,
        removed: false,
      }
    ]
  },
  {
    id: 2,
    title: "English",
    description: "Write Essay about leadership and influence",
    completionStatus: true,
    removed: false,
    subTasks: []
  },
  {
    id: 3,
    title: "Math",
    description: "Solve Pythagorean Theorem problem",
    completionStatus: false,
    removed: false,
    subTasks:[
      {
        parentId: 3,
        id: 301,
        title: "Draw Graph",
        description: "represent differencial equiation visually",
        completionStatus: false,
        removed: false,
      },
      {
        parentId: 3,
        id: 302,
        title: "Prove Integrals",
        description: "Prove all integral equations must be of degree 3 or more",
        completionStatus: false,
        removed: false,
      },
      {
        parentId: 3,
        id: 303,
        title: "Write Essay",
        description: "Write 3 page essay about the renaissance",
        completionStatus: false,
        removed: false,
      }
    ]
  },
  {
    id: 4,
    title: "Biology",
    description: "Complete Heat VS Coler Project",
    completionStatus: true,
    removed: false,
    subTasks: []
  },
  {
    id: 5,
    title: "Technology",
    description: "Setup Lunix operating system on computer",
    completionStatus: true,
    removed: false,
    subTasks: []
  }
];

export default assignmentData;