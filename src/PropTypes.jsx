import PropTypes from "prop-types";

const RenderName = (props) => {
    return <div>{props.name}</div>
}

RenderName.propTypes ={
    name: PropTypes.string
}

RenderName.defaultProps = {
    name: "Madruguinha"
}

export default RenderName