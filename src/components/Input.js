function Input(props) {
  return(
    <div className="row mt-2">
      <div className="col">
        <label className="form-label">{props.label}</label>
      </div>
      <div className="col">
        <input className="form-control" readOnly value={props.input} />
      </div>
    </div>
  )
}

export default Input