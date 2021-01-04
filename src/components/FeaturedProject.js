import '../styles/FeaturedProject.scss'
import NatureByHolly from '../images/naturebyholly.jpg'
import Project from './Project'

import Button from './Button'

const FeaturedProject = () => {
    return (
        <section className="featured-project">
            <div className="featured-project-container">
                <div className="featured-project__title">
                    Featured Project
                </div>
                <Project image={NatureByHolly} title="NatureByHolly Website">
                    Holly runs her own online etsy business selling custom entomology products and vintage prints. Currently this page just acts as extra advertisement to her existing etsy business, but we intend to fully add an online shop
            </Project>
            </div>

        </section>
    );
}

export default FeaturedProject;
