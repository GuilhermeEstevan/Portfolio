import { Wrapper } from "../../assets/Wrappers/title"

const Title = ({ text }) => {

    return (
        <Wrapper >
            <div className="title">
                <h2>{text}</h2>
            </div>
        </Wrapper>
    )
}
export default Title