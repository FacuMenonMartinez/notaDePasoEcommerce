import ReactLoading from 'react-loading';
import "./loading.css";

const Loading = ({ type, color }) => {


    return (
        <ReactLoading type={'spinningBubbles'} color={'black'} height={'20%'} width={'20%'} className='loading' />
    )
}

export default Loading

