import { Parallax } from 'react-parallax';
import image6 from '../images/image6.jpg';


const ImageSix = () => (
    <Parallax className='image' blur={0} bgImage={image6} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Amazing</span>
        </div>
    </Parallax>
);

export default ImageSix