import Title from "../Components/title/Title"
import { Wrapper } from "../assets/Wrappers/technologies"
import { technologiesData } from "../Components/technologies/technologiesData"

const Technologies = () => {
    return (
        <Wrapper>
            <Title text="Tecnologias" />
            <div className="technologies">
                <div className="technologies-container">

                    {technologiesData.technologies.map((tech) => {
                        const { id, icon, title } = tech

                        return (
                            <div key={id} className="technology">
                                <img src={icon} alt="" />
                                {/* <span>{title}</span> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </Wrapper>
    )
}
export default Technologies