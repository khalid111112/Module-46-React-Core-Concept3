import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <div className="flex">
            <Cousin name={'Rafsan'} asset={asset}></Cousin>
            <Cousin name={'Sohana'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;