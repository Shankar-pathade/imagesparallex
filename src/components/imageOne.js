import { Parallax } from 'react-parallax';
import image1 from '../images/image1.jpg';


const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={image1} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Beautiful nature</span>
        </div>
    </Parallax>
);

export default ImageOne