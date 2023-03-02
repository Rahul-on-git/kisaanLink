import itemImage from '../assets/temp.jpg'

function Categories() {
    return (
        <div className="combo">
            <div><img src={itemImage} alt='stock' className='img-front'/></div>
            <div>Category Name</div>
        </div>
    );
}

export default Categories