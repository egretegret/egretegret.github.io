function DataImg(props) {

    return (
        <img onMouseOver={props.reveal} onMouseOut={props.hide} {...props} />

    )
}

export default DataImg;