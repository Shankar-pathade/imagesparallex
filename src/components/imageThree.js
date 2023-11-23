import { Parallax } from 'react-parallax';
import image3 from '../images/image3.jpg';

const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={image3} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">So happy</span>
        </div>
    </Parallax>
);

export default ImageThree;