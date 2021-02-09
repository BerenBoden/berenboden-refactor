const initState = {
  projects: [
    { key: "webfirst", title: "Webfirst", body: "body1" },
    { key: "codification", title: "Codification", body: ["For my very first freelancing job on UpWork I was invited to help with front-end development for the company Codification.io. This website is for teaching employees of companies about cloud services such as Kubernetes and Azure etc... I mainly contributed to front end development on codification.io and coficication.bootcamp.io.", "Work: Overall the work was a great experience and I enjoyed doing it, it taught me a lot about working with teams in a development environment, I worked with 3 other developers during my time here.", "Azure DevOps: I was given access to Azure DevOps to push my work through so that it can be reviewed and uploaded to the live project. This taught me a lot about the Git workflow and I learnt how to merge, use push and pull requests in a live environment, and use Git effectively from the command line. I also learnt a lot about how large websites are hosted and used with cloud services like Azure.", "React: I was primarily focused on using React for the front end development of codification.io and bootcamp.codification.io. There were mockups done by designers already on Figma.com and we each worked on one page at a time. Doing the front end design using react wasn’t too hard, however I started struggling a bit when it came to form validation for the sign-in/sign-up pages. I ended up making it through that part though and learnt a lot about using hooks, and how you can also use the form-validator plugin from npmjs.com.","Tailwind: Tailwind was new to me before this project and I learnt it very quickly and now use it a lot for my personal projects as it is a great CSS framework."]},
    { key: "fbclone", title: "post3", body: "body3" },
    { key: "", title: "post4", body: "body4" },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
