import { Wrapper } from '../PictureQuiz/PictureQuiz.styles';
// import picture from '../../../assets/pictures-catalog/${nameApi}.jpg'

function PictureQuiz({stateApiUrl}) {
    return(
        <Wrapper src={ `${stateApiUrl}` } ></Wrapper>
    );
}

export default PictureQuiz;