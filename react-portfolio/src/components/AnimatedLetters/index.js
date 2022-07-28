import './index.scss';


// animatedLetters is receiving three arguments: class having the array of the characters, the array itself, and also the index from which we want the animation to start 
const AnimatedLetters = ({letterClass, strArray, index}) => {
    return(
        <span>
            {
                strArray.map((char, i) =>(
                    <span key={char + i} className={`${letterClass} _${i + index}`}>

                        {char}

                    </span>
                ))
            }
        </span>
    );
};

export default AnimatedLetters;