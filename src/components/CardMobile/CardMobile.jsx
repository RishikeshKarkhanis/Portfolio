import "../CardMobile/CardMobile.css";

function CardMobile(props) {
    return (
        <>
            <div className="projectMobile">
                <p className="pname">{props.pname}</p>
                <img src="Project Image" alt="Project Image" srcSet={props.img} />
                <p className="descMobile">"{props.desc}"</p>
                <div className="buttonPanel">
                    <a href={props.gh}>Github</a>
                    <a href={props.ll}>Live Link</a>
                </div>
            </div>
        </>
    );
}

export default CardMobile;