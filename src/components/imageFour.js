import { Parallax } from 'react-parallax';
import image4 from '../images/image4.jpg';


const ImageFour = () => (
    <Parallax className='image' blur={0} bgImage={image4} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Delecious</span>
        </div>
    </Parallax>
);

export default ImageFour