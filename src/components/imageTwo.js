import { Parallax } from 'react-parallax';
import image2 from '../images/image2.jpg';

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={image2} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Awesome</span>
        </div>
    </Parallax>
);

export default ImageTwo