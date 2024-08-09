const Mail=()=>{
    return <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-40 -right-40 rotate-90">
        <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
        <a href="mailto:nelsonmishra007@gmail.com" className="font-mono text-lg tracking-widest hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
            nelsonmishra007@gmail.com
        </a>
        </div>
        
        <hr className="border-[2px] w-40 rounded-full text-textColor bg-textColor border-textColor"/>
    </div>
}
export default Mail;