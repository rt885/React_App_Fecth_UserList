function Spinner(props) {
  return(
    <>
      <div className="spinner-border text-primary" role="status">
        <span className="vissualy-hidden">{props.msg}</span>
      </div>
      {props.msg}
    </>
  )
}

export default Spinner;