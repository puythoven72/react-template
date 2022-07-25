function Card(props){
console.log(props.key + "passed key");
    return(
       
        <div  className="card text-center d-flex align-items-center">
            <img  src={props.img} className="img-fluid item-img" alt={props.title}/>
                <article className="card-body">{props.title}</article>
                </div>              
    )
}

export default Card;