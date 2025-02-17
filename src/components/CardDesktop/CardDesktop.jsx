import "../CardDesktop/CardDesktop.css";

function CardDesktop(props) {
    return (
        <>
            <div className="project">
                <div className="lefthalf">
                    <p className="pname">{props.pname}</p>
                    <div className="descContainer">
                        <p className="desc">"{props.desc}"</p>
                    </div>
                    <a href={props.gh}>Github</a>
                    <a href={props.ll}>Live Link</a>
                </div>
                <div className="righthalf">
                    <img className='projectImg' src="Project Image" alt="ProjectImage" srcset={props.img} />
                </div>
            </div>
        </>
    );
}

export default CardDesktop;