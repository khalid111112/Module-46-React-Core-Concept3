import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Mamshd'}></Cousin>
                <Cousin name={'Ruhi'}></Cousin>

            </section>
        </div>
    );
};

export default Aunty;