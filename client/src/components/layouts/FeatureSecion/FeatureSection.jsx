import { Link } from 'react-router-dom';
import './FeatureSection.css';
import Feature from '../../../data/FeatureData.js';


const FeatureSection = () => {
    return (
        <section id="feature" className='feature-section'>
            <h2 className='feature-title'>TÌM HIỂU NGAY</h2>
            <div className='feature-list'>
                {Feature.map((feature, index) => (
                    <div className='feature-id' key={feature.id || index}>
                        <div className='feature-logo'>
                            {feature.icon && (
                                <img src={feature.icon} alt={feature.title} />
                            )}
                        </div>

                        <h3 className='feature-id-title'>{feature.title}</h3>

                        <Link to={feature.Link}>
                            <button className='feature-button'>
                                {feature.buttonText}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default FeatureSection;