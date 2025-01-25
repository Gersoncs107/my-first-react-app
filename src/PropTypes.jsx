import PropTypes from "prop-types";

const RenderName = (props) => {
    return <div>{props.name}</div>
}

RenderName.PropTypes ={
    name: PropTypes.string
}

export default RenderName