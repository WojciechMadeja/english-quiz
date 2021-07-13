
import MainLogo from '../../atoms/MainLogo/MainLogo'
import StartText from '../../atoms/StartText/StartText'
import ButtonStart from '../../atoms/ButtonStart/ButtonStart.js'
import MotivatingCat from '../../organisms/MotivatingCat/MotivatingCat'

function StartTemplates({ stateButton, setStateButton }) {
    return(
        <>
        <MainLogo stateButton = { stateButton } />
        <StartText stateButton = { stateButton } />
        <ButtonStart stateButton = { stateButton } setStateButton={ setStateButton } />
        <MotivatingCat />
        </>
    );
}
export default StartTemplates;