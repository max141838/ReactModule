 function Remake (props) {
    console.log(props)
    let {itemName,pic} = props
    let classItem = 'card'
    return(
        <div className={classItem}>
            <h2>{itemName}</h2>
            <img src={pic}/>
        </div>
    )
}
export default Remake