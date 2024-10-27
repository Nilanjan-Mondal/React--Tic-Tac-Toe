import Icon from "../Icons/Icon";
import './Card.css';

function Card ( {input, onPlay, index, gameEnd} ) {
    let icon = <Icon/>
    if(input == "X" || input == "x") icon = <Icon name="cross" />
    else if (input == "O" || input == "o") icon = <Icon name="circle" />

    return (
        <div className="card" onClick={() => !gameEnd && input==" " && onPlay(index)} >
            {icon}
        </div>
    )
}

export default Card;