import { projectInfo } from "./InfoCard";
import ProjectCard from "./ProjectCard";


const Projects=()=>{
    return(
       <div className="px-16  my-10 font-mono md-mx:px-6" id="Projects">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl text-center mb-10 font-bold text-white"><span className="text-primaryColor">01.&nbsp;</span>Projects</h1>
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
                {
                     projectInfo.map((Project:any, index:number)=><ProjectCard key={index} title={Project.title} desc={Project.desc}
                     image={Project.image} live={Project.live} link={Project.link} github={Project.github} technologies={Project.technologies}/>)
                }
            </div>
       </div>
    )
}

export default Projects;