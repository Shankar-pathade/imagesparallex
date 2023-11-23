import { Parallax } from 'react-parallax';
import image5 from '../images/image5.jpg';


const ImageFive = () => (
    <Parallax className='image' blur={0} bgImage={image5} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Grateful</span>
        </div>
    </Parallax>
);

export default ImageFive